// Small helpers shared by the simulation and the page.
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const approach = (v, to, step) => (v < to ? Math.min(to, v + step) : Math.max(to, v - step));
export const TAU = Math.PI * 2;
export const wrapAngle = a => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };
export const angleTo = (from, to, step) => { const d = wrapAngle(to - from); return Math.abs(d) <= step ? to : from + Math.sign(d) * step; };
export const lerpAngle = (a, b, t) => a + wrapAngle(b - a) * t;
// yaw 0 looks along -z (north); forward is (-sin yaw, -cos yaw)
export const yawOf = (dx, dz) => Math.atan2(-dx, -dz);
export const smooth = t => t * t * (3 - 2 * t);

// A small seeded generator, so every player lays out the same match from one number.
export function rng32(seed) {
  let a = seed >>> 0;
  const f = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  f.range = (lo, hi) => lo + (hi - lo) * f();
  f.int = n => Math.floor(f() * n);
  f.pick = arr => arr[Math.floor(f() * arr.length)];
  f.shuffle = arr => { const a2 = arr.slice(); for (let i = a2.length - 1; i > 0; i--) { const j = Math.floor(f() * (i + 1)); [a2[i], a2[j]] = [a2[j], a2[i]]; } return a2; };
  return f;
}
