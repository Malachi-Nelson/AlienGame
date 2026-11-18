// Every sound in the game is synthesised here with the Web Audio API. There are no sound files.
// Sounds that come from somewhere are placed in the world, so you can hear which way the tapping is.
import { clamp, clamp01 } from '../util.js';

export class Sound {
  constructor() { this.ctx = null; this.vol = 0.8; this.t = 0; this.beatT = 0; this.breathT = 0; this.creakT = 6; this.staticLevel = 0; }
  // ctx: only the loudness check passes one in (an offline context it can measure)
  start(given, bare) {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC && !given) return;
    const ctx = this.ctx = given || new AC();
    this.master = ctx.createGain(); this.master.gain.value = this.vol;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.knee.value = 18; comp.ratio.value = 5; comp.attack.value = 0.004; comp.release.value = 0.2;
    this.master.connect(comp).connect(ctx.destination);
    // noise to cut sounds out of
    const mk = (secs, brown) => { const b = ctx.createBuffer(1, ctx.sampleRate * secs, ctx.sampleRate), d = b.getChannelData(0); let last = 0; for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w; } return b; };
    this.white = mk(2, false); this.brown = mk(4, true);
    // the room: a low rumble, moving air, two slow drones
    const loop = (buf, type, f, q, gain) => { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = ctx.createGain(); g.gain.value = gain; s.connect(fl).connect(g).connect(this.master); s.start(); return g; };
    if (!bare) {
      loop(this.brown, 'lowpass', 190, 0.5, 0.055); loop(this.white, 'bandpass', 700, 0.35, 0.006);
      for (const [f, lf] of [[49, 0.07], [73.4, 0.045], [98.3, 0.11]]) { const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f; const g = ctx.createGain(); g.gain.value = 0.012; const l = ctx.createOscillator(); l.frequency.value = lf; const lg = ctx.createGain(); lg.gain.value = 0.01; l.connect(lg).connect(g.gain); o.connect(g).connect(this.master); o.start(); l.start(); }
    }
    this.staticGain = loop(this.white, 'bandpass', 2800, 0.5, 0);
    this.genGain = ctx.createGain(); this.genGain.gain.value = 0; this.genGain.connect(this.master);
    for (const f of [55, 110.4, 164.7]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 320; const g = ctx.createGain(); g.gain.value = 0.2; o.connect(fl).connect(g).connect(this.genGain); o.start(); }
    const curve = new Float32Array(256); for (let i = 0; i < 256; i++) { const x = i / 128 - 1; curve[i] = Math.tanh(x * 3.5); } this.curve = curve;
  }
  setVolume(v) { this.vol = v; if (this.master) this.master.gain.value = v; }
  get now() { return this.ctx.currentTime; }
  listener(x, y, z, fx, fy, fz) {
    if (!this.ctx) return; const l = this.ctx.listener;
    if (l.positionX) { const t = this.now; l.positionX.setValueAtTime(x, t); l.positionY.setValueAtTime(y, t); l.positionZ.setValueAtTime(z, t); l.forwardX.setValueAtTime(fx, t); l.forwardY.setValueAtTime(fy, t); l.forwardZ.setValueAtTime(fz, t); l.upX.setValueAtTime(0, t); l.upY.setValueAtTime(1, t); l.upZ.setValueAtTime(0, t); }
    else { l.setPosition(x, y, z); l.setOrientation(fx, fy, fz, 0, 1, 0); }
  }
  // A place in the world to play something from. muffled: there is a wall in the way.
  at(x, z, y = 1.5, ref = 3, muffled = false, max = 60) {
    const p = this.ctx.createPanner(); p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = ref; p.maxDistance = max; p.rolloffFactor = 1.35;
    if (p.positionX) { p.positionX.value = x; p.positionY.value = y; p.positionZ.value = z; } else p.setPosition(x, y, z);
    if (!muffled) { p.connect(this.master); return p; }
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 650; const g = this.ctx.createGain(); g.gain.value = 0.6; f.connect(g).connect(p).connect(this.master); return f;
  }
  tone(type, f0, f1, dur, gain, dest, t0, attack = 0.006) {
    const c = this.ctx, o = c.createOscillator(), g = c.createGain(); t0 = t0 || this.now;
    o.type = type; o.frequency.setValueAtTime(f0, t0); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(dest || this.master); o.start(t0); o.stop(t0 + dur + 0.03); return g;
  }
  burst(dur, gain, type, f0, f1, q, dest, t0, buf, attack = 0.004) {
    const c = this.ctx, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(); t0 = t0 || this.now;
    s.buffer = buf || this.white; s.loop = true; fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f0, t0); if (f1 !== f0) fl.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(fl).connect(g).connect(dest || this.master); s.start(t0, Math.random() * 1.5); s.stop(t0 + dur + 0.03);
  }

  // ---- you
  step(kind) { if (!this.ctx) return; const g = kind.crouch ? 0.03 : kind.run ? 0.18 : 0.075; this.burst(0.09, g, 'lowpass', 900 + Math.random() * 500, 180, 0.8); this.tone('sine', 95 + Math.random() * 25, 48, 0.09, g * 1.3); }
  stepAt(x, z, run, crouch) { if (!this.ctx) return; const d = this.at(x, z, 0.2, 2), g = crouch ? 0.05 : run ? 0.5 : 0.22; this.burst(0.09, g, 'lowpass', 1000, 200, 0.8, d); this.tone('sine', 100, 50, 0.09, g, d); }
  ui() { if (this.ctx) this.tone('sine', 980, 980, 0.04, 0.08); }
  lamp(on) { if (this.ctx) { this.burst(0.025, 0.2, 'highpass', 2500, 2500, 0.7); this.tone('square', on ? 1700 : 1100, on ? 1700 : 1100, 0.03, 0.03); } }
  pickupTag() { if (!this.ctx) return; const t = this.now; this.tone('sine', 880, 880, 0.12, 0.16, null, t); this.tone('sine', 1320, 1320, 0.2, 0.16, null, t + 0.1); for (let i = 0; i < 7; i++) this.tone('square', 1500 + Math.random() * 2600, 1500, 0.03, 0.025, null, t + 0.32 + i * 0.045); }
  pickupItem() { if (!this.ctx) return; this.burst(0.03, 0.2, 'bandpass', 1800, 1800, 2); this.tone('sine', 620, 760, 0.1, 0.12); }
  throwSound() { if (this.ctx) this.burst(0.22, 0.14, 'bandpass', 500, 1600, 1.2); }
  scanPing(aimed) { if (!this.ctx) return; const f = 1150 + aimed * 900, t = this.now; this.tone('sine', f, f, 0.09, 0.1, null, t); this.tone('sine', f, f, 0.12, 0.03, null, t + 0.13); }
  downed() { if (!this.ctx) return; const t = this.now; this.tone('sine', 85, 30, 0.7, 0.65, null, t); this.burst(0.3, 0.4, 'lowpass', 1400, 120, 0.7, null, t); this.tone('sine', 3100, 3050, 2.2, 0.035, null, t + 0.1, 0.4); }
  revived() { if (!this.ctx) return; const t = this.now; for (let i = 0; i < 4; i++) this.tone('sine', 440 * Math.pow(1.26, i), 440 * Math.pow(1.26, i), 0.14, 0.1, null, t + i * 0.09); }
  reviveTick(p) { if (this.ctx) this.tone('sine', 300 + p * 500, 300 + p * 500, 0.05, 0.05); }
  win() { if (!this.ctx) return; const t = this.now; [392, 494, 587, 784].forEach((f, i) => this.tone('sine', f, f, 0.9, 0.1, null, t + i * 0.16, 0.05)); }
  lose() { if (!this.ctx) return; const t = this.now; this.tone('sawtooth', 110, 38, 2.6, 0.2, null, t, 0.05); this.burst(2.4, 0.3, 'bandpass', 2600, 300, 0.6, null, t); }

  // ---- the world
  door(x, z, opening, forced, muffled) {
    if (!this.ctx) return; const d = this.at(x, z, 1.4, 3, muffled), t = this.now;
    if (forced) { const sh = this.ctx.createWaveShaper(); sh.curve = this.curve; sh.connect(d); this.tone('sawtooth', 260, 980, 0.34, 0.5, sh, t, 0.02); this.burst(0.3, 0.6, 'bandpass', 1900, 700, 3, d, t); this.tone('sine', 120, 45, 0.25, 1.2, d, t + 0.3); this.burst(0.12, 0.9, 'lowpass', 900, 200, 1, d, t + 0.3); }
    else { this.burst(0.42, 0.45, 'lowpass', opening ? 2400 : 700, opening ? 500 : 1800, 1.2, d, t); this.tone('sine', 105, 70, 0.1, 0.5, d, t + 0.4); }
  }
  locker(x, z, bang, muffled) {
    if (!this.ctx) return; const d = this.at(x, z, 1.2, 2.5, muffled), t = this.now, g = bang ? 0.9 : 0.3;
    for (const f of [311, 523, 887, 1410]) this.tone('sine', f * (0.97 + Math.random() * 0.06), f * 0.98, bang ? 0.5 : 0.22, g * 0.3, d, t);
    this.burst(0.05, g, 'bandpass', 2400, 900, 1.5, d, t);
    if (bang) { this.burst(0.5, 0.8, 'bandpass', 1500, 500, 2.5, d, t + 0.12); for (const f of [280, 470]) this.tone('sine', f, f * 0.9, 0.6, 0.35, d, t + 0.5); }
  }
  beep(x, z, muffled) { if (!this.ctx) return; const d = this.at(x, z, 0.2, 7, muffled, 90), t = this.now; this.tone('square', 2100, 2100, 0.08, 0.5, d, t); this.tone('square', 2650, 2650, 0.08, 0.5, d, t + 0.11); }
  klaxon(x, z) { if (!this.ctx) return; const d = this.at(x, z, 3.5, 9, false, 120), t = this.now, f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1300; f.connect(d); this.tone('sawtooth', 392, 392, 0.55, 0.5, f, t, 0.03); this.tone('sawtooth', 311, 311, 0.6, 0.5, f, t + 0.6, 0.03); }
  liftArrive(x, z) { if (!this.ctx) return; const d = this.at(x, z, 2, 9, false, 120), t = this.now; this.burst(3, 1.3, 'lowpass', 150, 70, 0.7, d, t, this.brown, 0.4); this.tone('sine', 1046, 1046, 1.6, 0.4, d, t + 2.6); this.tone('sine', 1568, 1568, 1.4, 0.2, d, t + 2.6); }
  creak() { if (!this.ctx) return; const a = Math.random() * 6.28, r = 14 + Math.random() * 20, l = this.ctx.listener, x = (l.positionX ? l.positionX.value : 0) + Math.cos(a) * r, z = (l.positionZ ? l.positionZ.value : 0) + Math.sin(a) * r, d = this.at(x, z, 3, 8, true), t = this.now;
    if (Math.random() < 0.6) { const f = 60 + Math.random() * 50; this.tone('sawtooth', f, f * (0.7 + Math.random() * 0.7), 1.6 + Math.random() * 1.5, 0.6, d, t, 0.5); }
    else { for (let i = 0; i < 3; i++) this.burst(0.08, 0.9, 'bandpass', 700 + Math.random() * 900, 400, 4, d, t + i * (0.12 + Math.random() * 0.3)); } }

  // ---- the creature
  tick(x, z, hard, muffled) {
    if (!this.ctx) return; const d = this.at(x, z, 0.1, 2.6, muffled), t = this.now, f = 2100 + Math.random() * 1300, g = 0.28 + Math.min(0.5, hard * 0.09);
    this.burst(0.02, g, 'bandpass', f, f, 9, d, t, null, 0.001); this.tone('sine', f, f * 0.94, 0.045, g * 0.35, d, t, 0.001); this.tone('sine', 120, 60, 0.06, g * 0.5, d, t, 0.002);
  }
  voice(kind, x, z, muffled) {
    if (!this.ctx) return; const t = this.now;
    if (kind === 'alert') { const d = this.at(x, z, 2.2, 4, muffled); let tt = t, gap = 0.085; for (let i = 0; i < 9; i++) { const f = 1500 + i * 150; this.burst(0.02, 1.3, 'bandpass', f, f, 8, d, tt, null, 0.001); this.tone('sine', f, f * 0.9, 0.035, 0.4, d, tt, 0.001); tt += gap; gap *= 0.86; } }
    else if (kind === 'screech') {
      const d = this.at(x, z, 2.2, 7, muffled, 120), sh = this.ctx.createWaveShaper(); sh.curve = this.curve; const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1700; bp.Q.value = 1.1; sh.connect(bp).connect(d);
      for (const det of [1, 1.013, 1.51]) { const c = this.ctx, o = c.createOscillator(), g = c.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(480 * det, t); o.frequency.exponentialRampToValueAtTime(1500 * det, t + 0.22); o.frequency.exponentialRampToValueAtTime(900 * det, t + 0.7); o.frequency.exponentialRampToValueAtTime(380 * det, t + 1.15);
        const v = c.createOscillator(), vg = c.createGain(); v.frequency.value = 31; vg.gain.value = 60; v.connect(vg).connect(o.frequency);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.04); g.gain.setValueAtTime(0.5, t + 0.75); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2); o.connect(g).connect(sh); o.start(t); v.start(t); o.stop(t + 1.25); v.stop(t + 1.25); }
      this.burst(1.1, 0.7, 'bandpass', 3200, 1500, 1.2, d, t);
    }
    else if (kind === 'hiss') { const d = this.at(x, z, 2.2, 4, muffled); this.burst(0.9, 0.6, 'highpass', 2600, 4200, 0.7, d, t, null, 0.08); }
    else if (kind === 'rattle') { const d = this.at(x, z, 2.2, 3, muffled); for (let i = 0; i < 6; i++) { const f = 760 + Math.random() * 240; this.burst(0.025, 0.3, 'bandpass', f, f, 8, d, t + i * 0.11, null, 0.002); } }
    else if (kind === 'lunge') { const d = this.at(x, z, 1.5, 4, muffled), sh = this.ctx.createWaveShaper(); sh.curve = this.curve; sh.connect(d); this.tone('sawtooth', 900, 140, 0.4, 0.8, sh, t, 0.01); this.burst(0.35, 0.9, 'bandpass', 2400, 500, 1.5, d, t); }
  }

  // ---- layers that follow the state of things. o: { static 0..1, danger 0..1, winded 0..1, gen 0..1 (how close the generators are) }
  update(dt, o) {
    if (!this.ctx) return; this.t += dt; const t = this.now;
    this.staticLevel += (o.static - this.staticLevel) * Math.min(1, dt * 5);
    const s = this.staticLevel, crackle = Math.random() < 0.3 ? 0.6 + Math.random() * 0.8 : 1;
    this.staticGain.gain.setTargetAtTime(s * s * 0.11 * crackle, t, 0.03);
    this.genGain.gain.setTargetAtTime(o.gen * 0.26, t, 0.3);
    if (o.danger > 0.35) { this.beatT -= dt; if (this.beatT <= 0) { this.beatT = 60 / (72 + 70 * o.danger); const g = 0.14 + 0.3 * o.danger; this.tone('sine', 62, 38, 0.13, g, null, t, 0.01); this.tone('sine', 52, 34, 0.12, g * 0.7, null, t + 0.16, 0.01); } }
    if (o.winded > 0.3) { this.breathT -= dt; if (this.breathT <= 0) { this.breathT = 0.75 - 0.25 * o.winded; const g = 0.05 + 0.1 * o.winded; this.burst(0.3, g, 'bandpass', 900, 1500, 1.4, null, t, null, 0.1); this.burst(0.3, g * 0.8, 'bandpass', 1300, 700, 1.4, null, t + 0.36, null, 0.08); } }
    this.creakT -= dt; if (this.creakT <= 0) { this.creakT = 9 + Math.random() * 18; this.creak(); }
  }
}
