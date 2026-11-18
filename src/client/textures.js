// Every surface in the game is painted here on a canvas at load time. There are no image files.
import * as THREE from 'three';
import { rng32 } from '../util.js';

function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

// Turn a greyscale height picture into a normal map, so seams and rivets catch the lamp.
function normalFromHeight(hc, strength) {
  const w = hc.width, h = hc.height, src = hc.getContext('2d').getImageData(0, 0, w, h).data;
  const out = makeCanvas(w, h), ctx = out.getContext('2d'), img = ctx.createImageData(w, h), d = img.data;
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength, dy = (H(x, y + 1) - H(x, y - 1)) * strength;
    const l = 1 / Math.hypot(dx, dy, 1), i = (y * w + x) * 4;
    d[i] = (-dx * l * 0.5 + 0.5) * 255; d[i + 1] = (dy * l * 0.5 + 0.5) * 255; d[i + 2] = (l * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return out;
}

function tex(canvas, srgb, aniso) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function speckle(ctx, r, n, w, h, colors, minS, maxS, alpha) {
  for (let i = 0; i < n; i++) {
    ctx.globalAlpha = alpha * (0.3 + 0.7 * r());
    ctx.fillStyle = colors[Math.floor(r() * colors.length)];
    const s = minS + (maxS - minS) * r() * r();
    ctx.fillRect(r() * w, r() * h, s, s * (0.5 + r()));
  }
  ctx.globalAlpha = 1;
}

function wallPair(r) {
  const S = 512, c = makeCanvas(S, S), x = c.getContext('2d'), hc = makeCanvas(S, S), hx = hc.getContext('2d');
  // one repeat covers 2 m across and 3.2 m up. v = 0 is the floor, so draw upside down: y = S is the floor.
  const Y = m => S - m / 3.2 * S;
  x.fillStyle = '#69757d'; x.fillRect(0, 0, S, S);
  hx.fillStyle = '#808080'; hx.fillRect(0, 0, S, S);
  const g = x.createLinearGradient(0, 0, 0, S); g.addColorStop(0, 'rgba(0,0,0,0.28)'); g.addColorStop(0.3, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.12)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
  speckle(x, r, 2600, S, S, ['#7d8a93', '#56616a', '#8a969d', '#4c565e'], 1, 5, 0.22);
  // kick plate
  x.fillStyle = '#434c53'; x.fillRect(0, Y(0.85), S, S - Y(0.85));
  speckle(x, r, 900, S, S - Y(0.85), ['#59646c', '#2f363c'], 1, 6, 0.3);
  hx.fillStyle = '#909090'; hx.fillRect(0, Y(0.85), S, S - Y(0.85));
  // accent stripe, worn
  x.fillStyle = '#2c8a80'; x.fillRect(0, Y(1.02), S, 9);
  for (let i = 0; i < 60; i++) { x.fillStyle = '#69757d'; x.globalAlpha = 0.7; x.fillRect(r() * S, Y(1.02) - 1 + r() * 8, 4 + r() * 26, 2 + r() * 3); } x.globalAlpha = 1;
  // panel seams
  const seam = (x0, y0, w, h) => { x.fillStyle = '#20262b'; x.fillRect(x0, y0, w, h); hx.fillStyle = '#202020'; hx.fillRect(x0, y0, w, h); x.fillStyle = 'rgba(255,255,255,0.10)'; if (w > h) x.fillRect(x0, y0 + h, w, 1); else x.fillRect(x0 + w, y0, 1, h); };
  seam(0, 0, 3, S); seam(S / 2 - 1, 0, 3, S); seam(0, Y(0.85), S, 3); seam(0, Y(2.2), S, 3);
  // rivets
  for (const px of [14, S / 2 - 14, S / 2 + 14, S - 14]) for (const m of [0.15, 0.7, 1.25, 2.05, 2.35, 3.05]) {
    x.fillStyle = '#8f9aa1'; x.beginPath(); x.arc(px, Y(m), 3, 0, 7); x.fill(); x.fillStyle = '#2a3035'; x.beginPath(); x.arc(px + 1, Y(m) + 1.5, 3, 0, 7); x.globalAlpha = 0.35; x.fill(); x.globalAlpha = 1;
    hx.fillStyle = '#d0d0d0'; hx.beginPath(); hx.arc(px, Y(m), 3.5, 0, 7); hx.fill();
  }
  // conduits near the top
  for (const [m, t, col] of [[2.62, 16, '#343b41'], [2.78, 9, '#2b3136'], [2.9, 9, '#4d3a22']]) {
    x.fillStyle = col; x.fillRect(0, Y(m) - t / 2, S, t); x.fillStyle = 'rgba(255,255,255,0.13)'; x.fillRect(0, Y(m) - t / 2, S, 2); x.fillStyle = 'rgba(0,0,0,0.4)'; x.fillRect(0, Y(m) + t / 2, S, 4);
    hx.fillStyle = '#e8e8e8'; hx.fillRect(0, Y(m) - t / 2, S, t);
    for (const bx of [70, 330]) { x.fillStyle = '#1d2226'; x.fillRect(bx, Y(m) - t / 2 - 2, 10, t + 4); }
  }
  // grime that has run down from the seams, and frost creeping up from the floor
  for (let i = 0; i < 26; i++) { const gx = r() * S, gy = r() * S * 0.7, gl = 30 + r() * 130; const gg = x.createLinearGradient(0, gy, 0, gy + gl); gg.addColorStop(0, 'rgba(20,24,26,0.34)'); gg.addColorStop(1, 'rgba(20,24,26,0)'); x.fillStyle = gg; x.fillRect(gx, gy, 2 + r() * 7, gl); }
  for (let i = 0; i < 1500; i++) { const fy = S - Math.pow(r(), 2.2) * S * 0.36; x.globalAlpha = 0.5 * r() * (fy / S); x.fillStyle = r() < 0.5 ? '#d9ecf5' : '#b9d4e2'; const s = 1 + r() * 3; x.fillRect(r() * S, fy, s, s); } x.globalAlpha = 1;
  return [c, normalFromHeight(hc, 2.2)];
}

function floorPair(r) {
  const S = 512, c = makeCanvas(S, S), x = c.getContext('2d'), hc = makeCanvas(S, S), hx = hc.getContext('2d');
  x.fillStyle = '#4b535a'; x.fillRect(0, 0, S, S); hx.fillStyle = '#707070'; hx.fillRect(0, 0, S, S);
  speckle(x, r, 4200, S, S, ['#5a646c', '#3b4248', '#646e76', '#33393e'], 1, 6, 0.25);
  // tread: short raised dashes in a herringbone
  for (let py = 0; py < S; py += 16) for (let px = 0; px < S; px += 16) {
    const flip = ((px + py) / 16) & 1;
    x.save(); x.translate(px + 8, py + 8); x.rotate(flip ? 0.785 : -0.785); x.fillStyle = 'rgba(190,205,214,0.16)'; x.fillRect(-5, -1, 10, 2); x.restore();
    hx.save(); hx.translate(px + 8, py + 8); hx.rotate(flip ? 0.785 : -0.785); hx.fillStyle = '#c0c0c0'; hx.fillRect(-5, -1.5, 10, 3); hx.restore();
  }
  // four plates to the tile
  for (const p of [0, S / 2]) { x.fillStyle = '#191d21'; x.fillRect(p, 0, 4, S); x.fillRect(0, p, S, 4); hx.fillStyle = '#101010'; hx.fillRect(p, 0, 4, S); hx.fillRect(0, p, S, 4); x.fillStyle = 'rgba(255,255,255,0.07)'; x.fillRect(p + 4, 0, 1, S); x.fillRect(0, p + 4, S, 1); }
  for (const bx of [16, S / 2 - 12, S / 2 + 16, S - 12]) for (const by of [16, S / 2 - 12, S / 2 + 16, S - 12]) { x.fillStyle = '#272c31'; x.beginPath(); x.arc(bx, by, 4, 0, 7); x.fill(); hx.fillStyle = '#404040'; hx.beginPath(); hx.arc(bx, by, 4, 0, 7); hx.fill(); }
  // scuffs and boot-worn patches
  for (let i = 0; i < 40; i++) { x.globalAlpha = 0.08 + 0.1 * r(); x.strokeStyle = r() < 0.5 ? '#aeb9c0' : '#1c2024'; x.lineWidth = 1 + r() * 2; x.beginPath(); const sx = r() * S, sy = r() * S; x.moveTo(sx, sy); x.lineTo(sx + (r() - 0.5) * 120, sy + (r() - 0.5) * 120); x.stroke(); } x.globalAlpha = 1;
  for (let i = 0; i < 600; i++) { x.globalAlpha = 0.25 * r(); x.fillStyle = '#cfe4ee'; const s = 1 + r() * 3; x.fillRect(r() * S, r() * S, s, s); } x.globalAlpha = 1;
  return [c, normalFromHeight(hc, 2.6)];
}

function ceilPair(r) {
  const S = 256, c = makeCanvas(S, S), x = c.getContext('2d'), hc = makeCanvas(S, S), hx = hc.getContext('2d');
  x.fillStyle = '#353b41'; x.fillRect(0, 0, S, S); hx.fillStyle = '#808080'; hx.fillRect(0, 0, S, S);
  speckle(x, r, 1200, S, S, ['#424951', '#282d32'], 1, 5, 0.3);
  for (let p = 0; p < S; p += 64) { x.fillStyle = '#1b1f23'; x.fillRect(p, 0, 6, S); hx.fillStyle = '#e0e0e0'; hx.fillRect(p, 0, 6, S); x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(p + 6, 0, 1, S); }
  x.fillStyle = '#15181b'; x.fillRect(0, 120, S, 14); hx.fillStyle = '#f0f0f0'; hx.fillRect(0, 120, S, 14);
  for (let p = 10; p < S; p += 40) { x.fillStyle = '#4a3a24'; x.fillRect(p, 122, 16, 10); }
  return [c, normalFromHeight(hc, 2)];
}

function icePair(r) {
  const S = 512, c = makeCanvas(S, S), x = c.getContext('2d'), hc = makeCanvas(S, S), hx = hc.getContext('2d');
  x.fillStyle = '#9dbccb'; x.fillRect(0, 0, S, S); hx.fillStyle = '#808080'; hx.fillRect(0, 0, S, S);
  for (let i = 0; i < 420; i++) {        // soft lumps, small and low in contrast so it reads as packed ice and not as marble
    const px = r() * S, py = r() * S, rad = 8 + r() * 30, light = r() < 0.55;
    const g = x.createRadialGradient(px, py, 0, px, py, rad); g.addColorStop(0, light ? 'rgba(226,242,250,0.28)' : 'rgba(92,128,148,0.26)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    const hg = hx.createRadialGradient(px, py, 0, px, py, rad); hg.addColorStop(0, light ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'); hg.addColorStop(1, 'rgba(128,128,128,0)');
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { x.save(); x.translate(ox, oy); x.fillStyle = g; x.fillRect(px - rad, py - rad, rad * 2, rad * 2); x.restore(); hx.save(); hx.translate(ox, oy); hx.fillStyle = hg; hx.fillRect(px - rad, py - rad, rad * 2, rad * 2); hx.restore(); }
  }
  for (let i = 0; i < 9; i++) {          // a few hairline fractures
    let px = r() * S, py = r() * S, a = r() * 6.28; x.strokeStyle = 'rgba(236,248,255,0.3)'; x.lineWidth = 0.7; hx.strokeStyle = '#484848'; hx.lineWidth = 1.2;
    x.beginPath(); hx.beginPath(); x.moveTo(px, py); hx.moveTo(px, py);
    for (let k = 0; k < 6; k++) { a += (r() - 0.5) * 0.9; px += Math.cos(a) * (10 + r() * 24); py += Math.sin(a) * (10 + r() * 24); x.lineTo(px, py); hx.lineTo(px, py); }
    x.stroke(); hx.stroke();
  }
  speckle(x, r, 3200, S, S, ['#eaf6fb', '#7ea3b6', '#c4dde9'], 1, 3, 0.22);
  return [c, normalFromHeight(hc, 2.6)];
}

function propPair(r) {
  const S = 256, c = makeCanvas(S, S), x = c.getContext('2d'), hc = makeCanvas(S, S), hx = hc.getContext('2d');
  x.fillStyle = '#c9ccce'; x.fillRect(0, 0, S, S); hx.fillStyle = '#808080'; hx.fillRect(0, 0, S, S);
  speckle(x, r, 2200, S, S, ['#dfe2e4', '#a5aaad', '#8d9396'], 1, 5, 0.25);
  x.strokeStyle = '#5c6165'; x.lineWidth = 3; x.strokeRect(5, 5, S - 10, S - 10); hx.strokeStyle = '#303030'; hx.lineWidth = 4; hx.strokeRect(5, 5, S - 10, S - 10);
  for (let i = 0; i < 30; i++) { x.globalAlpha = 0.25; x.strokeStyle = '#6f7477'; x.lineWidth = 1; x.beginPath(); const sx = r() * S, sy = r() * S; x.moveTo(sx, sy); x.lineTo(sx + (r() - 0.5) * 60, sy + (r() - 0.5) * 60); x.stroke(); } x.globalAlpha = 1;
  for (const [bx, by] of [[18, 18], [S - 18, 18], [18, S - 18], [S - 18, S - 18]]) { x.fillStyle = '#7a8084'; x.beginPath(); x.arc(bx, by, 4, 0, 7); x.fill(); hx.fillStyle = '#d0d0d0'; hx.beginPath(); hx.arc(bx, by, 4, 0, 7); hx.fill(); }
  return [c, normalFromHeight(hc, 1.6)];
}

export function makeTextures(aniso = 4) {
  const r = rng32(20261117), out = {};
  for (const [name, fn] of [['wall', wallPair], ['floor', floorPair], ['ceil', ceilPair], ['ice', icePair], ['prop', propPair]]) {
    const [c, n] = fn(r); out[name] = { map: tex(c, true, aniso), normalMap: tex(n, false, aniso) };
  }
  return out;
}

// The creature's skin: pallid, blotched, with dark veins close under it, and creased enough for a lamp to catch. One sheet
// does for all of it.
export function fleshTexture() {
  const S = 256, r = rng32(0xf1e5), c = makeCanvas(S, S), x = c.getContext('2d'), h = makeCanvas(S, S), hx = h.getContext('2d');
  x.fillStyle = '#958d7f'; x.fillRect(0, 0, S, S); hx.fillStyle = '#808080'; hx.fillRect(0, 0, S, S);
  for (let i = 0; i < 80; i++) {            // bruised in places, and paler where it is stretched
    const px = r() * S, py = r() * S, rad = 10 + r() * 38, dark = r() < 0.62;
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
      if (px + ox + rad < 0 || px + ox - rad > S || py + oy + rad < 0 || py + oy - rad > S) continue;
      const g = x.createRadialGradient(px + ox, py + oy, 0, px + ox, py + oy, rad); g.addColorStop(0, dark ? 'rgba(66,52,60,0.55)' : 'rgba(205,197,178,0.4)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = g; x.fillRect(px + ox - rad, py + oy - rad, rad * 2, rad * 2);
    }
  }
  const vein = (px, py, a, len, w, depth) => {
    x.strokeStyle = `rgba(46,38,56,${(0.3 + 0.4 * r()).toFixed(2)})`; x.lineWidth = w; x.lineCap = 'round'; x.beginPath(); x.moveTo(px, py);
    const forks = [];
    while (len > 0) { a += (r() - 0.5) * 0.95; px += Math.cos(a) * 5; py += Math.sin(a) * 5; x.lineTo(px, py); len -= 5; if (depth < 2 && r() < 0.14) forks.push([px, py, a + (r() < 0.5 ? 0.85 : -0.85), len * 0.65]); }
    x.stroke(); for (const f of forks) vein(f[0], f[1], f[2], f[3], w * 0.6, depth + 1);
  };
  for (let i = 0; i < 18; i++) vein(r() * S, r() * S, r() * 6.28, 50 + r() * 130, 1.1 + r() * 1.3, 0);
  speckle(x, r, 1100, S, S, ['#544c48', '#b5ac9a', '#6e5a5c'], 1, 2.6, 0.4);
  for (let i = 0; i < 300; i++) {           // creases
    hx.strokeStyle = r() < 0.55 ? 'rgba(16,16,16,0.55)' : 'rgba(238,238,238,0.35)'; hx.lineWidth = 0.6 + r() * 1.8;
    const px = r() * S, py = r() * S, a = r() * 6.28, len = 6 + r() * 28;
    hx.beginPath(); hx.moveTo(px, py); hx.quadraticCurveTo(px + Math.cos(a) * len * 0.5 + (r() - 0.5) * 9, py + Math.sin(a) * len * 0.5 + (r() - 0.5) * 9, px + Math.cos(a) * len, py + Math.sin(a) * len); hx.stroke();
  }
  speckle(hx, r, 1600, S, S, ['#585858', '#a8a8a8'], 1, 3, 0.5);
  return { map: tex(c, true, 4), normalMap: tex(normalFromHeight(h, 2.4), false, 4) };
}

// A soft round glow for small lights.
export function glowTexture() {
  const c = makeCanvas(64, 64), x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// Stencilled room names for the plates over the doors.
export function signTexture(text) {
  const c = makeCanvas(256, 48), x = c.getContext('2d');
  x.fillStyle = '#0d1114'; x.fillRect(0, 0, 256, 48);
  x.strokeStyle = '#3d7f78'; x.lineWidth = 2; x.strokeRect(2, 2, 252, 44);
  x.fillStyle = '#9fe6d8'; x.font = '600 24px "Arial Narrow", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  let label = text.toUpperCase(); x.letterSpacing = '2px';
  while (x.measureText(label).width > 236 && label.length > 4) label = label.slice(0, -1);
  x.fillText(label, 128, 26);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

export function nameTexture(text, color) {
  const c = makeCanvas(256, 64), x = c.getContext('2d');
  x.font = '600 30px Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineWidth = 6; x.strokeStyle = 'rgba(0,0,0,0.75)'; x.strokeText(text, 128, 32);
  x.fillStyle = color; x.fillText(text, 128, 32);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// Marks left on the outpost: stains, gouges, and things scratched into the paint. One sheet; the scene cuts it up.
// Returns the texture and, for each kind of mark, where its pictures are: [u, v, width, height] in texture units.
export function decalSheet() {
  const S = 1024, c = makeCanvas(S, S), x = c.getContext('2d'), r = rng32(7719);
  const cell = (px, py, w, h, draw) => { x.save(); x.beginPath(); x.rect(px, py, w, h); x.clip(); x.translate(px, py); draw(w, h); x.restore(); return [px / S, 1 - (py + h) / S, w / S, h / S]; };
  const out = { stain: [], gouge: [], drag: [], scrawl: [] };
  // something pooled here and dried
  for (let k = 0; k < 4; k++) out.stain.push(cell(k * 256, 0, 256, 256, (w, h) => {
    for (let i = 0; i < 30; i++) { const a = r() * 6.283, d = Math.pow(r(), 1.5) * 78, rad = 12 + r() * 44 * (1 - d / 100), px = w / 2 + Math.cos(a) * d * (k === 3 ? 0.55 : 1), py = h / 2 + Math.sin(a) * d;
      const g = x.createRadialGradient(px, py, 0, px, py, rad); g.addColorStop(0, 'rgba(44,6,4,0.9)'); g.addColorStop(0.55, 'rgba(36,5,3,0.62)'); g.addColorStop(1, 'rgba(26,3,2,0)'); x.fillStyle = g; x.fillRect(px - rad, py - rad, rad * 2, rad * 2); }
    for (let i = 0; i < 46; i++) { x.fillStyle = `rgba(40,5,3,${0.35 + r() * 0.45})`; const a = r() * 6.283, d = 36 + r() * 84; x.beginPath(); x.arc(w / 2 + Math.cos(a) * d, h / 2 + Math.sin(a) * d, 1 + r() * 4.5, 0, 7); x.fill(); }
  }));
  // something raked the wall: dark cuts with a bright bare-metal lip
  for (let k = 0; k < 3; k++) out.gouge.push(cell(k * 256, 256, 256, 256, (w, h) => {
    const n = 3 + (k % 2), lean = (r() - 0.5) * 0.5;
    for (let j = 0; j < n; j++) {
      let px = 30 + j * (w - 60) / (n - 1 || 1) * 0.8 + r() * 14, py = 14 + r() * 26; const len = h - 50 - r() * 60, steps = 9, pts = [[px, py]];
      for (let i = 1; i <= steps; i++) pts.push([px + lean * len * i / steps + (r() - 0.5) * 7, py + len * i / steps]);
      for (const [off, col, wd] of [[2.2, 'rgba(176,188,194,0.75)', 2.2], [0, 'rgba(6,7,8,0.95)', 6], [0, 'rgba(0,0,0,1)', 2.5]]) {
        for (let i = 1; i < pts.length; i++) { const t = i / pts.length, taper = Math.sin(t * Math.PI) * 0.85 + 0.15; x.strokeStyle = col; x.lineWidth = wd * taper; x.lineCap = 'round'; x.beginPath(); x.moveTo(pts[i - 1][0] + off, pts[i - 1][1]); x.lineTo(pts[i][0] + off, pts[i][1]); x.stroke(); }
      }
    }
  }));
  // something was dragged
  out.drag.push(cell(768, 256, 256, 256, (w, h) => {
    for (let i = 0; i < 70; i++) { const py = 60 + r() * (h - 120), x0 = r() * 70, len = 90 + r() * (w - 150); const g = x.createLinearGradient(x0, 0, x0 + len, 0); g.addColorStop(0, 'rgba(40,5,3,0)'); g.addColorStop(0.2, `rgba(40,5,3,${0.25 + r() * 0.4})`); g.addColorStop(1, 'rgba(40,5,3,0)'); x.fillStyle = g; x.fillRect(x0, py, len, 2 + r() * 9); }
  }));
  // what the crew scratched into the paint before the end
  const lines = ['IT LEARNS', 'LIGHTS OUT', 'DONT RUN', 'NOT THE LOCKERS', 'IT WAITS', 'LISTEN', 'SORRY', null];
  lines.forEach((text, k) => out.scrawl.push(cell((k % 2) * 512, 512 + Math.floor(k / 2) * 128, 512, 128, (w, h) => {
    x.strokeStyle = 'rgba(206,214,218,0.82)'; x.lineCap = 'round'; x.lineJoin = 'round';
    if (!text) {                                   // nineteen days, counted off in fives
      let px = 34; for (let n = 0; n < 19; n++) { const five = n % 5 === 4; x.lineWidth = 3 + r() * 2; x.beginPath(); if (five) { x.moveTo(px - 64 + r() * 6, 88 + r() * 8); x.lineTo(px - 6 + r() * 6, 36 + r() * 8); px += 26; } else { x.moveTo(px + (r() - 0.5) * 5, 30 + r() * 10); x.lineTo(px + (r() - 0.5) * 7, 92 + r() * 10); px += 15; } x.stroke(); }
      return;
    }
    const size = Math.min(78, (w - 50) / text.length * 1.5); x.font = `700 ${size}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`; x.textBaseline = 'middle';
    let px = (w - x.measureText(text).width * 1.06) / 2;
    for (const ch of text) { const cw = x.measureText(ch).width * 1.06; for (let pass = 0; pass < 3; pass++) { x.save(); x.translate(px + (r() - 0.5) * 3, h / 2 + (r() - 0.5) * 9); x.rotate((r() - 0.5) * 0.16); x.lineWidth = 1.6 + r() * 1.6; x.strokeText(ch, 0, 0); x.restore(); } px += cw; }
  })));
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { tex: t, ...out };
}

// The way back to the lift, on plates along the corridors. dir: -1 the arrow points left, 1 right.
export function waySign(dir) {
  const c = makeCanvas(256, 60), x = c.getContext('2d');
  x.fillStyle = '#100c04'; x.fillRect(0, 0, 256, 60); x.strokeStyle = '#8a6a1c'; x.lineWidth = 2; x.strokeRect(2, 2, 252, 56);
  x.fillStyle = '#ffc24a'; x.font = '700 27px "Arial Narrow", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.letterSpacing = '2px';
  x.fillText('ESCAPE POD', 128 + dir * -17, 32);
  const ax = dir > 0 ? 226 : 30; x.beginPath(); x.moveTo(ax + dir * 16, 30); x.lineTo(ax - dir * 10, 14); x.lineTo(ax - dir * 10, 46); x.closePath(); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
