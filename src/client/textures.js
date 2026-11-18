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
