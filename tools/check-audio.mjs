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
    'tension, in a dark wing': s => s.update(0.05, { static: 0, danger: 0, winded: 0, gen: 0, tension: 0.21 }),
    'tension, it is close': s => s.update(0.05, { static: 0, danger: 0, winded: 0, gen: 0, tension: 1 }),
    'caught: the sting': s => s.sting(1),
    'caught: the sting, scares off': s => s.sting(0.5),
    'it wakes, 80 m away': s => s.wakeCall(80, 0),
    'it wakes, 30 m away': s => s.wakeCall(30, 0),
    'power trips here': s => s.powerDown(1),
    'power trips in another wing': s => s.powerDown(0.12),
    'power comes back': s => s.powerUp(1),
    'the borehole shifts': s => s.quake(2),
    'door fault at 8 m': s => s.fault(8, 0, false),
    'a creak at 25 m': s => s.creak(25, 0),
    'knocking at 25 m': s => s.knock(25, 0),
    'ice cracking at 20 m': s => s.iceCrack(20, 0),
    'wind in the bore at 30 m': s => s.howl(30, 0),
    'a drip at 5 m': s => s.drip(5, 0),
    'radio garble': s => s.garble(1.5),
    'a breath behind you': s => s.breath(-0.9, 0),
    'something in a duct at 3 m': s => s.ductScuttle(3, 0),
    'a locker struck from inside at 2 m': s => s.thump(2, 0),
    'a tube going overhead': s => s.pop(1.5, 0),
    'a figure vanishing': s => s.vanish(),
    'its neck cracking at 3 m': s => s.crack(3, 0, false),
    'its neck cracking at 12 m': s => s.crack(12, 0, false),
    'it breathes, 5 m away': s => s.voice('breath', 5, 0, false),
    'it breathes, 14 m away': s => s.voice('breath', 14, 0, false),
    'it snarls, 6 m away': s => s.voice('snarl', 6, 0, false),
    'it snarls, 15 m away, wall between': s => s.voice('snarl', 15, 0, true),
    'you could not hold your breath': s => s.gasp(),
    'a breaker thrown in front of you': s => s.breaker(1, 0, false),
    'a breaker thrown 40 m away, walls between': s => s.breaker(40, 0, true),
    'a conduit arcing at 4 m': s => s.spark(4, 0, false),
    'a conduit arcing at 20 m': s => s.spark(20, 0, false),
    'your own breathing, shut in a locker': s => s.update(0.05, { static: 0, danger: 0, winded: 0, gen: 0, hiding: true, holding: false }),
    'holding your breath, it is at the door': s => { s.update(0.05, { static: 0.6, danger: 0.9, winded: 0, gen: 0, hiding: true, holding: true }); if (!s._once) { s._once = 1; s.tick(1.5, 0, 2, false); } },
  };
  const out = {};
  for (const [name, fn] of Object.entries(cases)) {
    const secs = 2.5, ctx = new OfflineAudioContext(2, 44100 * secs, 44100), s = new __los.Sound(); s.vol = 0.8; s.start(ctx, name !== 'room tone only');
    s.listener(0, 1.6, 0, 1, 0, 0);
    // play it a few times, spaced out, part-way into the render
    let err = null; const times = /footfall|footstep/.test(name) ? [0.3, 0.6, 0.9, 1.2, 1.5] : /static|out of breath|generators|tension|locker$|at the door$/.test(name) ? Array.from({ length: 46 }, (_, i) => 0.1 + i * 0.05) : [0.3];
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
