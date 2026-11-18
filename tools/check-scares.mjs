// Drives a varied match in a headless browser: this match's conditions, a sealed door, power going and coming back, the
// borehole shifting, a door fault, the creature waking, a figure that is not there, and being caught.
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
const g = await openGame(browser, srv.url, { relay: relay.url, query: 'nolock&varied&q=' + (process.env.Q || 'medium') }), { page } = g;
const until = async (f, ms = 30000) => { try { await page.waitForFunction(f, null, { timeout: ms }); return true; } catch { return false; } };
const ev = (f, a) => page.evaluate(f, a), wait = ms => page.waitForTimeout(ms);
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
const feedHas = (re, ms = 9000) => until(`[...document.querySelectorAll('#h-feed div')].some(d => ${re}.test(d.textContent))`, ms);

// a match with something of everything: at least four sealed doors and one dead circuit that is not the west wing
await ev(() => { const s = __los.session, orig = s.newSeed.bind(s); s.newSeed = () => { for (let seed = 1; ; seed++) { const lay = __los.layoutMatch(__los.L, seed); if (lay.sealed.length >= 4 && lay.zones.includes(0) && lay.zones[0] === 2) return seed; } }; });
await wait(800); await page.click('#m-solo'); await wait(1200);
const lay = await ev(() => { const l = __los.session.rep.layout; return { sealed: l.sealed, zones: l.zones, trait: l.trait, plain: l.plain, items: l.items.length, wake: l.wake }; });
console.log('     this match:', JSON.stringify(lay));
ok(!lay.plain && lay.sealed.length >= 4, 'a varied match has sealed doors');
await ev(() => { const w = __los.session.world; w.incT = 1e9; w.wake = 1e9; });               // nothing happens unless this check asks for it
ok(await feedHas('/sealed shut/', 40000), 'the match opens by saying how many doors are sealed');
ok(await feedHas('/No power in the/'), 'and which wing has no power'); await g.shot('s-brief');

// --- a sealed door
const door = await ev(id => { const L = __los.L, d = L.doors[id], p = __los.player, side = d.axis === 'x' ? [[0, 1.4], [0, -1.4]] : [[1.4, 0], [-1.4, 0]];
  for (const [ox, oz] of side) { const x = d.x + ox, z = d.z + oz; if (L.walkC[L.cellOf(x, z)]) { p.x = x; p.z = z; p.yaw = Math.atan2(ox, oz); p.pitch = 0; p.light = true; return { id, want: __los.session.rep.doorWant[id] }; } } return null; }, lay.sealed[0]);
await wait(500);
ok(door && await ev(() => __los.player.target && /^Sealed/.test(__los.player.target.text) && __los.player.target.dead), 'a sealed door says so and cannot be worked'); await g.shot('s-sealed');
await ev(() => __los.input.press('use')); await wait(500);
ok(await ev(id => __los.session.rep.doorWant[id] === 0 && __los.s3.doors[id].seal.visible, lay.sealed[0]), 'pressing use leaves it shut, and it is barred');
await ev(() => __los.input.hold('map', true)); await wait(500); await g.shot('s-map');
ok(await ev(() => /Red: sealed doors/.test(document.getElementById('h-mapnote').textContent) && /Shaded: no power/.test(document.getElementById('h-mapnote').textContent)), 'the schematic marks sealed doors and dark wings');
await ev(() => __los.input.hold('map', false));

// --- power
const deadZ = lay.zones.indexOf(0);
ok(await ev(z => __los.s3.pow[z] < 0.15 && __los.s3.pow[0] > 0.85, deadZ), 'the dead wing is dark and the dock is lit');
await ev(() => { const p = __los.player; p.x = 27; p.z = 49; p.yaw = Math.PI / 2; p.light = false; }); await wait(600); await g.shot('s-lit');
await ev(() => __los.session.world.tripZone(0, 5)); await wait(1300);
ok(await ev(() => __los.s3.pow[0] < 0.15), 'a tripped circuit goes dark'); await g.shot('s-tripped');
ok(await feedHas('/tripped in the west wing/'), 'and everyone is told');
ok(await until('__los.s3.pow[0] > 0.85', 9000), 'it comes back by itself'); ok(await feedHas('/Power is back in the west wing/'), 'and that is announced too');
await ev(() => __los.session.world.blackout(3)); await wait(1200);
ok(await ev(() => Array.from(__los.s3.pow).every(v => v < 0.15)), 'a blackout takes every circuit'); await g.shot('s-blackout');
ok(await until('Array.from(__los.s3.pow).filter(v => v > 0.85).length >= 3', 9000), 'and ends');

// --- the borehole, the doors, the radio
await ev(() => __los.session.world.quake()); ok(await until('__los.player.shake > 0.2', 4000) && await feedHas('/borehole is shifting/'), 'the borehole shifting shakes the view');
ok(await ev(() => __los.session.world.doorFault(__los.session.world.players.values().next().value) >= 2) && await feedHas('/Door fault/'), 'a door fault moves doors and says so');
await ev(() => { __los.scares.radioT = 0; }); ok(await feedHas('/^Radio:/'), 'the radio picks something up');

// --- it wakes
await ev(() => { const w = __los.session.world; w.wake = 0; });
ok(await feedHas('/started to move/') && await ev(() => __los.session.rep.creature.state !== 0), 'the creature waking is announced');
await ev(() => { const w = __los.session.world, c = w.creature; c.enter(1); c.path = null; c.pauseT = 1e6; c.x = 121; c.z = 17; });        // parked in the lab, a long way off

// --- a figure that is not there
await ev(() => { const p = __los.player; p.x = 50; p.z = 25.5; p.yaw = -Math.PI / 2; p.pitch = 0; p.light = true; for (let d = 0; d < __los.session.world.doorWant.length; d++) if (!__los.L.doors[d].gate && !__los.session.world.doorSeal[d]) __los.session.world.doorWant[d] = 1; __los.scares.phantomT = 0; });
const seenIt = await until('__los.scares.ph !== null && (window.__ph = { x: __los.scares.ph.x, z: __los.scares.ph.z, vis: __los.scares.fig.g.visible })', 15000);
ok(seenIt, 'a figure appears somewhere ahead'); await g.shot('s-figure');
if (seenIt) {
  const d0 = await ev(() => { const p = __los.player, f = window.__ph; return Math.hypot(f.x - p.x, f.z - p.z); });
  ok(d0 > 9 && d0 < 27 && await ev(() => window.__ph.vis), `drawn, and well away from the player (${d0.toFixed(1)} m)`);
  await ev(() => { const p = __los.player, f = window.__ph; p.yaw = Math.atan2(-(f.x - p.x), -(f.z - p.z)); p.pitch = 0; });
  ok(await until('__los.scares.ph === null && !__los.scares.fig.g.visible', 6000), 'and is gone once it is looked at');
}
// --- a start
await ev(() => { const k = __los.L.lockers[0], p = __los.player; p.x = k.x; p.z = k.z; __los.scares.startleT = 0; }); await wait(500);
ok(await ev(() => __los.scares.startleT > 50), 'passing a locker can set something off');

// --- caught: the view turns to face it
await ev(() => {
  const w = __los.session.world, c = w.creature, p = __los.player; p.x = 27; p.z = 49; p.yaw = Math.PI / 2; p.pitch = 0; p.light = true;      // looking west, its back to the creature
  window.__rec = { fov: 72, err: 9, t0: 0 }; const loop = () => { const cr = __los.session.rep.creature, a = Math.atan2(-(cr.x - p.x), -(cr.z - p.z)); let e = Math.abs(a - p.yaw); if (e > Math.PI) e = 2 * Math.PI - e; if (__los.cam.fov < 71.5) { __rec.fov = Math.min(__rec.fov, __los.cam.fov); __rec.err = Math.min(__rec.err, e); } requestAnimationFrame(loop); }; loop();
  c.pauseT = 0; c.x = 33; c.z = 49; c.yaw = Math.PI / 2; c.backoff = 0; w.time = Math.max(w.time, 60);
});
await wait(150); await ev(() => { const w = __los.session.world, c = w.creature; c.startHunt(w.players.values().next().value); });
ok(await until('__los.cam.fov < 70', 12000), 'being caught lurches the view'); await wait(200); await g.shot('s-caught');
ok(await until('__los.session.rep.me.status === 1', 5000), 'and brings the player down'); await wait(400); await g.shot('s-down');
const rec = await ev(() => window.__rec);
ok(rec.fov < 62 && rec.err < 0.5, `the view was turned to face it (${rec.err.toFixed(2)} rad off, field of view ${rec.fov.toFixed(0)})`);
ok(await until('__los.session.rep.me.status === 0', 12000), 'alone, the first time is a second wind');

// --- found in a locker, and the end card says what it was
await ev(() => { const w = __los.session.world, c = w.creature; c.enter(1); c.path = null; c.pauseT = 1e6; c.x = 121; c.z = 17; const k = __los.L.lockers[0], p = __los.player; p.x = k.x; p.z = k.z; p.yaw = Math.atan2(k.outX, k.outZ); p.pitch = 0; });
await wait(400); await ev(() => __los.input.press('use')); await until('__los.session.world.players.values().next().value.hidden === 0', 5000);
await ev(() => { const w = __los.session.world, c = w.creature, k = __los.L.lockers[0]; w.players.values().next().value.invuln = 0; c.pauseT = 0; c.x = k.x; c.z = k.z; c.enterLocker(0, 1); });
await wait(700); await g.shot('s-locker');
ok(await until('__los.session.rep.phase === 2', 12000), 'found in a locker with no second wind left, the match is lost');
ok(await until('!document.querySelector("[data-screen=end]").hidden && !document.getElementById("e-extra").hidden', 8000), 'the end card comes up');
const extra = await ev(() => document.getElementById('e-extra').textContent); await g.shot('s-end');
ok(/^What was down thereThe (Prowler|Listener|Watcher|Stalker|Runner|Warden)/.test(extra) && /doors sealed/.test(extra), 'and says which creature it was and what state the outpost was in');
// --- the setting
await page.click('#e-leave'); await wait(600);
await page.uncheck('#s-scare'); ok(await ev(() => __los.settings.scares === false && JSON.parse(localStorage.getItem('los-settings')).scares === false), 'sudden scares can be switched off, and it is remembered');
ok(g.errors.length === 0, 'no errors on the page'); if (g.errors.length) console.log(g.errors.join('\n'));
await browser.close(); srv.close(); relay.close(); process.exit(fail ? 1 : 0);
