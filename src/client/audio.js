// Every sound in the game is synthesised here with the Web Audio API. There are no sound files.
// Sounds that come from somewhere are placed in the world, so you can hear which way the tapping is.
import { clamp, clamp01 } from '../util.js';

export class Sound {
  constructor() { this.ctx = null; this.cheap = false; this.vol = 0.8; this.t = 0; this.beatT = 0; this.breathT = 0; this.staticLevel = 0; }
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
    // a held chord a semitone out of true, kept almost silent until something is close
    this.tenseGain = ctx.createGain(); this.tenseGain.gain.value = 0; this.tenseFl = ctx.createBiquadFilter(); this.tenseFl.type = 'lowpass'; this.tenseFl.frequency.value = 240; this.tenseFl.Q.value = 0.8;
    this.tenseFl.connect(this.tenseGain).connect(this.master);
    const drift = ctx.createOscillator(), dg = ctx.createGain(); drift.frequency.value = 0.13; dg.gain.value = 9; drift.connect(dg); drift.start();
    for (const f of [87.3, 92.5, 130.8, 185.0, 277.2]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; dg.connect(o.detune); const g = ctx.createGain(); g.gain.value = f > 200 ? 0.1 : 0.22; o.connect(g).connect(this.tenseFl); o.start(); }
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
    const p = this.ctx.createPanner(); p.panningModel = this.cheap ? 'equalpower' : 'HRTF';      // full 3D panning costs too much on a phone when many taps overlap
    p.distanceModel = 'inverse'; p.refDistance = ref; p.maxDistance = max; p.rolloffFactor = 1.35;
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
  // ---- the outpost settling, and the things that are only there to unsettle. None of them sounds like the creature's feet.
  creak(x, z) { if (!this.ctx) return; const d = this.at(x, z, 3, 8, true), t = this.now;
    if (Math.random() < 0.6) { const f = 60 + Math.random() * 50; this.tone('sawtooth', f, f * (0.7 + Math.random() * 0.7), 1.6 + Math.random() * 1.5, 1.1, d, t, 0.5); }
    else { for (let i = 0; i < 3; i++) this.burst(0.08, 0.9, 'bandpass', 700 + Math.random() * 900, 400, 4, d, t + i * (0.12 + Math.random() * 0.3)); } }
  // someone, or something, knocking on a pipe a long way off
  knock(x, z) { if (!this.ctx) return; const d = this.at(x, z, 1.5, 7, true), n = 3 + Math.floor(Math.random() * 3), gap = 0.36 + Math.random() * 0.4; let t = this.now;
    for (let i = 0; i < n; i++) { const f = 170 + Math.random() * 40; this.tone('sine', f, f * 0.62, 0.16, 0.7, d, t, 0.002); this.tone('sine', f * 2.76, f * 2.7, 0.3, 0.18, d, t, 0.002); this.burst(0.02, 0.5, 'bandpass', 900, 900, 5, d, t, null, 0.001); t += gap * (i === n - 2 ? 1.9 : 1); } }
  iceCrack(x, z) { if (!this.ctx) return; const d = this.at(x, z, 2.5, 8, false, 120), t = this.now;
    this.burst(0.014, 1.0, 'highpass', 3000, 3000, 0.7, d, t, null, 0.001); this.burst(1.7, 0.4, 'bandpass', 2600, 420, 0.9, d, t + 0.012, null, 0.004); this.tone('sine', 74, 36, 1.2, 0.6, d, t, 0.004);
    if (Math.random() < 0.5) this.burst(0.01, 0.8, 'highpass', 3600, 3600, 0.7, d, t + 0.21 + Math.random() * 0.2, null, 0.001); }
  // wind finding its way up the bore
  howl(x, z) { if (!this.ctx) return; const d = this.at(x, z, 3, 25, false, 200), t = this.now, f = 300 + Math.random() * 160, len = 4 + Math.random() * 2.5;
    this.burst(len, 7, 'bandpass', f, f * 1.5, 11, d, t, null, len * 0.45); this.burst(len, 4.5, 'bandpass', f * 1.49, f * 1.1, 14, d, t + 0.3, null, len * 0.4); }
  drip(x, z) { if (!this.ctx) return; const d = this.at(x, z, 0.3, 4), n = 1 + Math.floor(Math.random() * 3); let t = this.now;
    for (let i = 0; i < n; i++) { const f = 1500 + Math.random() * 900; for (let e = 0; e < 3; e++) this.tone('sine', f, f * 0.55, 0.07, 0.2 / (1 + e * 2.2), d, t + e * 0.17, 0.001); t += 0.5 + Math.random() * 0.9; } }
  // a voice on the suit radio, too broken up to be sure of
  garble(secs = 1.5) {
    if (!this.ctx) return; const c = this.ctx, t0 = this.now, bus = c.createBiquadFilter(), g = c.createGain(); bus.type = 'bandpass'; bus.frequency.value = 1500; bus.Q.value = 0.6; g.gain.value = 0.5; bus.connect(g).connect(this.master);
    this.burst(0.03, 0.25, 'highpass', 2500, 2500, 0.7, null, t0, null, 0.001); this.burst(secs + 0.15, 0.05, 'bandpass', 2600, 2200, 0.7, null, t0);
    let t = t0 + 0.08; const f0 = 105 + Math.random() * 50;
    while (t < t0 + secs) {
      const len = 0.07 + Math.random() * 0.16, f = f0 * (0.9 + Math.random() * 0.25);
      for (const fm of [320 + Math.random() * 520, 1100 + Math.random() * 1300]) { const o = c.createOscillator(), fl = c.createBiquadFilter(), eg = c.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * (0.85 + Math.random() * 0.25), t + len); fl.type = 'bandpass'; fl.frequency.value = fm; fl.Q.value = 7;
        eg.gain.setValueAtTime(0.0001, t); eg.gain.exponentialRampToValueAtTime(0.6, t + 0.02); eg.gain.exponentialRampToValueAtTime(0.0001, t + len); o.connect(fl).connect(eg).connect(bus); o.start(t); o.stop(t + len + 0.03); }
      t += len + (Math.random() < 0.25 ? 0.16 + Math.random() * 0.2 : 0.015);       // now and then the signal drops out
    }
    this.burst(0.03, 0.2, 'highpass', 2500, 2500, 0.7, null, t0 + secs + 0.1, null, 0.001);
  }
  // one breath, close by
  breath(x, z) { if (!this.ctx) return; const d = this.at(x, z, 1.4, 1), t = this.now; this.burst(0.9, 0.3, 'bandpass', 650, 1100, 1.3, d, t, null, 0.4); this.burst(1.2, 0.36, 'bandpass', 950, 480, 1.3, d, t + 0.95, null, 0.25); }
  // something small going away down a duct: hollow sheet metal, nothing like the tapping
  ductScuttle(x, z) { if (!this.ctx) return; const d = this.at(x, z, 0.6, 2.5); let t = this.now, gap = 0.2;
    for (let i = 0; i < 7; i++) { const f = 130 + Math.random() * 40, g = 0.9 * (1 - i * 0.1); this.tone('sine', f, f * 0.55, 0.1, g, d, t, 0.002); this.burst(0.03, g * 0.6, 'bandpass', 480, 300, 2, d, t, null, 0.001); t += gap; gap *= 0.84; }
    this.tone('sine', 96, 44, 0.4, 1.1, d, t + 0.25, 0.003); this.burst(0.08, 0.6, 'lowpass', 700, 200, 1, d, t + 0.25); }
  // a locker door struck once from the inside
  thump(x, z) { if (!this.ctx) return; const d = this.at(x, z, 1.2, 2.2), t = this.now; this.tone('sine', 118, 52, 0.28, 0.8, d, t, 0.002); this.burst(0.04, 0.65, 'bandpass', 1500, 600, 2, d, t, null, 0.001); for (const f of [311, 523, 887]) this.tone('sine', f, f * 0.985, 0.55, 0.16, d, t, 0.002); }
  // a lamp tube giving out overhead
  pop(x, z) { if (!this.ctx) return; const d = this.at(x, z, 3, 3), t = this.now; this.burst(0.03, 0.85, 'highpass', 4200, 1800, 0.7, d, t, null, 0.001); this.tone('sine', 160, 60, 0.12, 0.45, d, t, 0.001); for (let i = 0; i < 6; i++) { const f = 3000 + Math.random() * 4500; this.tone('sine', f, f * 0.96, 0.09, 0.12, d, t + 0.08 + Math.random() * 0.5, 0.001); } }
  // a figure that was never there, going
  vanish() { if (!this.ctx) return; const t = this.now; this.tone('sine', 58, 30, 0.6, 0.34, null, t, 0.004); this.burst(0.18, 0.18, 'bandpass', 2800, 1200, 0.8, null, t, null, 0.002); }
  // the hit that goes with being caught
  sting(hard = 1) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, sh = c.createWaveShaper(), g = c.createGain(); sh.curve = this.curve; g.gain.value = 0.4 * hard; sh.connect(g).connect(this.master);
    for (const f of [207.7, 220, 311.1, 440, 466.2, 622.3]) this.tone('sawtooth', f, f * 0.965, 1.0, 0.17, sh, t, 0.003);
    this.burst(0.65, 0.65 * hard, 'bandpass', 3400, 650, 0.7, null, t, null, 0.002); this.tone('sine', 82, 29, 0.95, 0.7 * hard, null, t, 0.003);
  }
  // ---- the outpost failing
  powerDown(near = 1) { if (!this.ctx) return; const t = this.now, g = 0.25 + 0.75 * near; this.burst(0.03, 0.8 * g, 'bandpass', 1300, 1300, 3, null, t, null, 0.001); this.tone('sine', 150, 26, 1.4, 0.55 * g, null, t + 0.02, 0.01); this.tone('sawtooth', 100, 22, 1.2, 0.1 * g, null, t + 0.02, 0.01); this.burst(1.3, 0.25 * g, 'lowpass', 700, 50, 0.7, null, t, this.brown, 0.02); }
  powerUp(near = 1) { if (!this.ctx) return; const t = this.now, g = 0.25 + 0.75 * near; this.burst(0.03, 0.7 * g, 'bandpass', 1500, 1500, 3, null, t, null, 0.001); this.tone('sine', 34, 104, 0.9, 0.3 * g, null, t + 0.05, 0.3); this.tone('sine', 208, 208, 0.5, 0.06 * g, null, t + 0.5, 0.2); }
  fault(x, z, muffled) { if (!this.ctx) return; const d = this.at(x, z, 2.2, 3.5, muffled), t = this.now; this.tone('square', 58, 58, 0.4, 0.35, d, t, 0.005); for (let i = 0; i < 5; i++) this.burst(0.015, 0.6, 'highpass', 3000, 3000, 0.7, d, t + Math.random() * 0.4, null, 0.001); }
  quake(secs = 6.5) {
    if (!this.ctx) return; const t = this.now;
    this.burst(secs, 0.7, 'lowpass', 85, 60, 0.7, null, t, this.brown, secs * 0.22); this.burst(secs * 0.8, 0.32, 'lowpass', 240, 110, 0.6, null, t + 0.4, this.brown, secs * 0.25);
    for (let i = 0; i < 4; i++) { const tt = t + 0.5 + Math.random() * (secs - 2); this.tone('sine', 44 + Math.random() * 14, 26, 1.3, 0.38, null, tt, 0.03); }
    for (let i = 0; i < 9; i++) { const tt = t + 0.8 + Math.random() * (secs - 1.5), f = 600 + Math.random() * 1600; this.burst(0.05, 0.14, 'bandpass', f, f * 0.6, 3, null, tt, null, 0.002); }
  }
  // the first thing you hear from it: a long way off, through a lot of wall
  wakeCall(x, z) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, d = this.at(x, z, 2.2, 14, false, 400), lp = c.createBiquadFilter(), sh = c.createWaveShaper(), og = c.createGain(); lp.type = 'lowpass'; lp.frequency.value = 780; sh.curve = this.curve; og.gain.value = 0.3; sh.connect(lp).connect(og).connect(d);
    for (const det of [1, 1.012, 1.5]) { const o = c.createOscillator(), g = c.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(170 * det, t); o.frequency.exponentialRampToValueAtTime(430 * det, t + 0.7); o.frequency.exponentialRampToValueAtTime(250 * det, t + 1.9); o.frequency.exponentialRampToValueAtTime(120 * det, t + 3.0);
      const v = c.createOscillator(), vg = c.createGain(); v.frequency.value = 23; vg.gain.value = 18; v.connect(vg).connect(o.frequency);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.25); g.gain.setValueAtTime(0.5, t + 1.9); g.gain.exponentialRampToValueAtTime(0.0001, t + 3.1); o.connect(g).connect(sh); o.start(t); v.start(t); o.stop(t + 3.2); v.stop(t + 3.2); }
    this.burst(2.8, 0.18, 'bandpass', 1200, 500, 1.1, d, t + 0.1, null, 0.3);
  }

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

  // ---- layers that follow the state of things. o: { static 0..1, danger 0..1, winded 0..1, gen 0..1 (how close the generators are), tension 0..1 }
  update(dt, o) {
    if (!this.ctx) return; this.t += dt; const t = this.now;
    this.staticLevel += (o.static - this.staticLevel) * Math.min(1, dt * 5);
    const s = this.staticLevel, crackle = Math.random() < 0.3 ? 0.6 + Math.random() * 0.8 : 1;
    this.staticGain.gain.setTargetAtTime(s * s * 0.11 * crackle, t, 0.03);
    this.genGain.gain.setTargetAtTime(o.gen * 0.26, t, 0.3);
    const tn = clamp01(o.tension || 0); this.tenseGain.gain.setTargetAtTime(0.003 + 0.03 * tn + 0.08 * tn * tn, t, 0.7); this.tenseFl.frequency.setTargetAtTime(220 + 1100 * tn * tn, t, 0.7);
    if (o.danger > 0.35) { this.beatT -= dt; if (this.beatT <= 0) { this.beatT = 60 / (72 + 70 * o.danger); const g = 0.14 + 0.3 * o.danger; this.tone('sine', 62, 38, 0.13, g, null, t, 0.01); this.tone('sine', 52, 34, 0.12, g * 0.7, null, t + 0.16, 0.01); } }
    if (o.winded > 0.3) { this.breathT -= dt; if (this.breathT <= 0) { this.breathT = 0.75 - 0.25 * o.winded; const g = 0.05 + 0.1 * o.winded; this.burst(0.3, g, 'bandpass', 900, 1500, 1.4, null, t, null, 0.1); this.burst(0.3, g * 0.8, 'bandpass', 1300, 700, 1.4, null, t + 0.36, null, 0.08); } }
  }
}
