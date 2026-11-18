// The person at the keyboard: walking, crouching, running out of breath, and working out what the E key would do right now.
import { T, W, H, C } from '../level.js';
import { slide } from '../nav.js';
import { CFG } from '../config.js';
import { clamp, clamp01, approach, wrapAngle } from '../util.js';
import { ST, F, LIFT, PH } from '../sim/defs.js';

const P = CFG.player;

export class LocalPlayer {
  constructor(L) {
    this.L = L; this.x = 0; this.z = 0; this.yaw = 0; this.pitch = 0; this.vx = 0; this.vz = 0;
    this.crouch = false; this.eye = P.eye; this.stamina = P.stamina; this.spent = false; this.regenWait = 0;
    this.light = false; this.scan = false; this.hidden = -1; this.hideYaw = 0; this.rv = -1;
    this.status = ST.ALIVE; this.mid = -1; this.bob = 0; this.stride = 0; this.moving = false; this.running = false; this.speed = 0;
    this.target = null; this.holdE = 0; this.shake = 0; this.tilt = 0; this.dropT = 0;
    this._o = { x: 0, z: 0 };
  }
  spawn(slot) {
    const sp = this.L.spawns[slot % this.L.spawns.length];
    this.x = (sp.cx + 0.5) * T; this.z = (sp.cz + 0.5) * T; this.yaw = -Math.PI / 2; this.pitch = 0; this.vx = this.vz = 0;       // facing into the dock, away from the lift
    this.crouch = false; this.eye = P.eye; this.stamina = P.stamina; this.spent = false; this.light = false; this.scan = false; this.hidden = -1; this.rv = -1; this.status = ST.ALIVE; this.tilt = 0; this.dropT = 0;
  }
  flags() { return (this.crouch ? F.CROUCH : 0) | (this.light ? F.LIGHT : 0) | (this.running ? F.RUN : 0) | (this.scan ? F.SCAN : 0) | (this.moving ? F.MOVE : 0); }
  inDuct() { return this.L.cells[this.L.cellOf(this.x, this.z)] === C.DUCT; }
  // is there headroom to stand here?
  lowRoof() {
    const L = this.L, r = P.r;
    for (const [ox, oz] of [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r]]) if (L.cells[L.cellOf(this.x + ox, this.z + oz)] === C.DUCT) return true;
    return false;
  }

  // inp: { fwd, right, run, crouchToggle, dx, dy (mouse) }. rep: the page's picture of the match. Returns footstep info for sound.
  update(dt, inp, rep, sens) {
    const L = this.L; let step = null;
    this.shake = Math.max(0, this.shake - dt * 2.5);
    if (this.status === ST.DOWN || this.status === ST.DEAD) { this.dropT = Math.min(1, this.dropT + dt * 2.2); this.light = false; this.scan = false; this.hidden = -1; this.rv = -1; this.moving = this.running = false; this.vx = this.vz = 0; }
    else this.dropT = Math.max(0, this.dropT - dt * 1.6);
    // looking
    this.yaw = wrapAngle(this.yaw - inp.dx * sens);
    this.pitch = clamp(this.pitch - inp.dy * sens, -1.45, 1.45);
    if (this.hidden >= 0) {           // shut in a locker: you can turn your head, not much more
      const off = wrapAngle(this.yaw - this.hideYaw); this.yaw = this.hideYaw + clamp(off, -1.0, 1.0); this.pitch = clamp(this.pitch, -0.5, 0.5);
      this.moving = this.running = false; this.vx = this.vz = 0; this.speed = 0;
      this.stamina = Math.min(P.stamina, this.stamina + P.regen * dt);
      return null;
    }
    if (this.status !== ST.ALIVE) { this.eye = approach(this.eye, 0.35, dt * 3); return null; }

    // stance
    if (inp.crouchToggle) this.crouch = !this.crouch;
    const low = this.lowRoof(); if (low) this.crouch = true;
    this.eye = approach(this.eye, this.crouch ? P.eyeCrouch : P.eye, dt * 3.6);

    // moving
    let mx = inp.right, mz = inp.fwd; const ml = Math.hypot(mx, mz); if (ml > 1) { mx /= ml; mz /= ml; }
    const wantRun = inp.run && !this.crouch && mz > 0.1 && !this.spent && this.stamina > 0;
    const top = this.crouch ? P.crouch : wantRun ? P.run : P.walk;
    const s = Math.sin(this.yaw), c = Math.cos(this.yaw);
    const wx = (-s * mz + c * mx) * top, wz = (-c * mz - s * mx) * top;
    const k = 1 - Math.exp(-(ml > 0 ? 11 : 14) * dt);
    this.vx += (wx - this.vx) * k; this.vz += (wz - this.vz) * k;
    this.speed = Math.hypot(this.vx, this.vz); this.moving = this.speed > 0.3; this.running = wantRun && this.speed > P.walk + 0.4;
    if (this.running) { this.stamina -= P.drain * dt; this.regenWait = P.regenDelay; if (this.stamina <= 0) { this.stamina = 0; this.spent = true; } }
    else { this.regenWait -= dt; if (this.regenWait <= 0) this.stamina = Math.min(P.stamina, this.stamina + P.regen * (this.moving ? 0.7 : 1.25) * dt); if (this.spent && this.stamina > 28) this.spent = false; }

    const crouch = this.crouch, doors = rep ? rep.doorOpen : null;
    const blocked = i => {
      const cell = L.cells[i];
      if (cell === C.FLOOR || cell === C.LIFT) { const d = L.doorAt[i]; return d >= 0 && doors && doors[d] < 0.7; }
      return !(cell === C.DUCT && crouch);
    };
    const steps = Math.max(1, Math.ceil(this.speed * dt / 0.2));
    for (let i = 0; i < steps; i++) { slide(L, this.x + this.vx * dt / steps, this.z + this.vz * dt / steps, P.r, blocked, this._o); this.x = this._o.x; this.z = this._o.z; }
    this.x = clamp(this.x, T, (W - 1) * T); this.z = clamp(this.z, T, (H - 1) * T);

    // footsteps and head bob
    if (this.moving) {
      const len = this.running ? 2.0 : this.crouch ? 1.2 : 1.5;
      this.stride += this.speed * dt; this.bob += this.speed * dt / len * Math.PI;
      if (this.stride >= len) { this.stride = 0; step = { run: this.running, crouch: this.crouch }; }
    } else this.bob *= Math.max(0, 1 - dt * 6);
    return step;
  }

  enterLocker(k) { const lk = this.L.lockers[k]; this.hidden = k; this.hideYaw = Math.atan2(-lk.outX, -lk.outZ); this.yaw = this.hideYaw; this.pitch = 0; this.vx = this.vz = 0; this.light = false; this.scan = false; this.crouch = false; }
  leaveLocker() { const lk = this.L.lockers[this.hidden]; if (lk) { this.x = lk.x; this.z = lk.z; } this.hidden = -1; }

  // Where the eyes are, for the camera.
  eyePos(out, time) {
    if (this.hidden >= 0) { const lk = this.L.lockers[this.hidden]; out.x = lk.fx + lk.outX * 0.2; out.z = lk.fz + lk.outZ * 0.2; out.y = 1.55; return out; }     // eyes at the vents in the door
    const amp = this.crouch ? 0.02 : this.running ? 0.06 : 0.035;
    out.x = this.x; out.z = this.z; out.y = this.eye + Math.sin(this.bob * 2) * amp * clamp01(this.speed / 2) - this.dropT * 0.0;
    if (this.shake > 0) { out.x += (Math.random() - 0.5) * this.shake * 0.12; out.y += (Math.random() - 0.5) * this.shake * 0.12; }
    return out;
  }

  // What would E do? Looks at everything in reach and picks whatever is most nearly straight ahead.
  findTarget(rep, others) {
    this.target = null;
    if (!rep || rep.phase !== PH.PLAY || this.status !== ST.ALIVE) return null;
    const L = this.L;
    if (this.hidden >= 0) return (this.target = { kind: 'unhide', text: 'Step out' });
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw); let best = null, bs = 0.55;
    const tryIt = (x, z, reach, minDot, make) => {
      const dx = x - this.x, dz = z - this.z, d = Math.hypot(dx, dz); if (d > reach) return;
      const dot = d < 0.6 ? 1 : (dx * fx + dz * fz) / d; if (dot < minDot) return;
      const score = dot + (1 - d / reach) * 0.35; if (score > bs) { bs = score; best = make(); }
    };
    if (rep.layout) {
      rep.layout.tags.forEach((t, i) => { if (!(rep.tagBits & (1 << i))) tryIt(t.x, t.z, CFG.reach, 0.5, () => ({ kind: 'tag', i, text: 'Take crew tag' })); });
      rep.layout.items.forEach((t, i) => { if (!(rep.itemBits & (1 << i))) tryIt(t.x, t.z, CFG.reach, 0.5, () => ({ kind: 'item', i, text: rep.me && rep.me.decoys >= CFG.MAX_SOUNDERS ? 'Sounder (you are carrying three)' : 'Take sounder', dead: rep.me && rep.me.decoys >= CFG.MAX_SOUNDERS })); });
    }
    for (const o of others) if (o.status === ST.DOWN) tryIt(o.x, o.z, CFG.down.reach - 0.2, 0.2, () => ({ kind: 'revive', slot: o.slot, text: 'Hold to pick up ' + o.name, hold: true }));
    for (const d of L.doors) {
      if (d.gate) continue;
      tryIt(d.x, d.z, CFG.reach + 0.5 + (d.len > 2 ? 0.9 : 0), 0.6, () => rep.doorJam[d.id] ? { kind: 'none', text: 'Door forced. It will not move', dead: true } : { kind: 'door', i: d.id, text: rep.doorWant[d.id] ? 'Shut door' : 'Open door' });
    }
    for (const k of L.lockers) {
      const occ = others.some(o => o.hidden === k.id);
      tryIt(k.fx, k.fz, 1.9, 0.6, () => occ ? { kind: 'none', text: 'Someone is in there', dead: true } : { kind: 'hide', i: k.id, text: 'Hide in locker' });
    }
    const c = L.lift.console;
    tryIt(c.x, c.z, CFG.reach + 0.6, 0.5, () => {
      const s = rep.lift.state;
      if (s === LIFT.LOCKED) return { kind: 'none', text: `Quarantine lock: ${rep.tagCount()} of ${CFG.TAGS} tags`, dead: true };
      if (s === LIFT.READY) return { kind: 'lift', text: 'Call the lift' };
      return { kind: 'none', text: s === LIFT.CALLED ? 'Lift is on its way' : 'Lift is here', dead: true };
    });
    return (this.target = best);
  }
}
