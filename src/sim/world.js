// The host's copy of the match: who is where, what has been picked up, the doors, the lift, and the creature.
// Players report where they are; everything that needs one answer for everybody is decided here and sent out as a snapshot.
import { T, W, H, C, LOW_H } from '../level.js';
import { CFG } from '../config.js';
import { rng32, clamp, approach, lerp } from '../util.js';
import { Creature } from './creature.js';
import { ST, PH, LIFT, CS, F } from './defs.js';

// Which tag and sounder spots are used this match, and where the creature starts. Every player works this out from the same seed.
export function layoutMatch(L, seed) {
  const r = rng32(seed);
  const cand = r.shuffle(L.tagSpots.map((s, i) => i)), tags = [];
  for (let minD = 10; tags.length < CFG.TAGS && minD >= 0; minD -= 2)
    for (const i of cand) {
      if (tags.length >= CFG.TAGS) break; if (tags.includes(i)) continue;
      const s = L.tagSpots[i];
      if (tags.every(j => Math.hypot(L.tagSpots[j].cx - s.cx, L.tagSpots[j].cz - s.cz) >= minD)) tags.push(i);
    }
  const logs = r.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).slice(0, CFG.TAGS);
  const items = r.shuffle(L.itemSpots.map((s, i) => i)).slice(0, CFG.ITEMS);
  const cs = r.pick(L.creatureSpawns);
  const at = s => ({ cell: L.idx(s.cx, s.cz), x: (s.cx + 0.5) * T, z: (s.cz + 0.5) * T });
  return {
    tags: tags.map((i, k) => Object.assign(at(L.tagSpots[i]), { spot: i, log: logs[k] })),
    items: items.map(i => Object.assign(at(L.itemSpots[i]), { spot: i })),
    creatureCell: L.idx(cs.cx, cs.cz),
    doorsOpen: L.doors.map(d => (!d.gate && r() < 0.3 ? 1 : 0)),
  };
}

export class World {
  constructor(L, seed = 1) {
    this.L = L; this.rand = rng32((seed ^ 0x9e3779b9) >>> 0);
    this.players = new Map();
    this.phase = PH.LOBBY; this.mid = 0; this.seed = 0; this.time = 0; this.clock = 0;
    const nd = L.doors.length;
    this.doorOpen = new Float32Array(nd); this.doorWant = new Uint8Array(nd); this.doorJam = new Float32Array(nd);
    this.tags = []; this.items = []; this.tagBits = 0; this.itemBits = 0; this.tagsTaken = 0;
    this.decoys = []; this.decoyId = 0;
    this.lift = { state: LIFT.LOCKED, timer: 0, board: 0, klax: 0 };
    this.events = []; this.evId = 0; this.noises = [];
    this.result = null; this.endT = 0; this.wipeT = 0; this.solo = false;
    this.creature = new Creature(this);
  }

  // ---------------------------------------------------------------------------------------------- players
  addPlayer(id, name, local = false) {
    if (this.players.has(id)) return this.players.get(id);
    if (this.players.size >= CFG.MAX_PLAYERS) return null;
    const used = new Set([...this.players.values()].map(p => p.slot)); let slot = 0; while (used.has(slot)) slot++;
    const sp = this.L.spawns[slot % this.L.spawns.length];
    const p = {
      id, name: String(name || 'Crew').slice(0, 14), slot, local,
      x: (sp.cx + 0.5) * T, z: (sp.cz + 0.5) * T, yaw: 0, pitch: 0, vx: 0, vz: 0, speed: 0,
      crouch: false, light: false, scan: false, hidden: -1, hidFor: 0, rv: -1,
      status: ST.ALIVE, timer: 0, revProg: 0, revTick: false, revBy: -1, revNoise: 0, invuln: 0,
      decoys: CFG.START_SOUNDERS, tags: 0, wind: 0, ack: 0, stepAcc: 0, scanT: 0, inT: this.clock, aware: 0, visible: false, ready: false,
    };
    this.players.set(id, p);
    if (this.phase === PH.PLAY) this.event('join', slot);
    return p;
  }
  removePlayer(id) {
    const p = this.players.get(id); if (!p) return;
    this.players.delete(id);
    if (this.phase === PH.PLAY) this.event('leave', p.slot);
  }
  bySlot(slot) { for (const p of this.players.values()) if (p.slot === slot) return p; return null; }

  // What a player reports: where they are, what they are doing, and the things they have asked for since the host last answered.
  input(id, inp) {
    const p = this.players.get(id); if (!p) return;
    const dtIn = Math.max(0.02, this.clock - p.inT); p.inT = this.clock;
    if (inp.name) p.name = String(inp.name).slice(0, 14);
    if (inp.rd !== undefined) p.ready = !!inp.rd;
    if (this.phase !== PH.PLAY) { if (Array.isArray(inp.acts)) for (const a of inp.acts) if (a[0] > p.ack) p.ack = a[0]; return; }
    if (p.status === ST.ALIVE && Number.isFinite(inp.x) && Number.isFinite(inp.z)) {
      const x = clamp(inp.x, T, (W - 1) * T), z = clamp(inp.z, T, (H - 1) * T);
      const dx = x - p.x, dz = z - p.z, dist = Math.hypot(dx, dz);
      if (dist < 12) { p.vx = lerp(p.vx, dx / dtIn, 0.6); p.vz = lerp(p.vz, dz / dtIn, 0.6); } else { p.vx = p.vz = 0; }
      p.x = x; p.z = z; p.yaw = +inp.yaw || 0; p.pitch = +inp.pitch || 0; p.speed = Math.hypot(p.vx, p.vz);
      const f = inp.f | 0; p.crouch = !!(f & F.CROUCH); p.light = !!(f & F.LIGHT); p.scan = !!(f & F.SCAN);
      p.rv = Number.isInteger(inp.rv) ? inp.rv : -1;
      // lockers: one person each
      const lk = Number.isInteger(inp.lk) && inp.lk >= 0 && inp.lk < this.L.lockers.length ? inp.lk : -1;
      if (lk !== p.hidden) {
        if (lk >= 0) {
          let taken = false; for (const q of this.players.values()) if (q !== p && q.hidden === lk && q.status === ST.ALIVE) taken = true;
          const k = this.L.lockers[lk];
          if (!taken && Math.hypot(k.x - x, k.z - z) < 4) { p.hidden = lk; p.hidFor = 0; this.noise(k.x, k.z, 'locker', p.id); this.creature.onHide(p, lk); }
        } else { const old = p.hidden; p.hidden = -1; const k = this.L.lockers[old]; this.noise(k.x, k.z, 'locker', p.id); this.creature.onUnhide(p, old); }
      }
      if (p.hidden < 0 && dist < 12 && dist > 1e-3) {
        p.stepAcc += dist;
        const run = p.speed > 3.7, stride = run ? 2.0 : p.crouch ? 1.2 : 1.5;
        if (p.stepAcc >= stride) { p.stepAcc = 0; this.noise(p.x, p.z, run ? 'run' : p.crouch ? 'crouch' : 'walk', p.id); }
      }
    }
    if (Array.isArray(inp.acts)) for (const a of inp.acts) { if (!Array.isArray(a) || !(a[0] > p.ack)) continue; p.ack = a[0]; this.act(p, a); }
  }

  act(p, a) {
    const L = this.L, type = a[1];
    if (p.status !== ST.ALIVE || p.hidden >= 0) return;
    const near = (x, z, r = CFG.reach + 1) => Math.hypot(x - p.x, z - p.z) < r;
    if (type === 'T') {                                   // pick up a crew tag
      const t = this.tags[a[2] | 0]; if (!t || t.taken || !near(t.x, t.z)) return;
      t.taken = true; this.tagBits |= 1 << (a[2] | 0); this.tagsTaken++; p.tags++;
      this.event('tag', a[2] | 0, p.slot, this.tagsTaken); this.noise(t.x, t.z, 'tag', p.id);
      if (this.tagsTaken >= this.tags.length && this.lift.state === LIFT.LOCKED) { this.lift.state = LIFT.READY; this.event('liftready'); }
    } else if (type === 'I') {                            // pick up a sounder
      const it = this.items[a[2] | 0]; if (!it || it.taken || !near(it.x, it.z) || p.decoys >= CFG.MAX_SOUNDERS) return;
      it.taken = true; this.itemBits |= 1 << (a[2] | 0); p.decoys++; this.event('item', a[2] | 0, p.slot);
    } else if (type === 'D') {                            // open or shut a door
      const d = L.doors[a[2] | 0]; if (!d || d.gate || this.doorJam[d.id] > 0 || !near(d.x, d.z, CFG.reach + 1.6)) return;
      if (this.doorWant[d.id] && this.doorBusy(d.id)) return;
      this.doorWant[d.id] ^= 1; this.event('door', d.id, this.doorWant[d.id], 0); this.noise(d.x, d.z, 'door', p.id);
    } else if (type === 'G') {                            // throw a sounder
      if (p.decoys <= 0) return; p.decoys--;
      const yaw = (+a[2] || 0) / 1000, pitch = clamp((+a[3] || 0) / 1000, -1.4, 1.4), sp = 11;
      const eye = p.crouch ? CFG.player.eyeCrouch : CFG.player.eye;
      this.decoys.push({ id: ++this.decoyId, x: p.x, y: eye - 0.15, z: p.z, vx: -Math.sin(yaw) * Math.cos(pitch) * sp, vy: Math.sin(pitch) * sp + 2.2, vz: -Math.cos(yaw) * Math.cos(pitch) * sp, state: 0, t: 0, beep: 0, ox: p.x, oz: p.z, owner: p.id });
      this.event('throw', p.slot);
    } else if (type === 'L') {                            // call the lift
      if (this.lift.state !== LIFT.READY || !near(L.lift.console.x, L.lift.console.z, CFG.reach + 1.6)) return;
      this.lift.state = LIFT.CALLED; this.lift.timer = CFG.lift.call; this.lift.klax = 0; this.event('liftcall', p.slot);
    }
  }

  // ---------------------------------------------------------------------------------------------- the match
  startMatch(seed) {
    const L = this.L, lay = layoutMatch(L, seed);
    this.mid++; this.seed = seed; this.phase = PH.PLAY; this.time = 0; this.result = null; this.endT = 0; this.wipeT = 0;
    this.tags = lay.tags.map(t => Object.assign({ taken: false }, t)); this.items = lay.items.map(t => Object.assign({ taken: false }, t));
    this.tagBits = 0; this.itemBits = 0; this.tagsTaken = 0; this.decoys = []; this.noises.length = 0;
    this.lift = { state: LIFT.LOCKED, timer: 0, board: 0, klax: 0 };
    for (let d = 0; d < L.doors.length; d++) { this.doorWant[d] = lay.doorsOpen[d]; this.doorOpen[d] = lay.doorsOpen[d]; this.doorJam[d] = 0; }
    this.solo = this.players.size === 1;
    for (const p of this.players.values()) { this.respawn(p); p.wind = this.solo ? 1 : 0; }
    this.creature.reset(lay.creatureCell);
    this.event('start');
  }
  respawn(p) {
    const sp = this.L.spawns[p.slot % this.L.spawns.length];
    Object.assign(p, { x: (sp.cx + 0.5) * T, z: (sp.cz + 0.5) * T, vx: 0, vz: 0, speed: 0, status: ST.ALIVE, timer: 0, revProg: 0, invuln: 0, hidden: -1, hidFor: 0, decoys: CFG.START_SOUNDERS, tags: 0, stepAcc: 0, aware: 0, visible: false, rv: -1 });
  }
  toLobby() { this.phase = PH.LOBBY; this.decoys = []; this.noises.length = 0; this.creature.state = CS.IDLE; for (const p of this.players.values()) { p.status = ST.ALIVE; p.hidden = -1; } }
  finish(win) {
    if (this.phase !== PH.PLAY) return;
    this.phase = PH.END; this.endT = 0;
    const out = []; for (const p of this.players.values()) if (p.status === ST.OUT) out.push(p.slot);
    this.result = { win: win ? 1 : 0, t: Math.round(this.time), out, tags: this.tagsTaken };
    this.event('end', win ? 1 : 0);
  }

  event(type, a = 0, b = 0, c = 0) { this.events.push([++this.evId, type, a, b, c]); if (this.events.length > 10) this.events.shift(); }
  noise(x, z, kind, src, extra) { if (this.phase !== PH.PLAY) return; const n = { x, z, r: CFG.noise[kind] || 6, kind, src: src || null, id: 0, ox: x, oz: z }; if (extra) Object.assign(n, extra); this.noises.push(n); }
  doorBusy(d) {
    const L = this.L, cells = L.doors[d].cells, c = this.creature;
    if (cells.includes(L.cellOf(c.x, c.z))) return true;
    for (const p of this.players.values()) if (p.status !== ST.DEAD && p.status !== ST.OUT && cells.includes(L.cellOf(p.x, p.z))) return true;
    return false;
  }
  forceDoor(d) { this.doorWant[d] = 1; this.doorJam[d] = 20; this.event('door', d, 1, 1); }
  downPlayer(p) {
    if (p.status !== ST.ALIVE) return;
    p.status = ST.DOWN; p.timer = CFG.down.bleed; p.revProg = 0; p.hidden = -1; p.vx = p.vz = 0; p.speed = 0;
    this.event('down', p.slot);
  }

  step(dt) {
    const L = this.L; this.clock += dt;
    for (let d = 0; d < L.doors.length; d++) {
      if (this.doorJam[d] > 0) this.doorJam[d] -= dt;
      if (!this.doorWant[d] && this.doorOpen[d] > 0.05 && this.doorBusy(d)) this.doorWant[d] = 1;      // a door never shuts on anyone
      this.doorOpen[d] = approach(this.doorOpen[d], this.doorWant[d], dt * 2.4);
    }
    // anyone who has stopped reporting has left
    for (const p of [...this.players.values()]) if (!p.local && this.clock - p.inT > CFG.net.stale / 1000) this.removePlayer(p.id);
    if (this.phase === PH.LOBBY) { this.noises.length = 0; return; }
    if (this.phase === PH.END) { this.noises.length = 0; this.endT += dt; if (this.endT > 16) this.toLobby(); return; }
    this.time += dt;

    let alive = 0;
    for (const p of this.players.values()) {
      if (p.status !== ST.ALIVE) continue;
      alive++; if (p.invuln > 0) p.invuln -= dt;
      if (p.hidden >= 0) p.hidFor += dt;
      if (p.scan && p.hidden < 0) { p.scanT -= dt; if (p.scanT <= 0) { p.scanT = 1.3; this.noise(p.x, p.z, 'scan', p.id); } } else p.scanT = 0.3;
      if (p.rv >= 0 && p.hidden < 0) { const t = this.bySlot(p.rv); if (t && t.status === ST.DOWN && Math.hypot(t.x - p.x, t.z - p.z) < CFG.down.reach) { t.revTick = true; t.revBy = p.slot; t.revById = p.id; } }
    }
    for (const p of this.players.values()) {
      if (p.status !== ST.DOWN) continue;
      if (p.revTick) {
        p.revProg += dt / CFG.down.revive; p.revNoise -= dt;
        if (p.revNoise <= 0) { p.revNoise = 1; this.noise(p.x, p.z, 'revive', p.revById); }
        if (p.revProg >= 1) { p.status = ST.ALIVE; p.invuln = CFG.down.invuln; p.revProg = 0; alive++; this.event('rev', p.slot, p.revBy); }
      } else { p.revProg = Math.max(0, p.revProg - dt * 0.5); p.timer -= dt; if (p.timer <= 0) { p.status = ST.DEAD; this.event('dead', p.slot); } }
      p.revTick = false;
    }
    if (this.players.size && alive === 0) {
      this.wipeT += dt;
      // someone playing alone gets one second wind: the first time they go down, they get back up
      const lone = this.solo && this.players.size === 1 ? this.players.values().next().value : null;
      if (lone && lone.status === ST.DOWN && lone.wind > 0) {
        if (this.wipeT > 5) { lone.wind = 0; lone.status = ST.ALIVE; lone.invuln = 7; lone.revProg = 0; this.wipeT = 0; this.creature.backoff = 35; this.event('wind', lone.slot); }
      } else if (this.wipeT > 2.5) { for (const p of this.players.values()) if (p.status === ST.DOWN) p.status = ST.DEAD; return this.finish(false); }
    } else this.wipeT = 0;

    this.stepDecoys(dt);
    this.stepLift(dt);
    this.creature.update(dt);
  }

  stepDecoys(dt) {
    const L = this.L, blocked = (x, y, z) => {
      const i = L.cellOf(x, z), c = L.cells[i];
      if (c === C.SOLID || c === C.TALL || c === C.LOCKER) return true;
      if (c === C.DUCT && y > 1.1) return true;
      if (c === C.LOW && y < LOW_H) return true;
      const d = L.doorAt[i]; return d >= 0 && this.doorOpen[d] < 0.5;
    };
    for (const d of this.decoys) {
      if (d.state === 0) {
        d.vy -= 9.8 * dt;
        const nx = d.x + d.vx * dt, nz = d.z + d.vz * dt;
        if (blocked(nx, d.y, d.z)) d.vx = -d.vx * 0.4; else d.x = nx;
        if (blocked(d.x, d.y, nz)) d.vz = -d.vz * 0.4; else d.z = nz;
        d.y += d.vy * dt;
        const pit = L.cells[L.cellOf(d.x, d.z)] === C.PIT;
        if (pit) { if (d.y < -30) d.state = 2; }
        else if (d.y < 0.08) { d.y = 0.08; if (Math.abs(d.vy) < 2) { d.state = 1; d.t = 10; d.beep = 0; d.vx = d.vz = d.vy = 0; } else { d.vy = -d.vy * 0.35; d.vx *= 0.55; d.vz *= 0.55; } }
      } else if (d.state === 1) {
        d.t -= dt; d.beep -= dt;
        if (d.beep <= 0) { d.beep = 0.55; this.noise(d.x, d.z, 'decoy', null, { id: d.id, ox: d.ox, oz: d.oz }); }
        if (d.t <= 0) { d.state = 2; d.t = 2; }
      } else d.t -= dt;
    }
    if (this.decoys.length) this.decoys = this.decoys.filter(d => !(d.state === 2 && d.t <= 0));
  }

  stepLift(dt) {
    const L = this.L, lf = this.lift;
    if (lf.state === LIFT.CALLED) {
      lf.timer -= dt; lf.klax -= dt;
      if (lf.klax <= 0) { lf.klax = 2.5; this.noise(L.lift.x + 6, L.lift.z, 'klaxon', null); }
      if (lf.timer <= 0) { lf.state = LIFT.ARRIVED; lf.board = CFG.lift.board; this.doorWant[L.lift.gateId] = 1; this.event('liftarr'); }
    } else if (lf.state === LIFT.ARRIVED) {
      let aboard = 0, alive = 0;
      for (const p of this.players.values()) if (p.status === ST.ALIVE) { alive++; if (L.cells[L.cellOf(p.x, p.z)] === C.LIFT) aboard++; }
      if (aboard > 0) { lf.board -= dt; if (aboard === alive) lf.board = Math.min(lf.board, 3); } else lf.board = Math.min(CFG.lift.board, lf.board + dt * 0.5);
      if (aboard > 0 && lf.board <= 0) {
        lf.state = LIFT.LEFT;
        for (const p of this.players.values()) if (p.status === ST.ALIVE && L.cells[L.cellOf(p.x, p.z)] === C.LIFT) p.status = ST.OUT;
        this.doorWant[L.lift.gateId] = 0; this.event('liftgo'); this.finish(true);
      }
    }
  }

  // ---------------------------------------------------------------------------------------------- what everyone is told
  snapshot() {
    const c = this.creature, r = Math.round, pl = {};
    for (const p of this.players.values()) pl[p.id] = [p.slot, p.status, r(p.timer * 10), p.ack, p.decoys, r(clamp(p.aware, 0, 1.5) * 100), p.tags, r(p.revProg * 100), p.hidden, p.name, p.ready ? 1 : 0, p.wind | 0];
    let dr = ''; for (let d = 0; d < this.doorWant.length; d++) dr += this.doorJam[d] > 0 ? '2' : this.doorWant[d] ? '1' : '0';
    return {
      ph: this.phase, mid: this.mid, sd: this.seed, t: r(this.time * 10),
      c: [r(c.x * 100), r(c.z * 100), r(c.yaw * 1000), c.state, c.targetSlot(), (c.lampsOut ? 1 : 0) | (c.forcing ? 2 : 0), r(c.speed * 100), c.state === CS.LOCKER ? c.lockerId : -1],
      tg: this.tagBits, it: this.itemBits, dr,
      lf: [this.lift.state, r(this.lift.timer * 10), r(this.lift.board * 10)],
      dc: this.decoys.map(d => [d.id, r(d.x * 100), r(d.y * 100), r(d.z * 100), d.state]),
      pl, ev: this.events.slice(),
      ai: [r(c.learn.hide * 100), r(c.learn.decoy * 100), r(c.learn.duct * 100)],
      rs: this.result,
    };
  }

  // Rebuild a world from the last snapshot seen, so another player can take over as host if the first one leaves.
  static restore(L, s, salt = 1) {
    const w = new World(L, (s.sd ^ salt) >>> 0);
    w.phase = s.ph; w.mid = s.mid; w.seed = s.sd; w.time = s.t / 10; w.result = s.rs || null;
    if (s.ph !== PH.LOBBY) {
      const lay = layoutMatch(L, s.sd);
      w.tags = lay.tags.map((t, i) => Object.assign({ taken: !!(s.tg & (1 << i)) }, t)); w.items = lay.items.map((t, i) => Object.assign({ taken: !!(s.it & (1 << i)) }, t));
      w.tagBits = s.tg; w.itemBits = s.it; w.tagsTaken = w.tags.filter(t => t.taken).length;
      w.creature.reset(lay.creatureCell);
    }
    for (let d = 0; d < w.doorWant.length; d++) { const ch = s.dr.charCodeAt(d) - 48; w.doorWant[d] = ch ? 1 : 0; w.doorOpen[d] = ch ? 1 : 0; w.doorJam[d] = ch === 2 ? 10 : 0; }
    w.lift = { state: s.lf[0], timer: s.lf[1] / 10, board: s.lf[2] / 10, klax: 0 }; w.solo = false;
    for (const id in s.pl) {
      const a = s.pl[id], p = w.addPlayer(id, a[9]); if (!p) continue;
      p.slot = a[0]; p.status = a[1]; p.timer = a[2] / 10; p.ack = a[3]; p.decoys = a[4]; p.tags = a[6]; p.hidden = a[8]; p.wind = a[11] | 0; p.invuln = 2;   // nobody is fair game until they have reported in
    }
    const c = w.creature;
    c.x = s.c[0] / 100; c.z = s.c[1] / 100; c.yaw = s.c[2] / 1000;
    if (!L.walkC[L.cellOf(c.x, c.z)]) { const n = L.creatureSpawns[0]; c.x = (n.cx + 0.5) * T; c.z = (n.cz + 0.5) * T; }
    c.state = s.ph === PH.PLAY && s.c[3] !== CS.IDLE ? CS.ROAM : CS.IDLE;
    c.learn.hide = s.ai[0] / 100; c.learn.decoy = s.ai[1] / 100; c.learn.duct = s.ai[2] / 100;
    w.evId = s.ev.length ? s.ev[s.ev.length - 1][0] : 0; w.events = s.ev.slice();
    return w;
  }
}
