// What the creature looks like, and how it moves. The simulation only says where it is and what it is doing;
// everything here is made up on the spot from that: six stilt legs that plant and step on their own, a pale husk slung
// between them, and a cluster of lanterns underneath that shows its mood.
import * as THREE from 'three';
import { T, CEIL_H } from '../level.js';
import { CS } from '../sim/defs.js';
import { clamp, clamp01, lerp, lerpAngle } from '../util.js';

const UP = new THREE.Vector3(0, 1, 0);
const MOOD = {          // lantern colour and strength by what it is doing
  calm: [0.16, 0.95, 0.8, 1.0], wary: [1.0, 0.62, 0.12, 1.5], hunt: [1.0, 0.03, 0.05, 2.6], search: [1.0, 0.3, 0.05, 1.8], out: [0.02, 0.05, 0.05, 0.0],
};

export class CreatureModel {
  constructor(s3) {
    this.s3 = s3; const scene = s3.scene;
    this.shell = s3.ambient({ color: 0xd8d0c0, roughness: 0.42, metalness: 0.05 });
    this.dark = s3.ambient({ color: 0x1b1714, roughness: 0.32, metalness: 0.3 });
    this.root = new THREE.Group(); scene.add(this.root);
    this.body = new THREE.Group(); this.body.scale.setScalar(1.22); this.root.add(this.body);
    const add = (geo, mat, x, y, z, sx = 1, sy = 1, sz = 1, parent = this.body) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; parent.add(m); return m; };
    const sph = new THREE.SphereGeometry(1, 16, 12);
    // the husk: front lobe, long back lobe, both pale; dark bands across the back
    add(sph, this.shell, 0, 0, -0.25, 0.34, 0.28, 0.62);
    add(sph, this.shell, 0, 0.08, 0.62, 0.3, 0.26, 0.72);
    add(sph, this.shell, 0, 0.02, 1.32, 0.16, 0.14, 0.34);
    for (let k = 0; k < 6; k++) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.3 - Math.abs(k - 2.2) * 0.022, 0.022, 5, 14, Math.PI), this.dark); t.position.set(0, 0.05, -0.55 + k * 0.33); t.castShadow = true; this.body.add(t); }
    // a flat shield where a head would be
    const shield = add(new THREE.CylinderGeometry(0.34, 0.2, 0.09, 7), this.shell, 0, -0.02, -0.92, 1, 1, 1.25); shield.rotation.x = 0.22;
    add(new THREE.CylinderGeometry(0.22, 0.12, 0.05, 7), this.dark, 0, 0.04, -0.94, 1, 1, 1.2).rotation.x = 0.22;
    // the lanterns, hanging on stalks under the front
    this.lampMat = new THREE.MeshBasicMaterial({ color: 0x29f2cc });
    this.lamps = [];
    const stalk = new THREE.CylinderGeometry(0.012, 0.012, 1, 5), orb = new THREE.SphereGeometry(1, 10, 8);
    const spots = [[0, -0.48, -0.62, 0.085], [-0.15, -0.38, -0.5, 0.06], [0.16, -0.4, -0.55, 0.065], [-0.07, -0.56, -0.4, 0.05], [0.09, -0.52, -0.76, 0.055], [-0.19, -0.3, -0.74, 0.045], [0.2, -0.3, -0.36, 0.045]];
    for (const [x, y, z, r] of spots) {
      const g = new THREE.Group(); g.position.set(x * 0.5, -0.12, z); this.body.add(g);
      const st = new THREE.Mesh(stalk, this.dark); st.scale.y = -y - 0.1; st.position.set(x * 0.5, y / 2 + 0.04, 0); st.rotation.z = -x * 0.6; g.add(st);
      const o = new THREE.Mesh(orb, this.lampMat); o.scale.setScalar(r); o.position.set(x, y, 0); g.add(o);
      const halo = s3.glowSprite(0x29f2cc, r * 5.5); halo.position.copy(o.position); g.add(halo);
      this.lamps.push({ g, halo, ph: Math.random() * 6, r });
    }
    this.light = new THREE.PointLight(0x29f2cc, 0, 12, 1.7); this.light.position.set(0, -0.45, -0.6); this.body.add(this.light);
    // two short feelers that never stop moving
    this.feelers = [];
    for (const s of [-1, 1]) { const f = new THREE.Group(); f.position.set(s * 0.2, -0.05, -1.05); const a = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.02, 0.7, 5), this.dark); a.position.y = -0.3; a.rotation.x = 0.5; f.add(a); this.body.add(f); this.feelers.push({ f, s }); }

    // legs: hip on the husk, a knee up near the ceiling, a long shin down to a point
    this.legs = [];
    const upper = new THREE.CylinderGeometry(0.04, 0.065, 1, 6), lower = new THREE.CylinderGeometry(0.048, 0.01, 1, 6), joint = new THREE.SphereGeometry(0.075, 8, 6);
    const rows = [-0.62, 0.12, 0.86];
    for (let row = 0; row < 3; row++) for (const side of [-1, 1]) {
      const zo = rows[row];
      const leg = {      // two sets of three that take turns: front and back on one side with the middle on the other
        side, hip: new THREE.Vector3(side * 0.24, 0.02, zo), home: [side * 0.76, zo * 1.7 - 0.1], grp: (row + (side > 0 ? 1 : 0)) % 2,
        foot: new THREE.Vector3(), from: new THREE.Vector3(), to: new THREE.Vector3(), t: 1, dur: 0.2, lift: 0,
        up: new THREE.Mesh(upper, this.dark), lo: new THREE.Mesh(lower, this.dark), kn: new THREE.Mesh(joint, this.dark),
      };
      for (const m of [leg.up, leg.lo, leg.kn]) { m.castShadow = true; scene.add(m); }
      this.legs.push(leg);
    }
    this.x = 0; this.z = 0; this.yaw = 0; this.h = 1.95; this.pitch = 0; this.vx = 0; this.vz = 0; this.speed = 0;
    this.mood = MOOD.calm.slice(); this.t = 0; this.placed = false; this.lunge = 0; this.ambT = 0;
    this._a = new THREE.Vector3(); this._b = new THREE.Vector3(); this._k = new THREE.Vector3(); this._q = new THREE.Quaternion(); this._c = new THREE.Color();
    this.setVisible(false);
  }
  setVisible(v) { this.root.visible = v; for (const l of this.legs) { l.up.visible = l.lo.visible = l.kn.visible = v; } if (!v) this.placed = false; }

  // st: { x, z, yaw, state, lampsOut, forcing }. onStep(x, z, hard) is called each time a foot comes down.
  update(dt, st, onStep) {
    this.t += dt;
    if (!this.placed) { this.x = st.x; this.z = st.z; this.yaw = st.yaw; this.vx = this.vz = 0; this.placed = true; for (const l of this.legs) { this.homeOf(l, l.foot, 0); l.t = 1; } }
    const k = Math.min(1, dt * 18), px = this.x, pz = this.z;
    this.x += (st.x - this.x) * k; this.z += (st.z - this.z) * k; this.yaw = lerpAngle(this.yaw, st.yaw, Math.min(1, dt * 12));
    if (dt > 0) { this.vx = lerp(this.vx, (this.x - px) / dt, 0.3); this.vz = lerp(this.vz, (this.z - pz) / dt, 0.3); }
    this.speed = Math.hypot(this.vx, this.vz);
    const s = st.state, hunting = s === CS.HUNT || s === CS.ATTACK;
    // posture
    let wantH = 1.95, wantP = 0;
    if (hunting) { wantH = 1.55; wantP = 0.24; } else if (s === CS.SUSPECT || s === CS.INVEST || s === CS.SEARCH) { wantH = 1.78; wantP = 0.1; }
    else if (s === CS.AMBUSH || s === CS.BAIT) { wantH = 2.05; wantP = -0.05; } else if (s === CS.LOCKER) { wantH = 1.5; wantP = 0.45; } else if (s === CS.IDLE) { wantH = 1.2; wantP = 0.1; }
    this.lunge = s === CS.ATTACK ? Math.min(1, this.lunge + dt * 7) : Math.max(0, this.lunge - dt * 2.5);
    wantH -= this.lunge * 0.55; wantP += this.lunge * 0.5;
    this.h += (wantH - this.h) * Math.min(1, dt * 5); this.pitch += (wantP - this.pitch) * Math.min(1, dt * 6);
    let stepping = 0; for (const l of this.legs) if (l.t < 1) stepping += Math.sin(l.t * Math.PI);
    const breathe = Math.sin(this.t * 1.7) * 0.025, bob = -stepping * 0.02;
    this.root.position.set(this.x, 0, this.z); this.root.rotation.y = this.yaw;
    this.body.position.set(0, this.h + breathe + bob, -this.lunge * 0.5);
    this.body.rotation.set(this.pitch + Math.sin(this.t * 1.1) * 0.02, 0, Math.sin(this.t * 2.3) * 0.02 * (1 + this.speed));
    this.root.updateMatrixWorld(true);

    // mood lights
    const m = st.lampsOut ? MOOD.out : hunting ? MOOD.hunt : s === CS.SEARCH || s === CS.LOCKER ? MOOD.search : s === CS.SUSPECT || s === CS.INVEST ? MOOD.wary : s === CS.IDLE ? MOOD.out : MOOD.calm;
    for (let i = 0; i < 4; i++) this.mood[i] += (m[i] - this.mood[i]) * Math.min(1, dt * (st.lampsOut ? 3 : 6));
    const pulse = 0.82 + 0.18 * Math.sin(this.t * (hunting ? 13 : 2.4));
    this._c.setRGB(this.mood[0], this.mood[1], this.mood[2]);
    this.lampMat.color.copy(this._c).multiplyScalar(0.25 + 2.2 * this.mood[3] * pulse);
    this.light.color.copy(this._c); this.light.intensity = 3.2 * this.mood[3] * pulse;
    for (const l of this.lamps) {
      l.g.rotation.x = Math.sin(this.t * 2.1 + l.ph) * 0.08 + clamp(this.speed * 0.06, 0, 0.35);
      l.g.rotation.z = Math.sin(this.t * 1.6 + l.ph * 2) * 0.1;
      l.halo.material.color.copy(this._c); l.halo.material.opacity = clamp01(0.32 * this.mood[3] * pulse);
    }
    for (const f of this.feelers) { f.f.rotation.x = Math.sin(this.t * (hunting ? 16 : 5) + f.s) * 0.35 - 0.2; f.f.rotation.z = f.s * (0.25 + Math.sin(this.t * 3.3 + f.s * 2) * 0.2); }

    // legs
    const sp = this.speed, stepLen = 0.5 + sp * 0.1, dur = clamp(0.3 - sp * 0.03, 0.11, 0.3);
    let moving = [0, 0]; for (const l of this.legs) if (l.t < 1) moving[l.grp]++;
    for (const l of this.legs) {
      if (l.t < 1) {
        l.t = Math.min(1, l.t + dt / l.dur);
        const e = l.t * l.t * (3 - 2 * l.t);
        l.foot.lerpVectors(l.from, l.to, e); l.foot.y = Math.sin(l.t * Math.PI) * l.lift;
        if (l.t >= 1) { l.foot.y = 0; if (onStep) onStep(l.foot.x, l.foot.z, sp); }
      } else {
        this.homeOf(l, this._a, 0);
        const off = Math.hypot(this._a.x - l.foot.x, this._a.z - l.foot.z);
        if ((off > stepLen && !moving[1 - l.grp]) || off > stepLen * 2.4 || (sp < 0.15 && off > 0.3 && !moving[0] && !moving[1])) {
          l.from.copy(l.foot); this.homeOf(l, l.to, dur + 0.1); l.t = 0; l.dur = dur * (0.9 + Math.random() * 0.2); l.lift = 0.28 + sp * 0.07; moving[l.grp]++;
        }
      }
      // hip in the world; knee high and between hip and foot, so the legs stay inside a narrow corridor
      this._a.copy(l.hip); this.body.localToWorld(this._a);
      const kn = this._k.set(lerp(this._a.x, l.foot.x, 0.42), 0, lerp(this._a.z, l.foot.z, 0.42));
      const top = Math.min(this.s3.L.ceil[this.s3.L.cellOf(clamp(kn.x, T, 1e4), clamp(kn.z, T, 1e4))] || CEIL_H, 4.2) - 0.12;
      kn.y = Math.min(top, this._a.y + 0.95 + l.foot.y * 0.5 + (l.t < 1 ? 0.1 : 0));
      this.seg(l.up, kn, this._a); this.seg(l.lo, kn, l.foot); l.kn.position.copy(kn);
    }
    // take the colour of the room
    this.ambT -= dt; if (this.ambT <= 0) { this.ambT = 0.12; this.s3.ambientAt(this.x, 1.6, this.z, this.shell.userData.amb.value); this.dark.userData.amb.value.copy(this.shell.userData.amb.value); }
  }
  // where a foot would like to be: under its corner of the body, led a little by the way the body is moving
  homeOf(l, out, lead) {
    const c = Math.cos(this.yaw), s = Math.sin(this.yaw), lx = l.home[0], lz = l.home[1], L = this.s3.L;
    let x = this.x + lx * c + lz * s + this.vx * lead, z = this.z - lx * s + lz * c + this.vz * lead;
    // never through a wall: pull it back towards the body until it is over floor
    for (let i = 0; i < 4 && !L.walkC[L.cellOf(x, z)]; i++) { x = lerp(x, this.x, 0.35); z = lerp(z, this.z, 0.35); }
    return out.set(x, 0, z);
  }
  // lay a unit cylinder from a (its thick end) to b
  seg(mesh, a, b) {
    const d = this._b.subVectors(a, b), len = d.length() || 1e-3;
    mesh.position.copy(b).addScaledVector(d, 0.5); mesh.scale.set(1, len, 1);
    mesh.quaternion.copy(this._q.setFromUnitVectors(UP, d.multiplyScalar(1 / len)));
  }
}
