// The creature. It runs on the host only. Nothing in here is scripted: it works from what it can see and hear,
// keeps a picture of where its prey could have gone, and changes its habits as the match goes on.
//
//   senses    sight (a cone, shorter in the dark, blocked by walls, doors and cover) and hearing (every sound has a reach)
//   memory    an occupancy map: after losing someone, "where could they be by now", spread over the floor plan and wiped
//             wherever it looks. The search walks to wherever that map is densest for the least walking.
//   learning  how often people turn out to be in lockers, whether a sounder means "prey here" or "someone threw this",
//             and whether a duct is worth walking round to the far end of.
//   pacing    a director keeps count of how hard the crew has been pressed, calls it off for a while after a long hunt,
//             and leans it back towards them when things have been quiet for too long.
//   vents     it can climb into the ship's vents, crawl unseen to another hatch, and drop out there: to cut across a
//             section, to come at someone from above, to follow the crew through a bulkhead that has shut on it.
import { T, W, H, C } from '../level.js';
import { sight, Pather, distField, clearWalk, nearestWalk } from '../nav.js';
import { CFG } from '../config.js';
import { clamp, clamp01, approach, angleTo, yawOf } from '../util.js';
import { ST, CS, LIFT } from './defs.js';

const N = W * H;
const EYE = CFG.creature.eye;
const KIND_W = { run: 1.0, walk: 0.7, crouch: 0.45, door: 0.8, locker: 0.9, tag: 0.9, scan: 0.85, decoy: 1.25, thrower: 1.0, revive: 1.1, klaxon: 0.9, breath: 0.75, gasp: 1.2, breaker: 1.1, work: 0.95, pump: 1.05, bulkhead: 0.8 };
const V_WALK = 0, V_CLIMB = 1, V_CRAWL = 2, V_DROP = 3;       // going into the vents: walking to the hatch, climbing in, crawling, dropping out
const NONE = [];

export class Creature {
  constructor(world) {
    this.w = world; const L = this.L = world.L;
    this.walk = L.walkC.slice();                 // where it can stand this match: the floor, less any doorway that has been welded shut
    this.pather = new Pather(L, this.walk);
    this.occ = new Float32Array(N); this.occ2 = new Float32Array(N);
    this.lockerOcc = new Float32Array(L.lockers.length); this.lockerChecked = new Uint8Array(L.lockers.length);
    this.dist = new Int16Array(N);
    this.poiSeen = new Float32Array(L.pois.length);
    this.heat = new Float32Array(L.rooms.length);
    this.aware = new Map(); this.seenAt = new Map(); this.decoyCall = new Map();
    this.spread = new Uint8Array(N);
    this.lockersAt = new Map();
    for (const k of L.lockers) { if (!this.lockersAt.has(k.access)) this.lockersAt.set(k.access, []); this.lockersAt.get(k.access).push(k.id); }
    this.genRoom = L.rooms.findIndex(r => r.name === 'Reactor Room');
    this.learn = { hide: 0.15, decoy: 1, duct: 0.45 };
    this.reset(L.idx(L.creatureSpawns[0].cx, L.creatureSpawns[0].cz));
  }

  reset(cell) {
    const L = this.L, w = this.w;
    // what kind of creature this match has, and where it and its prey can go
    this.tr = Object.assign({ hear: 1, sight: 1, cone: 0.25, ambush: 1, roam: 1, chase: 0, corner: 0.35, search: 1, hide0: 0.15, guard: 0 }, w.trait);
    for (let i = 0; i < N; i++) {
      const d = L.doorAt[i], shut = d >= 0 && w.doorSeal[d];
      this.walk[i] = L.walkC[i] && !shut ? 1 : 0;
      // where prey can be without being in plain view: any floor or duct, but not the pod
      this.spread[i] = L.walkP[i] && !shut && L.cells[i] !== C.LIFT && !(d >= 0 && L.doors[d].gate) ? 1 : 0;
    }
    this.syncWalk();
    this.x = L.cx(cell); this.z = L.cz(cell); this.yaw = 0; this.vx = this.vz = this.speed = 0;
    this.state = CS.IDLE; this.stateT = 0;
    this.path = null; this.pathI = 0;
    this.target = null; this.lostT = 0; this.last = { x: this.x, z: this.z, vx: 0, vz: 0 }; this.knowsLocker = -1;
    this.suspect = null; this.stim = null;
    this.pauseT = 0; this.lookT = 0; this.baseYaw = 0; this.roamPoi = -1; this.faceTo = null;
    this.occ.fill(0); this.lockerOcc.fill(0); this.lockerChecked.fill(0);
    this.searchLeft = 0; this.searchFor = null; this.goalLocker = -1; this.goalT = 0; this.thinkT = 0; this.replanT = 0;
    this.attackT = 0; this.attackId = null; this.attackDone = false; this.attackHit = false;
    this.lockerId = -1; this.lockerT = 0; this.lockerBack = CS.ROAM;
    this.lampsOut = false; this.forcing = false; this.doorT = 0;
    this.baitT = 0; this.baitFor = null; this.ambushT = 0;
    this.rearT = 0; this.burstT = 0; this.heardLocker = -1;      // rearing up before a charge; the first rush of that charge; a locker it has heard breathing from
    this.ventPhase = V_WALK; this.ventA = -1; this.ventB = -1; this.ventWhy = ''; this.ventRoute = null; this.ventI = 0; this.ventStuck = 0; this.ventCool = 25; this.after = null;
    this.pressure = 0; this.backoff = 0; this.quiet = 0; this.hint = null; this.klaxT = 0;
    this.aware.clear(); this.seenAt.clear(); this.decoyCall.clear(); this.poiSeen.fill(-60); this.heat.fill(0);
    this.learn.hide = this.tr.hide0; this.learn.decoy = 1; this.learn.duct = 0.45;
    this.stats = { hunts: 0, catches: 0, lockerChecks: 0, lockerFinds: 0, searches: 0, vents: 0 };
  }

  cell() { return this.L.cellOf(this.x, this.z); }
  aggr() { const w = this.w; return clamp01(w.progress()) + (w.lift.state >= LIFT.READY ? 0.15 : 0); }
  // out of sight up in the vents, or on its way in or out of a hatch
  hidden() { return this.state === CS.VENT && this.ventPhase === V_CRAWL; }
  climbing() { return this.state === CS.VENT && (this.ventPhase === V_CLIMB || this.ventPhase === V_DROP); }
  // A bulkhead that is shut is a wall to it; one that has opened is a way through. Nothing else changes in a match.
  syncWalk() {
    const L = this.L, w = this.w, here = this.L.cellOf(this.x || 0, this.z || 0);
    for (const d of L.doors) {
      if (d.bulk < 0) continue;
      const shut = w.doorLock[d.id] && !d.cells.includes(here);
      for (const c of d.cells) { this.walk[c] = shut ? 0 : 1; this.spread[c] = shut ? 0 : 1; }
    }
    this.path = null;
  }
  // The crew has moved on into the next section and the bulkhead has shut behind them. If it is still on the wrong side,
  // it will go round through the vents; either way it gives them a moment first.
  onSection(sec) { this.backoff = Math.max(this.backoff, 10); this.hint = null; this.ventCool = 0; if (this.L.secOf[this.cell()] !== sec && this.state !== CS.VENT) { this.target = null; this.enter(CS.ROAM); } }
  inGen(x, z) { const c = this.L.cellOf(x, z); return c >= 0 && c < N && this.L.roomId[c] === this.genRoom; }
  enter(state) { this.state = state; this.stateT = 0; this.doorT = 0; this.forcing = false; if (state !== CS.AMBUSH && state !== CS.BAIT) this.lampsOut = false; }
  stop(dt) { this.speed = approach(this.speed, 0, 16 * dt); this.vx = this.vz = 0; }
  targetSlot() { const p = this.target ? this.w.players.get(this.target) : null; return p ? p.slot : -1; }

  // ------------------------------------------------------------------------------------------------ one tick
  update(dt) {
    const w = this.w;
    this.stateT += dt; this.ventCool -= dt;
    if (this.state === CS.IDLE) { this.stop(dt); w.noises.length = 0; if (w.time > w.wake) { this.enter(CS.ROAM); w.event('wake'); } return; }
    const deep = this.state === CS.VENT && this.ventPhase !== V_WALK;          // in a hatch or above the ceiling: no eyes for anyone
    if (!deep) this.sense(dt); else for (const p of w.players.values()) { p.visible = false; const a = Math.max(0, (this.aware.get(p.id) || 0) - 0.22 * dt); this.aware.set(p.id, a); p.aware = a; }
    for (const n of w.noises) this.hear(n);
    w.noises.length = 0;
    this.direct(dt);
    // left behind when a bulkhead shut: through the vents after them
    if (!deep && this.state !== CS.ATTACK && this.state !== CS.LOCKER && this.L.secOf[this.cell()] !== w.sec) { if (this.state !== CS.VENT || this.ventWhy !== 'section') this.followCrew(); }

    if (!deep && this.state !== CS.HUNT && this.state !== CS.ATTACK && this.state !== CS.LOCKER) {
      let best = null, ba = 0;
      for (const p of w.players.values()) { if (p.status !== ST.ALIVE || !p.visible) continue; const a = this.aware.get(p.id) || 0; if (a > ba) { ba = a; best = p; } }
      if (best && ba >= 1) this.startHunt(best);
      else if (best && ba >= 0.4 && this.state !== CS.SUSPECT) { this.suspect = best.id; this.path = null; this.replanT = 0; this.enter(CS.SUSPECT); w.event('alert'); }
    }
    switch (this.state) {
      case CS.ROAM: this.roam(dt); break;
      case CS.SUSPECT: this.suspectStep(dt); break;
      case CS.INVEST: this.investStep(dt); break;
      case CS.HUNT: this.huntStep(dt); break;
      case CS.SEARCH: this.searchStep(dt); break;
      case CS.ATTACK: this.attackStep(dt); break;
      case CS.AMBUSH: this.ambushStep(dt); break;
      case CS.BAIT: this.baitStep(dt); break;
      case CS.LOCKER: this.lockerStep(dt); break;
      case CS.VENT: this.ventStep(dt); break;
    }
  }

  // ------------------------------------------------------------------------------------------------ senses
  sense(dt) {
    const w = this.w, L = this.L, fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw);
    const alert = this.state === CS.HUNT || this.state === CS.SEARCH || this.state === CS.ATTACK;
    for (const p of w.players.values()) {
      if (p.status !== ST.ALIVE) { p.visible = false; p.aware = 0; this.aware.delete(p.id); continue; }
      let a = this.aware.get(p.id) || 0, vis = false, rate = 0;
      const dx = p.x - this.x, dz = p.z - this.z, d = Math.hypot(dx, dz);
      if (p.hidden < 0 && p.invuln <= 0) {
        const pc = L.cellOf(p.x, p.z), inDuct = L.cells[pc] === C.DUCT;
        const range = (p.light ? CFG.creature.sightLamp : CFG.creature.sight) * this.tr.sight;
        if (!inDuct && d < range) {
          const dot = d > 0.01 ? (dx * fx + dz * fz) / d : 1;
          if (dot > (alert ? -0.25 : this.tr.cone) || d < 2.2) {
            if (sight(L, w.doorOpen, this.x, this.z, EYE, p.x, p.z, p.crouch ? 0.9 : 1.6)) {
              vis = true;
              const near = clamp01(1 - (d - 2) / (range - 2));
              rate = 0.3 + 3.7 * near * near;
              rate *= p.light ? 2.5 : 0.3 + 0.7 * w.litAt(pc);                // darkness hides; a lit lamp does the opposite
              rate *= p.speed > 3.7 ? 1.6 : p.speed > 0.4 ? 1 : 0.6;          // movement catches the eye
              if (p.crouch) rate *= 0.6;
              if (dot < 0.75) rate *= 0.6;                                     // the edge of its view
              if (alert) rate *= 1.8;
            }
          }
        }
        // close enough to feel, even at a duct mouth, as long as no wall is between
        if (!vis && d < 2.3 && sight(L, w.doorOpen, this.x, this.z, 1.0, p.x, p.z, 0.9, true)) { vis = true; rate = 3; }
      }
      a = vis ? Math.min(1.5, a + rate * dt) : Math.max(0, a - 0.22 * dt);
      this.aware.set(p.id, a); p.aware = a; p.visible = vis;
      if (vis) this.seenAt.set(p.id, { x: p.x, z: p.z, vx: p.vx, vz: p.vz, t: w.time });
    }
  }

  hear(n) {
    const L = this.L, w = this.w;
    const d = Math.hypot(n.x - this.x, n.z - this.z);
    if (n.kind === 'klaxon') {           // the escape pod's alarm carries through the whole ship, and it comes
      this.klaxT -= 1; if (this.klaxT > 0) return; this.klaxT = 3;
      if (this.state === CS.HUNT || this.state === CS.ATTACK || this.state === CS.LOCKER || this.state === CS.SUSPECT) return;
      const ex = n.x + (w.rand() * 2 - 1) * 8, ez = n.z + (w.rand() * 2 - 1) * 8;
      if (this.state === CS.SEARCH) { this.seedOcc(ex, ez, 0.6, 3); if (d < 16) return; }
      this.investigate(ex, ez, 0.6, 'klaxon', 0); return;
    }
    let R = n.r * this.tr.hear * (this.state === CS.BAIT ? 1.6 : this.state === CS.AMBUSH ? 1.3 : 1);
    if (this.state === CS.VENT && this.ventPhase !== V_WALK) {      // up in the vents it hears through the grilles, a little less well
      if (this.ventPhase !== V_CRAWL || L.secOf[L.cellOf(n.x, n.z)] !== w.sec) return;
      R *= 0.8; if (w.rumbleT > 0) R *= 0.5;
      const d0 = Math.hypot(n.x - this.x, n.z - this.z); if (d0 > R) return;
      const wgt = (1 - d0 / R) * (KIND_W[n.kind] || 0.7); if (wgt >= 0.2) this.ventToward(n.x, n.z, wgt, n.kind === 'decoy' ? 'decoy' : n.kind, n.id || 0);
      return;
    }
    if (w.rumbleT > 0) R *= 0.5;                        // the hull is groaning: nothing carries far over that
    if (this.inGen(n.x, n.z)) R *= 0.6;                 // the generators drown things out
    if (this.inGen(this.x, this.z)) R *= 0.75;
    if (d > R) return;
    if (d > 3 && !sight(L, w.doorOpen, this.x, this.z, 1.5, n.x, n.z, 1.5, true)) { R *= 0.6; if (d > R) return; }
    const loud = 1 - d / R;
    let x = n.x, z = n.z, kind = n.kind;
    if (kind === 'decoy') {
      let call = this.decoyCall.get(n.id);
      if (call === undefined) { call = w.rand() < this.learn.decoy ? 1 : 0; this.decoyCall.set(n.id, call); }
      if (!call) { x = n.ox + ((n.id * 7919) % 9) - 4; z = n.oz + ((n.id * 104729) % 9) - 4; kind = 'thrower'; }   // it has worked out what a sounder means
    }
    const weight = loud * (KIND_W[kind] || 0.7);
    if (n.locker >= 0) { this.lockerOcc[n.locker] += 0.7 * loud + 0.2; this.heardLocker = n.locker; this.lockerChecked[n.locker] = 0; }      // someone breathing behind a locker door: it knows which door, and that it is worth opening again
    const err = 0.3 + 3 * (1 - loud);
    x = clamp(x + (w.rand() * 2 - 1) * err, T, (W - 1) * T); z = clamp(z + (w.rand() * 2 - 1) * err, T, (H - 1) * T);
    const room = L.roomId[L.cellOf(x, z)]; if (room >= 0) this.heat[room] += weight;
    switch (this.state) {
      case CS.HUNT:
        if (n.src && n.src === this.target && this.lostT > 0) this.last = { x, z, vx: 0, vz: 0 };   // follows the footsteps it can no longer see
        return;
      case CS.ATTACK: case CS.LOCKER: case CS.SUSPECT: return;
      case CS.VENT: if (weight >= 0.3) { this.ventPhase = V_WALK; this.investigate(x, z, weight, kind, n.id); } return;       // on its way to a hatch: a good enough reason to stay down here
      case CS.SEARCH: this.seedOcc(x, z, weight * 0.8, 2); if (weight >= 0.45) this.investigate(x, z, weight, kind, n.id); return;
      case CS.AMBUSH: this.faceTo = yawOf(x - this.x, z - this.z); if (weight >= 0.7) this.investigate(x, z, weight, kind, n.id); return;
      case CS.BAIT: if (weight >= 0.12) this.investigate(x, z, Math.max(weight, 0.9), kind, n.id); return;
      case CS.INVEST: if (!this.stim || weight >= this.stim.w * 0.8) this.investigate(x, z, weight, kind, n.id); return;
      default: if (weight >= 0.1) this.investigate(x, z, weight, kind, n.id);
    }
  }

  // someone has just shut themselves in a locker
  onHide(p, k) {
    const L = this.L, lk = L.lockers[k]; if (this.state === CS.IDLE) return;
    const d = Math.hypot(lk.x - this.x, lk.z - this.z);
    const sees = d < 16 && sight(L, this.w.doorOpen, this.x, this.z, EYE, lk.x, lk.z, 1.4);
    if (this.state === CS.HUNT && this.target === p.id && (this.lostT < 0.7 || sees)) this.knowsLocker = k;   // it watched them get in
    else if (sees && (this.aware.get(p.id) || 0) > 0.3) { this.lockerOcc[k] += 1; this.investigate(lk.x, lk.z, 0.8, 'locker', 0); }
  }
  onUnhide(p, k) {
    const L = this.L, lk = L.lockers[k]; if (this.state === CS.IDLE) return;
    if (Math.hypot(lk.x - this.x, lk.z - this.z) < 16 && sight(L, this.w.doorOpen, this.x, this.z, EYE, lk.x, lk.z, 1.4)) this.learn.hide = Math.min(0.9, this.learn.hide + 0.25);
  }

  // ------------------------------------------------------------------------------------------------ pacing
  direct(dt) {
    const w = this.w; let near = 1e9, any = null;
    const alive = [];
    for (const p of w.players.values()) if (p.status === ST.ALIVE) { alive.push(p); const d = Math.hypot(p.x - this.x, p.z - this.z); if (d < near) { near = d; any = p; } }
    const hunting = this.state === CS.HUNT || this.state === CS.ATTACK;
    this.pressure = clamp(this.pressure + dt * (hunting ? 2 : near < 12 ? 1 : -0.7), 0, 70);
    if (this.backoff > 0) this.backoff -= dt;
    if (this.pressure > 46 && !hunting && this.backoff <= 0 && w.lift.state < LIFT.CALLED) { this.backoff = 20 + w.rand() * 14 - this.aggr() * 10; this.pressure = 14; this.hint = null; }
    this.quiet = this.state === CS.ROAM || this.state === CS.AMBUSH ? this.quiet + dt : 0;
    const every = 55 - 30 * Math.min(1, this.aggr());
    if (this.hint && w.time - this.hint.t > 26) this.hint = null;
    if (this.quiet > every && this.backoff <= 0 && alive.length) {
      const p = alive[Math.floor(w.rand() * alive.length)];
      this.hint = { x: p.x + (w.rand() * 2 - 1) * 12, z: p.z + (w.rand() * 2 - 1) * 12, t: w.time };
      this.quiet = every * 0.4;
      if (this.state === CS.ROAM && this.pauseT <= 0) this.path = null;
    }
    // nobody gets to sit in a locker for the whole match
    for (const p of alive) if (p.hidden >= 0 && p.hidFor > 55) { p.hidFor = 30; this.lockerOcc[p.hidden] += 0.6; this.hint = { x: p.x, z: p.z, t: w.time }; if (this.state === CS.ROAM) this.path = null; }
    if (w.lift.state === LIFT.CALLED || w.lift.state === LIFT.ARRIVED) { if (!this.hint || w.time - this.hint.t > 6) this.hint = { x: this.L.lift.alarm.x, z: this.L.lift.alarm.z, t: w.time }; this.backoff = 0; }
  }

  // ------------------------------------------------------------------------------------------------ patrol
  roam(dt) {
    if (this.path) { if (this.follow(dt, CFG.creature.roam * this.tr.roam + 0.7 * this.aggr(), 3.5)) this.arriveRoam(); }
    else if (this.pauseT > 0) this.lookAbout(dt);
    else this.pickRoam();
  }
  lookAbout(dt) { this.pauseT -= dt; this.lookT += dt; this.stop(dt); this.yaw = this.baseYaw + Math.sin(this.lookT * 1.5) * 1.15; }
  arriveRoam() {
    const w = this.w, L = this.L;
    if (this.roamPoi >= 0) this.poiSeen[this.roamPoi] = w.time;
    for (let i = 0; i < L.pois.length; i++) if (Math.hypot(L.pois[i].x - this.x, L.pois[i].z - this.z) < 7) this.poiSeen[i] = w.time;
    this.pauseT = 1.2 + w.rand() * 2.4; this.lookT = 0; this.baseYaw = this.yaw;
    // now and then it simply stops, lights out, and waits for someone to walk into it
    let near = 1e9; for (const p of w.players.values()) if (p.status === ST.ALIVE) near = Math.min(near, Math.hypot(p.x - this.x, p.z - this.z));
    const a = this.aggr();
    const keen = this.tr.ambush > 1.5;          // one that likes to wait does it from the start, and for longer
    if ((a >= 0.2 || keen) && near > 9 && this.backoff <= 0 && w.rand() < (0.12 + 0.16 * a) * this.tr.ambush) { this.ambushT = (9 + w.rand() * 12) * (keen ? 1.5 : 1); this.faceTo = null; this.enter(CS.AMBUSH); this.lampsOut = true; }
  }
  pickRoam() {
    const w = this.w, L = this.L, me = this.cell(), a = this.aggr();
    distField(this.walk, me, this.dist);
    let hmax = 1e-3; for (const h of this.heat) if (h > hmax) hmax = h;
    // what it guards: whatever the crew still has to get to in this section
    const ga = Math.max(a, this.tr.guard), guard = new Set();
    if (ga > 0.2) { for (const t of w.tags) if (!t.taken) guard.add(L.roomId[t.cell]); for (const st of w.stations) if (st.sec === w.sec && st.active && !st.done) guard.add(L.roomId[L.cellOf(st.ax, st.az)]); }
    const alive = []; for (const p of w.players.values()) if (p.status === ST.ALIVE) alive.push(p);
    let best = -1, bs = -1e9;
    for (let i = 0; i < L.pois.length; i++) {
      const q = L.pois[i], d = this.dist[q.cell]; if (d < 1) continue;
      let s = Math.min(60, w.time - this.poiSeen[i]) / 60 + w.rand() * 0.5 - d / 140;
      s += 0.4 * this.heat[q.room] / hmax;
      if (guard.has(q.room)) s += 0.5 * ga;
      if (this.hint) s += 1.7 * Math.max(0, 1 - Math.hypot(q.x - this.hint.x, q.z - this.hint.z) / 30);
      if (this.backoff > 0) { let nd = 1e9; for (const p of alive) nd = Math.min(nd, Math.hypot(q.x - p.x, q.z - p.z)); s -= 1.6 * Math.max(0, 1 - nd / 30); }
      if (s > bs) { bs = s; best = i; }
    }
    if (best < 0) { this.pauseT = 1; return; }
    this.roamPoi = best;
    // a long way to walk: sometimes it goes through the ceiling instead, and more often as the crew gets further
    if (this.dist[L.pois[best].cell] > 20 && this.ventCool <= 0 && w.rand() < 0.3 + 0.35 * a && this.ventTo(L.pois[best].x, L.pois[best].z, 'roam', this.dist[L.pois[best].cell] * T * 0.65)) return;
    this.path = this.pather.find(me, L.pois[best].cell, w.doorOpen); this.pathI = this.path && this.path.length > 1 ? 1 : 0;
    if (!this.path) { this.poiSeen[best] = w.time; this.pauseT = 0.5; }
  }
  ambushStep(dt) {
    this.stop(dt); this.ambushT -= dt;
    if (this.faceTo !== null) this.yaw = angleTo(this.yaw, this.faceTo, 2.5 * dt);
    if (this.ambushT <= 0) this.enter(CS.ROAM);
  }

  // ------------------------------------------------------------------------------------------------ a glimpse, a sound
  suspectStep(dt) {
    const w = this.w, p = w.players.get(this.suspect), s = this.seenAt.get(this.suspect);
    const a = p ? this.aware.get(p.id) || 0 : 0;
    if (!p || p.status !== ST.ALIVE || !s || a < 0.15 || this.stateT > 6) { if (s) this.investigate(s.x, s.z, 0.55, 'glimpse', 0); else this.enter(CS.ROAM); return; }
    this.replanT -= dt;
    if (this.replanT <= 0) { this.replanT = 0.5; const c = nearestWalk(this.L, this.walk, s.x, s.z, 4); this.path = c >= 0 ? this.pather.find(this.cell(), c, w.doorOpen) : null; this.pathI = this.path && this.path.length > 1 ? 1 : 0; }
    if (this.path && this.stateT > 0.6) this.follow(dt, 1.5, 4); else { this.stop(dt); this.yaw = angleTo(this.yaw, yawOf(s.x - this.x, s.z - this.z), 4 * dt); }
  }
  investigate(x, z, weight, kind, id) {
    const L = this.L, w = this.w, c = nearestWalk(L, this.walk, x, z, 5); if (c < 0) return;
    const first = this.state !== CS.INVEST;
    this.stim = { x, z, w: weight, kind, id, t: w.time };
    this.path = this.pather.find(this.cell(), c, w.doorOpen); this.pathI = this.path && this.path.length > 1 ? 1 : 0; this.pauseT = 0;
    if (first) { this.enter(CS.INVEST); if (weight >= 0.3) w.event('alert'); }
  }
  investStep(dt) {
    const w = this.w, s = this.stim;
    if (this.path) { if (this.follow(dt, 2.6 + 1.6 * s.w + 0.6 * this.aggr(), 5)) { this.pauseT = 1.6; this.lookT = 0; this.baseYaw = this.yaw; } return; }
    if ((s.kind === 'breath' || s.kind === 'gasp') && this.heardLocker >= 0 && !this.lockerChecked[this.heardLocker]) {      // it came to a locker it heard someone in: open it
      const k = this.heardLocker, lk = this.L.lockers[k]; this.heardLocker = -1;
      if (Math.hypot(lk.x - this.x, lk.z - this.z) < 2.2) { this.searchLeft = Math.max(this.searchLeft, 8); return this.enterLocker(k, CS.SEARCH); }
    }
    if (this.pauseT > 0) return this.lookAbout(dt);
    if (s.kind === 'decoy') this.learn.decoy = Math.max(0.15, this.learn.decoy * 0.6);     // nothing here but a noise-maker: remember that
    this.startSearch({ x: s.x, z: s.z }, 0.7, 9 + 6 * this.aggr(), null);
  }

  // ------------------------------------------------------------------------------------------------ the hunt
  startHunt(p) {
    const w = this.w;
    if (this.state !== CS.HUNT) {
      w.event('spot', p.slot); this.stats.hunts++; this.pressure += 8;
      // seen from a distance it rears up for a moment, then comes in a rush. From close to, there is no warning.
      if (this.state !== CS.ATTACK && Math.hypot(p.x - this.x, p.z - this.z) > 7) { this.rearT = 0.5; this.burstT = 2.1; }
    }
    this.target = p.id; this.lostT = 0; this.knowsLocker = -1; this.replanT = 0; this.path = null;
    this.last = { x: p.x, z: p.z, vx: p.vx, vz: p.vz };
    const room = this.L.roomId[this.L.cellOf(p.x, p.z)]; if (room >= 0) this.heat[room] += 2;
    this.enter(CS.HUNT);
  }
  visibleOther(except) {
    let best = null, bd = 1e9;
    for (const p of this.w.players.values()) { if (p.id === except || p.status !== ST.ALIVE || !p.visible || (this.aware.get(p.id) || 0) < 0.6) continue; const d = Math.hypot(p.x - this.x, p.z - this.z); if (d < bd) { bd = d; best = p; } }
    return best;
  }
  searchDur() { return (16 + 14 * Math.min(1, this.aggr()) + this.w.rand() * 6) * this.tr.search; }
  huntStep(dt) {
    const w = this.w, L = this.L, p = w.players.get(this.target);
    if (!p || p.status !== ST.ALIVE) { const o = this.visibleOther(this.target); this.target = null; if (o) return this.startHunt(o); return this.startSearch(this.last, 0.9, this.searchDur(), null); }
    const d = Math.hypot(p.x - this.x, p.z - this.z);
    if (p.visible) { this.lostT = 0; this.last = { x: p.x, z: p.z, vx: p.vx, vz: p.vz }; }
    else { this.lostT += dt; if (p.hidden < 0 && this.lostT < 0.9) this.last = { x: p.x, z: p.z, vx: p.vx, vz: p.vz }; }   // for a moment it still knows which way they went
    const o = this.visibleOther(p.id);
    if (o && (!p.visible || Math.hypot(o.x - this.x, o.z - this.z) < d * 0.6)) return this.startHunt(o);
    if (this.burstT > 0) this.burstT -= dt;
    const speed = CFG.creature.chase + this.tr.chase + CFG.creature.chaseGain * Math.min(1, this.aggr()) + (w.lift.state >= LIFT.CALLED ? 0.3 : 0) + (this.burstT > 0 ? 0.9 : 0);
    if (this.rearT > 0) { this.rearT -= dt; this.stop(dt); this.yaw = angleTo(this.yaw, yawOf(this.last.x - this.x, this.last.z - this.z), 6 * dt); return; }

    if (this.knowsLocker >= 0) {
      const lk = L.lockers[this.knowsLocker];
      if (p.hidden !== this.knowsLocker) this.knowsLocker = -1;
      else {
        if (Math.hypot(lk.x - this.x, lk.z - this.z) < 0.7) return this.enterLocker(this.knowsLocker, CS.HUNT);
        this.replanT -= dt;
        if (this.replanT <= 0 || !this.path) { this.replanT = 0.4; this.path = this.pather.find(this.cell(), lk.access, w.doorOpen, 1.5); this.pathI = this.path && this.path.length > 1 ? 1 : 0; }
        if (this.path) this.follow(dt, speed, 9); else this.steerAt(dt, lk.x, lk.z, speed);
        return;
      }
    }
    const inDuct = L.cells[L.cellOf(p.x, p.z)] === C.DUCT;
    if (p.visible && d < (inDuct ? 2.3 : CFG.creature.catchDist)) return this.enterAttack(p);
    if (p.visible && !inDuct && clearWalk(this.walk, this.x, this.z, p.x, p.z, 0.45)) { this.path = null; this.steerAt(dt, p.x, p.z, speed); return; }
    this.replanT -= dt;
    if (this.replanT <= 0 || !this.path) {
      this.replanT = 0.25;
      const tc = nearestWalk(L, this.walk, this.last.x, this.last.z, 6);
      this.path = tc >= 0 ? this.pather.find(this.cell(), tc, w.doorOpen, 1.5) : null; this.pathI = this.path && this.path.length > 1 ? 1 : 0;
    }
    const arrived = this.path ? this.follow(dt, speed, 9) : true;
    if (arrived && !p.visible && this.lostT >= 0.9) { w.event('lost'); this.startSearch(this.last, 1, this.searchDur(), p.id); }
  }
  steerAt(dt, x, z, speed) { const dx = x - this.x, dz = z - this.z, d = Math.hypot(dx, dz); if (d < 0.05) return this.stop(dt); this.steer(dt, dx / d, dz / d, speed, 9); }

  enterAttack(p) { this.attackId = p.id; this.attackT = 0; this.attackDone = false; this.attackHit = false; this.path = null; this.enter(CS.ATTACK); this.w.event('lunge', p.slot); }
  attackStep(dt) {
    const w = this.w, L = this.L, p = w.players.get(this.attackId);
    this.attackT += dt;
    if (p) {
      const dx = p.x - this.x, dz = p.z - this.z, d = Math.hypot(dx, dz);
      this.yaw = angleTo(this.yaw, yawOf(dx, dz), 12 * dt);
      if (!this.attackDone && d > 1.0 && clearWalk(this.walk, this.x, this.z, this.x + dx / d * 0.3, this.z + dz / d * 0.3, 0.45)) { this.x += dx / d * 5.5 * dt; this.z += dz / d * 5.5 * dt; this.speed = 5.5; } else this.stop(dt);
      if (!this.attackDone && this.attackT >= 0.38) {
        this.attackDone = true;
        const inDuct = L.cells[L.cellOf(p.x, p.z)] === C.DUCT;
        if (p.status === ST.ALIVE && p.hidden < 0 && p.invuln <= 0 && d < (inDuct ? 2.7 : CFG.creature.hitDist) && sight(L, w.doorOpen, this.x, this.z, 1.0, p.x, p.z, 0.9, true)) { this.attackHit = true; this.stats.catches++; w.downPlayer(p); }
      }
    } else this.stop(dt);
    if (this.attackT >= (this.attackHit ? 1.5 : 0.85)) {
      if (this.attackHit && p) this.afterKill(p);
      else if (p && p.status === ST.ALIVE) { this.target = p.id; this.lostT = 0; this.enter(CS.HUNT); }
      else this.enter(CS.ROAM);
    }
  }
  // what it does with someone it has brought down depends on who else is about
  afterKill(victim) {
    const w = this.w; this.target = null;
    const o = this.visibleOther(victim.id); if (o) return this.startHunt(o);
    let others = 0; for (const p of w.players.values()) if (p.id !== victim.id && p.status === ST.ALIVE) others++;
    if (!others) { this.pauseT = 2.5; this.lookT = 0; this.baseYaw = this.yaw; this.path = null; this.backoff = Math.max(this.backoff, 30); return this.enter(CS.ROAM); }
    const r = w.rand();
    if (r < 0.45 && this.startBait(victim)) return;
    if (r < 0.75) { this.backoff = 24; this.path = null; this.pauseT = 0; return this.enter(CS.ROAM); }   // walks off, and the others get their chance
    this.startSearch({ x: victim.x, z: victim.z }, 0.5, 14, null);
  }
  // step out of sight of the body, put its lights out, and wait for the rescue
  startBait(v) {
    const w = this.w, L = this.L, vc = nearestWalk(L, this.walk, v.x, v.z, 3); if (vc < 0) return false;
    distField(this.walk, vc, this.dist);
    const cand = [];
    for (let i = 0; i < N; i++) { const d = this.dist[i]; if (d < 3 || d > 8 || L.doorAt[i] >= 0) continue; if (!sight(L, null, L.cx(i), L.cz(i), 1.6, v.x, v.z, 0.5)) cand.push(i); }
    if (!cand.length) return false;
    cand.sort((p, q) => this.dist[p] - this.dist[q]);                 // as near as it can get while staying out of sight
    const c = cand[Math.floor(w.rand() * Math.min(5, cand.length))];
    this.path = this.pather.find(this.cell(), c, w.doorOpen); if (!this.path) return false;
    this.pathI = this.path.length > 1 ? 1 : 0; this.baitT = 30; this.baitFor = v.id; this.faceTo = null;
    this.enter(CS.BAIT); return true;
  }
  baitStep(dt) {
    const w = this.w, v = w.players.get(this.baitFor);
    if (!v || v.status !== ST.DOWN) return this.enter(CS.ROAM);
    if (this.path) { if (this.follow(dt, 3.2, 5)) { this.lampsOut = true; this.faceTo = yawOf(v.x - this.x, v.z - this.z); } return; }
    this.stop(dt); this.lampsOut = true; this.baitT -= dt;
    if (this.faceTo !== null) this.yaw = angleTo(this.yaw, this.faceTo, 2.5 * dt);
    if (this.baitT <= 0) this.enter(CS.ROAM);
  }

  // ------------------------------------------------------------------------------------------------ lockers
  enterLocker(k, back) {
    const lk = this.L.lockers[k];
    this.lockerId = k; this.lockerT = 0; this.lockerBack = back; this.path = null;
    this.faceTo = yawOf((lk.cx + 0.5) * T - this.x, (lk.cz + 0.5) * T - this.z);
    this.enter(CS.LOCKER); this.stats.lockerChecks++; this.w.event('lockchk', k, 0);
  }
  lockerStep(dt) {
    const w = this.w, k = this.lockerId;
    this.stop(dt); this.lockerT += dt; this.yaw = angleTo(this.yaw, this.faceTo, 6 * dt);
    if (this.lockerT < 1.25) return;
    this.lockerChecked[k] = 1; this.lockerOcc[k] = 0;
    let found = null; for (const p of w.players.values()) if (p.status === ST.ALIVE && p.hidden === k) found = p;
    // Someone holding their breath is not a sure find, unless it watched them get in. How often it finds them anyway is
    // one of the things it learns.
    if (found && this.lockerBack !== CS.HUNT && w.holding(found) && w.rand() > this.learn.hide) { this.learn.hide = Math.min(0.9, this.learn.hide + 0.06); w.event('lockchk', k, 2); found = null; }
    if (found) { this.stats.lockerFinds++; this.stats.catches++; w.event('lockchk', k, 1); w.downPlayer(found); this.learn.hide = Math.min(0.9, this.learn.hide + 0.1); this.attackT = 0; return this.afterKill(found); }
    if (this.lockerBack === CS.HUNT) { this.knowsLocker = -1; return this.startSearch({ x: this.x, z: this.z }, 0.8, this.searchDur(), this.target); }
    if (this.searchLeft > 0) return this.enter(CS.SEARCH);
    this.enter(CS.ROAM);
  }

  // ------------------------------------------------------------------------------------------------ the search
  startSearch(at, mass, dur, forId) {
    this.occ.fill(0); for (let k = 0; k < this.lockerOcc.length; k++) this.lockerOcc[k] *= 0.5;
    this.lockerChecked.fill(0);
    this.seedOcc(at.x, at.z, mass, 4, at.vx || 0, at.vz || 0);
    this.searchLeft = dur; this.searchFor = forId; this.goalLocker = -1; this.goalT = 0; this.path = null; this.pauseT = 0; this.thinkT = 0;
    this.stats.searches++;
    this.enter(CS.SEARCH);
  }
  searchStep(dt) {
    this.searchLeft -= dt; this.thinkT -= dt;
    if (this.thinkT <= 0) { this.thinkT = 0.25; this.diffuse(); this.clearSeen(); }
    if (this.searchLeft <= 0) return this.endSearch();
    if (this.pauseT > 0) return this.lookAbout(dt);
    this.goalT += dt;
    if (!this.path || this.goalT > 4) { if (!this.pickSearchGoal()) return this.endSearch(); }
    if (this.follow(dt, 2.8 + this.aggr(), 5)) {
      if (this.goalLocker >= 0 && !this.lockerChecked[this.goalLocker]) return this.enterLocker(this.goalLocker, CS.SEARCH);
      this.pauseT = 0.9; this.lookT = 0; this.baseYaw = this.yaw;
    }
  }
  endSearch() {
    const w = this.w, L = this.L, p = this.searchFor ? w.players.get(this.searchFor) : null;
    if (p && p.status === ST.ALIVE) {    // it lost them. Where they turn out to have been is the lesson.
      if (p.hidden >= 0) this.learn.hide = Math.min(0.9, this.learn.hide + 0.18);
      else if (L.cells[L.cellOf(p.x, p.z)] === C.DUCT) this.learn.duct = Math.min(0.95, this.learn.duct + 0.15);
    }
    this.occ.fill(0); this.searchLeft = 0; this.searchFor = null; this.path = null; this.pauseT = 0;
    this.enter(CS.ROAM);
    // and sometimes, having found nothing, it goes up into the ceiling and comes down somewhere else
    if (this.ventCool <= 0 && w.rand() < 0.3) { const vs = L.vents.filter(v => v.sec === w.sec && Math.hypot(v.x - this.x, v.z - this.z) > 20); if (vs.length) { const v = vs[Math.floor(w.rand() * vs.length)]; this.ventTo(v.x, v.z, 'roam', 1e9); } }
  }
  pickSearchGoal() {
    const L = this.L, w = this.w, me = this.cell(), occ = this.occ;
    distField(this.walk, me, this.dist);
    let best = -1, bs = 2e-5, locker = -1;
    for (let i = W; i < N - W; i++) {
      if (!this.walk[i] || this.dist[i] < 0) continue;
      const m = occ[i] + 0.5 * (occ[i - 1] + occ[i + 1] + occ[i - W] + occ[i + W]); if (m < 1e-5) continue;
      const s = m / (3 + this.dist[i]); if (s > bs) { bs = s; best = i; }
    }
    for (const g of L.ducts) {     // prey in a duct has to come out somewhere
      let m = 0; for (const c of g.cells) m += occ[c]; if (m < 1e-4) continue;
      for (const e of g.exits) { if (this.dist[e] < 0) continue; const s = m * (0.4 + this.learn.duct) / (3 + this.dist[e]); if (s > bs) { bs = s; best = e; } }
    }
    for (const k of L.lockers) {
      if (this.lockerChecked[k.id] || this.lockerOcc[k.id] < 0.02 || this.dist[k.access] < 0) continue;
      const s = this.lockerOcc[k.id] * 2 / (3 + this.dist[k.access]); if (s > bs) { bs = s; best = k.access; locker = k.id; }
    }
    if (best < 0) return false;
    this.goalLocker = locker; this.goalT = 0;
    this.path = this.pather.find(me, best, w.doorOpen); this.pathI = this.path && this.path.length > 1 ? 1 : 0;
    return !!this.path;
  }
  // put "they could be here" on the map, a little way around a point and a little way along the way they were heading
  seedOcc(x, z, mass, rad, vx = 0, vz = 0) {
    const L = this.L, spread = this.spread;
    const put = (px, pz, m) => {
      const c0 = nearestWalk(L, spread, px, pz, 3); if (c0 < 0) return;
      const seen = new Map([[c0, 0]]), q = [c0]; let tot = 0;
      for (let h = 0; h < q.length; h++) { const c = q[h], s = seen.get(c); tot += rad + 1 - s; if (s >= rad) continue; for (const n of [c - 1, c + 1, c - W, c + W]) if (spread[n] && !seen.has(n)) { seen.set(n, s + 1); q.push(n); } }
      for (const [c, s] of seen) this.occ[c] += m * (rad + 1 - s) / tot;
    };
    const sp = Math.hypot(vx, vz);
    if (sp > 0.5) { put(x, z, mass * 0.5); put(x + vx / sp * 5, z + vz / sp * 5, mass * 0.5); } else put(x, z, mass);
  }
  // whoever it is could have kept moving: let the map bleed outwards
  diffuse() {
    const sp = this.spread, a = this.occ, b = this.occ2; b.fill(0);
    for (let i = W; i < N - W; i++) {
      const m = a[i]; if (m < 1e-6) continue;
      const l = sp[i - 1], r = sp[i + 1], u = sp[i - W], d = sp[i + W], n = l + r + u + d;
      if (!n) { b[i] += m; continue; }
      const sh = m * 0.4 / n; b[i] += m * 0.6;
      if (l) b[i - 1] += sh; if (r) b[i + 1] += sh; if (u) b[i - W] += sh; if (d) b[i + W] += sh;
    }
    this.occ = b; this.occ2 = a;
  }
  // everything it can see right now is empty, or it would have noticed. Lockers are the exception: they keep a share of the doubt.
  clearSeen() {
    const L = this.L, w = this.w, occ = this.occ, cx0 = Math.floor(this.x / T), cz0 = Math.floor(this.z / T);
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw);
    for (let dz = -7; dz <= 7; dz++) for (let dx = -7; dx <= 7; dx++) {
      const x = cx0 + dx, z = cz0 + dz; if (x < 1 || z < 1 || x >= W - 1 || z >= H - 1) continue;
      const i = z * W + x; if (occ[i] < 1e-6 || L.cells[i] === C.DUCT) continue;
      const px = (x + 0.5) * T - this.x, pz = (z + 0.5) * T - this.z, d = Math.hypot(px, pz);
      if (d > 14) continue;
      if (d > 2.5 && (px * fx + pz * fz) / d < 0.1) continue;
      if (d > 0.5 && !sight(L, w.doorOpen, this.x, this.z, EYE, (x + 0.5) * T, (z + 0.5) * T, 1)) continue;
      for (const k of this.lockersAt.get(i) || NONE) if (!this.lockerChecked[k]) this.lockerOcc[k] += occ[i] * this.learn.hide;
      occ[i] = 0;
    }
  }

  // ------------------------------------------------------------------------------------------------ walking
  // Walks the current path. True once it has arrived.
  follow(dt, speed, turn) {
    const L = this.L, path = this.path;
    if (!path || this.pathI >= path.length) { this.path = null; this.stop(dt); return true; }
    for (let g = 0; g < 6 && this.pathI + 1 < path.length && L.doorAt[path[this.pathI]] < 0 && clearWalk(this.walk, this.x, this.z, L.cx(path[this.pathI + 1]), L.cz(path[this.pathI + 1]), 0.5); g++) this.pathI++;
    const dx = L.cx(path[this.pathI]) - this.x, dz = L.cz(path[this.pathI]) - this.z, d = Math.hypot(dx, dz);
    if (d < 0.3) { this.pathI++; if (this.pathI >= path.length) { this.path = null; this.stop(dt); return true; } return false; }
    this.steer(dt, dx / d, dz / d, speed, turn);
    return false;
  }
  steer(dt, dx, dz, speed, turn) {
    const L = this.L, w = this.w;
    this.yaw = angleTo(this.yaw, yawOf(dx, dz), turn * dt);
    // a shut door in the way gets forced, which takes a moment and can be heard
    for (const reach of [0.4, 1.25]) {
      const dc = L.doorAt[L.cellOf(this.x + dx * reach, this.z + dz * reach)];
      if (dc >= 0 && !w.doorSeal[dc] && !w.doorLock[dc] && w.doorOpen[dc] < 0.85) {
        this.stop(dt); this.forcing = true; this.doorT += dt;
        if (w.doorWant[dc] === 0 && this.doorT > (this.state === CS.HUNT ? 0.55 : 0.9)) w.forceDoor(dc);
        return;
      }
    }
    this.forcing = false; this.doorT = 0;
    const sp0 = Math.hypot(this.vx, this.vz);
    const align = sp0 > 0.3 ? (this.vx * dx + this.vz * dz) / sp0 : 1;
    const want = speed * (this.tr.corner + (1 - this.tr.corner) * clamp01(align));          // a sharp turn costs it speed: corners are your friend
    this.speed = approach(this.speed, want, (want > this.speed ? 6 : 16) * dt);
    this.vx = dx * this.speed; this.vz = dz * this.speed;
    const nx = this.x + this.vx * dt, nz = this.z + this.vz * dt;
    if (this.walk[L.cellOf(nx, nz)]) { this.x = nx; this.z = nz; } else { this.path = null; this.stop(dt); }
  }

  // ------------------------------------------------------------------------------------------------ the vents
  // Plans a way through the vents to a point in the crew's section: the hatch it can walk to soonest, and the hatch nearest
  // where it wants to be. Only worth it if the crawl is shorter than `walkLen` metres of walking. Returns whether it went.
  ventTo(x, z, why, walkLen) {
    const L = this.L, w = this.w, nv = L.vents.length, here = this.cell(), sec = w.sec;
    if (!this.walk[here]) return false;
    distField(this.walk, here, this.dist);
    let a = -1, ad = 1e9; for (const v of L.vents) { const d = this.dist[v.cell]; if (d >= 0 && d < 14 && d < ad) { ad = d; a = v.id; } }
    let b = -1, bd = 1e9; for (const v of L.vents) { if (v.sec !== sec) continue; const d = Math.hypot(v.x - x, v.z - z); if (d < bd) { bd = d; b = v.id; } }
    if (a < 0 || b < 0 || a === b || bd > 14) return false;
    if (ad * T + L.ventLen[a * nv + b] + bd > walkLen) return false;
    return this.goVent(a, b, why);
  }
  // left behind a bulkhead: up into the vents and over to wherever the crew is now
  followCrew() {
    const L = this.L, w = this.w; let px = null, pz = null;
    for (const p of w.players.values()) if (p.status === ST.ALIVE && L.secOf[L.cellOf(p.x, p.z)] === w.sec) { px = p.x; pz = p.z; break; }
    const sc = L.sections[w.sec], tx = px !== null ? px + (w.rand() * 2 - 1) * 14 : L.cx(L.idx((sc.x0 + sc.x1) >> 1, 16)), tz = pz !== null ? pz + (w.rand() * 2 - 1) * 10 : 16 * T;
    if (this.ventTo(tx, tz, 'section', 1e9)) return;
    // nowhere it can walk to a hatch from (it is stuck in a doorway, say): it simply comes out of the nearest one to the crew
    this.ventStuck += 1;
    if (this.ventStuck > 30) { let b = -1, bd = 1e9; for (const v of L.vents) { if (v.sec !== w.sec) continue; const d = Math.hypot(v.x - tx, v.z - tz); if (d < bd) { bd = d; b = v.id; } } if (b >= 0) { this.x = L.vents[b].x; this.z = L.vents[b].z; this.ventStuck = 0; this.ventA = this.ventB = b; this.ventWhy = 'section'; this.enter(CS.VENT); this.ventPhase = V_DROP; this.stateT = 0; w.event('ventout', b); } }
  }
  goVent(a, b, why) {
    const L = this.L;
    this.ventA = a; this.ventB = b; this.ventWhy = why; this.ventRoute = null; this.after = null;
    this.path = this.pather.find(this.cell(), L.vents[a].cell, this.w.doorOpen); this.pathI = this.path && this.path.length > 1 ? 1 : 0;
    if (!this.path && this.cell() !== L.vents[a].cell) return false;
    this.enter(CS.VENT); this.ventPhase = V_WALK; this.ventCool = 20 + this.w.rand() * 25;
    return true;
  }
  // Heard something while crawling: it changes course for the hatch nearest the sound, if there is one near enough.
  ventToward(x, z, weight, kind, id) {
    const L = this.L, w = this.w, nv = L.vents.length;
    let b = -1, bd = 1e9; for (const v of L.vents) { if (v.sec !== w.sec) continue; const d = Math.hypot(v.x - x, v.z - z); if (d < bd) { bd = d; b = v.id; } }
    if (b < 0 || bd > 12) return;
    if (b !== this.ventB) {
      // it is somewhere between two hatches: it carries on, or turns back, whichever is the shorter way round
      const rt = this.ventRoute, i = rt ? Math.min(this.ventI, rt.length - 1) : 0, cand = rt ? [rt[i], rt[Math.max(0, i - 1)]] : [this.ventA];
      let from = cand[0], best = 1e9; for (const k of cand) { const v = L.vents[k], l = Math.hypot(v.x - this.x, v.z - this.z) + L.ventLen[k * nv + b]; if (l < best) { best = l; from = k; } }
      this.ventB = b; this.ventRoute = this.route(from, b); this.ventI = 0;
    }
    this.ventWhy = 'noise'; this.after = { x, z, w: weight, kind, id };
  }
  route(a, b) { const L = this.L, nv = L.vents.length, out = [a]; let c = a; for (let g = 0; g < 64 && c !== b; g++) { c = L.ventNext[c * nv + b]; if (c < 0) break; out.push(c); } return out; }
  ventStep(dt) {
    const L = this.L, w = this.w;
    if (this.ventPhase === V_WALK) {                    // walking to the hatch, as it would anywhere
      if (this.path) { if (!this.follow(dt, 2.6 + 0.8 * this.aggr(), 6)) return; }
      const v = L.vents[this.ventA];
      if (Math.hypot(v.x - this.x, v.z - this.z) > 1.2) { this.path = this.pather.find(this.cell(), v.cell, w.doorOpen); this.pathI = this.path && this.path.length > 1 ? 1 : 0; if (!this.path) this.enter(CS.ROAM); return; }
      this.stop(dt); this.x = v.x; this.z = v.z; this.ventPhase = V_CLIMB; this.stateT = 0; this.stats.vents++; w.event('ventin', this.ventA); return;
    }
    this.stop(dt);
    if (this.ventPhase === V_CLIMB) { if (this.stateT >= CFG.creature.climb) { this.ventPhase = V_CRAWL; this.stateT = 0; this.ventRoute = this.route(this.ventA, this.ventB); this.ventI = 1; } return; }
    if (this.ventPhase === V_CRAWL) {                   // up above the ceiling: hatch to hatch, unseen, though not unheard
      let move = CFG.creature.vent * dt;
      while (move > 0 && this.ventRoute && this.ventI < this.ventRoute.length) {
        const v = L.vents[this.ventRoute[this.ventI]], dx = v.x - this.x, dz = v.z - this.z, d = Math.hypot(dx, dz);
        if (d <= move) { this.x = v.x; this.z = v.z; move -= d; this.ventI++; continue; }
        this.x += dx / d * move; this.z += dz / d * move; this.yaw = angleTo(this.yaw, yawOf(dx, dz), 8 * dt); this.speed = CFG.creature.vent; move = 0;
      }
      if (!this.ventRoute || this.ventI >= this.ventRoute.length) { const v = L.vents[this.ventB]; this.x = v.x; this.z = v.z; this.ventPhase = V_DROP; this.stateT = 0; this.speed = 0; w.event('ventout', this.ventB); }
      return;
    }
    // dropping out of the hatch, then on with whatever it came for
    if (this.stateT < CFG.creature.drop) return;
    const why = this.ventWhy, after = this.after; this.after = null; this.ventWhy = ''; this.ventStuck = 0;
    this.pauseT = 0.6 + w.rand(); this.lookT = 0; this.baseYaw = this.yaw; this.path = null;
    if (after) return this.investigate(after.x, after.z, after.w, after.kind, after.id);
    this.enter(CS.ROAM); if (why === 'section') this.hint = null;
  }
}
