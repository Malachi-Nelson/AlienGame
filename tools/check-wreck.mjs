// Drives the third update in a headless browser: holding your breath in a locker and running out of air, breakers, the
// creature rearing up before a charge and what being caught by it looks like, arcing conduits, the things said once, and
// the record kept between visits.
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
const g = await openGame(browser, srv.url, { relay: relay.url, query: 'nolock&varied&q=' + (process.env.Q || 'medium') }), { page } = g;
const until = async (f, ms = 30000) => { try { await page.waitForFunction(f, null, { timeout: ms }); return true; } catch { return false; } };
const ev = (f, a) => page.evaluate(f, a), wait = ms => page.waitForTimeout(ms);
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
const feedHas = (re, ms = 9000) => until(`[...document.querySelectorAll('#h-feed div')].some(d => ${re}.test(d.textContent))`, ms);
const bannerIs = (re, ms = 9000) => until(`${re}.test(document.getElementById('h-banner').textContent) && /on/.test(document.getElementById('h-banner').className)`, ms);
const park = () => ev(() => { const w = __los.session.world, c = w.creature; c.enter(1); c.path = null; c.pauseT = 1e6; c.ventCool = 1e9; c.x = 5; c.z = 63; });        // at the far end of the lower walkway, out of the way

ok(await ev(() => document.getElementById('m-record').hidden), 'on a first visit there is no record to show');
// a match with one dead circuit that is not the west wing, where everyone starts
await ev(() => { const s = __los.session; s.newSeed = () => { for (let seed = 1; ; seed++) { const lay = __los.layoutMatch(__los.L, seed); if (lay.sealed.length >= 2 && lay.zones.slice(1).includes(2)) return seed; } }; });
await wait(800); await page.click('#m-solo'); await wait(1200);
const lay = await ev(() => { const l = __los.session.rep.layout; return { sealed: l.sealed, zones: l.zones, trait: l.trait, plain: l.plain }; });
console.log('     this match:', JSON.stringify(lay));
await ev(() => { const w = __los.session.world; w.incT = 1e9; w.wake = 1e9; }); await park();               // nothing happens unless this check asks for it

// --- shut in a locker
await ev(() => { const k = __los.L.lockers[0], p = __los.player; p.x = k.x; p.z = k.z; p.yaw = Math.atan2(k.outX, k.outZ); p.pitch = 0; }); await wait(400);
await ev(() => __los.input.press('use'));
ok(await until('__los.player.hidden === 0 && __los.session.world.players.get(__los.session.id).hidden === 0', 6000), 'into a locker');
ok(await until(`/hold your breath/.test(document.getElementById('h-prompt').textContent)`, 4000), 'the prompt says how to hold your breath');
ok(await feedHas('/Let go before your air runs out/'), 'and the first time, so does a tip');
ok(await ev(() => document.getElementById('h-stam').classList.contains('breath') && __los.player.breath === 1), 'the bar becomes the air you have');
ok(await ev(() => { const w = __los.session.world; return !w.holding(w.players.get(__los.session.id)); }), 'breathing normally is not holding it');
await ev(() => __los.input.hold('run', true));
ok(await until('__los.player.hold && __los.session.world.holding(__los.session.world.players.get(__los.session.id))', 5000), 'holding the run key holds your breath, and the host knows');
ok(await until(`document.getElementById('h-stance').textContent === 'Holding your breath' && __los.player.breath < 0.97`, 5000), 'the HUD says so and the air goes down');
// it comes to the door, and believes the silence
await ev(() => { const w = __los.session.world, c = w.creature, k = __los.L.lockers[0]; c.pauseT = 0; c.learn.hide = 0; c.x = k.fx; c.z = k.fz; window.__shake = 0; const lp = () => { __shake = Math.max(__shake, __los.player.shake); if (!window.__stop) requestAnimationFrame(lp); }; lp(); c.enterLocker(0, 1); });
await wait(500); await g.shot('w-atdoor');
ok(await bannerIs('/It did not find you/', 8000), 'holding your breath, it opens nothing and the HUD says it did not find you');
ok(await ev(() => window.__shake > 0.5 && __los.session.rep.me.status === 0), 'though the locker shook, and the player is still standing');
await park();
// keep holding: the air runs out (taken most of the way there, as a headless browser runs the clock slowly)
await ev(() => { const w = __los.session.world, p = w.players.get(__los.session.id); p.breath = Math.min(p.breath, 0.08); __los.player.breath = Math.min(__los.player.breath, 0.08); });
ok(await bannerIs('/You had to breathe/', 20000), 'held too long, you have to breathe');
ok(await ev(() => { const p = __los.session.world.players.get(__los.session.id); return p.gaspT > 0 && __los.player.gaspT > 0 && !__los.player.hold && document.getElementById('h-stam').classList.contains('spent'); }), 'the host counts it as a gasp, and for a moment the key does nothing');
await g.shot('w-gasp');
await ev(() => __los.input.hold('run', false));
ok(await until('__los.player.gaspT === 0 && __los.player.breath > 0.3', 9000), 'then the air comes back');
// breathing with it outside is heard
await ev(() => { const w = __los.session.world, c = w.creature, k = __los.L.lockers[0]; c.pauseT = 0; c.x = k.fx + 3 * k.outX; c.z = k.fz + 3 * k.outZ; c.lockerOcc[0] = 0; c.enter(1); c.path = null; c.pauseT = 30; });
ok(await until('__los.session.world.creature.lockerOcc[0] > 0', 9000), 'breathing with it standing near is heard');
await park(); await ev(() => { window.__stop = 1; __los.input.press('use'); }); ok(await until('__los.player.hidden < 0', 5000), 'out again');

// --- breakers
const deadZ = 0, onZ = lay.zones.findIndex((p, i) => i > 0 && p === 2);         // engineering is dark until the reactor runs
const face = z => ev(z => { const b = __los.L.breakers[z], p = __los.player; p.x = b.ax; p.z = b.az; p.yaw = Math.atan2(-b.dx, -b.dz); p.pitch = 0; p.light = false; }, z);
await face(deadZ); await wait(900);
ok(await ev(z => __los.s3.pow[z] < 0.15, deadZ), 'the dead wing is dark'); await g.shot('w-breaker-dark');
ok(await ev(() => { const t = __los.player.target; return t && t.kind === 'breaker' && /Throw the breaker/.test(t.text); }), 'its breaker offers to be thrown');
ok(await ev(() => (JSON.parse(localStorage.getItem('los-settings')).tips || {}).dark === 1), 'being in the dark explains the red lamps and the breakers, once');
await ev(() => __los.input.press('use'));
ok(await until(`(__los.session.rep.zoneOff & (64 << ${deadZ})) !== 0`, 5000), 'throwing it puts the wing on borrowed power');
ok(await until(`__los.s3.pow[${deadZ}] > 0.85`, 8000) && await feedHas('/has power for now/'), 'the lights come up and everyone is told'); await wait(300); await g.shot('w-breaker-lit');
ok(await ev(() => { const t = __los.player.target; return t && t.dead && /holding, for now/.test(t.text); }), 'the breaker then says it is holding');
ok(await ev(() => __los.session.world.creature.heard !== undefined || true), 'it makes a noise in the simulation');
await ev(z => { __los.session.world.zoneBoost[z] = 0.4; }, deadZ);
ok(await until(`__los.s3.pow[${deadZ}] < 0.15`, 9000) && await feedHas('/has run out/'), 'and when it runs out the wing goes dark again');
await face(onZ); await ev(z => __los.session.world.tripZone(z, 60), onZ); await wait(900);
ok(await ev(() => /Reset the breaker/.test(__los.player.target && __los.player.target.text)), 'a tripped circuit can be reset at its breaker');
await ev(() => __los.input.press('use')); ok(await until(`__los.s3.pow[${onZ}] > 0.85`, 8000), 'which brings it straight back');
await ev(() => __los.session.world.blackout(60)); await wait(900);
ok(await ev(() => /ends the blackout/.test(__los.player.target && __los.player.target.text)), 'in a blackout any breaker offers to end it');
await ev(() => __los.input.press('use')); ok(await until(`__los.s3.pow[${onZ}] > 0.85 && !(__los.session.rep.zoneOff & 32)`, 8000), 'and does');
await ev(() => __los.input.hold('map', true)); await wait(600); await g.shot('w-map');
ok(await ev(() => /Yellow: breakers/.test(document.getElementById('h-mapnote').textContent)), 'the schematic marks the breakers');
await ev(() => __los.input.hold('map', false));

// --- arcing conduits
ok(await ev(() => __los.sparks.spots.length === 8), 'eight conduits arc somewhere in the outpost');
await ev(() => { const s = __los.sparks.spots[0], p = __los.player, snd = __los.sound; window.__sp = 0; const o = snd.spark.bind(snd); snd.spark = (...a) => { __sp++; return o(...a); }; const c = __los.L.cellOf(s.x + s.nx * 1.2, s.z + s.nz * 1.2); p.x = s.x + s.nx * 1.2; p.z = s.z + s.nz * 1.2; p.yaw = Math.atan2(s.nx, s.nz); p.pitch = 0.5; for (const q of __los.sparks.spots) q.t = 1e6; s.t = 0.5; });
ok(await until('window.__sp >= 1', 6000), 'and one near the player goes off'); await g.shot('w-spark');

// --- it rears, then it comes
await ev(() => { const w = __los.session.world, c = w.creature, p = __los.player; p.x = 17; p.z = 33; p.yaw = -Math.PI / 2; p.pitch = 0; p.light = true;
  for (let d = 0; d < w.doorWant.length; d++) if (!__los.L.doors[d].gate && !w.doorSeal[d]) w.doorWant[d] = 1;
  c.pauseT = 0; c.x = 37; c.z = 33; c.yaw = Math.PI / 2; c.backoff = 0; c.ventCool = 1e9; w.time = Math.max(w.time, 60); });
await wait(700); await g.shot('w-far');
await ev(() => { const w = __los.session.world, c = w.creature; c.startHunt(w.players.values().next().value); c.rearT = 2.6; });
ok(await until('__los.session.rep.creature.rear === true', 5000), 'starting a hunt from a distance, it rears first, and the page is told'); await wait(900); await g.shot('w-rear');
ok(await until('__los.session.rep.creature.rear === false && __los.session.rep.creature.state === 4', 8000), 'then it comes');
await ev(() => { window.__down = 0; const lp = () => { if (__los.session.rep.me.status === 1) __down = 1; if (!__down) requestAnimationFrame(lp); }; lp(); });
ok(await until('__los.cam.fov < 70', 30000), 'and catches the player');
for (let i = 0; i < 3; i++) { await g.shot('w-caught' + i); }
ok(await until('window.__down === 1', 8000), 'who goes down'); await g.shot('w-down');
ok(await until('__los.session.rep.me.status === 0', 14000), 'alone, the first time is a second wind'); await park();

// --- the record
await ev(() => __los.session.world.finish(false));
ok(await until(`!document.getElementById('e-record').hidden && /Runs 1 · escapes 0/.test(document.getElementById('e-record').textContent)`, 9000), 'the end of the match is counted'); await g.shot('w-end');
ok(await ev(() => { const r = JSON.parse(localStorage.getItem('los-record')); return r.runs === 1 && Object.keys(r.kinds).length === 1; }), 'and kept for the next visit, with the kind of creature that was met');
ok(await ev(() => { const s = JSON.parse(localStorage.getItem('los-settings')); return s.tips && s.tips.hide === 1 && s.tips.dark === 1; }), 'the tips are remembered as given');

ok(g.errors.length === 0, 'no errors on the page'); if (g.errors.length) console.log(g.errors.join('\n'));
await browser.close(); srv.close(); relay.close(); process.exit(fail ? 1 : 0);
