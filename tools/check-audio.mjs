// Nobody can listen to a headless browser, so this renders each sound offline and measures it: is anything silent, clipping,
// or wildly louder than the rest? Each sound is measured on its own, without the room tone, after the master gain and
// compressor, as it reaches the speakers.
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch(), g = await openGame(browser, srv.url, { relay: relay.url });
const res = await g.page.evaluate(async () => {
  const cases = {
    'room tone only': s => {},
    'own footstep, walking': s => s.step({ run: false, crouch: false }),
    'own footstep, crouched': s => s.step({ run: false, crouch: true }),
    'own footstep, running': s => s.step({ run: true, crouch: false }),
    'creature footfalls at 4 m': s => s.tick(4, 0, 4, false),
    'creature footfalls at 15 m': s => s.tick(15, 0, 4, false),
    'creature footfalls at 30 m': s => s.tick(30, 0, 4, false),
    'creature footfalls at 15 m, wall between': s => s.tick(15, 0, 4, true),
    'another player running at 8 m': s => s.stepAt(8, 0, true, false),
    'screech at 12 m': s => s.voice('screech', 12, 0, false),
    'screech at 40 m, wall between': s => s.voice('screech', 40, 0, true),
    'alert chitter at 10 m': s => s.voice('alert', 10, 0, false),
    'hiss at 10 m': s => s.voice('hiss', 10, 0, false),
    'door at 5 m': s => s.door(5, 0, true, false, false),
    'door forced at 10 m': s => s.door(10, 0, true, true, false),
    'locker torn open at 3 m': s => s.locker(3, 0, true, false),
    'sounder at 20 m': s => s.beep(20, 0, false),
    'lift alarm at 25 m': s => s.klaxon(25, 0),
    'tag picked up': s => s.pickupTag(),
    'going down': s => s.downed(),
    'full static and heartbeat (it is on top of you)': s => s.update(0.05, { static: 1, danger: 1, winded: 0, gen: 0 }),
    'out of breath': s => s.update(0.05, { static: 0, danger: 0, winded: 1, gen: 0 }),
    'beside the generators': s => s.update(0.05, { static: 0, danger: 0, winded: 0, gen: 1 }),
  };
  const out = {};
  for (const [name, fn] of Object.entries(cases)) {
    const secs = 2.5, ctx = new OfflineAudioContext(2, 44100 * secs, 44100), s = new __los.Sound(); s.vol = 0.8; s.start(ctx, name !== 'room tone only');
    s.creakT = 999; s.listener(0, 1.6, 0, 1, 0, 0);
    // play it a few times, spaced out, part-way into the render
    let err = null; const times = /footfall|footstep/.test(name) ? [0.3, 0.6, 0.9, 1.2, 1.5] : /static|breath|generators/.test(name) ? Array.from({ length: 46 }, (_, i) => 0.1 + i * 0.05) : [0.3];
    for (const t of times) ctx.suspend(t).then(() => { try { fn(s); } catch (e) { err = e; } ctx.resume(); });
    const buf = await ctx.startRendering(); if (err) { out[name] = 'ERROR ' + err.message; continue; }
    let peak = 0, sum = 0, n = 0;
    for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 4000; i < d.length; i++) { const v = Math.abs(d[i]); if (v > peak) peak = v; sum += v * v; n++; } }
    out[name] = { peak: +peak.toFixed(3), rmsDb: +(20 * Math.log10(Math.sqrt(sum / n) + 1e-9)).toFixed(1), peakDb: +(20 * Math.log10(peak + 1e-9)).toFixed(1) };
  }
  return out;
});
let bad = 0;
for (const [k, v] of Object.entries(res)) { const flag = typeof v === 'string' ? 'ERROR' : v.peak >= 0.999 ? 'CLIPS' : v.peak < 0.004 ? 'SILENT' : ''; if (flag) bad++; console.log(k.padEnd(44), typeof v === 'string' ? v : `peak ${String(v.peakDb).padStart(6)} dB   average ${String(v.rmsDb).padStart(6)} dB  ${flag}`); }
console.log(g.errors.length ? 'page errors:\n' + g.errors.join('\n') : 'no page errors');
await browser.close(); srv.close(); relay.close(); process.exit(bad || g.errors.length ? 1 : 0);
