// What the creature looks like, and how it moves. The simulation only says where it is and what it is doing; everything
// here is made up on the spot from that.
//
// It stands on two legs and is shaped, roughly, like a person: nearly three metres of it when it straightens, which it
// seldom has room to do. Most of it is dark. What shows is what is pale: a head with no eyes and no face, only a seam
// laced shut down the middle, and the seam pulls apart when it is close; forearms that reach its shins, three long fingers on each,
// dark at the ends. A chest that is a cage of ribs with its lanterns hanging inside, and the ribs open like two hands. No
// feet: the shins come down to points, which is the tapping. When it watches you its head follows you round in jerks, a
// notch at a time, further round than a neck should go, and the neck draws out longer while it looks.
import * as THREE from 'three';
import { T, CEIL_H } from '../level.js';
import { CS } from '../sim/defs.js';
import { clamp, clamp01, lerp, lerpAngle, wrapAngle, yawOf } from '../util.js';
import { fleshTexture } from './textures.js';

const UP = new THREE.Vector3(0, 1, 0);
const MOOD = {          // lantern colour and strength by what it is doing
  calm: [0.16, 0.95, 0.8, 1.0], wary: [1.0, 0.55, 0.08, 1.5], hunt: [1.0, 0.0, 0.012, 2.6], search: [1.0, 0.22, 0.02, 1.8], out: [0.02, 0.05, 0.05, 0.0],
};
const THIGH = 0.64, SHIN = 0.76;
// How it holds itself in each state: hip height, how far the trunk leans forward, how far the ribs and jaw are open,
// and the arms (swing forward, out to the side, bend at the elbow).
const POSE = {
  idle:   { hip: 0.52, lean: 1.45, ribs: 0, jaw: 0, arm: [1.7, 0.1, 2.3] },          // folded up small, the way it was found
  roam:   { hip: 1.3, lean: 0.44, ribs: 0.04, jaw: 0, arm: [0.12, 0.07, 0.3] },
  wary:   { hip: 1.22, lean: 0.55, ribs: 0.14, jaw: 0.14, arm: [0.4, 0.16, 0.75] },
  hunt:   { hip: 1.05, lean: 0.85, ribs: 0.4, jaw: 0.5, arm: [1.0, 0.24, 0.55] },
  rear:   { hip: 1.36, lean: -0.1, ribs: 1, jaw: 1, arm: [0.35, 1.15, 0.7] },          // seen you: drawn up to its full height, everything open
  attack: { hip: 1.0, lean: 0.95, ribs: 1, jaw: 1, arm: [1.4, 0.12, 0.25] },
  locker: { hip: 0.9, lean: 1.02, ribs: 0.3, jaw: 0.6, arm: [1.25, 0.4, 0.5] },        // bent down to the vents in the door
  wait:   { hip: 1.34, lean: 0.12, ribs: 0, jaw: 0, arm: [0.03, 0.04, 0.06] },         // lights out, quite still
  climb:  { hip: 1.4, lean: -0.2, ribs: 0.2, jaw: 0, arm: [2.95, 0.22, 0.25] },         // reaching up into a hatch
  land:   { hip: 0.7, lean: 1.2, ribs: 0.5, jaw: 0.4, arm: [0.9, 0.5, 0.7] },           // just dropped out of one
};

export class CreatureModel {
  constructor(s3) {
    this.s3 = s3; const scene = s3.scene;
    const skin = fleshTexture(), ns = new THREE.Vector2(0.9, 0.9);
    this.shell = s3.ambient({ color: 0xd8d2c4, map: skin.map, normalMap: skin.normalMap, normalScale: ns, roughness: 0.4, metalness: 0.0 });        // the pale of it: head and forearms
    this.hide = s3.ambient({ color: 0x2b2623, map: skin.map, normalMap: skin.normalMap, normalScale: ns, roughness: 0.46, metalness: 0.05 });       // its back
    this.dark = s3.ambient({ color: 0x0c0908, normalMap: skin.normalMap, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.88, metalness: 0.0 });       // the rest: dull, like something dried
    this.bone = s3.ambient({ color: 0xcfc6ae, roughness: 0.3, metalness: 0.0 });
    this.stitch = s3.ambient({ color: 0x120c0b, roughness: 0.5, metalness: 0.0 });
    this.claw = s3.ambient({ color: 0xffffff, vertexColors: true, roughness: 0.26, metalness: 0.0 });          // fingers: pale at the knuckle, dark and wet at the end
    this.gut = new THREE.MeshBasicMaterial({ color: 0x1c0504, side: THREE.BackSide });          // the hollow of its chest: dark whatever is shining in it, so the lanterns show
    this.maw = new THREE.MeshBasicMaterial({ color: 0x090202, side: THREE.BackSide });          // the inside of its head: dark and wet
    this.mats = [this.shell, this.hide, this.dark, this.bone, this.claw, this.stitch];
    const add = (geo, mat, parent, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; parent.add(m); return m; };
    const sph = new THREE.SphereGeometry(1, 14, 11), cone = new THREE.ConeGeometry(1, 1, 5);
    this.root = new THREE.Group(); scene.add(this.root);
    this.pelvis = new THREE.Group(); this.root.add(this.pelvis);
    add(sph, this.dark, this.pelvis, 0, 0, 0, 0.19, 0.075, 0.11);
    for (const s of [-1, 1]) { const m = add(sph, this.dark, this.pelvis, s * 0.14, 0.05, 0.0, 0.028, 0.1, 0.085); m.rotation.z = -s * 0.5; }       // hip bones, flat blades through the skin
    this.spine = new THREE.Group(); this.spine.position.y = 0.05; this.pelvis.add(this.spine);
    // a waist far too thin to hold the rest of it up
    for (const [y, r] of [[0.07, 0.07], [0.17, 0.058], [0.27, 0.052], [0.37, 0.058], [0.47, 0.07]]) add(sph, this.dark, this.spine, 0, y, 0, r, 0.062, r * 0.85);
    this.chest = new THREE.Group(); this.chest.position.y = 0.68; this.spine.add(this.chest);
    const back = new THREE.SphereGeometry(1, 14, 12, 0, Math.PI);                       // the half behind: dark hide stretched over a back with too many bones in it
    add(back, this.hide, this.chest, 0, 0, 0, 0.285, 0.38, 0.17);
    add(sph, this.gut, this.chest, 0, 0, -0.02, 0.265, 0.36, 0.15);                     // what is behind the ribs
    for (let k = 0; k < 9; k++) add(sph, this.bone, this.chest, 0, 0.33 - k * 0.115, 0.168 * Math.sqrt(Math.max(0.2, 1 - ((0.33 - k * 0.115) / 0.4) ** 2)) + (k > 5 ? 0.03 : 0), 0.03, 0.036, 0.03);     // vertebrae, pale through the hide, on down the waist
    add(sph, this.hide, this.chest, 0, 0.31, 0.05, 0.34, 0.1, 0.15);                    // the hump of its shoulders
    for (const s of [-1, 1]) {
      add(sph, this.dark, this.chest, s * 0.31, 0.27, 0.0, 0.07, 0.07, 0.07);
      const blade = add(sph, this.hide, this.chest, s * 0.15, 0.17, 0.13, 0.085, 0.16, 0.04); blade.rotation.z = -s * 0.25; blade.rotation.y = s * 0.35;          // shoulder blades
    }
    for (let k = 0; k < 7; k++) { const y = 0.34 - k * 0.11, len = 0.24 - Math.abs(k - 1.5) * 0.03, m = add(cone, this.dark, this.chest, 0, y + len * 0.2, 0.17 * Math.sqrt(Math.max(0.1, 1 - (y / 0.4) ** 2)) + len * 0.38, 0.024, len, 0.024); m.rotation.x = 1.05; }     // a row of spines down its back
    // the ribs: two sets, hinged at the sides, meeting at the front in a row of points. Shut, they are a ribcage. Open, two hands.
    this.ribs = [];
    const arcR = new THREE.TorusGeometry(1, 0.075, 5, 9, Math.PI / 2); arcR.rotateX(-Math.PI / 2);                       // from the right side round to the front
    const arcL = new THREE.TorusGeometry(1, 0.075, 5, 9, Math.PI / 2); arcL.rotateZ(Math.PI / 2); arcL.rotateX(-Math.PI / 2);    // from the front round to the left side
    for (const s of [-1, 1]) {
      const g = new THREE.Group(); g.position.set(s * 0.25, 0, 0.03); this.chest.add(g);
      for (let k = 0; k < 6; k++) {
        const y = 0.3 - k * 0.12 - (s > 0 ? 0 : 0.058), f = Math.sqrt(Math.max(0.05, 1 - (y / 0.4) ** 2)), w = 0.29 * f, d = 0.25 * f;       // one side sits half a rib lower, so the ends lace together
        add(s > 0 ? arcR : arcL, this.dark, g, -s * 0.25, y, -0.03, w, 0.24, d);
        const tip = add(cone, this.bone, g, -s * 0.25 - s * 0.03, y, -0.03 - d * 1.01, 0.012, 0.15, 0.012); tip.rotation.z = s * Math.PI / 2; tip.rotation.y = s * 0.3;      // each rib ends in a point that reaches past the middle
      }
      this.ribs.push({ g, s });
    }
    // its lanterns, hanging on stalks inside
    this.lampMat = new THREE.SpriteMaterial({ map: s3.glowTex, color: 0x29f2cc, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    this.lamps = [];
    const stalk = new THREE.CylinderGeometry(0.004, 0.004, 1, 4);
    for (const [x, y, z, r] of [[0, 0.0, -0.09, 0.07], [-0.11, 0.12, -0.06, 0.05], [0.12, 0.1, -0.08, 0.055], [-0.06, -0.14, -0.07, 0.045], [0.07, -0.11, -0.11, 0.05], [-0.14, -0.02, -0.03, 0.04], [0.15, -0.04, -0.01, 0.04]]) {
      const g = new THREE.Group(); g.position.set(x * 0.6, 0.33, z * 0.5); this.chest.add(g);
      const len = 0.33 - y, st = new THREE.Mesh(stalk, this.dark); st.scale.y = len; st.position.set(x * 0.2, -len / 2, z * 0.25); g.add(st);
      const o = s3.glowSprite(0x29f2cc, r * 1.9); o.material = this.lampMat; o.position.set(x * 0.4, -len, z * 0.5); g.add(o);       // a small hot core, and the glow round it
      const halo = s3.glowSprite(0x29f2cc, r * 5); halo.position.copy(o.position); g.add(halo);
      this.lamps.push({ g, halo, ph: Math.random() * 6, r, side: Math.sign(x) });
    }
    this.light = new THREE.PointLight(0x29f2cc, 0, 12, 1.7); this.light.position.set(0, 0, -0.2); this.chest.add(this.light);
    this.throat = s3.glowSprite(0xff2a10, 0.8); this.throat.position.set(0, 0, -0.1); this.throat.material.opacity = 0; this.chest.add(this.throat);
    // neck and head. No eyes. The lower jaw is its own piece and comes down a long way.
    this.neck = new THREE.Group(); this.neck.position.set(0, 0.35, -0.03); this.chest.add(this.neck);
    const nk = new THREE.CylinderGeometry(0.036, 0.06, 0.24, 7); nk.translate(0, 0.12, 0); this.neckMesh = add(nk, this.dark, this.neck);
    this.head = new THREE.Group(); this.head.position.y = 0.24; this.neck.add(this.head);
    add(sph, this.dark, this.head, 0, 0.09, 0.0, 0.06, 0.11, 0.08);                     // what is inside it: a dark gullet, and a light a long way down
    this.gullet = s3.glowSprite(0xff2408, 0.3); this.gullet.position.set(0, 0.08, -0.07); this.gullet.material.opacity = 0; this.head.add(this.gullet);
    this.jaws = [];
    // The shape of a face with nothing on it: wide at the brow, drawn in to a narrow chin, a little flat in front.
    const HX = 0.132, HY = 0.24, HZ = 0.19, shape = (x, y, z) => { const k = y < 0 ? 1 - 0.36 * Math.pow(-y, 1.4) : 1 - 0.06 * y * y; return [x * k, y, z * k * (z < 0 ? 0.93 : 1)]; };
    for (const s of [-1, 1]) {
      const g = new THREE.Group(); g.position.set(0, 0.1, 0.12); this.head.add(g);
      const half = new THREE.SphereGeometry(1, 14, 14, s > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI), pa = half.attributes.position;
      for (let i = 0; i < pa.count; i++) { const v = shape(pa.getX(i), pa.getY(i), pa.getZ(i)); pa.setXYZ(i, v[0], v[1], v[2]); }
      half.computeVertexNormals();
      add(half, this.shell, g, 0, 0, -0.14, HX, HY, HZ); add(half, this.maw, g, 0, 0, -0.14, HX * 0.9, HY * 0.93, HZ * 0.92);
      const rim = (t, out) => { const v = shape(0, Math.sin(t), -Math.cos(t)); return [v[1] * HY * out, -0.14 + v[2] * HZ * out]; };
      // teeth along the inside of the seam, which only show when it opens
      for (const t of [-1.3, -0.95, -0.62, -0.3, 0, 0.3, 0.62, 0.95, 1.3]) { const len = 0.05 + 0.02 * Math.abs(Math.sin(t * 7.1 + s)), [y, z] = rim(t + s * 0.06, 0.84); const m = add(cone, this.bone, g, s * (0.012 - len / 2), y, z, 0.009, len, 0.009); m.rotation.z = s * Math.PI / 2; m.rotation.y = s * 0.35; }
      // and on the outside the seam is laced shut, crown to chin, by thin fangs from either half that cross it
      for (let i = 0; i < 12; i++) { const t = -1.32 + (i + (s > 0 ? 0 : 0.5)) * 0.235, len = 0.04 + 0.022 * Math.abs(Math.sin(i * 2.7 + s)), [y, z] = rim(t, 1.0); const m = add(cone, this.stitch, g, s * (0.03 - len / 2), y, z, 0.0065, len, 0.0065); m.rotation.z = s * Math.PI / 2; }
      this.jaws.push({ g, s });
    }
    // arms: far too long, three fingers to a hand
    this.arms = [];
    const upper = new THREE.CylinderGeometry(0.058, 0.04, 0.72, 7); upper.translate(0, -0.36, 0);
    const fore = new THREE.CylinderGeometry(0.046, 0.026, 0.78, 7); fore.translate(0, -0.39, 0);
    const finger = new THREE.ConeGeometry(0.018, 0.44, 5); finger.rotateX(Math.PI); finger.translate(0, -0.22, 0);
    { const pa = finger.attributes.position, col = new Float32Array(pa.count * 3); for (let i = 0; i < pa.count; i++) { const t = clamp01((-pa.getY(i) / 0.44 - 0.3) / 0.6), e = t * t * (3 - 2 * t); col[i * 3] = lerp(0.62, 0.075, e); col[i * 3 + 1] = lerp(0.58, 0.012, e); col[i * 3 + 2] = lerp(0.48, 0.01, e); } finger.setAttribute('color', new THREE.BufferAttribute(col, 3)); }
    for (const s of [-1, 1]) {
      const g = new THREE.Group(); g.position.set(s * 0.31, 0.27, 0); this.chest.add(g);
      add(upper, this.dark, g);
      const el = new THREE.Group(); el.position.y = -0.72; g.add(el);
      add(sph, this.dark, el, 0, 0, 0, 0.05, 0.05, 0.05); add(fore, this.shell, el);
      const hand = new THREE.Group(); hand.position.y = -0.78; el.add(hand);
      add(sph, this.shell, hand, 0, -0.01, 0, 0.04, 0.05, 0.03);
      const fingers = []; for (const a of [-1, 0, 1]) { const f = add(finger, this.claw, hand); f.rotation.z = a * 0.3; f.rotation.x = 0.15; fingers.push({ f, a }); }
      this.arms.push({ g, el, hand, fingers, s, ph: s * 1.3 });
    }
    // legs: thigh, a knee with a spur on it, and a shin that comes down to a point
    this.legs = [];
    const lu = new THREE.CylinderGeometry(0.085, 0.058, 1, 7), ll = new THREE.CylinderGeometry(0.064, 0.008, 1, 7), joint = new THREE.SphereGeometry(0.075, 8, 6), spur = new THREE.ConeGeometry(0.03, 0.22, 5);
    for (const side of [-1, 1]) {
      const leg = { side, hip: new THREE.Vector3(side * 0.12, -0.03, 0), home: side * 0.16, foot: new THREE.Vector3(), from: new THREE.Vector3(), to: new THREE.Vector3(), t: 1, dur: 0.25, lift: 0,
        up: new THREE.Mesh(lu, this.dark), lo: new THREE.Mesh(ll, this.dark), kn: new THREE.Mesh(joint, this.dark), sp: new THREE.Mesh(spur, this.dark) };
      for (const m of [leg.up, leg.lo, leg.kn, leg.sp]) { m.castShadow = true; scene.add(m); }
      this.legs.push(leg);
    }
    this.x = 0; this.z = 0; this.yaw = 0; this.vx = 0; this.vz = 0; this.speed = 0;
    this.p = { hip: POSE.idle.hip, lean: POSE.idle.lean, ribs: 0, jaw: 0, a0: 1.7, a1: 0.1, a2: 2.3 };      // the pose it is in now, eased towards the one it wants
    this.mood = MOOD.calm.slice(); this.t = 0; this.placed = false; this.lunge = 0; this.ambT = 0; this.rear = 0; this.shine = 0;
    this.tilt = 0; this.tiltTo = 0; this.turn = 0; this.turnTo = 0; this.twT = 2; this.tw = 0;
    this.stretch = 0; this.cracks = 0; this.watching = false; this.lol = 1; this.lolSet = false;       // how far its neck has drawn out; how many times its neck has cracked (the page plays them); which way its head hangs while it waits
    this._a = new THREE.Vector3(); this._b = new THREE.Vector3(); this._fq = new THREE.Vector3(); this._k = new THREE.Vector3(); this._f = new THREE.Vector3(); this._s = new THREE.Vector3(); this._q = new THREE.Quaternion(); this._c = new THREE.Color(); this._w = new THREE.Color(1, 1, 0.9);
    this.setVisible(false);
  }
  setVisible(v) { this.root.visible = v; for (const l of this.legs) { l.up.visible = l.lo.visible = l.kn.visible = l.sp.visible = v; } if (!v) this.placed = false; }

  // st: { x, z, yaw, state, lampsOut, forcing, rear (it has reared up), shine (0..1: a lamp is on it), watch ({x, z}: someone
  // its head turns to follow, or null) }. onStep(x, z, hard) is called each time a foot comes down.
  update(dt, st, onStep) {
    this.t += dt; const L = this.s3.L, p = this.p;
    if (!this.placed) { this.x = st.x; this.z = st.z; this.yaw = st.yaw; this.vx = this.vz = 0; this.placed = true; for (const l of this.legs) { this.homeOf(l, l.foot, 0); l.t = 1; } }
    const k = Math.min(1, dt * 18), px = this.x, pz = this.z;
    this.x += (st.x - this.x) * k; this.z += (st.z - this.z) * k; this.yaw = lerpAngle(this.yaw, st.yaw, Math.min(1, dt * 12));
    if (dt > 0) { this.vx = lerp(this.vx, (this.x - px) / dt, 0.3); this.vz = lerp(this.vz, (this.z - pz) / dt, 0.3); }
    const sp = this.speed = Math.hypot(this.vx, this.vz);
    const s = st.state, hunting = s === CS.HUNT || s === CS.ATTACK, waiting = !!st.lampsOut && (s === CS.AMBUSH || s === CS.BAIT);
    const roof = Math.min(L.ceil[L.cellOf(clamp(this.x, T, 1e4), clamp(this.z, T, 1e4))] || CEIL_H, 4.2);

    // --- which way it wants to hold itself
    this.rear += ((st.rear ? 1 : 0) - this.rear) * Math.min(1, dt * (st.rear ? 16 : 4));
    const near = st.watch ? Math.hypot(st.watch.x - this.x, st.watch.z - this.z) : 99;
    this.stretch += (((st.watch && near < 9 && !hunting) || this.rear > 0.5 ? 1 : 0) - this.stretch) * Math.min(1, dt * (this.rear > 0.5 ? 6 : 1.4));      // slowly, unless it is rearing
    this.lunge = s === CS.ATTACK ? Math.min(1, this.lunge + dt * 7) : Math.max(0, this.lunge - dt * 2.5);
    let want = s === CS.IDLE ? POSE.idle : waiting ? POSE.wait : s === CS.ATTACK ? POSE.attack : s === CS.HUNT ? POSE.hunt : s === CS.LOCKER ? POSE.locker : s === CS.SUSPECT || s === CS.INVEST || s === CS.SEARCH ? POSE.wary : POSE.roam;
    if (st.climb === 1) want = POSE.climb; else if (st.climb === 2) want = POSE.land;
    if (this.rear > 0.5 && s !== CS.ATTACK) want = POSE.rear;
    const rate = Math.min(1, dt * (want === POSE.rear || want === POSE.attack || want === POSE.land ? 13 : want === POSE.idle ? 2 : want === POSE.climb ? 7 : 5));
    p.hip += (want.hip - p.hip) * rate; p.lean += (want.lean - p.lean) * rate; p.ribs += (want.ribs - p.ribs) * Math.min(1, dt * (want.ribs > p.ribs ? 16 : 4)); p.jaw += (want.jaw - p.jaw) * Math.min(1, dt * (want.jaw > p.jaw ? 16 : 4));
    p.a0 += (want.arm[0] - p.a0) * rate; p.a1 += (want.arm[1] - p.a1) * rate; p.a2 += (want.arm[2] - p.a2) * rate;
    // it is too tall for most of the outpost: it stoops as far as the ceiling makes it
    let lean = p.lean + (hunting ? Math.min(0.2, sp * 0.03) : 0), hip = p.hip;
    const topOf = ln => hip + 0.05 + 1.03 * Math.cos(ln) + (0.5 + 0.2 * this.stretch) * Math.cos(ln * 0.45);
    for (let i = 0; i < 8 && topOf(lean) > roof - 0.06; i++) { lean += 0.09; if (i > 3) hip -= 0.05; }

    // --- feet first: they plant and step on their own, and the body rides on them
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw), stepLen = 0.5 + sp * 0.17, dur = clamp(0.4 - sp * 0.04, 0.17, 0.4);
    const [la, lb] = this.legs; let stride = 0;
    for (const l of this.legs) {
      const other = l === la ? lb : la;
      if (l.t < 1) {
        l.t = Math.min(1, l.t + dt / l.dur);
        const e = l.t * l.t * (3 - 2 * l.t);
        l.foot.lerpVectors(l.from, l.to, e); l.foot.y = Math.sin(l.t * Math.PI) * l.lift;
        if (l.t >= 1) { l.foot.y = 0; if (onStep) onStep(l.foot.x, l.foot.z, sp); }
      } else {
        this.homeOf(l, this._a, 0);
        const off = Math.hypot(this._a.x - l.foot.x, this._a.z - l.foot.z);
        if ((off > stepLen && other.t >= 1) || off > stepLen * 2.2 || (sp < 0.15 && off > 0.22 && other.t >= 1)) {
          l.from.copy(l.foot); this.homeOf(l, l.to, dur * 0.9 + 0.05); l.t = 0; l.dur = dur * (0.92 + Math.random() * 0.16); l.lift = 0.16 + sp * 0.06;
        }
      }
      stride += l.side * ((l.foot.x - this.x) * fx + (l.foot.z - this.z) * fz);        // > 0: the right foot is the one in front
    }
    const apart = Math.hypot(la.foot.x - lb.foot.x, la.foot.z - lb.foot.z);
    hip -= clamp(apart - 0.5, 0, 1.4) * 0.09;                                            // a long stride brings the hips down
    // --- the trunk
    // The head goes to a new angle all at once, and stays there. Watching someone, it follows them that way: in jerks, a notch
    // at a time, as far round as it has to, which is further than a neck should go. Waiting in the dark it hangs to one side.
    if (!waiting) this.lolSet = false; else if (!this.lolSet) { this.lolSet = true; this.lol = (Math.random() < 0.5 ? -1 : 1) * (0.95 + Math.random() * 0.3); this.twT = Math.min(this.twT, 0.5); }
    const wantLook = st.watch ? clamp(wrapAngle(yawOf(st.watch.x - this.x, st.watch.z - this.z) - this.yaw), -2.75, 2.75) : null;
    if (wantLook !== null && !this.watching) this.twT = Math.min(this.twT, 0.15 + Math.random() * 0.3);
    this.watching = wantLook !== null;
    this.twT -= dt;
    if (this.twT <= 0) {
      if (wantLook !== null) {
        const d = wantLook - this.turnTo; this.turnTo += Math.sign(d) * Math.min(Math.abs(d), 0.3 + Math.random() * 0.5);
        this.twT = 0.2 + Math.random() * (waiting ? 1.2 : 0.5);
        this.tiltTo = waiting ? this.lol : Math.abs(this.turnTo) > 1.4 ? Math.sign(this.turnTo) * 0.45 : (Math.random() - 0.5) * 0.6;
        if (Math.abs(d) > 0.08) this.cracks++;
      } else {
        this.twT = (waiting ? 2.5 : 1) + Math.random() * (waiting ? 7 : 3.5); this.tw = (Math.random() - 0.5) * 0.25;
        this.tiltTo = waiting ? this.lol : (Math.random() - 0.5) * (hunting ? 0.5 : 0.9);
        this.turnTo = waiting ? (Math.random() - 0.5) * 0.4 : (Math.random() - 0.5) * (s === CS.SEARCH || s === CS.INVEST || s === CS.ROAM ? 1.5 : 0.5);
        if (Math.random() < 0.2) this.cracks++;
      }
    }
    this.tw *= Math.max(0, 1 - dt * 8);
    this.tilt += (this.tiltTo - this.tilt) * Math.min(1, dt * 16); this.turn += (this.turnTo - this.turn) * Math.min(1, dt * 20);
    const breathe = Math.sin(this.t * 1.7) * 0.012;
    const up = (st.lift || 0) * 1.8;                   // drawn up into a hatch, or not yet down out of one
    this.root.position.set(this.x, up, this.z); this.root.rotation.y = this.yaw;
    this.pelvis.position.set(0, hip + breathe, -this.lunge * 0.35); this.pelvis.rotation.set(0, clamp(stride * 0.16, -0.3, 0.3), this.tw * 0.4);
    this.spine.rotation.set(-lean, -clamp(stride * 0.2, -0.35, 0.35), Math.sin(this.t * 2.3) * 0.015 * (1 + sp) + this.tw);
    // head: up out of the stoop so that it faces ahead; turned to whoever it is watching, if anyone
    const look = this.turn;
    this.neckMesh.scale.y = 1 + 0.95 * this.stretch; this.head.position.y = 0.24 * (1 + 0.95 * this.stretch);
    this.neck.rotation.set(-0.35 + lean * 0.55 - this.stretch * 0.15, 0, 0);
    this.head.rotation.set(lean * 0.35 - 0.1 - this.rear * 0.25, look, this.tilt);
    const gape = p.jaw * 0.19 + (hunting ? 0.04 * Math.max(0, Math.sin(this.t * 7.3)) : 0); for (const j of this.jaws) j.g.rotation.y = -j.s * gape;      // the seam strains apart a hand's width, no more
    // ribs and what is behind them
    const open = clamp01(p.ribs + (hunting ? 0.1 * Math.max(0, Math.sin(this.t * 5.1)) : Math.sin(this.t * 1.7) * 0.012));
    for (const r of this.ribs) { r.g.rotation.y = -r.s * open * 1.25; r.g.scale.setScalar(1 + 0.45 * open); }       // they are longer than they have any right to be
    this.gut.color.setRGB(0.012 + 0.03 * open * open, 0.002, 0.002); this.gullet.material.opacity = clamp01(gape * 2.6); this.throat.material.opacity = clamp01(open * open * 0.1);
    // arms: hung straight down whatever the trunk is doing, plus the pose, plus the swing of the walk
    const walk = clamp(stride * 0.5, -0.5, 0.5) * clamp01(sp / 2.5);
    for (const a of this.arms) {
      const jit = Math.sin(this.t * (5 + a.s) + a.ph) * 0.05 * (0.4 + p.ribs * 2);
      a.g.rotation.x = lean + p.a0 - a.s * walk * (hunting ? 0.3 : 1) + jit + this.lunge * 0.3;
      a.g.rotation.z = a.s * (p.a1 + jit * 0.5);
      a.el.rotation.x = p.a2 + Math.max(0, a.s * walk) * 0.5 - jit;
      const splay = 0.3 + p.ribs * 0.35 + Math.sin(this.t * 3.1 + a.ph) * 0.06;
      for (const f of a.fingers) { f.f.rotation.z = f.a * splay; f.f.rotation.x = 0.15 + p.ribs * 0.5 + Math.sin(this.t * 9 + f.a * 2 + a.ph) * 0.07 * (hunting ? 2 : 1); }
    }
    this.root.updateMatrixWorld(true);

    // --- legs: hip, knee, foot. The knee goes wherever the two bones put it, pushed out ahead.
    for (const l of this.legs) {
      const h = this._a.copy(l.hip); this.pelvis.localToWorld(h);
      const ft = up > 0 ? this._fq.copy(l.foot).setY(l.foot.y + up * 0.85) : l.foot;
      const d = this._b.subVectors(ft, h), len = clamp(d.length(), 0.25, THIGH + SHIN - 0.01); d.normalize();
      const along = (THIGH * THIGH - SHIN * SHIN + len * len) / (2 * len), out = Math.sqrt(Math.max(0, THIGH * THIGH - along * along));
      const f = this._f.set(fx, 0.12, fz).addScaledVector(d, -(fx * d.x + 0.12 * d.y + fz * d.z)).normalize();
      const kn = this._k.copy(h).addScaledVector(d, along).addScaledVector(f, out);
      const foot = this._s.copy(h).addScaledVector(d, len);                     // where the foot can actually reach
      this.seg(l.up, h, kn); this.seg(l.lo, kn, foot); l.kn.position.copy(kn);
      l.sp.position.copy(kn).addScaledVector(f, 0.13); l.sp.quaternion.copy(this._q.setFromUnitVectors(UP, f));
    }

    // --- mood lights. With its lights out, a lamp turned on it still finds them: pale points in a dark ribcage.
    const m = st.lampsOut ? MOOD.out : hunting ? MOOD.hunt : s === CS.SEARCH || s === CS.LOCKER ? MOOD.search : s === CS.SUSPECT || s === CS.INVEST ? MOOD.wary : s === CS.IDLE ? MOOD.out : MOOD.calm;
    for (let i = 0; i < 4; i++) this.mood[i] += (m[i] - this.mood[i]) * Math.min(1, dt * (st.lampsOut ? 3 : 6));
    this.shine += ((st.shine || 0) - this.shine) * Math.min(1, dt * 10);
    const pulse = 0.82 + 0.18 * Math.sin(this.t * (hunting ? 13 : 2.4)), dim = this.shine * clamp01(1 - this.mood[3]);
    this._c.setRGB(this.mood[0], this.mood[1], this.mood[2]);
    this.lampMat.color.copy(this._c).multiplyScalar(0.2 + 0.55 * this.mood[3] * pulse); this.lampMat.color.r += dim * 0.85; this.lampMat.color.g += dim * 0.9; this.lampMat.color.b += dim * 0.7;
    this.light.color.copy(this._c); this.light.intensity = 3.2 * this.mood[3] * pulse * (1 + 0.4 * open);
    for (const l of this.lamps) {
      l.g.rotation.x = lean * 0.9 + Math.sin(this.t * 2.1 + l.ph) * 0.06 + open * (0.45 + 0.25 * Math.sin(l.ph));       // they hang, more or less, and swing out when the ribs part
      l.g.rotation.z = Math.sin(this.t * 1.6 + l.ph * 2) * 0.08 + this.tw * 2 + l.side * open * 0.25;
      l.halo.material.color.copy(this._c).lerp(this._w, dim); l.halo.material.opacity = Math.min(0.5, 0.26 * this.mood[3] * pulse + dim * 0.3);
    }
    // take the colour of the room
    this.ambT -= dt; if (this.ambT <= 0) { this.ambT = 0.12; this.s3.ambientAt(this.x, 1.6, this.z, this.shell.userData.amb.value); for (const mt of this.mats) mt.userData.amb.value.copy(this.shell.userData.amb.value); }
  }
  // where a foot would like to be: under its hip, led by the way the body is moving
  homeOf(l, out, lead) {
    const c = Math.cos(this.yaw), s = Math.sin(this.yaw), L = this.s3.L;
    const fwd = 0.08 + this.p.lean * 0.2;                // the feet stay under the weight of it, which is well out in front when it stoops
    let x = this.x + l.home * c - s * fwd + this.vx * lead, z = this.z - l.home * s - c * fwd + this.vz * lead;
    for (let i = 0; i < 4 && !L.walkC[L.cellOf(x, z)]; i++) { x = lerp(x, this.x, 0.35); z = lerp(z, this.z, 0.35); }       // never through a wall
    return out.set(x, 0, z);
  }
  // lay a unit cylinder from a (its thick end) to b
  seg(mesh, a, b) {
    const d = this._q0 || (this._q0 = new THREE.Vector3()); d.subVectors(a, b); const len = d.length() || 1e-3;
    mesh.position.copy(b).addScaledVector(d, 0.5); mesh.scale.set(1, len, 1);
    mesh.quaternion.copy(this._q.setFromUnitVectors(UP, d.multiplyScalar(1 / len)));
  }
}
