// One page's part in a match. Three ways to be in one:
//   solo    this page runs the world, nothing goes over the network
//   host    this page runs the world and sends everyone a snapshot ten times a second
//   client  this page reports where its player is and draws what the host's snapshots say
// The host and a lone player push their own snapshots through the same Replica the clients use, so there is one code path
// for "what the match looks like right now". If the host leaves, the lowest-numbered player still present picks the
// world up from the last snapshot and carries on.
import { World, layoutMatch } from '../sim/world.js';
import { PH, ST } from '../sim/defs.js';
import { CFG } from '../config.js';
import { Relay } from './relay.js';
import { approach, lerp, lerpAngle } from '../util.js';

const STEP = 1 / 30;

// What this page currently believes about the match.
export class Replica {
  constructor(L) {
    this.L = L; const nd = L.doors.length;
    this.phase = PH.LOBBY; this.mid = -1; this.seed = -1; this.time = 0; this.layout = null;
    this.tagBits = 0; this.itemBits = 0;
    this.doorWant = new Uint8Array(nd); this.doorJam = new Uint8Array(nd); this.doorOpen = new Float32Array(nd);
    this.lift = { state: 0, timer: 0, board: 0 };
    this.decoys = new Map(); this.players = new Map(); this.me = null;
    this.creature = { has: false, x: 0, z: 0, yaw: 0, state: 0, tgt: -1, lampsOut: false, forcing: false, speed: 0, aux: -1 };
    this.cbuf = []; this.lastEv = 0; this.result = null; this.fresh = true; this.snapT = 0; this.ai = [15, 100, 45];
    this.zoneOff = 0;          // circuits that have tripped, one bit each; bit 5 is a blackout
  }
  tagCount() { let n = 0; for (let i = 0; i < CFG.TAGS; i++) if (this.tagBits & (1 << i)) n++; return n; }
  apply(s, now, myId, hooks) {
    if (s.mid !== this.mid || s.sd !== this.seed) {
      this.mid = s.mid; this.seed = s.sd; this.layout = s.sd ? layoutMatch(this.L, s.sd) : null;
      this.cbuf.length = 0; this.decoys.clear(); this.fresh = true;
      if (hooks.onLayout) hooks.onLayout(this.layout);
    }
    this.time = s.t / 10; this.tagBits = s.tg; this.itemBits = s.it; this.result = s.rs || null; this.ai = s.ai;
    for (let d = 0; d < this.doorWant.length; d++) { const ch = s.dr.charCodeAt(d) - 48; this.doorWant[d] = ch ? 1 : 0; this.doorJam[d] = ch === 2 ? 1 : 0; if (this.fresh) this.doorOpen[d] = this.doorWant[d]; }
    this.lift.state = s.lf[0]; this.lift.timer = s.lf[1] / 10; this.lift.board = s.lf[2] / 10; this.zoneOff = s.zo | 0;
    this.players.clear();
    for (const id in s.pl) { const a = s.pl[id]; this.players.set(id, { id, slot: a[0], status: a[1], timer: a[2] / 10, ack: a[3], decoys: a[4], aware: a[5] / 100, tags: a[6], revProg: a[7] / 100, hidden: a[8], name: String(a[9]), ready: !!a[10], wind: a[11] | 0 }); }
    this.me = this.players.get(myId) || null;
    const c = s.c; this.cbuf.push({ t: now, x: c[0] / 100, z: c[1] / 100, yaw: c[2] / 1000, state: c[3], tgt: c[4], fl: c[5], speed: c[6] / 100, aux: c[7] });
    if (this.cbuf.length > 24) this.cbuf.shift();
    const live = new Set();
    for (const a of s.dc) { live.add(a[0]); let d = this.decoys.get(a[0]); if (!d) { d = { x: a[1] / 100, y: a[2] / 100, z: a[3] / 100 }; this.decoys.set(a[0], d); } d.tx = a[1] / 100; d.ty = a[2] / 100; d.tz = a[3] / 100; d.state = a[4]; }
    for (const id of [...this.decoys.keys()]) if (!live.has(id)) this.decoys.delete(id);
    if (s.ph !== this.phase) { const old = this.phase; this.phase = s.ph; if (hooks.onPhase) hooks.onPhase(old, s.ph); }
    for (const e of s.ev) if (e[0] > this.lastEv) { this.lastEv = e[0]; if (!this.fresh && hooks.onEvent) hooks.onEvent(e); }
    this.fresh = false; this.snapT = now;
  }
  // Doors slide, sounders fly, and the creature is drawn a moment in the past so it moves smoothly between snapshots.
  update(dt, now, delay) {
    for (let d = 0; d < this.doorOpen.length; d++) this.doorOpen[d] = approach(this.doorOpen[d], this.doorWant[d], dt * 2.4);
    const k = Math.min(1, dt * 16); for (const d of this.decoys.values()) { d.x += (d.tx - d.x) * k; d.y += (d.ty - d.y) * k; d.z += (d.tz - d.z) * k; }
    const b = this.cbuf, c = this.creature; c.has = b.length > 0; if (!c.has) return;
    const t = now - delay; let i = b.length - 1; while (i > 0 && b[i - 1].t > t) i--;
    const hi = b[i], lo = b[Math.max(0, i - 1)], f = hi.t > lo.t ? Math.min(1, Math.max(0, (t - lo.t) / (hi.t - lo.t))) : 1;
    c.x = lerp(lo.x, hi.x, f); c.z = lerp(lo.z, hi.z, f); c.yaw = lerpAngle(lo.yaw, hi.yaw, f);
    const s = f > 0.5 ? hi : lo; c.state = s.state; c.tgt = s.tgt; c.lampsOut = !!(s.fl & 1); c.forcing = !!(s.fl & 2); c.speed = s.speed; c.aux = s.aux;
  }
}

const num = v => typeof v === 'number' && Number.isFinite(v);
const okState = d => num(d.x) && num(d.z) && num(d.y) && typeof d.n === 'string' && (d.a === undefined || Array.isArray(d.a));

export class Session {
  constructor(L, hooks) {
    this.L = L; this.hooks = hooks; this.mode = 'menu'; this.name = 'Crew'; this.id = 'local';
    this.world = null; this.rep = new Replica(L); this.relay = null;
    this.peers = new Map();        // everyone else in this room: id -> { d: their last report, t: when, buf: recent positions }
    this.games = new Map();        // crews seen in this room: gid -> { h, e, ph, n, t, host }
    this.gid = null; this.epoch = 0; this.hostId = null; this.joinedAt = 0; this.lastSnap = null; this.lastSnapT = 0;
    this.acts = []; this.actSeq = 0; this.ready = false; this.paused = false;
    this.plain = false;            // set for the headless checks: matches with nothing sealed, all power on and no incidents
    this.local = { x: 0, z: 0, yaw: 0, pitch: 0, f: 0, lk: -1, rv: -1 };
    this.acc = 0; this.lastT = performance.now(); this.sendT = 0;
    const hash = (location.hash || '').replace(/^#/, '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 12);
    this.private = !!hash; this.code = hash || 'public';
    this.base = 'los/' + CFG.PROTO + '/' + this.code + '/';
  }
  get hosting() { return this.mode === 'solo' || this.mode === 'host'; }
  get online() { return !!(this.relay && this.relay.online); }
  connect() {
    if (this.relay) return;
    this.relay = new Relay(this.base, (s, d, f) => this.onMsg(s, d, f), () => { if (this.hooks.onNet) this.hooks.onNet(); });
    this.id = this.relay.id; this.relay.start();
  }

  // ------------------------------------------------------------------------------------------ joining and leaving
  solo() {
    this.quit(); this.mode = 'solo'; this.world = new World(this.L, (Math.random() * 2 ** 31) | 0); this.rep = new Replica(this.L);
    this.world.addPlayer(this.id, this.name, true); this.acts = []; this.acc = 0; this.paused = false;
    this.world.startMatch(this.newSeed());
  }
  newSeed() { const s = ((Math.random() * 2 ** 31) | 0) + 1; return this.plain ? -s : s; }
  host() {
    this.quit(); this.mode = 'host'; this.gid = Math.random().toString(36).slice(2, 8); this.epoch = 1; this.hostId = this.id;
    this.world = new World(this.L, (Math.random() * 2 ** 31) | 0); this.rep = new Replica(this.L); this.world.addPlayer(this.id, this.name, true); this.acts = []; this.acc = 0; this.paused = false;
  }
  join(gid) {
    const g = this.games.get(gid); if (!g) return false;
    this.quit(); this.mode = 'client'; this.gid = gid; this.hostId = g.h; this.epoch = g.e; this.rep = new Replica(this.L);
    this.joinedAt = performance.now(); this.lastSnap = null; this.lastSnapT = this.joinedAt; this.acts = []; this.ready = false; this.sendT = 0;
    return true;
  }
  start() { if (this.hosting && this.world.phase !== PH.PLAY) this.world.startMatch(this.newSeed()); }
  quit() { this.world = null; this.gid = null; this.hostId = null; this.lastSnap = null; this.paused = false; }
  leave() { const was = this.mode; this.quit(); this.mode = 'menu'; this.rep = new Replica(this.L); if (was !== 'solo' && this.relay) { this.sendT = 0; this.publish(); } }
  // Ask the host for something: 'T' take tag, 'I' take sounder, 'D' door, 'G' throw, 'L' call the lift. It is repeated until answered.
  act(type, ...args) { this.acts.push([++this.actSeq, type, ...args]); if (this.acts.length > 12) this.acts.shift(); if (this.mode === 'client') this.sendT = 0; }     // ask now, not at the next report
  // The crew in this room that someone could join right now.
  joinable() { let best = null; for (const [gid, g] of this.games) if (g.n < CFG.MAX_PLAYERS && (!best || g.t > best.t)) best = Object.assign({ gid }, g); return best; }

  // ------------------------------------------------------------------------------------------ every tick
  tick(now) {
    const dt = Math.min(0.25, Math.max(0, (now - this.lastT) / 1000)); this.lastT = now;
    if (this.hosting && this.world) {
      if (!this.paused) {
        this.acc += dt; let n = 0;
        while (this.acc >= STEP && n < 6) {
          this.world.input(this.id, { x: this.local.x, z: this.local.z, yaw: this.local.yaw, pitch: this.local.pitch, f: this.local.f, lk: this.local.lk, rv: this.local.rv, acts: this.acts, name: this.name, rd: true });
          this.world.step(STEP); this.acc -= STEP; n++;
        }
        if (n === 6) this.acc = 0;
        const me = this.world.players.get(this.id); if (me && this.acts.length) this.acts = this.acts.filter(a => a[0] > me.ack);
        if (n) this.rep.apply(this.world.snapshot(), now, this.id, this.hooks);
      }
    } else if (this.mode === 'client' && this.rep.me && this.acts.length) this.acts = this.acts.filter(a => a[0] > this.rep.me.ack);
    if (this.relay) {
      this.sendT -= dt;
      if (this.sendT <= 0) { this.sendT = this.mode === 'menu' || this.mode === 'solo' ? 1 : 1 / CFG.net.hz; this.publish(); }
      for (const [id, p] of this.peers) if (now - p.t > CFG.net.stale) this.dropPeer(id);
      for (const [gid, g] of this.games) if (now - g.t > 4000) { this.games.delete(gid); if (this.hooks.onNet) this.hooks.onNet(); }
      if (this.mode === 'client') this.watchHost(now);
    }
    this.rep.update(dt, now, this.hosting ? 45 : CFG.net.interp);
  }
  publish() {
    if (!this.relay || !this.relay.online) return;
    const l = this.local, inGame = this.mode === 'host' || this.mode === 'client';
    this.relay.pub('p/' + this.id, { n: this.name, g: inGame ? this.gid : null, x: Math.round(l.x * 100), z: Math.round(l.z * 100), y: Math.round(l.yaw * 1000), p: Math.round(l.pitch * 1000), f: l.f, lk: l.lk, rv: l.rv, rd: this.ready ? 1 : 0, a: this.mode === 'client' ? this.acts.slice(0, 8) : [] });
    if (this.mode === 'host' && this.world) { const s = this.world.snapshot(); s.g = this.gid; s.h = this.id; s.e = this.epoch; this.relay.pub('g/' + this.gid, s); }
  }

  // ------------------------------------------------------------------------------------------ what arrives
  onMsg(suffix, d, from) {
    const now = performance.now();
    if (suffix.startsWith('p/')) {
      const id = suffix.slice(2);
      if (d === null) return this.dropPeer(id);
      if (id !== from || id === this.id || !okState(d)) return;
      let p = this.peers.get(id); const isNew = !p;
      if (!p) { p = { buf: [] }; this.peers.set(id, p); }
      p.d = d; p.t = now; p.buf.push({ t: now, x: d.x / 100, z: d.z / 100, yaw: d.y / 1000, pitch: (d.p || 0) / 1000 }); if (p.buf.length > 14) p.buf.shift();
      if (isNew && this.hooks.onNet) this.hooks.onNet();
      if (this.mode === 'host' && this.world) {
        if (d.g === this.gid) {
          if (!this.world.players.has(id) && !this.world.addPlayer(id, d.n)) return;        // full
          const wp = this.world.players.get(id), ack0 = wp.ack;
          this.world.input(id, { x: d.x / 100, z: d.z / 100, yaw: d.y / 1000, pitch: (d.p || 0) / 1000, f: d.f | 0, lk: d.lk, rv: d.rv, acts: d.a, name: d.n, rd: !!d.rd });
          if (wp.ack !== ack0) this.sendT = Math.min(this.sendT, 0.02);          // they asked for something: answer straight away
        } else if (this.world.players.has(id)) this.world.removePlayer(id);                  // they went back to the menu
      }
      return;
    }
    if (suffix.startsWith('g/')) {
      const gid = suffix.slice(2);
      if (!d || d.g !== gid || d.h !== from || !this.okSnap(d)) return;
      const had = this.games.has(gid);
      this.games.set(gid, { h: d.h, e: d.e, ph: d.ph, n: Object.keys(d.pl).length, t: now, host: d.pl[d.h] ? String(d.pl[d.h][9]) : 'someone' });
      if (!had && this.hooks.onNet) this.hooks.onNet();
      if (gid !== this.gid) return;
      if (this.mode === 'host') {       // two pages both think they are hosting: the higher claim wins, and on a tie the lower id
        if (d.e > this.epoch || (d.e === this.epoch && d.h < this.id)) { this.mode = 'client'; this.world = null; this.joinedAt = now; } else return;
      }
      if (this.mode !== 'client') return;
      if (d.e < this.epoch || (d.e === this.epoch && this.lastSnap && d.h !== this.hostId && d.h > this.hostId)) return;
      this.epoch = d.e; this.hostId = d.h; this.lastSnap = d; this.lastSnapT = now;
      this.rep.apply(d, now, this.id, this.hooks);
    }
  }
  okSnap(d) {
    return num(d.e) && num(d.ph) && num(d.mid) && num(d.sd) && num(d.t) && Array.isArray(d.c) && d.c.length >= 8 && d.c.every(num) && typeof d.dr === 'string' && d.dr.length === this.L.doors.length
      && num(d.tg) && num(d.it) && (d.zo === undefined || num(d.zo)) && Array.isArray(d.lf) && d.lf.length >= 3 && Array.isArray(d.dc) && Array.isArray(d.ev) && Array.isArray(d.ai) && d.pl && typeof d.pl === 'object' && Object.keys(d.pl).length <= CFG.MAX_PLAYERS && Object.values(d.pl).every(a => Array.isArray(a) && a.length >= 10);
  }
  dropPeer(id) { if (!this.peers.delete(id)) return; if (this.mode === 'host' && this.world && this.world.players.has(id)) this.world.removePlayer(id); if (this.hooks.onNet) this.hooks.onNet(); }

  // A client keeps an eye on the host. If the host goes quiet, someone has to take over.
  watchHost(now) {
    const note = t => { if (this.hooks.onNotice) this.hooks.onNotice(t); };
    if (!this.lastSnap) { if (now - this.joinedAt > 7000) { note('That crew did not answer.'); this.leave(); if (this.hooks.onKicked) this.hooks.onKicked(); } return; }
    if (!this.rep.me) { if (now - this.joinedAt > 6000) { note('That crew is full.'); this.leave(); if (this.hooks.onKicked) this.hooks.onKicked(); } return; }
    const silent = now - this.lastSnapT, hp = this.peers.get(this.hostId), hostGone = !hp || hp.d.g !== this.gid;
    if (silent < 1500 || (silent < 4000 && !hostGone)) return;
    const crew = [...this.rep.players.keys()].filter(id => id !== this.hostId && (id === this.id || (this.peers.has(id) && this.peers.get(id).d.g === this.gid))).sort();
    if (crew[0] === this.id) {
      const s = this.lastSnap, w = World.restore(this.L, s, (now | 0) + 7);
      w.players.delete(this.hostId);
      const me = w.players.get(this.id); if (!me) { this.leave(); return; }
      me.local = true; this.world = w; this.mode = 'host'; this.epoch = s.e + 1; this.hostId = this.id; this.acc = 0;
      if (w.phase === PH.PLAY) w.event('leave', s.pl[s.h] ? s.pl[s.h][0] : 0);
      note('The crew leader dropped out. You are running the match now.');
    } else if (silent > 15000) { note('Lost contact with the crew.'); this.leave(); if (this.hooks.onKicked) this.hooks.onKicked(); }
  }

  // ------------------------------------------------------------------------------------------ for drawing
  // The rest of the crew, placed a moment in the past so they move smoothly between their reports.
  others(now, out) {
    out.length = 0; const t = now - CFG.net.interp;
    for (const [id, pl] of this.rep.players) {
      if (id === this.id) continue;
      const p = this.peers.get(id); if (!p || !p.buf.length) continue;
      const b = p.buf; let i = b.length - 1; while (i > 0 && b[i - 1].t > t) i--;
      const hi = b[i], lo = b[Math.max(0, i - 1)], f = hi.t > lo.t ? Math.min(1, Math.max(0, (t - lo.t) / (hi.t - lo.t))) : 1;
      out.push({ id, slot: pl.slot, name: pl.name, status: pl.status, hidden: pl.hidden, f: p.d.f | 0, x: lerp(lo.x, hi.x, f), z: lerp(lo.z, hi.z, f), yaw: lerpAngle(lo.yaw, hi.yaw, f), pitch: lerp(lo.pitch, hi.pitch, f) });
    }
    return out;
  }
  hereCount() { return this.peers.size + 1; }
}
