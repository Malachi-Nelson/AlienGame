// Sight lines, path finding and distance fields over the level grid. No rendering in here: the host's simulation uses it,
// and so does the page for small things (sound muffling, the map screen).
import { T, W, H, C, LOW_H } from './level.js';

const N = W * H;

// Can something at (x0,z0) with its eyes at height h0 see a point at (x1,z1), height h1?
// Walls, lockers, tall fittings, shut doors and duct bulkheads block. A low fitting blocks only if the line dips under its top,
// which is what lets a crouching player hide behind a desk. doorOpen is how far each door is open, 0 to 1.
export function sight(L, doorOpen, x0, z0, h0, x1, z1, h1, ductsClear = false) {
  const { cells, doorAt } = L;
  let cx = Math.floor(x0 / T), cz = Math.floor(z0 / T); const ex = Math.floor(x1 / T), ez = Math.floor(z1 / T);
  const dx = x1 - x0, dz = z1 - z0, sx = dx > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1;
  const tdx = dx !== 0 ? Math.abs(T / dx) : Infinity, tdz = dz !== 0 ? Math.abs(T / dz) : Infinity;
  let tmx = dx !== 0 ? (dx > 0 ? (cx + 1) * T - x0 : x0 - cx * T) / Math.abs(dx) : Infinity;
  let tmz = dz !== 0 ? (dz > 0 ? (cz + 1) * T - z0 : z0 - cz * T) / Math.abs(dz) : Infinity;
  for (let g = 0; g < 300 && !(cx === ex && cz === ez); g++) {
    let tIn;
    if (tmx < tmz) { tIn = tmx; tmx += tdx; cx += sx; } else { tIn = tmz; tmz += tdz; cz += sz; }
    if (cx === ex && cz === ez) break;
    if (cx < 0 || cz < 0 || cx >= W || cz >= H) return false;
    const i = cz * W + cx, c = cells[i];
    if (c === C.SOLID || c === C.TALL || c === C.LOCKER) return false;
    if (c === C.DUCT && !ductsClear) return false;
    if (c === C.LOW) { const tOut = Math.min(1, tmx, tmz); if (Math.min(h0 + (h1 - h0) * tIn, h0 + (h1 - h0) * tOut) < LOW_H) return false; }
    const d = doorAt[i]; if (d >= 0 && doorOpen && doorOpen[d] < 0.5) return false;
  }
  return true;
}

// A* over the grid, eight directions, never cutting a corner. walk says which cells can be stood on.
export class Pather {
  constructor(L, walk) {
    this.L = L; this.walk = walk;
    this.g = new Float32Array(N); this.f = new Float32Array(N); this.from = new Int32Array(N); this.mark = new Uint32Array(N); this.done = new Uint32Array(N);
    this.gen = 0; this.heap = [];
  }
  push(c) { const h = this.heap, f = this.f; let i = h.length; h.push(c); while (i > 0) { const p = (i - 1) >> 1; if (f[h[p]] <= f[c]) break; h[i] = h[p]; i = p; } h[i] = c; }
  pop() {
    const h = this.heap, f = this.f, top = h[0], last = h.pop();
    if (h.length) { let i = 0; const n = h.length; for (;;) { let k = 2 * i + 1; if (k >= n) break; if (k + 1 < n && f[h[k + 1]] < f[h[k]]) k++; if (f[h[k]] >= f[last]) break; h[i] = h[k]; i = k; } h[i] = last; }
    return top;
  }
  // Returns the cells from start to goal, or null. A shut door costs extra, which is the time it takes to force it.
  find(start, goal, doorOpen, doorCost = 3) {
    const { walk } = this, { doorAt } = this.L;
    if (!walk[start] || !walk[goal]) return null;
    if (start === goal) return [start];
    const gen = ++this.gen, g = this.g, f = this.f, from = this.from, mark = this.mark, done = this.done;
    const gx = goal % W, gz = (goal / W) | 0;
    const hfn = c => { const ax = Math.abs(c % W - gx), az = Math.abs(((c / W) | 0) - gz); return Math.max(ax, az) + 0.4142 * Math.min(ax, az); };
    this.heap.length = 0; g[start] = 0; f[start] = hfn(start); from[start] = -1; mark[start] = gen; this.push(start);
    while (this.heap.length) {
      const c = this.pop(); if (done[c] === gen) continue; done[c] = gen;
      if (c === goal) { const out = []; for (let k = c; k !== -1; k = from[k]) out.push(k); return out.reverse(); }
      const cDoor = doorAt[c] >= 0;
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dz) continue;
        const n = c + dx + dz * W; if (!walk[n] || done[n] === gen) continue;
        const diag = dx && dz;
        if (diag && (cDoor || doorAt[n] >= 0 || !walk[c + dx] || !walk[c + dz * W] || doorAt[c + dx] >= 0 || doorAt[c + dz * W] >= 0)) continue;
        let cost = diag ? 1.4142 : 1;
        const d = doorAt[n]; if (d >= 0 && doorOpen && doorOpen[d] < 0.5) cost += doorCost;
        const ng = g[c] + cost;
        if (mark[n] !== gen || ng < g[n]) { mark[n] = gen; g[n] = ng; f[n] = ng + hfn(n); from[n] = c; this.push(n); }
      }
    }
    return null;
  }
}

// Steps from a start cell to every cell that can be reached, -1 elsewhere. Four directions, doors count as open.
export function distField(walk, start, out) {
  const d = out || new Int16Array(N); d.fill(-1);
  if (!walk[start]) return d;
  const q = new Int32Array(N); let qh = 0, qt = 0; q[qt++] = start; d[start] = 0;
  while (qh < qt) { const c = q[qh++], nd = d[c] + 1; for (const n of [c - 1, c + 1, c - W, c + W]) if (walk[n] && d[n] < 0) { d[n] = nd; q[qt++] = n; } }
  return d;
}

// Is a straight walk between two points clear for a body of radius r?
export function clearWalk(walk, x0, z0, x1, z1, r) {
  const dx = x1 - x0, dz = z1 - z0, len = Math.hypot(dx, dz), n = Math.max(1, Math.ceil(len / 0.4));
  for (let k = 0; k <= n; k++) {
    const x = x0 + dx * k / n, z = z0 + dz * k / n;
    const a = Math.floor((x - r) / T), b = Math.floor((x + r) / T), c = Math.floor((z - r) / T), d = Math.floor((z + r) / T);
    if (!walk[c * W + a] || !walk[c * W + b] || !walk[d * W + a] || !walk[d * W + b]) return false;
  }
  return true;
}

export function nearestWalk(L, walk, x, z, maxR = 6) {
  const cx = Math.floor(x / T), cz = Math.floor(z / T);
  let best = -1, bd = 1e9;
  for (let dz = -maxR; dz <= maxR; dz++) for (let dx = -maxR; dx <= maxR; dx++) {
    const ax = cx + dx, az = cz + dz; if (ax < 0 || az < 0 || ax >= W || az >= H) continue;
    const i = az * W + ax; if (!walk[i]) continue;
    const d = ((ax + 0.5) * T - x) ** 2 + ((az + 0.5) * T - z) ** 2; if (d < bd) { bd = d; best = i; }
  }
  return best;
}

// Keeps a circle out of everything solid. blocked(cellIndex) says what is solid for this mover. Returns the corrected position.
export function slide(L, x, z, r, blocked, out) {
  for (let pass = 0; pass < 3; pass++) {
    const x0 = Math.floor((x - r) / T), x1 = Math.floor((x + r) / T), z0 = Math.floor((z - r) / T), z1 = Math.floor((z + r) / T);
    let moved = false;
    for (let cz = z0; cz <= z1; cz++) for (let cx = x0; cx <= x1; cx++) {
      if (cx >= 0 && cz >= 0 && cx < W && cz < H && !blocked(cz * W + cx)) continue;
      const nx = Math.max(cx * T, Math.min(x, (cx + 1) * T)), nz = Math.max(cz * T, Math.min(z, (cz + 1) * T));
      let dx = x - nx, dz = z - nz; const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (d2 > 1e-9) { const d = Math.sqrt(d2), push = r - d; x += dx / d * push; z += dz / d * push; }
      else {   // the centre is inside the cell: leave by the nearest side
        const l = x - cx * T, rr = (cx + 1) * T - x, u = z - cz * T, dn = (cz + 1) * T - z, m = Math.min(l, rr, u, dn);
        if (m === l) x = cx * T - r; else if (m === rr) x = (cx + 1) * T + r; else if (m === u) z = cz * T - r; else z = (cz + 1) * T + r;
      }
      moved = true;
    }
    if (!moved) break;
  }
  out.x = x; out.z = z; return out;
}
