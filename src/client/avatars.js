// The other players as you see them: a suited figure with a coloured visor band, a name over its head, and its lamp if it is on.
import * as THREE from 'three';
import { ST, F } from '../sim/defs.js';
import { nameTexture } from './textures.js';
import { lerpAngle } from '../util.js';

export const SLOT_COLORS = ['#63e6d0', '#ffb84d', '#ff6fb1', '#a8e05f', '#6fa8ff', '#ff6a55'];

export class Avatars {
  constructor(s3) {
    this.s3 = s3; this.map = new Map(); this.lamps = [];
    for (let i = 0; i < 2; i++) { const l = new THREE.SpotLight(0xdfeaff, 0, 30, 0.5, 0.6, 1.6); s3.scene.add(l); s3.scene.add(l.target); this.lamps.push(l); }
    this.box = new THREE.BoxGeometry(1, 1, 1); this.sph = new THREE.SphereGeometry(1, 14, 10); this.cyl = new THREE.CylinderGeometry(1, 1, 1, 10);
    this._c = new THREE.Color();
  }
  make(slot, name) {
    const s3 = this.s3, g = new THREE.Group(), col = SLOT_COLORS[slot % SLOT_COLORS.length];
    const suit = s3.ambient({ color: 0x7a5a3c, roughness: 0.8, metalness: 0.0 }), dark = s3.ambient({ color: 0x1c1f22, roughness: 0.5, metalness: 0.3 });
    const band = new THREE.MeshBasicMaterial({ color: col });
    const body = new THREE.Group(); g.add(body);
    const add = (geo, mat, x, y, z, sx, sy, sz, parent = body) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; parent.add(m); return m; };
    add(this.cyl, suit, 0, 1.08, 0, 0.22, 0.62, 0.17);
    add(this.box, dark, 0, 1.12, 0.2, 0.3, 0.46, 0.16);                    // pack
    add(this.sph, suit, 0, 1.58, 0, 0.19, 0.2, 0.2);                       // helmet
    add(this.sph, dark, 0, 1.59, -0.09, 0.15, 0.11, 0.13);                 // visor
    add(this.box, band, 0, 1.72, -0.02, 0.2, 0.03, 0.3);                   // the band of colour that tells you who it is
    const legL = add(this.box, suit, -0.1, 0.39, 0, 0.13, 0.78, 0.15), legR = add(this.box, suit, 0.1, 0.39, 0, 0.13, 0.78, 0.15);
    const armL = add(this.box, suit, -0.29, 1.08, 0, 0.09, 0.6, 0.11), armR = add(this.box, suit, 0.29, 1.08, 0, 0.09, 0.6, 0.11);
    const lens = add(this.sph, new THREE.MeshBasicMaterial({ color: 0x111111 }), 0.13, 1.63, -0.16, 0.035, 0.035, 0.035);
    const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: nameTexture(name, col), depthWrite: false, transparent: true })); tag.scale.set(1.5, 0.375, 1); tag.position.y = 2.05; g.add(tag);
    this.s3.scene.add(g);
    return { g, body, legL, legR, armL, armR, lens, tag, suit, dark, name, slot, x: 0, z: 0, yaw: 0, walk: 0, placed: false, ambT: 0, sv: 0 };
  }
  // list: [{ id, slot, name, x, z, yaw, pitch, f, status, hidden }]. cam: THREE.Vector3 of the viewer.
  sync(list, dt, cam) {
    const seen = new Set(); let lampI = 0;
    const lit = [];
    for (const o of list) {
      seen.add(o.id);
      let a = this.map.get(o.id);
      if (!a || a.name !== o.name || a.slot !== o.slot) { if (a) this.s3.scene.remove(a.g); a = this.make(o.slot, o.name); this.map.set(o.id, a); }
      if (!a.placed) { a.x = o.x; a.z = o.z; a.yaw = o.yaw; a.placed = true; }
      const px = a.x, pz = a.z, k = Math.min(1, dt * 14);
      a.x += (o.x - a.x) * k; a.z += (o.z - a.z) * k; a.yaw = lerpAngle(a.yaw, o.yaw, k);
      const sp = dt > 0 ? Math.hypot(a.x - px, a.z - pz) / dt : 0; a.sv += (sp - a.sv) * Math.min(1, dt * 8);
      const gone = o.status === ST.OUT || o.hidden >= 0;
      a.g.visible = !gone; if (gone) continue;
      const down = o.status === ST.DOWN || o.status === ST.DEAD, crouch = !!(o.f & F.CROUCH);
      a.g.position.set(a.x, 0, a.z); a.g.rotation.y = a.yaw;
      a.body.rotation.x += ((down ? -1.45 : 0) - a.body.rotation.x) * Math.min(1, dt * 6);
      a.body.position.y += ((down ? 0.22 : 0) - a.body.position.y) * Math.min(1, dt * 6);
      a.body.scale.y += ((crouch && !down ? 0.62 : 1) - a.body.scale.y) * Math.min(1, dt * 9);
      a.walk += a.sv * dt * 3.2; const sw = Math.sin(a.walk) * Math.min(0.7, a.sv * 0.22);
      a.legL.rotation.x = sw; a.legR.rotation.x = -sw; a.armL.rotation.x = -sw * 0.7; a.armR.rotation.x = sw * 0.7;
      const d = Math.hypot(a.x - cam.x, a.z - cam.z);
      a.tag.visible = d < 26 && !down; a.tag.position.y = crouch ? 1.5 : 2.05;
      const on = !!(o.f & F.LIGHT) && !down; a.lens.material.color.setHex(on ? 0xffffff : 0x111111);
      if (on) lit.push({ a, o, d });
      a.ambT -= dt; if (a.ambT <= 0) { a.ambT = 0.2; this.s3.ambientAt(a.x, 1.2, a.z, a.suit.userData.amb.value); a.dark.userData.amb.value.copy(a.suit.userData.amb.value); if (o.status === ST.DEAD) { a.suit.userData.amb.value.multiplyScalar(0.4); } }
    }
    for (const [id, a] of this.map) if (!seen.has(id)) { this.s3.scene.remove(a.g); this.map.delete(id); }
    // the two nearest lit lamps get a real light
    lit.sort((p, q) => p.d - q.d);
    for (const { a, o } of lit) {
      if (lampI >= this.lamps.length) break; const l = this.lamps[lampI++], eye = (o.f & F.CROUCH) ? 0.95 : 1.6;
      const fx = -Math.sin(a.yaw) * Math.cos(o.pitch || 0), fy = Math.sin(o.pitch || 0), fz = -Math.cos(a.yaw) * Math.cos(o.pitch || 0);
      l.position.set(a.x + fx * 0.25, eye, a.z + fz * 0.25); l.target.position.set(a.x + fx * 8, eye + fy * 8, a.z + fz * 8); l.intensity = 150;
    }
    for (; lampI < this.lamps.length; lampI++) this.lamps[lampI].intensity = 0;
  }
  clear() { for (const a of this.map.values()) this.s3.scene.remove(a.g); this.map.clear(); for (const l of this.lamps) l.intensity = 0; }
}
