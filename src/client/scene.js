// Builds the ship in three.js from the level description, and keeps the moving parts (doors and bulkheads, tags, sounders,
// stations, vent hatches, the escape pod) in step with the match. Fixed lights are worked out once per vertex at load time;
// only lamps and a few small lights are live. Out of the hull windows there is nothing but stars and a planet below.
import * as THREE from 'three';
import { T, W, H, C, LOW_H, DUCT_H, lightAt, ZONES } from '../level.js';
import { makeTextures, glowTexture, signTexture, decalSheet, waySign } from './textures.js';
import { distField } from '../nav.js';
import { rng32, clamp01 } from '../util.js';
import { LIFT, PWR } from '../sim/defs.js';

const BLOCK = 12;       // the level is cut into blocks of this many tiles so that what is off screen is not drawn
// The four sides of a tile: which way the neighbour lies; where that wall starts; which way it runs (left to right for
// someone facing it); texture start and direction.
const SIDES = [
  [0, -1, (x0, z0) => [x0, z0], [T, 0, 0], (cx, cz) => cx, 1],
  [0, 1, (x0, z0) => [x0 + T, z0 + T], [-T, 0, 0], (cx, cz) => cx + 1, -1],
  [-1, 0, (x0, z0) => [x0, z0 + T], [0, 0, -T], (cx, cz) => cz + 1, -1],
  [1, 0, (x0, z0) => [x0 + T, z0], [0, 0, T], (cx, cz) => cz, 1],
];
const DOOR_H = 2.5;

// ---------------------------------------------------------------------------------------------- geometry with baked light
class Geo {
  constructor() { this.pos = []; this.nor = []; this.uv = []; this.col = []; this.bk = []; this.bk2 = []; this.zw = []; this.em = []; this.idx = []; this.n = 0; }
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
      this.em.push(e[11] * gain, e[12]);          // red from the emergency lamps, and whose circuit they stand in for
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
    g.setAttribute('em', new THREE.Float32BufferAttribute(this.em, 2));
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

function mergeBoxes(list) {
  const pos = [], nor = [], idx = []; let base = 0;
  for (const g of list) { const p = g.attributes.position, n = g.attributes.normal, ix = g.index; for (let i = 0; i < p.count; i++) { pos.push(p.getX(i), p.getY(i), p.getZ(i)); nor.push(n.getX(i), n.getY(i), n.getZ(i)); } for (let i = 0; i < ix.count; i++) idx.push(ix.getX(i) + base); base += p.count; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setIndex(idx); return g;
}
function hash3(x, y, z) { let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(z | 0, 2147483647); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), fx = x - xi, fy = y - yi, fz = z - zi;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy), sz = fz * fz * (3 - 2 * fz);
  const l = (a, b, t) => a + (b - a) * t;
  return l(l(l(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), sx), l(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), sx), sy),
    l(l(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), sx), l(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), sx), sy), sz);
}

const SPACE_VS = 'varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
const SPACE_FS = `varying vec3 vW; uniform float uTime;
float hs(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
vec3 stars(vec3 d, float sc, float thr) {
  vec3 p = d * sc, c = floor(p), f = fract(p) - 0.5; float r = hs(c); if (r < thr) return vec3(0.0);
  vec3 o = vec3(hs(c + 1.7), hs(c + 3.1), hs(c + 5.3)) - 0.5; float dd = length(f - o * 0.6);
  float tw = 0.75 + 0.25 * sin(uTime * (1.0 + 3.0 * hs(c + 7.7)) + r * 40.0);
  return vec3(smoothstep(0.09, 0.0, dd) * (r - thr) / (1.0 - thr) * tw) * mix(vec3(1.0, 0.82, 0.68), vec3(0.68, 0.84, 1.0), hs(c + 9.1));
}
void main() {
  vec3 d = normalize(vW - cameraPosition);
  vec3 col = vec3(0.0004, 0.0006, 0.0012) + stars(d, 80.0, 0.955) * 1.6 + stars(d, 210.0, 0.982) * 0.9;
  float band = dot(d, normalize(vec3(0.25, 0.85, 0.45))); col += vec3(0.006, 0.005, 0.009) * exp(-band * band * 9.0);
  vec3 pd = normalize(vec3(0.3, -0.62, 0.72)); float cp = dot(d, pd), R = 0.9;
  if (cp > R - 0.02) {
    vec3 q = (d - pd * cp) / sqrt(1.0 - R * R); float rr = length(q);
    vec3 up = normalize(cross(pd, vec3(1.0, 0.0, 0.0))), side = cross(up, pd);
    float lat = dot(q, up), lon = dot(q, side), z = sqrt(max(0.0, 1.0 - rr * rr));
    vec3 n = normalize(side * lon + up * lat - pd * z);
    float lit = clamp(dot(n, normalize(vec3(-0.75, 0.45, -0.2))), 0.0, 1.0);
    vec3 bands = mix(vec3(0.42, 0.27, 0.16), vec3(0.62, 0.5, 0.36), 0.5 + 0.5 * sin(lat * 15.0 + sin(lon * 4.0 + lat * 6.0) * 1.6));
    vec3 planet = bands * (0.02 + 1.1 * lit) + vec3(0.25, 0.4, 0.6) * pow(rr, 5.0) * (0.15 + lit);
    col = mix(col, planet, smoothstep(R - 0.004, R + 0.002, cp));
  }
  gl_FragColor = vec4(col, 1.0);
}`;

export class Scene3D {
  constructor(L, opts = {}) {
    this.L = L;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x04070a, 0.03);
    this.uni = { uFlick: { value: 1 }, uBakeGain: { value: 6 }, uZone0: { value: 1 }, uZone: { value: new THREE.Vector4(1, 1, 1, 1) }, uOff0: { value: 0 }, uOff: { value: new THREE.Vector4(0, 0, 0, 0) } };
    this.pow = new Float32Array(ZONES.length).fill(1);       // how much light each power circuit is giving right now (see setPower)
    this.off = new Float32Array(ZONES.length);               // and how far each has gone over to its emergency lamps
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
    this.emMat = ZONES.map(() => new THREE.MeshBasicMaterial({ color: 0x300604 }));
    this.sheet = decalSheet();
    this.mats.decal = this.baked({ map: this.sheet.tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3, roughness: 0.6, metalness: 0.0 });
    this.dress = null; this.signs = []; this.breakers = []; this.wallFaces = []; this.zones = null; this.stationsActive = null;
    // what is outside the windows: worked out per pixel from the direction you look, so it sits at infinity
    this.spaceMat = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 } }, vertexShader: SPACE_VS, fragmentShader: SPACE_FS });
    this.pit = { x: 30, z: 19 };
    this.mats.ice.normalScale.set(1.4, 1.4);
    this.doors = []; this.tags = []; this.items = []; this.decoys = new Map(); this.sprites = [];
    this.buildStatic();
    this.buildDoors();
    this.buildLift();
    this.buildBreakers();
    this.buildStations();
    this.buildVents();
    this.buildSigns();
    this.scene.add(new THREE.AmbientLight(0x8fb4d0, 0.3));
  }

  // A standard material that also takes the light worked out at load time (the bake / bake2 vertex data).
  baked(params) {
    const m = new THREE.MeshStandardMaterial(Object.assign({ vertexColors: true }, params)), uni = this.uni;
    m.onBeforeCompile = sh => {
      sh.uniforms.uFlick = uni.uFlick; sh.uniforms.uBakeGain = uni.uBakeGain; sh.uniforms.uZone0 = uni.uZone0; sh.uniforms.uZone = uni.uZone; sh.uniforms.uOff0 = uni.uOff0; sh.uniforms.uOff = uni.uOff;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute vec3 bake;\nattribute vec3 bake2;\nattribute vec4 zw;\nattribute vec2 em;\nvarying vec3 vBake;\nuniform float uFlick;\nuniform float uBakeGain;\nuniform float uZone0;\nuniform vec4 uZone;\nuniform float uOff0;\nuniform vec4 uOff;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat emOn = em.y < 0.5 ? uOff0 : em.y < 1.5 ? uOff.x : em.y < 2.5 ? uOff.y : em.y < 3.5 ? uOff.z : uOff.w;\nvBake = ((bake + bake2 * uFlick) * (uZone0 * (1.0 - zw.x - zw.y - zw.z - zw.w) + dot(zw, uZone)) + vec3(1.0, 0.1, 0.045) * (em.x * emOn)) * uBakeGain;');
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
    const g0 = this.uni.uBakeGain.value * 2.0, g = g0 * (zt > 1e-9 ? (e[6] * p[0] + e[7] * p[1] + e[8] * p[2] + e[9] * p[3] + e[10] * p[4]) / zt : 1), red = e[11] * this.off[e[12]] * g0;
    return out.setRGB((e[0] + e[3] * f) * g + red, (e[1] + e[4] * f) * g + red * 0.1, (e[2] + e[5] * f) * g + red * 0.045);
  }
  // levels: how bright each of the five circuits is, 0 to 1. all: one more factor over the lot (a flicker, a dip).
  setPower(levels, all = 1) {
    const p = this.pow, o = this.off; for (let z = 0; z < p.length; z++) { p[z] = levels[z] * all; o[z] = clamp01((1 - levels[z]) / 0.93); }
    this.uni.uZone0.value = p[0]; this.uni.uZone.value.set(p[1], p[2], p[3], p[4]);
    this.uni.uOff0.value = o[0]; this.uni.uOff.value.set(o[1], o[2], o[3], o[4]);
  }

  // ------------------------------------------------------------------------------------------ everything that never moves
  buildStatic() {
    const L = this.L, geos = new Map(), glow = new GlowGeo(), fit = ZONES.map(() => new GlowGeo()), fitF = ZONES.map(() => new GlowGeo()), emFit = ZONES.map(() => new GlowGeo()), rnd = rng32(4471), space = new GlowGeo();
    // the cargo containers: each stack of tiles is one container, and one colour
    this.contCol = new Map(); { const pal = [[0.52, 0.22, 0.14], [0.2, 0.32, 0.42], [0.55, 0.42, 0.14], [0.26, 0.36, 0.26], [0.42, 0.44, 0.46]], seen = new Set();
      for (let i = 0; i < W * H; i++) { if (L.propKind[i] !== 'container' || seen.has(i)) continue; const st = [i], col = pal[(i * 7) % pal.length]; seen.add(i); while (st.length) { const k = st.pop(); this.contCol.set(k, col); for (const m of [k - 1, k + 1, k - W, k + W]) if (L.propKind[m] === 'container' && !seen.has(m)) { seen.add(m); st.push(m); } } } }
    const solid = n => !open(n), steel = [0.2, 0.22, 0.24], copper = [0.34, 0.24, 0.13], dull = [0.16, 0.17, 0.19];
    // where a frame (two posts and a beam) can stand: plain floor, not ice, not a doorway
    const framed = n => { const cc = L.cells[n]; return (cc === C.FLOOR || cc === C.TALL || cc === C.LOW) && L.doorAt[n] < 0 && !L.ice[n]; };
    const G = (name, cx, cz) => { const k = name + ':' + ((cx / BLOCK) | 0) + ':' + ((cz / BLOCK) | 0); let g = geos.get(k); if (!g) { g = new Geo(); g.mat = name; geos.set(k, g); } return g; };
    const open = i => { const c = L.cells[i]; return c !== C.SOLID && c !== C.LOCKER; };
    const iceDisp = (x, y, z) => 0.05 + 0.32 * vnoise(x * 0.9, y * 0.9, z * 0.9);
    for (let cz = 1; cz < H - 1; cz++) for (let cx = 1; cx < W - 1; cx++) {
      const i = cz * W + cx, c = L.cells[i]; if (!open(i)) continue;
      const isIce = !!L.ice[i], x0 = cx * T, z0 = cz * T, h = L.ceil[i];
      const fm = isIce ? 'ice' : 'floor', wm = isIce ? 'ice' : 'wall', cm = isIce ? 'ice' : 'ceil';
      const isGate = L.doorAt[i] >= 0 && L.doors[L.doorAt[i]].gate;
      let ft = [1, 1, 1];
      if (c === C.LIFT) ft = [1.25, 1.0, 0.35]; else if (c === C.DUCT) ft = [0.55, 0.55, 0.6]; else if (isGate) ft = [1.2, 1.0, 0.45];
      else if (isIce) ft = [0.6, 0.66, 0.72];
      else if (L.doorAt[i] >= 0) ft = [1.12, 0.96, 0.5];              // a worn yellow threshold in every doorway
      else { for (const n of [i - 1, i + 1, i - W, i + W]) if (L.cells[n] === C.PIT) ft = [1.25, 1.05, 0.5]; }
      if (c !== C.PIT) G(fm, cx, cz).quad(L, [x0, 0, z0], [0, 0, T], [T, 0, 0], 2, 2, [cx, cz], [0, 1], [1, 0], ft);
      const ct = isIce ? [0.55, 0.62, 0.68] : c === C.DUCT ? [0.5, 0.5, 0.55] : [1, 1, 1];
      if (h < 12) G(cm, cx, cz).quad(L, [x0, h, z0], [T, 0, 0], [0, 0, T], isIce ? 4 : 2, isIce ? 4 : 2, [cx, cz], [1, 0], [0, 1], ct, isIce ? (x, y, z) => 0.5 * vnoise(x * 0.8, 7, z * 0.8) * Math.min(1, Math.min(x - x0, x0 + T - x, z - z0, z0 + T - z) * 3) : null);
      const room0 = L.roomId[i] >= 0 ? L.rooms[L.roomId[i]] : null, hallC = !!room0 && room0.kind === 'hall' && c === C.FLOOR && h <= 3.6 && L.doorAt[i] < 0;
      for (let side = 0; side < 4; side++) {
        const [dx, dz, org, u, ub, ud] = SIDES[side];
        const n = i + dx + dz * W, nc = L.cells[n], o = org(x0, z0);
        const wall = (y0, y1, tint, mat = wm) => {
          if (y1 - y0 < 0.02) return;
          G(mat, cx, cz).quad(L, [o[0], y0, o[1]], u, [0, y1 - y0, 0], isIce && mat === 'ice' ? 4 : 2, Math.max(1, Math.round((y1 - y0) / 1.07)), [ub(cx, cz), y0 / 3.2], [ud, 0], [0, (y1 - y0) / 3.2], tint, isIce && mat === 'ice' ? iceDisp : null);
        };
        const wt = isIce ? [0.62, 0.7, 0.76] : c === C.DUCT ? [0.5, 0.5, 0.55] : c === C.LIFT ? [0.6, 0.6, 0.62] : [1, 1, 1];
        if (c === C.PIT) { if (nc !== C.PIT) wall(-30, 0, [0.45, 0.5, 0.55]); if (!open(n)) wall(0, h, wt); else if (L.ceil[n] < h - 0.01) wall(L.ceil[n], h, wt); continue; }
        if (!open(n)) {
          // corridors have their top corners cut off at an angle, with a strip light along one side
          const top = hallC ? h - 0.45 : h, nx = -dx, nz = -dz, uN = [u[0] / T, 0, u[2] / T];
          if (hallC) {
            G(wm, cx, cz).quad(L, [o[0], top, o[1]], u, [nx * 0.45, 0.45, nz * 0.45], 2, 1, [ub(cx, cz), top / 3.2], [ud, 0], [0, 0.2], [0.8, 0.84, 0.88]);
            if (side === 1 || side === 3) fit[L.zoneOf[i]].quad([o[0] + nx * 0.2, top + 0.2, o[1] + nz * 0.2], u, [nx * 0.05, 0.05, nz * 0.05], [0.35, 0.55, 0.75]);
          }
          if ((c === C.FLOOR || c === C.LIFT) && nc === C.SOLID && this.outboard(n, dx, dz) && !this.faceTaken(cx, cz, side)) {
            // a window in the hull: the wall round it, the sides of the opening, and space behind
            const big = room0 && room0.name === 'Bridge', y0 = big ? 0.75 : 1.1, y1 = Math.min(big ? top - 0.3 : 2.05, top - 0.15), a0 = big ? 0.12 : 0.45, a1 = T - a0, dep = 0.3;
            const P = (a, y, d) => [o[0] + uN[0] * a - nx * d, y, o[1] + uN[2] * a - nz * d];
            const strip = (a, b, ya, yb) => G(wm, cx, cz).quad(L, P(a, ya, 0), [uN[0] * (b - a), 0, uN[2] * (b - a)], [0, yb - ya, 0], 1, Math.max(1, Math.round((yb - ya) / 1.07)), [ub(cx, cz) + ud * a / T, ya / 3.2], [ud * (b - a) / T, 0], [0, (yb - ya) / 3.2], wt);
            strip(0, T, 0, y0); strip(0, T, y1, top); strip(0, a0, y0, y1); strip(a1, T, y0, y1);
            const F = G('prop', cx, cz), fr = [0.24, 0.26, 0.28];
            F.quad(L, P(a0, y0, 0), [uN[0] * (a1 - a0), 0, uN[2] * (a1 - a0)], [-nx * dep, 0, -nz * dep], 1, 1, [0, 0], [1, 0], [0, 0.2], fr);          // sill
            F.quad(L, P(a1, y1, 0), [-uN[0] * (a1 - a0), 0, -uN[2] * (a1 - a0)], [-nx * dep, 0, -nz * dep], 1, 1, [0, 0], [1, 0], [0, 0.2], fr);        // head
            F.quad(L, P(a0, y0, 0), [-nx * dep, 0, -nz * dep], [0, y1 - y0, 0], 1, 1, [0, 0], [0.2, 0], [0, 1], fr);                                      // jambs
            F.quad(L, P(a1, y0, dep), [nx * dep, 0, nz * dep], [0, y1 - y0, 0], 1, 1, [0, 0], [0.2, 0], [0, 1], fr);
            space.quad(P(a0, y0, dep), [uN[0] * (a1 - a0), 0, uN[2] * (a1 - a0)], [0, y1 - y0, 0], [1, 1, 1]);
            if (big) F.box(L, ...this.mullion(P(T / 2, y0, dep * 0.5), uN, y1 - y0), fr);
          } else wall(0, top, wt);
        }
        else if (L.ceil[n] < h - 0.01) wall(L.ceil[n], h, wt);
      }
      this.buildProp(L, G('prop', cx, cz), glow, cx, cz, c, L.propKind[i], rnd);
      // --- the structure: a frame every third tile, posts against the walls and a beam under the ceiling
      if (framed(i)) {
        const P = G('prop', cx, cz);
        if (cx % 3 === 0 && framed(i - 1)) {
          if (h <= 5.2) P.box(L, x0 - 0.09, h - 0.2, z0, x0 + 0.09, h, z0 + T, steel, true);
          if (solid(i - W) && solid(i - W - 1)) P.box(L, x0 - 0.11, 0, z0, x0 + 0.11, h, z0 + 0.13, steel);
          if (solid(i + W) && solid(i + W - 1)) P.box(L, x0 - 0.11, 0, z0 + T - 0.13, x0 + 0.11, h, z0 + T, steel);
        }
        if (cz % 3 === 0 && framed(i - W)) {
          if (h <= 5.2) P.box(L, x0, h - 0.2, z0 - 0.09, x0 + T, h, z0 + 0.09, steel, true);
          if (solid(i - 1) && solid(i - 1 - W)) P.box(L, x0, 0, z0 - 0.11, x0 + 0.13, h, z0 + 0.11, steel);
          if (solid(i + 1) && solid(i + 1 - W)) P.box(L, x0 + T - 0.13, 0, z0 - 0.11, x0 + T, h, z0 + 0.11, steel);
        }
        // --- pipe runs along one side of every corridor, under the beams
        const room = L.roomId[i] >= 0 ? L.rooms[L.roomId[i]] : null;
        if (room && room.kind === 'hall' && c === C.FLOOR && h <= 3.6) {
          const alongX = room.x1 - room.x0 >= room.z1 - room.z0;
          if (alongX && cz === room.z0 && solid(i - W)) { P.box(L, x0, h - 0.44, z0 + 0.3, x0 + T, h - 0.31, z0 + 0.43, copper, true); P.box(L, x0, h - 0.37, z0 + 0.56, x0 + T, h - 0.29, z0 + 0.64, dull, true); P.box(L, x0, h - 0.56, z0 + 0.14, x0 + T, h - 0.5, z0 + 0.2, dull, true); }
          if (!alongX && cx === room.x0 && solid(i - 1)) { P.box(L, x0 + 0.3, h - 0.44, z0, x0 + 0.43, h - 0.31, z0 + T, copper, true); P.box(L, x0 + 0.56, h - 0.37, z0, x0 + 0.64, h - 0.29, z0 + T, dull, true); P.box(L, x0 + 0.14, h - 0.56, z0, x0 + 0.2, h - 0.5, z0 + T, dull, true); }
        }
        // wall faces that marks can be left on, for dressing a match
        if (c === C.FLOOR && room) for (let k = 0; k < 4; k++) { const n = i + SIDES[k][0] + SIDES[k][1] * W; if (L.cells[n] === C.SOLID) this.wallFaces.push({ i, k, hall: room.kind === 'hall', cx, cz }); }
      }
    }
    // the emergency lamps' own housings, one colour per circuit so that they come up when it goes down
    for (const l of L.elights) { const g2 = emFit[l.zone]; if (l.dx) g2.box(l.x - 0.03, l.y - 0.05, l.z - 0.11, l.x + 0.03, l.y + 0.05, l.z + 0.11, [1, 1, 1]); else g2.box(l.x - 0.11, l.y - 0.05, l.z - 0.03, l.x + 0.11, l.y + 0.05, l.z + 0.03, [1, 1, 1]); }
    for (let z = 0; z < ZONES.length; z++) { if (!emFit[z].n) continue; const m = new THREE.Mesh(emFit[z].build(), this.emMat[z]); m.matrixAutoUpdate = false; m.frustumCulled = false; this.scene.add(m); }
    // the breaker boxes
    for (const b of L.breakers) {
      const g2 = G('prop', b.cx, b.cz), yel = [0.78, 0.6, 0.14], along = b.dx ? [0, 1] : [1, 0], nx = -b.dx, nz = -b.dz;
      const bx = (a0, a1, y0, y1, d0, d1, col) => { const xs = [b.x + along[0] * a0 + nx * d0, b.x + along[0] * a1 + nx * d1], zs = [b.z + along[1] * a0 + nz * d0, b.z + along[1] * a1 + nz * d1]; g2.box(L, Math.min(...xs), y0, Math.min(...zs), Math.max(...xs), y1, Math.max(...zs), col, true); };
      bx(-0.3, 0.3, 0.95, 1.75, 0, 0.14, yel); bx(-0.24, 0.24, 1.02, 1.42, 0.14, 0.16, [0.2, 0.2, 0.2]); bx(-0.05, 0.05, 1.1, 1.36, 0.16, 0.24, [0.75, 0.12, 0.08]);
      bx(-0.04, 0.04, 1.75, Math.min(L.ceil[L.idx(b.cx, b.cz)], 3.2), 0.02, 0.1, dull);
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
    this.buildReactor(G, fit);
    for (const g of geos.values()) { if (!g.n) continue; const m = new THREE.Mesh(g.build(), this.mats[g.mat]); m.castShadow = g.mat !== 'floor' && g.mat !== 'ceil'; m.receiveShadow = true; m.matrixAutoUpdate = false; this.scene.add(m); }
    const gm = new THREE.Mesh(glow.build(), this.mats.glow); gm.matrixAutoUpdate = false; gm.frustumCulled = false; this.scene.add(gm);
    if (space.n) { const sm = new THREE.Mesh(space.build(), this.spaceMat); sm.matrixAutoUpdate = false; sm.frustumCulled = false; this.scene.add(sm); }
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
      case 'reactor': break;                 // drawn whole, below
      case 'container': {
        const i = cz * W + cx, col = this.contCol.get(i) || grey, rib = col.map(v => v * 0.62), same = n => L.propKind[n] === 'container';
        B(0, 0, 2.7, col);
        for (let k = 1; k < 5; k++) { const p = k * T / 5;
          if (!same(i - W)) g.box(L, x0 + p - 0.035, 0.05, z0 - 0.025, x0 + p + 0.035, 2.65, z0, rib); if (!same(i + W)) g.box(L, x0 + p - 0.035, 0.05, z1, x0 + p + 0.035, 2.65, z1 + 0.025, rib);
          if (!same(i - 1)) g.box(L, x0 - 0.025, 0.05, z0 + p - 0.035, x0, 2.65, z0 + p + 0.035, rib); if (!same(i + 1)) g.box(L, x1, 0.05, z0 + p - 0.035, x1 + 0.025, 2.65, z0 + p + 0.035, rib); }
        break;
      }
      case 'engine': {
        B(0.02, 0, 3.1, [0.15, 0.16, 0.18]);
        for (const y of [0.55, 1.45, 2.35]) g.box(L, x0 - 0.02, y, z0 - 0.02, x1 + 0.02, y + 0.16, z1 + 0.02, [0.34, 0.27, 0.16]);
        g.box(L, x0 + 0.5, 3.1, z0 + 0.5, x1 - 0.5, 3.6, z1 - 0.5, [0.22, 0.23, 0.25]);
        if (rnd() < 0.5) glow.quad([x0 + 0.6, 1.9, z1 + 0.025], [0.2, 0, 0], [0, 0.08, 0], [1.6, 0.2, 0.05]);
        break;
      }
      case 'pillar': g.prism(L, mx, mz, 0.45, 0, L.ceil[cz * W + cx], 8, [0.28, 0.3, 0.32]); g.prism(L, mx, mz, 0.6, 0, 0.3, 8, [0.2, 0.21, 0.22]); break;
      case 'couch': g.box(L, x0 + 0.08, 0, z0 + 0.15, x1 - 0.08, 0.45, z1 - 0.15, [0.3, 0.22, 0.18]); g.box(L, x0 + 0.08, 0.45, z0 + 0.15, x1 - 0.08, 0.95, z0 + 0.45, [0.33, 0.25, 0.2]); break;
      default: if (c === C.TALL) B(0.08, 0, 2.3, grey); else B(0.1, 0, LOW_H, grey);
    }
  }

  // Is this solid tile part of the hull itself, with nothing beyond it but more hull and then space?
  outboard(n, dx, dz) { const L = this.L; let x = n % W, z = (n / W) | 0; for (;;) { x += dx; z += dz; if (x < 0 || z < 0 || x >= W || z >= H) return true; if (L.cells[z * W + x] !== C.SOLID) return false; } }
  // a wall face with something already on it (a breaker, a station) gets no window
  faceTaken(cx, cz, side) { const [dx, dz] = SIDES[side], L = this.L; return L.breakers.some(b => b.cx === cx && b.cz === cz && b.dx === dx && b.dz === dz) || L.stations.some(st => st.cx === cx && st.cz === cz && st.dx === dx && st.dz === dz); }
  mullion(p, uN, hgt) { const w = 0.05; return [p[0] - w - Math.abs(uN[2]) * 0.1, p[1], p[2] - w - Math.abs(uN[0]) * 0.1, p[0] + w + Math.abs(uN[2]) * 0.1, p[1] + hgt, p[2] + w + Math.abs(uN[0]) * 0.1]; }
  // The reactor: a core up through the deck, ringed with coolant bands that light only when it is running, and a rail round it.
  buildReactor(G, fit) {
    const L = this.L; let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (let i = 0; i < W * H; i++) if (L.propKind[i] === 'reactor') { const x = i % W, z = (i / W) | 0; x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
    if (x0 > x1) return;
    const ax = x0 * T, bx = (x1 + 1) * T, az = z0 * T, bz = (z1 + 1) * T, mx = (ax + bx) / 2, mz = (az + bz) / 2, g = G('prop', x0, z0), top = L.ceil[L.idx(x0, z0)], zone = L.zoneOf[L.idx(x0, z0)];
    const steel = [0.36, 0.39, 0.42], dark = [0.12, 0.13, 0.14], haz = [0.85, 0.6, 0.1];
    this.pit = { x: mx, z: mz };
    g.prism(L, mx, mz, 3.0, 0, top, 12, [0.22, 0.24, 0.26], false);
    g.prism(L, mx, mz, 3.3, 0, 0.6, 12, dark); g.prism(L, mx, mz, 3.25, top - 0.7, top, 12, dark, false);
    for (const y of [1.2, 2.4, 3.6, 4.8]) {
      if (y > top - 1) continue;
      g.prism(L, mx, mz, 3.12, y - 0.12, y + 0.12, 12, steel);
      for (let k = 0; k < 12; k++) { const a = k / 12 * 6.283, b = (k + 1) / 12 * 6.283, r = 3.02; fit[zone].quad([mx + Math.cos(b) * r, y + 0.2, mz + Math.sin(b) * r], [(Math.cos(a) - Math.cos(b)) * r, 0, (Math.sin(a) - Math.sin(b)) * r], [0, 0.3, 0], [0.2, 1.6, 1.4]); }
    }
    for (let k = 0; k < 8; k++) { const a = k / 8 * 6.283; g.box(L, mx + Math.cos(a) * 3.3 - 0.12, 0, mz + Math.sin(a) * 3.3 - 0.12, mx + Math.cos(a) * 3.3 + 0.12, top, mz + Math.sin(a) * 3.3 + 0.12, steel); }
    for (const y of [0.55, 1.05]) { g.box(L, ax, y, az - 0.035, bx, y + 0.07, az + 0.035, haz, true); g.box(L, ax, y, bz - 0.035, bx, y + 0.07, bz + 0.035, haz, true); g.box(L, ax - 0.035, y, az, ax + 0.035, y + 0.07, bz, haz, true); g.box(L, bx - 0.035, y, az, bx + 0.035, y + 0.07, bz, haz, true); }
    for (let x = ax; x <= bx; x += T) for (const z of [az, bz]) g.box(L, x - 0.04, 0, z - 0.04, x + 0.04, 1.05, z + 0.04, haz);
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
        // the pod's hatch: a heavy slab with a porthole, striped round its edge, that slides up into the roof
        const g = new Geo(), haz = [0.9, 0.62, 0.08], blk = [0.08, 0.08, 0.08], plate = [0.32, 0.34, 0.36];
        const hb = (p0, p1, y0, y1, t, col) => ax ? g.box(L, d.x + p0, y0, d.z - t, d.x + p1, y1, d.z + t, col, true) : g.box(L, d.x - t, y0, d.z + p0, d.x + t, y1, d.z + p1, col, true);
        hb(-half, half, 0.02, 2.5, 0.1, plate);
        for (let k = 0; k < len / 0.4; k++) { const p = -half + k * 0.4; hb(p, p + 0.4, 2.25, 2.45, 0.115, k % 2 ? haz : blk); hb(p, p + 0.4, 0.06, 0.26, 0.115, k % 2 ? blk : haz); }
        hb(-0.35, 0.35, 1.2, 1.9, 0.115, blk);
        const geo = g.build(); geo.translate(-d.x, 0, -d.z);
        const m = new THREE.Mesh(geo, leafMat); m.castShadow = true; m.receiveShadow = true; grp.add(m); rec.leaves.push(m);
      } else {
        // two leaves that slide apart into the walls. A bulkhead's are thicker, and striped.
        const bulk = d.bulk >= 0;
        for (const s of [-1, 1]) {
          const g = new Geo(), a0 = s < 0 ? -half : 0, a1 = s < 0 ? 0 : half, col = bulk ? [0.3, 0.32, 0.34] : [0.5, 0.54, 0.56], trim = [0.85, 0.6, 0.12];
          const bx = (p0, p1, y0, y1, t, c) => ax ? g.box(L, d.x + p0, y0, d.z - t, d.x + p1, y1, d.z + t, c, true) : g.box(L, d.x - t, y0, d.z + p0, d.x + t, y1, d.z + p1, c, true);
          if (bulk) {
            bx(a0, a1, 0, DOOR_H, 0.14, col);
            for (let k = 0; k < 6; k++) { const p = a0 + (a1 - a0) * k / 6; bx(p + 0.02, p + (a1 - a0) / 6 - 0.02, 0.35, 0.65, 0.155, k % 2 ? [0.08, 0.08, 0.08] : trim); bx(p + 0.02, p + (a1 - a0) / 6 - 0.02, 1.9, 2.2, 0.155, k % 2 ? [0.08, 0.08, 0.08] : trim); }
            bx(a0 + 0.15, a1 - 0.15, 0.95, 1.55, 0.15, [0.2, 0.21, 0.22]);
          } else { bx(a0, a1, 0, DOOR_H, 0.07, col); bx(a0 + 0.08, a1 - 0.08, 0.9, 1.05, 0.085, trim); bx(a0 + 0.12, a1 - 0.12, 1.5, 2.1, 0.08, [0.2, 0.22, 0.24]); }
          const geo = g.build(); geo.translate(-d.x, 0, -d.z);
          const m = new THREE.Mesh(geo, leafMat); m.castShadow = true; m.receiveShadow = true; m.userData.s = s; grp.add(m); rec.leaves.push(m);
        }
        // frame: posts, and a header that fills the gap above the leaves
        const top = Math.min(L.ceil[d.cells[0]], 3.4), fc = [0.2, 0.22, 0.24];
        const fb = (p0, p1, y0, y1, t) => ax ? frame.box(L, d.x + p0, y0, d.z - t, d.x + p1, y1, d.z + t, fc, true) : frame.box(L, d.x - t, y0, d.z + p0, d.x + t, y1, d.z + p1, fc, true);
        const ft = bulk ? 0.34 : 0.16; fb(-half, -half + (bulk ? 0.25 : 0.1), 0, DOOR_H, ft); fb(half - (bulk ? 0.25 : 0.1), half, 0, DOOR_H, ft); fb(-half, half, DOOR_H, top, ft);
        if (bulk) for (const sg of [-1, 1]) {        // each side names the section beyond it
          const sec = L.sections[sg < 0 ? d.bulk + 1 : d.bulk];
          signs.push({ text: (sg < 0 ? '' : '') + 'SECTION ' + (sec.id + 1) + ' · ' + sec.name.toUpperCase(), x: d.x + (ax ? 0 : sg * 0.35), z: d.z + (ax ? sg * 0.35 : 0), ry: ax ? (sg > 0 ? 0 : Math.PI) : (sg > 0 ? Math.PI / 2 : -Math.PI / 2), big: true });
        }
        // indicator lamp, both sides
        const lg = new GlowGeo(), y = DOOR_H + 0.08;
        const lw = bulk ? 0.5 : 0.14, lh = bulk ? 0.12 : 0.07, lt = bulk ? 0.345 : 0.165;
        if (ax) { lg.quad([-lw, y, lt], [lw * 2, 0, 0], [0, lh, 0], [1, 1, 1]); lg.quad([lw, y, -lt], [-lw * 2, 0, 0], [0, lh, 0], [1, 1, 1]); }
        else { lg.quad([lt, y, lw], [0, 0, -lw * 2], [0, lh, 0], [1, 1, 1]); lg.quad([-lt, y, -lw], [0, 0, lw * 2], [0, lh, 0], [1, 1, 1]); }
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
    const cache = new Map(), pg = new THREE.PlaneGeometry(1.5, 0.28), pgBig = new THREE.PlaneGeometry(3.2, 0.42);
    for (const s of signs) {
      let mat = cache.get(s.text); if (!mat) { mat = new THREE.MeshBasicMaterial({ map: signTexture(s.text), color: 0x9a9a9a }); cache.set(s.text, mat); }
      const m = new THREE.Mesh(s.big ? pgBig : pg, mat); m.position.set(s.x, DOOR_H + (s.big ? 0.5 : 0.42), s.z); m.rotation.y = s.ry; m.matrixAutoUpdate = false; m.updateMatrix(); this.scene.add(m);
    }
  }

  // ------------------------------------------------------------------------------------------ the escape pod
  // The escape pod: seats round its walls, a light inside, a beacon over the hatch, and the screen on the console that primes it.
  buildLift() {
    const L = this.L, lf = L.lift, g = new Geo(); let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (const i of lf.cells) { const x = i % W, z = (i / W) | 0; x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
    const ax = x0 * T, bx = (x1 + 1) * T, az = z0 * T, bz = (z1 + 1) * T, seat = [0.55, 0.2, 0.1], frame = [0.2, 0.21, 0.23];
    const chair = (x, z, fx, fz) => { g.box(L, x - 0.32, 0, z - 0.32, x + 0.32, 0.45, z + 0.32, frame); g.box(L, x - 0.3, 0.45, z - 0.3, x + 0.3, 0.58, z + 0.3, seat); const bxx = x - fx * 0.3, bzz = z - fz * 0.3; g.box(L, Math.min(bxx, bxx - fx * 0.12) - (fz ? 0.3 : 0), 0.58, Math.min(bzz, bzz - fz * 0.12) - (fx ? 0.3 : 0), Math.max(bxx, bxx - fx * 0.12) + (fz ? 0.3 : 0), 1.5, Math.max(bzz, bzz - fz * 0.12) + (fx ? 0.3 : 0), seat); };
    for (const x of [ax + 1.2, (ax + bx) / 2, bx - 1.2]) chair(x, az + 0.55, 0, 1);
    chair(ax + 0.55, az + 2.4, 1, 0); chair(bx - 0.55, az + 2.4, -1, 0); chair(ax + 0.55, az + 3.7, 1, 0);
    for (const y of [0.0, 2.45]) g.box(L, ax, y, az, bx, y + 0.15, bz, frame, true);
    const m = new THREE.Mesh(g.build(), this.mats.prop); m.castShadow = true; m.receiveShadow = true; m.matrixAutoUpdate = false; this.scene.add(m);
    this.liftLight = new THREE.PointLight(0xffd7a0, 0, 9, 1.6); this.liftLight.position.set(lf.x, 2.2, lf.z); this.scene.add(this.liftLight);
    const c = lf.console; this.liftScreen = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.8), new THREE.MeshBasicMaterial({ color: 0xff2200 }));
    this.liftScreen.rotation.x = -Math.PI / 2; this.liftScreen.position.set(c.x, LOW_H + 0.005, c.z); this.scene.add(this.liftScreen);
    this.beacon = new THREE.PointLight(0xff8a1e, 0, 22, 1.4); this.beacon.position.set(lf.x, 3.4, bz + T + 0.6); this.scene.add(this.beacon);
    this.beaconMesh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshBasicMaterial({ color: 0x331a05 })); this.beaconMesh.position.copy(this.beacon.position); this.scene.add(this.beaconMesh);
  }
  // The things the crew has to work at: coolant pumps, the reactor lever, terminals, the bridge uplink. Each has a lamp
  // (red: not done, amber: being worked, green: done) and the terminals a screen.
  buildStations() {
    const L = this.L, g = new Geo(), dark = [0.13, 0.14, 0.15], steel = [0.4, 0.43, 0.46], yel = [0.8, 0.6, 0.12], rust = [0.42, 0.3, 0.18];
    this.stationRecs = [];
    for (const st of L.stations) {
      const along = st.dx ? [0, 1] : [1, 0], nx = -st.dx, nz = -st.dz, top = L.ceil[L.idx(st.cx, st.cz)];
      const bx = (a0, a1, y0, y1, d0, d1, col) => { const xs = [st.x + along[0] * a0 + nx * d0, st.x + along[0] * a1 + nx * d1], zs = [st.z + along[1] * a0 + nz * d0, st.z + along[1] * a1 + nz * d1]; g.box(L, Math.min(...xs), y0, Math.min(...zs), Math.max(...xs), y1, Math.max(...zs), col, true); };
      let lampY = 2.0, screen = null;
      if (st.kind === 'pump') {
        bx(-0.55, 0.55, 0, 1.75, 0, 0.45, [0.24, 0.3, 0.3]); bx(-0.62, 0.62, 1.75, 1.9, 0, 0.5, dark);
        for (const a of [-0.35, 0.35]) bx(a - 0.09, a + 0.09, 1.9, top, 0.12, 0.3, rust);
        for (let k = 0; k < 8; k++) { const t = k / 8 * 6.283, r = 0.3; bx(Math.cos(t) * r - 0.05, Math.cos(t) * r + 0.05, 1.05 + Math.sin(t) * r - 0.05, 1.05 + Math.sin(t) * r + 0.05, 0.45, 0.52, [0.7, 0.12, 0.08]); }
        bx(-0.04, 0.04, 0.78, 1.32, 0.45, 0.5, [0.7, 0.12, 0.08]); bx(-0.27, 0.27, 1.01, 1.09, 0.45, 0.5, [0.7, 0.12, 0.08]);
        lampY = 2.0;
      } else if (st.kind === 'lever') {
        bx(-0.5, 0.5, 0.7, 2.0, 0, 0.3, dark); for (let k = 0; k < 5; k++) bx(-0.5 + k * 0.2, -0.4 + k * 0.2, 0.7, 0.8, 0.3, 0.31, k % 2 ? [0.08, 0.08, 0.08] : yel);
        bx(-0.07, 0.07, 1.2, 1.9, 0.3, 0.42, steel); bx(-0.16, 0.16, 1.85, 2.0, 0.3, 0.5, [0.7, 0.12, 0.08]);
        lampY = 2.15;
      } else {
        const wide = st.kind === 'uplink' ? 0.7 : 0.5;
        bx(-wide - 0.06, wide + 0.06, 1.0, 2.0, 0, 0.12, dark); bx(-wide, wide, 0.0, 1.0, 0, 0.35, [0.22, 0.24, 0.26]); bx(-wide, wide, 0.95, 1.02, 0, 0.42, [0.3, 0.32, 0.34]);
        screen = new THREE.Mesh(new THREE.PlaneGeometry(wide * 1.8, 0.75), new THREE.MeshBasicMaterial({ color: 0x0a2a30 }));
        screen.position.set(st.x + nx * 0.125, 1.5, st.z + nz * 0.125); screen.rotation.y = Math.atan2(nx, nz); screen.matrixAutoUpdate = false; screen.updateMatrix(); this.scene.add(screen);
        lampY = 2.12;
      }
      const lamp = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.09), new THREE.MeshBasicMaterial({ color: 0xff2a12 }));
      const lo = st.kind === 'pump' ? 0.5 : st.kind === 'lever' ? 0.31 : 0.13;
      lamp.position.set(st.x + nx * lo, lampY, st.z + nz * lo); lamp.rotation.y = Math.atan2(nx, nz); lamp.matrixAutoUpdate = false; lamp.updateMatrix(); this.scene.add(lamp);
      this.stationRecs.push({ st, lamp, screen });
    }
    const m = new THREE.Mesh(g.build(), this.mats.prop); m.castShadow = true; m.receiveShadow = true; m.matrixAutoUpdate = false; this.scene.add(m);
  }
  // The hatches in the ceiling that the creature uses. Each is a frame in the ceiling and a grille that swings down when
  // something comes through it.
  buildVents() {
    const L = this.L, g = new Geo(), fr = [0.16, 0.17, 0.18], s = 0.62;
    for (const v of L.vents) {
      const h = L.ceil[v.cell], x = v.x, z = v.z;
      g.box(L, x - s - 0.1, h - 0.07, z - s - 0.1, x + s + 0.1, h - 0.01, z - s, fr, true); g.box(L, x - s - 0.1, h - 0.07, z + s, x + s + 0.1, h - 0.01, z + s + 0.1, fr, true);
      g.box(L, x - s - 0.1, h - 0.07, z - s, x - s, h - 0.01, z + s, fr, true); g.box(L, x + s, h - 0.07, z - s, x + s + 0.1, h - 0.01, z + s, fr, true);
    }
    const m = new THREE.Mesh(g.build(), this.mats.prop); m.matrixAutoUpdate = false; this.scene.add(m);
    // the grilles themselves: one instanced mesh for all of them, each hinged along one edge
    const gg = new THREE.BoxGeometry(s * 2, 0.025, s * 2); gg.translate(s, 0, 0);
    const slats = []; for (let k = 0; k < 6; k++) { const b = new THREE.BoxGeometry(s * 2, 0.06, 0.05); b.translate(s, -0.03, -s + 0.1 + k * (s * 2 - 0.2) / 5); slats.push(b); }
    const geo = mergeBoxes([gg, ...slats]);
    this.ventGrille = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x34383c, roughness: 0.55, metalness: 0.5 }), L.vents.length);
    this.ventSwing = new Float32Array(L.vents.length); this.ventT = new Float32Array(L.vents.length);
    this.ventGrille.frustumCulled = false; this.scene.add(this.ventGrille); this.placeVents(true);
  }
  // swing a hatch open (the creature is coming through it); it falls shut again a moment later
  ventKick(id) { if (id >= 0 && id < this.ventT.length) this.ventT[id] = 1.6; }
  placeVents(all) {
    const L = this.L, mm = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    for (let k = 0; k < L.vents.length; k++) {
      if (!all && this.ventT[k] <= 0 && this.ventSwing[k] === 0) continue;
      const v = L.vents[k]; p.set(v.x - 0.62, L.ceil[v.cell] - 0.05, v.z); e.set(0, 0, -this.ventSwing[k] * 1.45); q.setFromEuler(e); mm.compose(p, q, one); this.ventGrille.setMatrixAt(k, mm);
    }
    this.ventGrille.instanceMatrix.needsUpdate = true;
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
  // ------------------------------------------------------------------------------------------ breakers and the way out
  buildBreakers() {
    const geo = new THREE.PlaneGeometry(0.16, 0.1);
    for (const b of this.L.breakers) {
      const mat = new THREE.MeshBasicMaterial({ color: 0x30ff80 }), m = new THREE.Mesh(geo, mat), nx = -b.dx, nz = -b.dz;
      m.position.set(b.x + nx * 0.165, 1.56, b.z + nz * 0.165); m.rotation.y = Math.atan2(nx, nz); m.matrixAutoUpdate = false; m.updateMatrix(); this.scene.add(m);
      this.breakers.push({ b, mat });
    }
  }
  // Plates along the corridors that point the way to the escape pod. Which way each one points depends on the match,
  // because sealed doors change the shortest way, so each plate has both arrows and shows one.
  buildSigns() {
    const L = this.L, geo = new THREE.PlaneGeometry(1.0, 0.235), mats = [new THREE.MeshBasicMaterial({ map: waySign(-1), color: 0x8c8c8c }), new THREE.MeshBasicMaterial({ map: waySign(1), color: 0x8c8c8c })];
    for (const f of this.wallFaces) {
      if (!f.hall || (f.cx * 3 + f.cz * 5) % 6 !== 0 || this.signs.some(s => s.i === f.i)) continue;
      const [dx, dz] = SIDES[f.k], nx = -dx, nz = -dz, x = (f.cx + 0.5 + dx * 0.5) * T + nx * 0.02, z = (f.cz + 0.5 + dz * 0.5) * T + nz * 0.02;
      const rec = { i: f.i, right: f.i + (-dz) + dx * W, left: f.i - (-dz) - dx * W, m: [] };       // the tiles to the right and left of someone reading it
      for (const mat of mats) { const m = new THREE.Mesh(geo, mat); m.position.set(x, 2.12, z); m.rotation.y = Math.atan2(nx, nz); m.matrixAutoUpdate = false; m.updateMatrix(); m.visible = false; this.scene.add(m); rec.m.push(m); }
      this.signs.push(rec);
    }
  }
  routeSigns(layout) {
    const L = this.L, walk = L.walkP.slice(); for (const d of layout.sealed) for (const c of L.doors[d].cells) walk[c] = 0;
    const dist = distField(walk, L.idx(L.lift.console.cx, L.lift.console.cz)), at = n => (dist[n] >= 0 ? dist[n] : 1e9);
    for (const s of this.signs) { const here = at(s.i), r = at(s.right), l = at(s.left); s.m[0].visible = l < here && l <= r; s.m[1].visible = r < here && r < l; }
  }

  // ------------------------------------------------------------------------------------------ what was left behind
  // Stains, gouges, things scratched into the walls, and some of the crew. Laid out from the match's seed, so everyone sees the same.
  dressMatch(layout) {
    if (this.dress) { this.scene.remove(this.dress); this.dress.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
    const L = this.L, grp = this.dress = new THREE.Group(), r = rng32(((layout.seed | 0) ^ 0x5eed5) >>> 0), dg = new Geo(), bg = new Geo(), sh = this.sheet;
    const onFloor = (x, z, half, uv, tint = [1, 1, 1]) => dg.quad(L, [x - half, 0.014, z - half], [0, 0, half * 2], [half * 2, 0, 0], 1, 1, [uv[0], uv[1]], [0, uv[3]], [uv[2], 0], tint);
    // a: how far along the wall face it starts, in metres. The picture reads left to right for someone facing the wall.
    const onWall = (f, a, y0, w, h, uv, tint = [1, 1, 1]) => {
      const [dx, dz, org, u] = SIDES[f.k], o = org(f.cx * T, f.cz * T), ux = u[0] / T, uz = u[2] / T, nx = -dx, nz = -dz;
      dg.quad(L, [o[0] + ux * a + nx * 0.014, y0, o[1] + uz * a + nz * 0.014], [ux * w, 0, uz * w], [0, h, 0], 1, 1, [uv[0], uv[1]], [uv[2], 0], [0, uv[3]], tint);
    };
    const pick = arr => arr[Math.floor(r() * arr.length)];
    // some of the crew are still where they fell, beside their tags
    const suit = [0.44, 0.33, 0.21], dark = [0.1, 0.1, 0.11];
    layout.tags.forEach((t, n) => {
      if (r() > 0.6) return;
      const d = Math.floor(r() * 4), ax = [1, 0, -1, 0][d], az = [0, 1, 0, -1][d], bxp = -az, bzp = ax, x = t.x + bxp * 0.42, z = t.z + bzp * 0.42;
      const bx = (a0, a1, b0, b1, y0, y1, col) => { const xs = [x + ax * a0 + bxp * b0, x + ax * a1 + bxp * b1], zs = [z + az * a0 + bzp * b0, z + az * a1 + bzp * b1]; bg.box(L, Math.min(...xs), y0, Math.min(...zs), Math.max(...xs), y1, Math.max(...zs), col); };
      bx(-0.2, 0.5, -0.24, 0.24, 0, 0.2, suit); bx(0.5, 0.62, -0.13, 0.13, 0.02, 0.17, dark);                       // trunk, and the collar where the helmet was
      bx(-0.95, -0.2, -0.22, -0.05, 0, 0.16, suit); bx(-0.62, -0.2, 0.05, 0.22, 0, 0.16, suit); bx(-0.72, -0.56, 0.05, 0.6, 0, 0.15, suit);     // one leg straight, one bent out
      bx(-0.1, 0.45, -0.4, -0.27, 0, 0.12, suit); bx(0.2, 0.36, 0.24, 0.8, 0, 0.12, suit);                           // one arm by the side, one flung wide
      bx(-1.0, -0.86, -0.24, -0.03, 0, 0.2, dark); bx(-0.76, -0.52, 0.55, 0.7, 0, 0.18, dark);                       // boots
      onFloor(t.x - ax * 0.1, t.z - az * 0.1, 0.85, pick(sh.stain));
      const dc = L.cellOf(t.x - ax * 1.6, t.z - az * 1.6); if (L.cells[dc] === C.FLOOR && r() < 0.6) onFloor(t.x - ax * 1.5, t.z - az * 1.5, 0.8, sh.drag[0]);
    });
    // more of it in the corridors
    const halls = this.wallFaces.filter(f => f.hall), rooms = this.wallFaces.filter(f => !f.hall);
    for (let n = 0; n < 9; n++) { const f = pick(halls); onFloor((f.cx + 0.3 + r() * 0.4) * T, (f.cz + 0.3 + r() * 0.4) * T, 0.5 + r() * 0.45, pick(sh.stain)); }
    for (let n = 0; n < 14; n++) { const f = pick(n < 10 ? halls : rooms), w = 0.8 + r() * 0.5; onWall(f, r() * (T - w), 0.5 + r() * 0.9, w, w * 1.15, pick(sh.gouge)); }
    for (let n = 0; n < 7; n++) { const f = pick(n < 5 ? rooms : halls), w = 1.5 + r() * 0.3; onWall(f, (T - w) / 2, 1.15 + r() * 0.45, w, w / 4, sh.scrawl[Math.floor(r() * sh.scrawl.length)], [0.9, 0.92, 0.94]); }
    // and on the doors that were welded shut: something wanted through
    for (const id of layout.sealed) {
      if (r() > 0.6) continue; const d = L.doors[id], w = Math.min(1.1, d.len - 0.5), a0 = -w / 2, uv = pick(sh.gouge);
      for (const s of [-1, 1]) {
        if (d.axis === 'x') dg.quad(L, [d.x + a0 * s, 0.55, d.z + 0.142 * s], [w * s, 0, 0], [0, w * 1.15, 0], 1, 1, [uv[0], uv[1]], [uv[2], 0], [0, uv[3]], [1, 1, 1]);
        else dg.quad(L, [d.x + 0.142 * s, 0.55, d.z - a0 * s], [0, 0, -w * s], [0, w * 1.15, 0], 1, 1, [uv[0], uv[1]], [uv[2], 0], [0, uv[3]], [1, 1, 1]);
      }
    }
    if (bg.n) { const m = new THREE.Mesh(bg.build(), this.mats.prop); m.castShadow = true; m.receiveShadow = true; m.matrixAutoUpdate = false; grp.add(m); }
    if (dg.n) { const m = new THREE.Mesh(dg.build(), this.mats.decal); m.receiveShadow = true; m.matrixAutoUpdate = false; m.renderOrder = 1; grp.add(m); }
    this.scene.add(grp);
  }
  setLayout(layout) {
    this.zones = layout.zones; this.stationsActive = layout.stations; this.routeSigns(layout); this.dressMatch(layout);
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
    for (let z = 0; z < this.pow.length; z++) { const on = 0.04 + 0.96 * Math.min(1, this.pow[z]); this.fitMat[z].color.setScalar(on); this.fitMatF[z].color.setScalar(on * (0.1 + 0.9 * this.flick)); const e = 0.16 + 2.4 * this.off[z]; this.emMat[z].color.setRGB(e, e * 0.1, e * 0.05); }
    // each breaker's tell-tale: green while its wing has power, red and blinking while it has none, amber while it runs on what the breaker gave it
    const mask = rep ? rep.zoneOff | 0 : 0, tick = Math.sin(this.time * 5) > 0;
    for (const k of this.breakers) { const z = k.b.zone, boost = !!(mask & (64 << z)), out = !!(mask & 32) || !!(mask & (1 << z)) || (!!this.zones && rep && this.zones[z] !== PWR.ON && !boost); k.mat.color.setHex(!rep ? 0x30ff80 : out ? (tick ? 0xff3018 : 0x3a0a05) : boost ? 0xffa820 : 0x30ff80); }
    if (!rep) return;
    for (const r of this.doors) {
      const o = rep.doorOpen[r.d.id]; if (o === r.open && r.jam === rep.doorJam[r.d.id]) continue; r.open = o; r.jam = rep.doorJam[r.d.id];
      if (r.d.gate) r.leaves[0].position.y = o * 2.7;
      else { const s = o * (r.d.len / 2 - 0.06); for (const m of r.leaves) { if (r.d.axis === 'x') m.position.x = m.userData.s * s; else m.position.z = m.userData.s * s; } r.lamp.material.color.setHex(r.sealed || r.jam ? 0xff2a12 : rep.doorWant[r.d.id] ? 0x38ff8a : 0xffa424); }
    }
    for (const r of this.doors) if (r.d.bulk >= 0) r.lamp.material.color.setHex(rep.sec === r.d.bulk && rep.secDone ? 0x38ff8a : (Math.sin(this.time * 3) > 0 || rep.sec > r.d.bulk ? 0xff2a12 : 0x400a04));
    // the stations: red until someone works them, amber while they are being worked, green once done; a terminal not in use is dark
    for (const k of this.stationRecs) {
      const id = k.st.id, act = !this.stationsActive || this.stationsActive.includes(id), p = rep.stProg ? rep.stProg[id] || 0 : 0, done = p >= 1;
      k.lamp.material.color.setHex(!act ? 0x101010 : done ? 0x30ff80 : p > 0 ? (Math.sin(this.time * 8) > 0 ? 0xffa820 : 0x603808) : 0xff2a12);
      if (k.screen) k.screen.material.color.setHex(!act ? 0x050607 : done ? 0x1a6a38 : p > 0 ? (Math.sin(this.time * 12 + id) > 0 ? 0x2a8aa0 : 0x18505e) : 0x0e3640);
    }
    // the vent hatches
    let moved = false;
    for (let k = 0; k < this.ventT.length; k++) {
      if (this.ventT[k] > 0) { this.ventT[k] -= dt; const want = this.ventT[k] > 0.5 ? 1 : 0; this.ventSwing[k] += (want - this.ventSwing[k]) * Math.min(1, dt * (want ? 18 : 3)); moved = true; }
      else if (this.ventSwing[k] !== 0) { this.ventSwing[k] = Math.max(0, this.ventSwing[k] - dt * 2.5) * (1 + 0.6 * Math.sin(this.time * 30) * this.ventSwing[k]); if (this.ventSwing[k] < 0.01) this.ventSwing[k] = 0; moved = true; }
    }
    if (moved) this.placeVents(false);
    this.spaceMat.uniforms.uTime.value = this.time;
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
    // the pod: lit inside once its hatch has opened
    const lf = rep.lift;
    this.liftLight.intensity = lf.state >= LIFT.ARRIVED ? 12 : lf.state === LIFT.CALLED ? 3 + 2 * Math.sin(this.time * 7) : 0;
    const blink = Math.sin(this.time * 6) > 0;
    this.liftScreen.material.color.setHex(lf.state === LIFT.LOCKED ? 0xc01808 : lf.state === LIFT.READY ? (blink ? 0x30ff80 : 0x0c6030) : lf.state === LIFT.CALLED ? (blink ? 0xffa010 : 0x402800) : 0x30ff80);
    const alarm = lf.state === LIFT.CALLED;
    this.beacon.intensity = alarm ? 14 * (0.55 + 0.45 * Math.sin(this.time * 7)) : 0;
    this.beaconMesh.material.color.setHex(alarm && blink ? 0xffa030 : 0x331a05);
  }
}
