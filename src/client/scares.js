// Things that are only there to unsettle. Nothing in this file changes the match: it all happens on one player's screen
// and in one player's ears. None of it looks or sounds like the creature, so what your senses tell you about the creature
// stays true: the tapping is always its feet, and the static is always how close it is.
import * as THREE from 'three';
import { T, C, ZONES } from '../level.js';
import { sight } from '../nav.js';
import { PWR } from '../sim/defs.js';
import { clamp01, yawOf, rng32 } from '../util.js';

// What the suit radio picks up. Whoever is still transmitting has been at it for nineteen days.
export const RADIO = [
  'is anyone still on this channel',
  'it stopped tapping. That is worse',
  'do not run. Do not run',
  'watch its lights. Watch the colour',
  'nineteen days',
  'I can hear you walking',
  'stay out of the lockers. It knows',
  'the pod only holds six',
  'it is standing right there with its lights out',
  'it is in the ceiling',
  'behind you',
  'we should never have brought that ore aboard',
  'turn your lamp off',
  'it only looks like it has gone',
];

// How bright each power circuit is from moment to moment, and the flicker that runs through all of them when the
// creature is close. Changes are kept to a few a second: stutter, not strobe. soft (the "Sudden scares" setting switched
// off) takes the stutter out altogether: lights then go down and come up smoothly, and the flicker is shallow.
export class Lights {
  constructor() {
    const n = ZONES.length;
    this.lv = new Float32Array(n).fill(1); this.want = new Float32Array(n).fill(1); this.stut = new Float32Array(n);
    this.failT = new Float32Array(n); this.failV = new Float32Array(n).fill(1);
    this.all = 1; this.dipT = 0; this.dipLen = 1; this.nearT = 0; this.nearV = 1; this.lamp = 1; this.lampT = 1; this.lampV = 1;
  }
  // zones: the new match's power per circuit. A wing that is dead from the start is simply dark; it does not go out as you arrive.
  reset(zones) {
    for (let z = 0; z < this.lv.length; z++) this.lv[z] = this.want[z] = zones && zones[z] === PWR.DEAD ? 0.07 : 1;
    this.stut.fill(0); this.failV.fill(1); this.all = 1; this.dipT = 0; this.nearV = 1; this.lamp = this.lampV = 1;
  }
  // a cue: everything dips and comes back
  dip(secs) { this.dipT = Math.max(this.dipT, secs); this.dipLen = this.dipT; }
  // zones: this match's power per circuit, or null on the menu. mask: circuits that have tripped. near: 0..1, how close the creature is.
  update(dt, zones, mask, near, soft) {
    for (let z = 0; z < this.lv.length; z++) {
      const boost = !!(mask & (64 << z));           // a breaker has been thrown: steady power for a while, whatever the wing was like
      const off = !!zones && ((zones[z] === PWR.DEAD && !boost) || !!(mask & (1 << z)) || !!(mask & 32)), want = off ? 0.07 : 1;
      if (want !== this.want[z]) { this.want[z] = want; this.stut[z] = want < 1 ? 0.5 : 0.75; }
      let v = want;
      if (zones && zones[z] === PWR.FAILING && !off && !boost) {          // mostly on, with dips and the odd long outage
        this.failT[z] -= dt;
        if (this.failT[z] <= 0) { if (this.failV[z] > 0.8) { const r = Math.random(); this.failV[z] = r < 0.45 && !soft ? 0.1 : 0.45; this.failT[z] = r < 0.07 ? 1 + Math.random() * 1.6 : 0.07 + Math.random() * 0.25; } else { this.failV[z] = 0.88 + Math.random() * 0.12; this.failT[z] = 0.4 + Math.random() * 2.6; } }
        v = this.failV[z];
      }
      if (soft) this.stut[z] = 0;
      if (this.stut[z] > 0) {                                   // going out, or coming back: it catches once or twice first
        const s = this.stut[z]; this.stut[z] -= dt;
        v = want < 1 ? (s > 0.42 ? 0.07 : s > 0.28 ? 0.8 : 0.07) : (s > 0.62 ? 0.9 : s > 0.42 ? 0.07 : s > 0.3 ? 0.9 : s > 0.14 ? 0.3 : 1);
      }
      this.lv[z] += (v - this.lv[z]) * Math.min(1, dt * (soft ? 3 : 30));
    }
    let all = 1;
    if (near > 0.02) {
      this.nearT -= dt;
      if (this.nearT <= 0) { if (this.nearV >= 1 && Math.random() < 0.3 + 0.6 * near) { this.nearV = 1 - near * (soft ? 0.3 : 0.4 + Math.random() * 0.45); this.nearT = 0.06 + Math.random() * 0.12; } else { this.nearV = 1; this.nearT = 0.42 + Math.random() * (1.6 - near); } }
      all *= this.nearV;
    } else this.nearV = 1;
    if (this.dipT > 0) { const f = 1 - this.dipT / this.dipLen; this.dipT -= dt; all *= soft ? 0.55 + 0.45 * f : f < 0.12 ? 0.15 : f < 0.3 ? 0.85 : f < 0.55 ? 0.2 : 0.2 + 0.8 * (f - 0.55) / 0.45; }
    this.all += (all - this.all) * Math.min(1, dt * (soft ? 6 : 35));
    // your own lamp catches too when it is very close
    const ln = clamp01((near - 0.55) / 0.45);
    if (ln > 0) { this.lampT -= dt; if (this.lampT <= 0) { if (this.lampV >= 1 && Math.random() < 0.5) { this.lampV = soft ? 0.6 : 0.12; this.lampT = 0.05 + Math.random() * 0.1; } else { this.lampV = 1; this.lampT = 0.4 + Math.random() * (1.5 - ln); } } } else this.lampV = 1;
    this.lamp += (this.lampV - this.lamp) * Math.min(1, dt * 40);
  }
}

export class Scares {
  constructor(s3, sound, L) {
    this.s3 = s3; this.sound = sound; this.L = L;
    this.fx = { static: 0, shake: 0, dip: 0 };       // read by the page each frame: a burst of static, a jolt, a dip in the lights
    this.onRadio = null;
    this.fig = this.makeFigure(); this.ph = null;
    this.ductMouths = []; for (const g of L.ducts) for (const e of g.exits) this.ductMouths.push({ x: L.cx(e), z: L.cz(e) });
    this._c = new THREE.Color();
    this.reset(); this.ambT = 5;
  }
  reset() {
    this.ambT = 9 + Math.random() * 8; this.radioT = 50 + Math.random() * 50; this.startleT = 75 + Math.random() * 70; this.phantomT = 70 + Math.random() * 80;
    this.phantoms = 0; this.lastLine = -1; this.hide();
  }

  // someone in a suit like yours, standing still. No colour band, no name, no lamp.
  makeFigure() {
    const s3 = this.s3, g = new THREE.Group(), suit = s3.ambient({ color: 0x33302b, roughness: 0.9, metalness: 0.0 }), visor = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const box = new THREE.BoxGeometry(1, 1, 1), sph = new THREE.SphereGeometry(1, 12, 9), cyl = new THREE.CylinderGeometry(1, 1, 1, 9);
    const add = (geo, mat, x, y, z, sx, sy, sz, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.rotation.z = rz; g.add(m); return m; };
    add(cyl, suit, 0, 1.08, 0, 0.22, 0.62, 0.17); add(box, suit, 0, 1.12, 0.2, 0.3, 0.46, 0.16);
    add(sph, suit, 0.02, 1.57, -0.03, 0.19, 0.2, 0.2, 0.16); add(sph, visor, 0.02, 1.58, -0.12, 0.15, 0.11, 0.13, 0.16);       // the head hangs a little to one side
    add(box, suit, -0.1, 0.39, 0, 0.13, 0.78, 0.15); add(box, suit, 0.1, 0.39, 0, 0.13, 0.78, 0.15);
    add(box, suit, -0.3, 1.04, 0, 0.09, 0.66, 0.11, 0.05); add(box, suit, 0.3, 1.04, 0, 0.09, 0.66, 0.11, -0.05);
    g.visible = false; s3.scene.add(g);
    return { g, suit };
  }
  hide() { this.ph = null; this.fig.g.visible = false; }

  // v: { dt, playing, alive, hidden, scares (the setting), calm (the creature is nowhere near), cam: {x,y,z}, yaw, fx, fz (which way the
  //      view faces), lampOn, rep, others }
  update(dt, v) {
    const fx = this.fx; fx.static = Math.max(0, fx.static - dt * 3.2); fx.shake = 0; fx.dip = 0;
    if (!this.sound.ctx) return;
    // --- the ship settling: something every ten to thirty seconds, from somewhere out of sight
    this.ambT -= dt;
    if (this.ambT <= 0) { this.ambT = 10 + Math.random() * 20; this.ambient(v); }
    if (!v.playing || !v.alive) { if (this.ph) this.hide(); return; }
    // --- the radio
    this.radioT -= dt;
    if (this.radioT <= 0 && v.calm) {
      this.radioT = 70 + Math.random() * 90;
      let i = Math.floor(Math.random() * RADIO.length); if (i === this.lastLine) i = (i + 1) % RADIO.length; this.lastLine = i;
      this.sound.garble(1.2 + RADIO[i].length * 0.035); if (this.onRadio) this.onRadio(RADIO[i]);
    }
    if (!v.scares) { if (this.ph) this.hide(); return; }
    // --- a start: a locker struck from inside, something in a duct, a breath, a tube going overhead
    this.startleT -= dt;
    if (this.startleT <= 0 && v.calm && v.hidden < 0) this.startleT = this.startle(v) ? 85 + Math.random() * 120 : 3;
    // --- someone standing there who is not
    if (this.ph) this.stepPhantom(dt, v);
    else { this.phantomT -= dt; if (this.phantomT <= 0 && v.calm && v.hidden < 0 && this.phantoms < 5) this.phantomT = this.spawnPhantom(v) ? 100 + Math.random() * 140 : 2.5; }
  }

  ambient(v) {
    const L = this.L, s = this.sound, a = Math.random() * 6.283, r = 14 + Math.random() * 22, x = v.cam.x + Math.cos(a) * r, z = v.cam.z + Math.sin(a) * r;
    const cell = L.cellOf(v.cam.x, v.cam.z), icy = v.playing && L.ice[cell], k = Math.random();
    if (icy) { if (k < 0.45) s.iceCrack(x, z); else if (k < 0.75) s.drip(v.cam.x + Math.cos(a) * 5, v.cam.z + Math.sin(a) * 5); else s.howl(x, z); return; }
    if (k < 0.36) s.creak(x, z); else if (k < 0.54) s.knock(x, z); else if (k < 0.68) s.howl(this.s3.pit.x, this.s3.pit.z); else if (k < 0.8) s.iceCrack(x, z); else if (k < 0.9) s.drip(v.cam.x + Math.cos(a) * 6, v.cam.z + Math.sin(a) * 6); else s.creak(x, z);
  }

  startle(v) {
    const L = this.L, s = this.sound, opts = [], near = (x, z) => Math.hypot(x - v.cam.x, z - v.cam.z);
    for (const k of L.lockers) { if (near(k.x, k.z) < 2.6 && !v.others.some(o => o.hidden === k.id)) { opts.push(() => { s.thump(k.fx, k.fz); this.fx.shake = 0.35; }); break; } }
    for (const m of this.ductMouths) if (near(m.x, m.z) < 4.5) { opts.push(() => s.ductScuttle(m.x, m.z)); break; }
    const cell = L.cellOf(v.cam.x, v.cam.z);
    if (L.lightLevel[cell] * this.s3.pow[L.zoneOf[cell]] > 0.3) opts.push(() => { s.pop(v.cam.x + v.fx * 1.5, v.cam.z + v.fz * 1.5); this.fx.dip = 0.9; });
    if (Math.random() < 0.35) opts.push(() => s.breath(v.cam.x - v.fx * 0.9, v.cam.z - v.fz * 0.9));
    if (!opts.length) return false;
    opts[Math.floor(Math.random() * opts.length)](); return true;
  }

  // Put the figure somewhere ahead that the player can see: lit, or within reach of their lamp.
  spawnPhantom(v) {
    const L = this.L, doors = v.rep.doorOpen;
    for (let tries = 0; tries < 16; tries++) {
      const a = v.yaw + (Math.random() - 0.5) * 1.0, d = 10 + Math.random() * 11, x = v.cam.x - Math.sin(a) * d, z = v.cam.z - Math.cos(a) * d;
      const cell = L.cellOf(x, z); if (!(cell >= 0) || !L.walkC[cell] || L.doorAt[cell] >= 0) continue;
      const px = L.cx(cell), pz = L.cz(cell);
      if (!sight(L, doors, v.cam.x, v.cam.z, 1.6, px, pz, 1.6)) continue;
      if (v.others.some(o => Math.hypot(o.x - px, o.z - pz) < 7)) continue;
      const lit = L.lightLevel[cell] * this.s3.pow[L.zoneOf[cell]];
      if (lit < 0.14 && !(v.lampOn && d < 19)) continue;
      this.ph = { x: px, z: pz, t: 0, life: 3 + Math.random() * 4, stare: 0 }; this.phantoms++;
      const g = this.fig.g; g.position.set(px, 0, pz); g.rotation.y = yawOf(v.cam.x - px, v.cam.z - pz) + (Math.random() < 0.3 ? Math.PI : 0);      // facing you, or with its back turned
      this.s3.ambientAt(px, 1.2, pz, this._c); this.fig.suit.userData.amb.value.copy(this._c); g.visible = true;
      return true;
    }
    return false;
  }
  stepPhantom(dt, v) {
    const p = this.ph, dx = p.x - v.cam.x, dz = p.z - v.cam.z, d = Math.hypot(dx, dz) || 1; p.t += dt;
    const facing = (dx * v.fx + dz * v.fz) / d;
    if (facing > 0.985) p.stare += dt;
    const seen = sight(this.L, v.rep.doorOpen, v.cam.x, v.cam.z, 1.6, p.x, p.z, 1.6);
    if (!v.calm || !seen || v.hidden >= 0) return this.hide();                 // never while the creature is about: what you see then has to be real
    if (p.stare > 0.9 || d < 8.5) { this.hide(); this.fx.static = 0.6; this.sound.vanish(); return; }       // looked straight at for a moment, or walked up to: gone
    if (p.t > p.life && facing < 0.8) this.hide();                               // or it is simply not there the next time you look
    else if (p.t > p.life + 4) { this.hide(); this.fx.static = 0.35; }
  }
}

// Broken conduits that arc now and then: a crackle, a few falling sparks, and for an instant the corridor is lit blue-white.
// Where they are comes from the match's seed, so everyone has them in the same places.
export class Sparks {
  constructor(s3, sound) {
    this.s3 = s3; this.sound = sound; this.spots = []; this.lit = 0;
    this.light = new THREE.PointLight(0xbcd6ff, 0, 15, 1.5); s3.scene.add(this.light);
    this.flash = s3.glowSprite(0xd6e6ff, 0.8); this.flash.visible = false; s3.scene.add(this.flash);
    this.bits = []; for (let i = 0; i < 9; i++) { const sp = s3.glowSprite(0xffd28a, 0.07); sp.visible = false; s3.scene.add(sp); this.bits.push({ sp, vx: 0, vy: 0, vz: 0, t: 0 }); }
  }
  setLayout(layout) {
    const r = rng32(((layout.seed | 0) ^ 0x77a1) >>> 0), faces = this.s3.wallFaces.filter(f => f.hall), T2 = this.s3.L.T; this.spots = [];
    const side = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    for (let n = 0; n < 8 && faces.length; n++) { const f = faces[Math.floor(r() * faces.length)], [dx, dz] = side[f.k]; this.spots.push({ x: (f.cx + 0.5 + dx * 0.44) * T2, y: 2.62, z: (f.cz + 0.5 + dz * 0.44) * T2, nx: -dx, nz: -dz, t: 3 + r() * 14 }); }
  }
  // soft: no flash of light, only the sparks themselves
  update(dt, cam, soft, muffled) {
    if (this.lit > 0) { this.lit -= dt; if (this.lit <= 0) { this.light.intensity = 0; this.flash.visible = false; } }
    for (const b of this.bits) { if (b.t <= 0) continue; b.t -= dt; b.vy -= 9 * dt; b.sp.position.x += b.vx * dt; b.sp.position.y += b.vy * dt; b.sp.position.z += b.vz * dt; b.sp.material.opacity = clamp01(b.t * 2.5); if (b.t <= 0 || b.sp.position.y < 0.03) { b.t = 0; b.sp.visible = false; } }
    for (const s of this.spots) {
      s.t -= dt; if (s.t > 0) continue;
      s.t = 4 + Math.random() * 17;
      if (Math.hypot(s.x - cam.x, s.z - cam.z) > 36) continue;
      this.flash.position.set(s.x, s.y, s.z); this.flash.visible = true; this.light.position.set(s.x + s.nx * 0.3, s.y - 0.2, s.z + s.nz * 0.3); this.light.intensity = soft ? 0 : 30; this.lit = 0.07;
      let n = 4 + Math.floor(Math.random() * 5); for (const b of this.bits) { if (b.t > 0 || n-- <= 0) continue; b.t = 0.5 + Math.random() * 0.5; b.sp.visible = true; b.sp.position.set(s.x, s.y, s.z); b.vx = s.nx * (0.5 + Math.random() * 1.6) + (Math.random() - 0.5); b.vz = s.nz * (0.5 + Math.random() * 1.6) + (Math.random() - 0.5); b.vy = Math.random() * 1.6; }
      this.sound.spark(s.x, s.z, muffled(s.x, s.z));
    }
  }
}
