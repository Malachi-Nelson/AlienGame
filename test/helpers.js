// Stand-in players for the tests: they walk the outpost the way a person would, one report per tick.
import { T, W, C } from '../src/level.js';
import { Pather } from '../src/nav.js';
import { F } from '../src/sim/defs.js';

export class Bot {
  constructor(world, id, name) {
    this.w = world; this.L = world.L; this.id = id;
    this.p = world.addPlayer(id, name, true);
    this.x = this.p.x; this.z = this.p.z; this.yaw = 0;
    this.walk = this.L.walkP.slice(); this.mid = -1;          // where it can go this match: it knows which doors are sealed, as a player would from the schematic
    this.pather = new Pather(this.L, this.walk);
    this.path = null; this.pi = 0; this.speed = 2.6; this.crouch = false; this.light = false; this.scan = false; this.lk = -1; this.rv = -1;
    this.acts = []; this.seq = 0;
  }
  act(type, ...args) { this.acts.push([++this.seq, type, ...args]); }
  sync() { const w = this.w, L = this.L; if (this.mid === w.mid) return; this.mid = w.mid; for (let i = 0; i < this.walk.length; i++) { const d = L.doorAt[i]; this.walk[i] = L.walkP[i] && !(d >= 0 && w.doorSeal[d]) ? 1 : 0; } }
  goTo(cell) { this.sync(); this.path = this.pather.find(this.L.cellOf(this.x, this.z), cell, null, 0); this.pi = 0; return !!this.path; }
  goToXZ(cx, cz) { return this.goTo(this.L.idx(cx, cz)); }
  get arrived() { return !this.path; }
  tick(dt) {
    const L = this.L, p = this.p;
    if (p.status === 0 && this.lk < 0 && this.path) {
      let left = this.speed * dt;
      while (left > 0 && this.path) {
        const c = this.path[this.pi], tx = L.cx(c), tz = L.cz(c), dx = tx - this.x, dz = tz - this.z, d = Math.hypot(dx, dz);
        const door = L.doorAt[c]; if (door >= 0 && this.w.doorWant[door] === 0) { if (d < 2.6) { this.act('D', door); } if (this.w.doorOpen[door] < 0.6 && d < 1.6) break; }
        if (d <= left) { this.x = tx; this.z = tz; left -= d; this.pi++; if (this.pi >= this.path.length) this.path = null; }
        else { this.x += dx / d * left; this.z += dz / d * left; this.yaw = Math.atan2(-dx, -dz); left = 0; }
      }
    }
    this.acts = this.acts.filter(a => a[0] > p.ack);
    const inDuct = L.cells[L.cellOf(this.x, this.z)] === C.DUCT;
    this.w.input(this.id, { x: this.x, z: this.z, yaw: this.yaw, pitch: 0, f: ((this.crouch || inDuct) ? F.CROUCH : 0) | (this.light ? F.LIGHT : 0) | (this.scan ? F.SCAN : 0), lk: this.lk, rv: this.rv, acts: this.acts });
  }
}

export function run(world, bots, seconds, each) {
  const dt = 1 / 30;
  for (let t = 0; t < seconds; t += dt) { for (const b of bots) b.tick(dt); world.step(dt); if (each && each(t, dt) === false) return t; }
  return seconds;
}
