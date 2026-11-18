// Builds the outpost in three.js from the level description, and keeps the moving parts (doors, tags, sounders, the lift) in step
// with the match. Fixed lights are worked out once per vertex at load time; only lamps and a few small lights are live.
import * as THREE from 'three';
import { T, W, H, C, LOW_H, DUCT_H, lightAt, ZONES } from '../level.js';
import { makeTextures, glowTexture, signTexture } from './textures.js';
import { rng32, clamp01 } from '../util.js';
import { LIFT } from '../sim/defs.js';

const BLOCK = 12;       // the level is cut into blocks of this many tiles so that what is off screen is not drawn
const DOOR_H = 2.5;

// ---------------------------------------------------------------------------------------------- geometry with baked light
class Geo {
  constructor() { this.pos = []; this.nor = []; this.uv = []; this.col = []; this.bk = []; this.bk2 = []; this.zw = []; this.idx = []; this.n = 0; }
  // A flat patch: corner o, edges u and v (u x v is the facing), cut into su by sv pieces. disp nudges inner points for rough ice.
  quad(L, o, u, v, su, sv, uv0, uvU, uvV, color, disp, gain = 1) {
    let nx = u[1] * v[2] - u[2] * v[1], ny = u[2] * v[0] - u[0] * v[2], nz = u[0] * v[1] - u[1] * v[0];
    const nl = Math.hypot(nx, ny, nz) || 1; nx /= nl; ny /= nl; nz /= nl;
    const base = this.n;
    for (let j = 0; j <= sv; j++) for (let i = 0; i <= su; i++) {
      const s = i / su, t = j / sv;
      let x = o[0] + u[0] * s + v[0] * t, y = o[1] + u[1] * s + v[1] * t, z = o[2] + u[2] * s + v[2] * t;
      const e = lightAt(L, x, y, z, nx, ny, nz);
      if (disp && i > 0 && i < su) { const d = disp(x, y, z); x += nx * d; y += ny * d; z += nz * d; }
      this.pos.push(x, y, z); this.nor.push(nx, ny, nz);
      this.uv.push(uv0[0] + uvU[0] * s + uvV[0] * t, uv0[1] + uvU[1] * s + uvV[1] * t);
      this.col.push(color[0], color[1], color[2]);
      this.bk.push(e[0] * gain, e[1] * gain, e[2] * gain); this.bk2.push(e[3] * gain, e[4] * gain, e[5] * gain);
      // what share of this point's light comes from each power circuit (the first circuit's share is whatever is left over)
      const zt = e[6] + e[7] + e[8] + e[9] + e[10]; if (zt > 1e-9) this.zw.push(e[7] / zt, e[8] / zt, e[9] / zt, e[10] / zt); else this.zw.push(0, 0, 0, 0);
      this.n++;
    }
    const row = su + 1;
    for (let j = 0; j < sv; j++) for (let i = 0; i < su; i++) { const a = base + j * row + i; this.idx.push(a, a + 1, a + row + 1, a, a + row + 1, a + row); }
  }
  // A box standing on (or floating above) the floor. Bottom face left out unless asked for.
  box(L, x0, y0, z0, x1, y1, z1, color, bottom = false) {
    const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0, k = 0.8;
    this.quad(L, [x0, y1, z0], [0, 0, dz], [dx, 0, 0], 1, 1, [0, 0], [0, dz * k], [dx * k, 0], color);                 // top
    this.quad(L, [x0, y0, z1], [dx, 0, 0], [0, dy, 0], 1, 1, [0, 0], [dx * k, 0], [0, dy * k], color);                 // +z
    this.quad(L, [x1, y0, z0], [-dx, 0, 0], [0, dy, 0], 1, 1, [0, 0], [dx * k, 0], [0, dy * k], color);                // -z
    this.quad(L, [x1, y0, z1], [0, 0, -dz], [0, dy, 0], 1, 1, [0, 0], [dz * k, 0], [0, dy * k], color);                // +x
    this.quad(L, [x0, y0, z0], [0, 0, dz], [0, dy, 0], 1, 1, [0, 0], [dz * k, 0], [0, dy * k], color);                 // -x
    if (bottom) this.quad(L, [x0, y0, z0], [dx, 0, 0], [0, 0, dz], 1, 1, [0, 0], [dx * k, 0], [0, dz * k], color);
  }
  // An upright cylinder made of flat sides.
  prism(L, cx, cz, r, y0, y1, sides, color, cap = true) {
    const pts = []; for (let i = 0; i < sides; i++) { const a = i / sides * Math.PI * 2; pts.push([cx + Math.cos(a) * r, cz + Math.sin(a) * r]); }
    for (let i = 0; i < sides; i++) {
      const a = pts[i], b = pts[(i + 1) % sides];
      this.quad(L, [b[0], y0, b[1]], [a[0] - b[0], 0, a[1] - b[1]], [0, y1 - y0, 0], 1, Math.max(1, Math.round((y1 - y0) / 3)), [i / sides * 3, y0 * 0.5], [3 / sides, 0], [0, (y1 - y0) * 0.5], color);
    }
    if (cap) for (let i = 0; i < sides; i++) { const a = pts[i], b = pts[(i + 1) % sides]; this.quad(L, [cx, y1, cz], [b[0] - cx, 0, b[1] - cz], [a[0] - b[0], 0, a[1] - b[1]], 1, 1, [0, 0], [0.5, 0], [0, 0.5], color); }
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute('bake', new THREE.Float32BufferAttribute(this.bk, 3));
    g.setAttribute('bake2', new THREE.Float32BufferAttribute(this.bk2, 3));
    g.setAttribute('zw', new THREE.Float32BufferAttribute(this.zw, 4));
    g.setIndex(this.idx);
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}
// Unlit, self-coloured surfaces: screens, light fittings, indicator lamps.
class GlowGeo {
  constructor() { this.pos = []; this.col = []; this.idx = []; this.n = 0; }
  quad(o, u, v, color) {
    const b = this.n;
    this.pos.push(o[0], o[1], o[2], o[0] + u[0], o[1] + u[1], o[2] + u[2], o[0] + u[0] + v[0], o[1] + u[1] + v[1], o[2] + u[2] + v[2], o[0] + v[0], o[1] + v[1], o[2] + v[2]);
    for (let i = 0; i < 4; i++) this.col.push(color[0], color[1], color[2]);
    this.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); this.n += 4;
  }
  box(x0, y0, z0, x1, y1, z1, color) {
    const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0;
    this.quad([x0, y1, z0], [0, 0, dz], [dx, 0, 0], color); this.quad([x0, y0, z0], [dx, 0, 0], [0, 0, dz], color);
    this.quad([x0, y0, z1], [dx, 0, 0], [0, dy, 0], color); this.quad([x1, y0, z0], [-dx, 0, 0], [0, dy, 0], color);
    this.quad([x1, y0, z1], [0, 0, -dz], [0, dy, 0], color); this.quad([x0, y0, z0], [0, 0, dz], [0, dy, 0], color);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx); g.computeBoundingSphere();
    return g;
  }
}

function hash3(x, y, z) { let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(z | 0, 2147483647); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), fx = x - xi, fy = y - yi, fz = z - zi;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy), sz = fz * fz * (3 - 2 * fz);
  const l = (a, b, t) => a + (b - a) * t;
  return l(l(l(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), sx), l(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), sx), sy),
    l(l(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), sx), l(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), sx), sy), sz);
}

export class Scene3D {
  constructor(L, opts = {}) {
    this.L = L;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x04070a, 0.03);
    this.uni = { uFlick: { value: 1 }, uBakeGain: { value: 6 }, uZone0: { value: 1 }, uZone: { value: new THREE.Vector4(1, 1, 1, 1) } };
    this.pow = new Float32Array(ZONES.length).fill(1);       // how much light each power circuit is giving right now (see setPower)
    this.tx = makeTextures(opts.aniso || 4);
    this.glowTex = glowTexture();
    this.time = 0; this.flick = 1; this.flickT = 0; this.flickTo = 1;
    this.mats = {
      floor: this.baked({ map: this.tx.floor.map, normalMap: this.tx.floor.normalMap, roughness: 0.58, metalness: 0.32 }),
      wall: this.baked({ map: this.tx.wall.map, normalMap: this.tx.wall.normalMap, roughness: 0.68, metalness: 0.22 }),
      ceil: this.baked({ map: this.tx.ceil.map, normalMap: this.tx.ceil.normalMap, roughness: 0.85, metalness: 0.1 }),
      ice: this.baked({ map: this.tx.ice.map, normalMap: this.tx.ice.normalMap, roughness: 0.3, metalness: 0.0 }),
      prop: this.baked({ map: this.tx.prop.map, normalMap: this.tx.prop.normalMap, roughness: 0.6, metalness: 0.25 }),
      glow: new THREE.MeshBasicMaterial({ vertexColors: true }),
    };
    // the light fittings themselves, one material per circuit so that they go dark with it; F: the ones that stutter
    this.fitMat = ZONES.map(() => new THREE.MeshBasicMaterial({ vertexColors: true })); this.fitMatF = ZONES.map(() => new THREE.MeshBasicMaterial({ vertexColors: true }));
    this.sealMat = new THREE.MeshBasicMaterial({ color: 0xff2a12 });
    this.mats.ice.normalScale.set(1.4, 1.4);
    this.doors = []; this.tags = []; this.items = []; this.decoys = new Map(); this.sprites = [];
    this.buildStatic();
    this.buildDoors();
    this.buildLift();
    this.scene.add(new THREE.AmbientLight(0x8fb4d0, 0.3));
  }

  // A standard material that also takes the light worked out at load time (the bake / bake2 vertex data).
  baked(params) {
    const m = new THREE.MeshStandardMaterial(Object.assign({ vertexColors: true }, params)), uni = this.uni;
    m.onBeforeCompile = sh => {
      sh.uniforms.uFlick = uni.uFlick; sh.uniforms.uBakeGain = uni.uBakeGain; sh.uniforms.uZone0 = uni.uZone0; sh.uniforms.uZone = uni.uZone;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute vec3 bake;\nattribute vec3 bake2;\nattribute vec4 zw;\nvarying vec3 vBake;\nuniform float uFlick;\nuniform float uBakeGain;\nuniform float uZone0;\nuniform vec4 uZone;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBake = (bake + bake2 * uFlick) * uBakeGain * (uZone0 * (1.0 - zw.x - zw.y - zw.z - zw.w) + dot(zw, uZone));');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vBake;')
        .replace('#include <lights_fragment_maps>', '#include <lights_fragment_maps>\nirradiance += vBake;');
    };
    return m;
  }
  // For things that move (the creature, other players): they take one colour of surrounding light, set from where they stand.
  ambient(params) {
    const m = new THREE.MeshStandardMaterial(params);
    m.userData.amb = { value: new THREE.Color(0, 0, 0) };
    m.onBeforeCompile = sh => {
      sh.uniforms.uAmb = m.userData.amb;
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform vec3 uAmb;')
        .replace('#include <lights_fragment_maps>', '#include <lights_fragment_maps>\nirradiance += uAmb;');
    };
    return m;
  }
  // The fixed light around a point, for the materials above.
  ambientAt(x, y, z, out) {
    const e = lightAt(this.L, x, y, z, 0, 0, 0), f = this.uni.uFlick.value, p = this.pow, zt = e[6] + e[7] + e[8] + e[9] + e[10];
    const g = this.uni.uBakeGain.value * 2.0 * (zt > 1e-9 ? (e[6] * p[0] + e[7] * p[1] + e[8] * p[2] + e[9] * p[3] + e[10] * p[4]) / zt : 1);
    return out.setRGB((e[0] + e[3] * f) * g, (e[1] + e[4] * f) * g, (e[2] + e[5] * f) * g);
  }
  // levels: how bright each of the five circuits is, 0 to 1. all: one more factor over the lot (a flicker, a dip).
  setPower(levels, all = 1) {
    const p = this.pow; for (let z = 0; z < p.length; z++) p[z] = levels[z] * all;
    this.uni.uZone0.value = p[0]; this.uni.uZone.value.set(p[1], p[2], p[3], p[4]);
  }

  // ------------------------------------------------------------------------------------------ everything that never moves
  buildStatic() {
    const L = this.L, geos = new Map(), glow = new GlowGeo(), fit = ZONES.map(() => new GlowGeo()), fitF = ZONES.map(() => new GlowGeo()), rnd = rng32(4471);
    const G = (name, cx, cz) => { const k = name + ':' + ((cx / BLOCK) | 0) + ':' + ((cz / BLOCK) | 0); let g = geos.get(k); if (!g) { g = new Geo(); g.mat = name; geos.set(k, g); } return g; };
    const open = i => { const c = L.cells[i]; return c !== C.SOLID && c !== C.LOCKER; };
    const iceDisp = (x, y, z) => 0.05 + 0.32 * vnoise(x * 0.9, y * 0.9, z * 0.9);
    const SIDES = [   // which way the neighbour lies; where the wall starts; which way it runs; texture start and direction
      [0, -1, (x0, z0) => [x0, z0], [T, 0, 0], (cx, cz) => cx, 1],
      [0, 1, (x0, z0) => [x0 + T, z0 + T], [-T, 0, 0], (cx, cz) => cx + 1, -1],
      [-1, 0, (x0, z0) => [x0, z0 + T], [0, 0, -T], (cx, cz) => cz + 1, -1],
      [1, 0, (x0, z0) => [x0 + T, z0], [0, 0, T], (cx, cz) => cz, 1],
    ];
    for (let cz = 1; cz < H - 1; cz++) for (let cx = 1; cx < W - 1; cx++) {
      const i = cz * W + cx, c = L.cells[i]; if (!open(i)) continue;
      const isIce = !!L.ice[i], x0 = cx * T, z0 = cz * T, h = L.ceil[i];
      const fm = isIce ? 'ice' : 'floor', wm = isIce ? 'ice' : 'wall', cm = isIce ? 'ice' : 'ceil';
      const isGate = L.doorAt[i] >= 0 && L.doors[L.doorAt[i]].gate;
      let ft = [1, 1, 1];
      if (c === C.LIFT) ft = [1.25, 1.0, 0.35]; else if (c === C.DUCT) ft = [0.55, 0.55, 0.6]; else if (isGate) ft = [1.2, 1.0, 0.45];
      else if (isIce) ft = [0.6, 0.66, 0.72];
      else { for (const n of [i - 1, i + 1, i - W, i + W]) if (L.cells[n] === C.PIT) ft = [1.25, 1.05, 0.5]; }
      if (c !== C.PIT) G(fm, cx, cz).quad(L, [x0, 0, z0], [0, 0, T], [T, 0, 0], 2, 2, [cx, cz], [0, 1], [1, 0], ft);
      const ct = isIce ? [0.55, 0.62, 0.68] : c === C.DUCT ? [0.5, 0.5, 0.55] : [1, 1, 1];
      if (h < 12) G(cm, cx, cz).quad(L, [x0, h, z0], [T, 0, 0], [0, 0, T], isIce ? 4 : 2, isIce ? 4 : 2, [cx, cz], [1, 0], [0, 1], ct, isIce ? (x, y, z) => 0.5 * vnoise(x * 0.8, 7, z * 0.8) * Math.min(1, Math.min(x - x0, x0 + T - x, z - z0, z0 + T - z) * 3) : null);
      for (const [dx, dz, org, u, ub, ud] of SIDES) {
        const n = i + dx + dz * W, nc = L.cells[n], o = org(x0, z0);
        const wall = (y0, y1, tint, mat = wm) => {
          if (y1 - y0 < 0.02) return;
          G(mat, cx, cz).quad(L, [o[0], y0, o[1]], u, [0, y1 - y0, 0], isIce && mat === 'ice' ? 4 : 2, Math.max(1, Math.round((y1 - y0) / 1.07)), [ub(cx, cz), y0 / 3.2], [ud, 0], [0, (y1 - y0) / 3.2], tint, isIce && mat === 'ice' ? iceDisp : null);
        };
        const wt = isIce ? [0.62, 0.7, 0.76] : c === C.DUCT ? [0.5, 0.5, 0.55] : c === C.LIFT ? [0.6, 0.6, 0.62] : [1, 1, 1];
        if (c === C.PIT) { if (nc !== C.PIT) wall(-30, 0, [0.45, 0.5, 0.55]); if (!open(n)) wall(0, h, wt); else if (L.ceil[n] < h - 0.01) wall(L.ceil[n], h, wt); continue; }
        if (!open(n)) wall(0, h, wt);
        else if (L.ceil[n] < h - 0.01) wall(L.ceil[n], h, wt);
      }
      this.buildProp(L, G('prop', cx, cz), glow, cx, cz, c, L.propKind[i], rnd);
    }
    // lockers: a door set into the wall, facing the tile you use it from
    for (const k of L.lockers) {
      const g = G('prop', k.ax, k.az), col = [0.36, 0.5, 0.5], dark = [0.1, 0.12, 0.13];
      const fx = (k.cx + 0.5) * T + (k.ax - k.cx) * (T / 2), fz = (k.cz + 0.5) * T + (k.az - k.cz) * (T / 2);     // centre of the shared edge
      const along = k.ax !== k.cx ? [0, 1] : [1, 0], out = [k.ax - k.cx, k.az - k.cz];
      const bx = (a, b, y0, y1, d0, d1, c2) => {   // a..b along the wall, d0..d1 out from it
        const xs = [fx + along[0] * a + out[0] * d0, fx + along[0] * b + out[0] * d1], zs = [fz + along[1] * a + out[1] * d0, fz + along[1] * b + out[1] * d1];
        g.box(L, Math.min(...xs), y0, Math.min(...zs), Math.max(...xs), y1, Math.max(...zs), c2);
      };
      bx(-0.56, 0.56, 0, 2.12, 0, 0.1, dark); bx(-0.48, 0.48, 0.06, 2.06, 0.1, 0.15, col);
      for (let s = 0; s < 4; s++) bx(-0.3, 0.3, 1.55 + s * 0.1, 1.59 + s * 0.1, 0.15, 0.165, dark);
      bx(0.32, 0.38, 0.95, 1.15, 0.15, 0.2, [0.7, 0.72, 0.74]);
      k.fx = fx; k.fz = fz; k.outX = out[0]; k.outZ = out[1];
    }
    // light fittings
    for (const l of L.lights) {
      const gg = (l.flicker ? fitF : fit)[l.zone], c = [l.r * 3.2, l.g * 3.2, l.b * 3.2];
      if (l.kind === 'ceil') {
        const top = L.ceil[L.idx(l.cx, l.cz)], y = Math.min(top - 0.02, l.y + 0.23);
        G('prop', l.cx, l.cz).box(L, l.x - 0.55, y - 0.1, l.z - 0.22, l.x + 0.55, y, l.z + 0.22, [0.12, 0.13, 0.14], true);
        if (top - y > 0.5) G('prop', l.cx, l.cz).box(L, l.x - 0.025, y, l.z - 0.025, l.x + 0.025, top, l.z + 0.025, [0.1, 0.1, 0.1]);      // hung on a rod from a high ceiling
        gg.quad([l.x - 0.48, y - 0.105, l.z - 0.15], [0.96, 0, 0], [0, 0, 0.3], c);
      } else if (l.kind === 'lamp') {
        G('prop', l.cx, l.cz).box(L, l.x - 0.12, 0, l.z - 0.12, l.x + 0.12, 0.5, l.z + 0.12, [0.5, 0.42, 0.1]);
        gg.box(l.x - 0.2, 0.5, l.z - 0.2, l.x + 0.2, 0.72, l.z + 0.2, c);
      }
    }
    this.buildPit(G, glow);
    for (const g of geos.values()) { if (!g.n) continue; const m = new THREE.Mesh(g.build(), this.mats[g.mat]); m.castShadow = g.mat !== 'floor' && g.mat !== 'ceil'; m.receiveShadow = true; m.matrixAutoUpdate = false; this.scene.add(m); }
    const gm = new THREE.Mesh(glow.build(), this.mats.glow); gm.matrixAutoUpdate = false; gm.frustumCulled = false; this.scene.add(gm);
    for (let z = 0; z < ZONES.length; z++) for (const [geo, mat] of [[fit[z], this.fitMat[z]], [fitF[z], this.fitMatF[z]]]) { if (!geo.n) continue; const m = new THREE.Mesh(geo.build(), mat); m.matrixAutoUpdate = false; m.frustumCulled = false; this.scene.add(m); }
  }

  buildProp(L, g, glow, cx, cz, c, kind, rnd) {
    if (c !== C.TALL && c !== C.LOW) return;
    const x0 = cx * T, z0 = cz * T, x1 = x0 + T, z1 = z0 + T, mx = x0 + T / 2, mz = z0 + T / 2;
    const B = (ix, y0, y1, col, iz = ix) => g.box(L, x0 + ix, y0, z0 + iz, x1 - ix, y1, z1 - iz, col);
    const grey = [0.42, 0.45, 0.48], dark = [0.14, 0.15, 0.17], steel = [0.55, 0.58, 0.6];
    const table = (top, col) => { g.box(L, x0 + 0.06, top - 0.09, z0 + 0.06, x1 - 0.06, top, z1 - 0.06, col, true); for (const [ax, az] of [[0.14, 0.14], [T - 0.26, 0.14], [0.14, T - 0.26], [T - 0.26, T - 0.26]]) g.box(L, x0 + ax, 0, z0 + az, x0 + ax + 0.12, top - 0.09, z0 + az + 0.12, dark); };
    switch (kind) {
      case 'crate': {
        const cols = [[0.42, 0.4, 0.26], [0.3, 0.36, 0.4], [0.5, 0.33, 0.2], [0.36, 0.38, 0.36]], col = cols[Math.floor(rnd() * cols.length)];
        if (c === C.LOW) { B(0.1 + rnd() * 0.12, 0, LOW_H, col); }
        else { B(0.08, 0, 1.25, col); const col2 = cols[Math.floor(rnd() * cols.length)]; g.box(L, x0 + 0.2, 1.25, z0 + 0.25, x1 - 0.3, 2.35, z1 - 0.2, col2); }
        break;
      }
      case 'console': case 'liftconsole': {
        B(0.1, 0, 0.82, dark); g.box(L, x0 + 0.14, 0.82, z0 + 0.14, x1 - 0.14, LOW_H - 0.02, z1 - 0.14, grey);
        if (kind === 'console') { const cc = rnd() < 0.5 ? [0.1, 0.55, 0.75] : [0.1, 0.6, 0.5]; glow.quad([x0 + 0.3, LOW_H, z0 + 0.3], [0, 0, 0.9], [0.7, 0, 0], cc); glow.quad([x0 + 1.15, LOW_H, z0 + 0.35], [0, 0, 0.25], [0.45, 0, 0], [0.9, 0.5, 0.1]); glow.quad([x0 + 1.15, LOW_H, z0 + 0.8], [0, 0, 0.12], [0.12, 0, 0], [0.2, 1.2, 0.3]); }
        break;
      }
      case 'desk': case 'table': case 'bench': table(LOW_H, kind === 'bench' ? [0.36, 0.38, 0.4] : [0.5, 0.5, 0.48]); if (rnd() < 0.5) g.box(L, mx - 0.3, LOW_H, mz - 0.2, mx + 0.1, LOW_H + 0.12, mz + 0.15, [0.25, 0.27, 0.3]); break;
      case 'counter': B(0.04, 0, 0.95, steel); g.box(L, x0, 0.95, z0, x1, LOW_H, z1, [0.3, 0.32, 0.34]); break;
      case 'bed': case 'bunk': {
        g.box(L, x0 + 0.12, 0, z0 + 0.06, x1 - 0.12, 0.42, z1 - 0.06, dark); g.box(L, x0 + 0.16, 0.42, z0 + 0.1, x1 - 0.16, 0.62, z1 - 0.1, kind === 'bed' ? [0.62, 0.68, 0.7] : [0.4, 0.44, 0.36]);
        g.box(L, x0 + 0.3, 0.62, z0 + 0.14, x1 - 0.3, 0.72, z0 + 0.6, [0.7, 0.72, 0.7]);
        if (kind === 'bunk') { for (const [ax, az] of [[0.12, 0.06], [T - 0.2, 0.06], [0.12, T - 0.14], [T - 0.2, T - 0.14]]) g.box(L, x0 + ax, 0.42, z0 + az, x0 + ax + 0.08, LOW_H, z0 + az + 0.08, dark); g.box(L, x0 + 0.12, LOW_H - 0.08, z0 + 0.06, x1 - 0.12, LOW_H, z1 - 0.06, [0.3, 0.33, 0.3], true); }
        break;
      }
      case 'planter': B(0.12, 0, 0.7, [0.3, 0.3, 0.3]); g.box(L, x0 + 0.2, 0.7, z0 + 0.2, x1 - 0.2, LOW_H, z1 - 0.2, [0.12, 0.34, 0.14]); break;
      case 'pipes': for (let k = 0; k < 3; k++) g.box(L, x0, 0.12 + k * 0.32, z0 + 0.25 + k * 0.42, x1, 0.36 + k * 0.32, z0 + 0.5 + k * 0.42, [0.5, 0.36, 0.2], true); break;
      case 'ice': { const a = 0.1 + rnd() * 0.25, b = 0.1 + rnd() * 0.25; g.box(L, x0 + a, 0, z0 + b, x1 - b, LOW_H - 0.15, z1 - a, [0.72, 0.86, 0.94]); g.box(L, x0 + a + 0.3, LOW_H - 0.15, z0 + b + 0.25, x1 - b - 0.4, LOW_H, z1 - a - 0.3, [0.8, 0.92, 0.98]); break; }
      case 'rack': {
        B(0.1, 0, 2.35, [0.09, 0.1, 0.11]);
        for (let k = 0; k < 9; k++) { const y = 0.5 + rnd() * 1.6, col = rnd() < 0.7 ? [0.1, 0.9, 0.3] : [1.0, 0.45, 0.05], a = 0.25 + rnd() * 1.4;
          glow.quad([x0 + a, y, z1 - 0.095], [0.05, 0, 0], [0, 0.04, 0], col); glow.quad([x0 + a + 0.05, y, z0 + 0.095], [-0.05, 0, 0], [0, 0.04, 0], col);
          glow.quad([x1 - 0.095, y, z0 + a + 0.05], [0, 0, -0.05], [0, 0.04, 0], col); glow.quad([x0 + 0.095, y, z0 + a], [0, 0, 0.05], [0, 0.04, 0], col); }
        break;
      }
      case 'growrack': {
        for (const [ax, az] of [[0.05, 0.25], [T - 0.13, 0.25], [0.05, T - 0.33], [T - 0.13, T - 0.33]]) g.box(L, x0 + ax, 0, z0 + az, x0 + ax + 0.08, 2.4, z0 + az + 0.08, dark);
        for (const y of [0.35, 1.1, 1.85]) {
          g.box(L, x0, y, z0 + 0.25, x1, y + 0.08, z1 - 0.25, grey, true);
          for (let k = 0; k < 3; k++) { const px = x0 + 0.2 + k * 0.6, hgt = 0.2 + rnd() * 0.3; g.box(L, px, y + 0.08, z0 + 0.45, px + 0.4, y + 0.08 + hgt, z1 - 0.45, [0.1 + rnd() * 0.08, 0.3 + rnd() * 0.2, 0.1]); }
          glow.quad([x0 + 0.1, y + 0.62, z0 + 0.4], [T - 0.2, 0, 0], [0, 0, 0.08], [1.1, 0.35, 1.6]);
        }
        g.box(L, x0, 2.4, z0 + 0.2, x1, 2.5, z1 - 0.2, dark, true);
        break;
      }
      case 'tank': g.prism(L, mx, mz, 0.85, 0, 2.5, 10, [0.52, 0.56, 0.58]); g.prism(L, mx, mz, 0.3, 2.5, 2.8, 6, dark); break;
      case 'spectank': {
        g.prism(L, mx, mz, 0.95, 0, 0.5, 10, dark); g.prism(L, mx, mz, 0.95, 2.3, 2.6, 10, dark);
        // lit glass between dark ribs, brighter towards the bottom where the sample sits
        for (let k = 0; k < 12; k++) {
          const a = k / 12 * 6.283, b = (k + 1) / 12 * 6.283;
          if (k % 3 === 0) { g.quad(L, [mx + Math.cos(b) * 0.84, 0.5, mz + Math.sin(b) * 0.84], [(Math.cos(a) - Math.cos(b)) * 0.84, 0, (Math.sin(a) - Math.sin(b)) * 0.84], [0, 1.8, 0], 1, 1, [0, 0], [0.3, 0], [0, 1], dark); continue; }
          for (let j = 0; j < 3; j++) { const f = [0.5, 0.26, 0.12][j]; glow.quad([mx + Math.cos(b) * 0.8, 0.5 + j * 0.6, mz + Math.sin(b) * 0.8], [(Math.cos(a) - Math.cos(b)) * 0.8, 0, (Math.sin(a) - Math.sin(b)) * 0.8], [0, 0.6, 0], [0.1 * f, 0.9 * f, 1.1 * f]); }
        }
        break;
      }
      case 'machine': {
        B(0.02, 0, 2.2, [0.26, 0.3, 0.28]); g.box(L, x0 + 0.3, 2.2, z0 + 0.3, x1 - 0.3, 2.7, z1 - 0.3, dark);
        g.box(L, x0 + 0.7, 2.7, z0 + 0.7, x0 + 1.0, 4.4, z0 + 1.0, [0.45, 0.33, 0.2]);
        glow.quad([x0 + 0.5, 1.5, z1 - 0.015], [0.18, 0, 0], [0, 0.1, 0], [1.6, 0.25, 0.05]); glow.quad([x0 + 0.68, 1.5, z0 + 0.015], [-0.18, 0, 0], [0, 0.1, 0], [1.6, 0.25, 0.05]);
        break;
      }
      case 'freezer': case 'fridge': B(0.06, 0, 2.3, [0.7, 0.74, 0.76]); glow.quad([x0 + 0.3, 1.9, z1 - 0.055], [0.16, 0, 0], [0, 0.06, 0], [0.2, 0.8, 1.2]); glow.quad([x0 + 0.46, 1.9, z0 + 0.055], [-0.16, 0, 0], [0, 0.06, 0], [0.2, 0.8, 1.2]); break;
      case 'cabinet': B(0.08, 0, 2.2, [0.5, 0.52, 0.5]); break;
      case 'stall': B(0.04, 0, 2.3, [0.56, 0.6, 0.6]); break;
      case 'shelf': {
        for (const [ax, az] of [[0.05, 0.05], [T - 0.13, 0.05], [0.05, T - 0.13], [T - 0.13, T - 0.13]]) g.box(L, x0 + ax, 0, z0 + az, x0 + ax + 0.08, 2.4, z0 + az + 0.08, dark);
        for (const y of [0.1, 0.85, 1.6, 2.32]) g.box(L, x0 + 0.05, y, z0 + 0.05, x1 - 0.05, y + 0.07, z1 - 0.05, grey, true);
        for (const y of [0.17, 0.92, 1.67]) for (let k = 0; k < 3; k++) if (rnd() < 0.8) { const px = x0 + 0.15 + k * 0.6, s = 0.3 + rnd() * 0.2; g.box(L, px, y, z0 + 0.25 + rnd() * 0.5, px + s, y + 0.25 + rnd() * 0.3, z0 + 0.9 + rnd() * 0.6, [0.3 + rnd() * 0.3, 0.3 + rnd() * 0.2, 0.25 + rnd() * 0.2]); }
        g.box(L, x0 + 0.1, 0.17, mz - 0.03, x1 - 0.1, 2.3, mz + 0.03, [0.2, 0.21, 0.22]);
        break;
      }
      default: if (c === C.TALL) B(0.08, 0, 2.3, grey); else B(0.1, 0, LOW_H, grey);
    }
  }

  buildPit(G, glow) {
    const L = this.L; let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (let i = 0; i < W * H; i++) if (L.cells[i] === C.PIT) { const x = i % W, z = (i / W) | 0; x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
    const ax = x0 * T, bx = (x1 + 1) * T, az = z0 * T, bz = (z1 + 1) * T, mx = (ax + bx) / 2, mz = (az + bz) / 2, g = G('prop', x0, z0), steel = [0.4, 0.43, 0.46], haz = [0.85, 0.6, 0.1];
    this.pit = { x: mx, z: mz };
    g.prism(L, mx, mz, 1.1, -30, 9, 10, [0.3, 0.32, 0.34], false);                         // the drill string
    g.prism(L, mx, mz, 1.5, 3.4, 4.2, 10, [0.5, 0.36, 0.14]); g.prism(L, mx, mz, 1.5, -1.2, -0.4, 10, [0.5, 0.36, 0.14]);
    for (let y = -4; y > -30; y -= 5) for (let k = 0; k < 10; k++) { const a = k / 10 * 6.283, b = (k + 1) / 10 * 6.283, r = 1.13; glow.quad([mx + Math.cos(b) * r, y, mz + Math.sin(b) * r], [(Math.cos(a) - Math.cos(b)) * r, 0, (Math.sin(a) - Math.sin(b)) * r], [0, 0.12, 0], [0.2, 1.5, 1.2]); }
    for (const [px, pz] of [[ax, az], [bx, az], [ax, bz], [bx, bz]]) g.box(L, px - 0.18, 0, pz - 0.18, px + 0.18, 9, pz + 0.18, steel);       // derrick legs
    for (const y of [5.5, 8.2]) { g.box(L, ax, y, az - 0.12, bx, y + 0.24, az + 0.12, steel, true); g.box(L, ax, y, bz - 0.12, bx, y + 0.24, bz + 0.12, steel, true); g.box(L, ax - 0.12, y, az, ax + 0.12, y + 0.24, bz, steel, true); g.box(L, bx - 0.12, y, az, bx + 0.12, y + 0.24, bz, steel, true); }
    g.box(L, ax, 8.2, mz - 0.2, bx, 8.6, mz + 0.2, steel, true); g.box(L, mx - 0.2, 8.2, az, mx + 0.2, 8.6, bz, steel, true);
    // the guard rail
    for (const y of [0.55, 1.05]) { g.box(L, ax, y, az - 0.035, bx, y + 0.07, az + 0.035, haz, true); g.box(L, ax, y, bz - 0.035, bx, y + 0.07, bz + 0.035, haz, true); g.box(L, ax - 0.035, y, az, ax + 0.035, y + 0.07, bz, haz, true); g.box(L, bx - 0.035, y, az, bx + 0.035, y + 0.07, bz, haz, true); }
    for (let x = ax + T; x < bx; x += T) for (const z of [az, bz]) g.box(L, x - 0.04, 0, z - 0.04, x + 0.04, 1.05, z + 0.04, haz);
    for (let z = az + T; z < bz; z += T) for (const x of [ax, bx]) g.box(L, x - 0.04, 0, z - 0.04, x + 0.04, 1.05, z + 0.04, haz);
  }

  // ------------------------------------------------------------------------------------------ doors
  buildDoors() {
    const L = this.L, frame = new Geo(), signs = [];
    const leafMat = this.mats.prop;
    for (const d of L.doors) {
      const ax = d.axis === 'x', len = d.len, half = len / 2;
      const grp = new THREE.Group(); grp.position.set(d.x, 0, d.z); this.scene.add(grp);
      const rec = { d, grp, leaves: [], open: -1, lamp: null, seal: null, sealed: false };
      if (d.gate) {
        const g = new Geo(), haz = [0.9, 0.62, 0.08], blk = [0.08, 0.08, 0.08];
        for (let k = 0; k <= len / 0.5; k++) { const p = -half + k * 0.5; g.box(L, d.x - 0.04, 0.05, d.z + p - 0.04, d.x + 0.04, 2.4, d.z + p + 0.04, k % 2 ? haz : blk, true); }
        for (const y of [0.3, 1.2, 2.3]) g.box(L, d.x - 0.06, y, d.z - half, d.x + 0.06, y + 0.1, d.z + half, haz, true);
        const geo = g.build(); geo.translate(-d.x, 0, -d.z);
        const m = new THREE.Mesh(geo, leafMat); m.castShadow = true; m.receiveShadow = true; grp.add(m); rec.leaves.push(m);
      } else {
        // two leaves that slide apart into the walls
        for (const s of [-1, 1]) {
          const g = new Geo(), a0 = s < 0 ? -half : 0, a1 = s < 0 ? 0 : half, col = [0.5, 0.54, 0.56], trim = [0.85, 0.6, 0.12];
          const bx = (p0, p1, y0, y1, t, c) => ax ? g.box(L, d.x + p0, y0, d.z - t, d.x + p1, y1, d.z + t, c, true) : g.box(L, d.x - t, y0, d.z + p0, d.x + t, y1, d.z + p1, c, true);
          bx(a0, a1, 0, DOOR_H, 0.07, col); bx(a0 + 0.08, a1 - 0.08, 0.9, 1.05, 0.085, trim); bx(a0 + 0.12, a1 - 0.12, 1.5, 2.1, 0.08, [0.2, 0.22, 0.24]);
          const geo = g.build(); geo.translate(-d.x, 0, -d.z);
          const m = new THREE.Mesh(geo, leafMat); m.castShadow = true; m.receiveShadow = true; m.userData.s = s; grp.add(m); rec.leaves.push(m);
        }
        // frame: posts, and a header that fills the gap above the leaves
        const top = Math.min(L.ceil[d.cells[0]], 3.4), fc = [0.2, 0.22, 0.24];
        const fb = (p0, p1, y0, y1, t) => ax ? frame.box(L, d.x + p0, y0, d.z - t, d.x + p1, y1, d.z + t, fc, true) : frame.box(L, d.x - t, y0, d.z + p0, d.x + t, y1, d.z + p1, fc, true);
        fb(-half, -half + 0.1, 0, DOOR_H, 0.16); fb(half - 0.1, half, 0, DOOR_H, 0.16); fb(-half, half, DOOR_H, top, 0.16);
        // indicator lamp, both sides
        const lg = new GlowGeo(), y = DOOR_H + 0.08;
        if (ax) { lg.quad([-0.14, y, 0.165], [0.28, 0, 0], [0, 0.07, 0], [1, 1, 1]); lg.quad([0.14, y, -0.165], [-0.28, 0, 0], [0, 0.07, 0], [1, 1, 1]); }
        else { lg.quad([0.165, y, 0.14], [0, 0, -0.28], [0, 0.07, 0], [1, 1, 1]); lg.quad([-0.165, y, -0.14], [0, 0, 0.28], [0, 0.07, 0], [1, 1, 1]); }
        rec.lamp = new THREE.Mesh(lg.build(), new THREE.MeshBasicMaterial({ color: 0xffaa22 })); grp.add(rec.lamp);
        // two steel bars welded across both faces and a red tell-tale, shown only on a match where this door has been sealed
        const sg = new Geo(), steel = [0.34, 0.33, 0.3], tb = 0.125;
        const bar = (p0, p1, y0, y1) => ax ? sg.box(L, d.x + p0, y0, d.z - tb, d.x + p1, y1, d.z + tb, steel, true) : sg.box(L, d.x - tb, y0, d.z + p0, d.x + tb, y1, d.z + p1, steel, true);
        for (const y of [0.62, 1.78]) bar(-half + 0.05, half - 0.05, y, y + 0.12);
        for (const q of [-half + 0.16, half - 0.3]) bar(q, q + 0.14, 0.5, 2.02);
        const sgeo = sg.build(); sgeo.translate(-d.x, 0, -d.z);
        const bars = new THREE.Mesh(sgeo, leafMat); bars.castShadow = true; bars.receiveShadow = true;
        const rg = new GlowGeo(), ry = 1.24;
        if (ax) { rg.quad([-0.2, ry, 0.092], [0.4, 0, 0], [0, 0.06, 0], [1, 1, 1]); rg.quad([0.2, ry, -0.092], [-0.4, 0, 0], [0, 0.06, 0], [1, 1, 1]); }
        else { rg.quad([0.092, ry, 0.2], [0, 0, -0.4], [0, 0.06, 0], [1, 1, 1]); rg.quad([-0.092, ry, -0.2], [0, 0, 0.4], [0, 0.06, 0], [1, 1, 1]); }
        rec.seal = new THREE.Group(); rec.seal.add(bars); rec.seal.add(new THREE.Mesh(rg.build(), this.sealMat)); rec.seal.visible = false; grp.add(rec.seal);
        // name plates: each side shows where the door leads
        const c0 = d.cells[0], cx = c0 % W, cz = (c0 / W) | 0;
        const sideA = ax ? L.idx(cx, cz - 1) : L.idx(cx - 1, cz), sideB = ax ? L.idx(cx, cz + 1) : L.idx(cx + 1, cz);
        const nameOf = i => { const r = L.roomId[i]; return r >= 0 ? L.rooms[r] : null; };
        const ra = nameOf(sideA), rb = nameOf(sideB);
        if (top >= 3.1) for (const [room, sgn] of [[rb, -1], [ra, 1]]) {      // the plate on side A names B, and the other way round
          if (!room || room.kind !== 'room') continue;
          signs.push({ text: room.name, x: d.x + (ax ? 0 : sgn * 0.17), z: d.z + (ax ? sgn * 0.17 : 0), ry: ax ? (sgn > 0 ? 0 : Math.PI) : (sgn > 0 ? Math.PI / 2 : -Math.PI / 2) });
        }
      }
      this.doors.push(rec);
    }
    const fm = new THREE.Mesh(frame.build(), this.mats.prop); fm.castShadow = true; fm.receiveShadow = true; fm.matrixAutoUpdate = false; this.scene.add(fm);
    const cache = new Map(), pg = new THREE.PlaneGeometry(1.5, 0.28);
    for (const s of signs) {
      let mat = cache.get(s.text); if (!mat) { mat = new THREE.MeshBasicMaterial({ map: signTexture(s.text), color: 0x9a9a9a }); cache.set(s.text, mat); }
      const m = new THREE.Mesh(pg, mat); m.position.set(s.x, DOOR_H + 0.42, s.z); m.rotation.y = s.ry; m.matrixAutoUpdate = false; m.updateMatrix(); this.scene.add(m);
    }
  }

  // ------------------------------------------------------------------------------------------ the lift
  buildLift() {
    const L = this.L, lf = L.lift, grp = new THREE.Group(); grp.position.set(lf.x, 0, lf.z);
    const body = this.ambient({ color: 0x6b6f4a, roughness: 0.6, metalness: 0.4 });
    const add = (w, h, d, x, y, z, mat = body) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; grp.add(m); return m; };
    add(7.6, 0.14, 7.6, 0, 0.07, 0);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(0.16, 3.1, 0.16, sx * 3.7, 1.6, sz * 3.7);
    add(7.6, 0.12, 7.6, 0, 3.2, 0); for (const sz of [-1, 1]) add(7.6, 0.08, 0.08, 0, 1.1, sz * 3.72); add(0.08, 0.08, 7.6, -3.72, 1.1, 0);
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xfff0c0 }); add(1.2, 0.06, 0.4, 0, 3.12, 0, lampMat);
    this.liftLight = new THREE.PointLight(0xffe2a8, 0, 14, 1.6); this.liftLight.position.set(0, 2.8, 0); grp.add(this.liftLight);
    grp.position.y = 16; this.scene.add(grp); this.liftGrp = grp; this.liftBody = body; this.liftY = 16;
    // the call panel's screen, and the beacon over the gate
    const c = lf.console; this.liftScreen = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.8), new THREE.MeshBasicMaterial({ color: 0xff2200 }));
    this.liftScreen.rotation.x = -Math.PI / 2; this.liftScreen.position.set(c.x, LOW_H + 0.005, c.z); this.scene.add(this.liftScreen);
    this.beacon = new THREE.PointLight(0xff8a1e, 0, 22, 1.4); this.beacon.position.set(lf.x + 6.5, 3.6, lf.z); this.scene.add(this.beacon);
    this.beaconMesh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshBasicMaterial({ color: 0x331a05 })); this.beaconMesh.position.copy(this.beacon.position); this.scene.add(this.beaconMesh);
  }

  // ------------------------------------------------------------------------------------------ things that belong to one match
  glowSprite(color, size) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); s.scale.set(size, size, 1); return s; }
  makeTag() {
    const g = new THREE.Group(), mat = this.ambient({ color: 0x8c9296, roughness: 0.5, metalness: 0.3 }), dark = this.ambient({ color: 0x15181b, roughness: 0.3, metalness: 0.5 });
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.27, 14, 10), mat); helm.position.set(-0.25, 0.25, 0.1); helm.scale.set(1, 0.95, 1.1); helm.castShadow = true; g.add(helm);
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), dark); visor.position.set(-0.25, 0.27, 0.27); visor.scale.set(1, 0.7, 0.6); g.add(visor);
    const tag = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.3), dark); tag.position.set(0.25, 0.03, -0.1); tag.rotation.y = 0.5; g.add(tag);
    const led = this.glowSprite(0x5dffb0, 0.55); led.position.set(0.25, 0.14, -0.1); g.add(led);
    g.userData = { led, mats: [mat, dark] };
    return g;
  }
  makeSounder(scale = 1) {
    const g = new THREE.Group(), mat = this.ambient({ color: 0xb37a1c, roughness: 0.45, metalness: 0.4 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.24, 10), mat); body.rotation.z = Math.PI / 2; body.position.y = 0.07; body.castShadow = true; g.add(body);
    const led = this.glowSprite(0xffa030, 0.4); led.position.set(0, 0.16, 0); g.add(led);
    g.scale.setScalar(scale); g.userData = { led, mats: [mat] };
    return g;
  }
  setLayout(layout) {
    for (const r of this.doors) { r.sealed = layout.sealed.includes(r.d.id); if (r.seal) r.seal.visible = r.sealed; r.open = -1; }
    for (const t of this.tags) this.scene.remove(t.obj); for (const t of this.items) this.scene.remove(t.obj);
    for (const d of this.decoys.values()) this.scene.remove(d.obj); this.decoys.clear();
    const col = new THREE.Color();
    this.tags = layout.tags.map((t, i) => { const obj = this.makeTag(); obj.position.set(t.x, 0, t.z); obj.rotation.y = i * 2.4; this.scene.add(obj); this.ambientAt(t.x, 0.3, t.z, col); for (const m of obj.userData.mats) m.userData.amb.value.copy(col); return { obj, taken: false, x: t.x, z: t.z, ph: i * 1.7 }; });
    this.items = layout.items.map((t, i) => { const obj = this.makeSounder(1.3); obj.position.set(t.x, 0, t.z); obj.rotation.y = i * 1.9; this.scene.add(obj); this.ambientAt(t.x, 0.3, t.z, col); for (const m of obj.userData.mats) m.userData.amb.value.copy(col); return { obj, taken: false, x: t.x, z: t.z, ph: i * 2.3 }; });
  }

  // ------------------------------------------------------------------------------------------ every frame
  // rep is the page's picture of the match (see net/session.js). cam is the viewer's position, for cheap distance tests.
  update(dt, rep) {
    this.time += dt;
    // failing lights: mostly on, with stutters
    this.flickT -= dt; if (this.flickT <= 0) { const r = Math.random(); this.flickTo = r < 0.18 ? 0.08 : r < 0.3 ? 0.5 : 1; this.flickT = this.flickTo < 1 ? 0.04 + Math.random() * 0.14 : 0.1 + Math.random() * 1.6; }
    this.flick += (this.flickTo - this.flick) * Math.min(1, dt * 40);
    this.uni.uFlick.value = this.flick;
    for (let z = 0; z < this.pow.length; z++) { const on = 0.04 + 0.96 * Math.min(1, this.pow[z]); this.fitMat[z].color.setScalar(on); this.fitMatF[z].color.setScalar(on * (0.1 + 0.9 * this.flick)); }
    if (!rep) return;
    for (const r of this.doors) {
      const o = rep.doorOpen[r.d.id]; if (o === r.open && r.jam === rep.doorJam[r.d.id]) continue; r.open = o; r.jam = rep.doorJam[r.d.id];
      if (r.d.gate) r.leaves[0].position.y = o * 2.7;
      else { const s = o * (r.d.len / 2 - 0.06); for (const m of r.leaves) { if (r.d.axis === 'x') m.position.x = m.userData.s * s; else m.position.z = m.userData.s * s; } r.lamp.material.color.setHex(r.sealed || r.jam ? 0xff2a12 : rep.doorWant[r.d.id] ? 0x38ff8a : 0xffa424); }
    }
    for (let i = 0; i < this.tags.length; i++) { const t = this.tags[i], taken = !!(rep.tagBits & (1 << i)); if (taken !== t.taken) { t.taken = taken; t.obj.visible = !taken; } if (!taken) t.obj.userData.led.material.opacity = 0.35 + 0.65 * Math.max(0, Math.sin(this.time * 3.2 + t.ph)); }
    for (let i = 0; i < this.items.length; i++) { const t = this.items[i], taken = !!(rep.itemBits & (1 << i)); if (taken !== t.taken) { t.taken = taken; t.obj.visible = !taken; } if (!taken) t.obj.userData.led.material.opacity = 0.2 + 0.5 * Math.max(0, Math.sin(this.time * 2.1 + t.ph)); }
    // thrown sounders
    for (const d of this.decoys.values()) d.live = false;
    for (const [id, s] of rep.decoys) {
      let d = this.decoys.get(id); if (!d) { d = { obj: this.makeSounder(1.2), spin: Math.random() * 6 }; this.scene.add(d.obj); this.decoys.set(id, d); }
      d.live = true; d.obj.position.set(s.x, s.y, s.z); d.state = s.state;
      if (s.state === 0) { d.spin += dt * 14; d.obj.rotation.set(d.spin, d.spin * 0.7, 0); } else d.obj.rotation.set(0, d.spin, 0);
      d.obj.userData.led.material.opacity = s.state === 1 ? (Math.sin(this.time * 11.4) > 0 ? 1 : 0.15) : s.state === 0 ? 0.7 : 0.05;
      d.obj.userData.led.scale.setScalar(s.state === 1 ? 1.2 : 0.4);
    }
    for (const [id, d] of this.decoys) if (!d.live) { this.scene.remove(d.obj); this.decoys.delete(id); }
    // the lift: up the shaft until it is called, then it comes down over the last few seconds
    const lf = rep.lift; let y = 16;
    if (lf.state === LIFT.CALLED) y = 16 * clamp01(lf.timer / 9); else if (lf.state === LIFT.ARRIVED) y = 0; else if (lf.state === LIFT.LEFT) y = Math.min(16, this.liftY + dt * 4);
    this.liftY = lf.state === LIFT.LEFT ? y : this.liftY + (y - this.liftY) * Math.min(1, dt * 6); this.liftGrp.position.y = this.liftY;
    this.liftLight.intensity = this.liftY < 12 ? 26 : 0;
    this.liftBody.userData.amb.value.setRGB(0.25, 0.22, 0.14);
    const blink = Math.sin(this.time * 6) > 0;
    this.liftScreen.material.color.setHex(lf.state === LIFT.LOCKED ? 0xc01808 : lf.state === LIFT.READY ? (blink ? 0x30ff80 : 0x0c6030) : lf.state === LIFT.CALLED ? (blink ? 0xffa010 : 0x402800) : 0x30ff80);
    const alarm = lf.state === LIFT.CALLED;
    this.beacon.intensity = alarm ? 14 * (0.55 + 0.45 * Math.sin(this.time * 7)) : 0;
    this.beaconMesh.material.color.setHex(alarm && blink ? 0xffa030 : 0x331a05);
  }
}
