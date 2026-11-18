// Two browser pages in a varied match: do both see the same sealed doors and dead wings, does the second player see the
// power go when the leader's world trips it, and is the second player's view taken when the creature catches them?
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
const open = name => openGame(browser, srv.url, { relay: relay.url, name, size: [480, 270], query: 'nolock&varied&q=low' });
const A = await open('Ada'), B = await open('Bo');
const until = async (g, f, ms = 40000) => { try { await g.page.waitForFunction(f, null, { timeout: ms }); return true; } catch { return false; } };
const ev = (g, f, a) => g.page.evaluate(f, a);
const feedHas = (g, re, ms = 12000) => until(g, `[...document.querySelectorAll('#h-feed div')].some(d => ${re}.test(d.textContent))`, ms);

await until(A, '!document.getElementById("m-host").disabled'); await A.page.click('#m-host');
await until(B, '!document.getElementById("m-join").disabled'); await B.page.click('#m-join');
await until(A, '__los.session.rep.players.size === 2'); await A.page.click('#l-start');
for (const g of [A, B]) ok(await until(g, '__los.session.rep.phase === 1 && __los.session.rep.me && __los.player.mid === __los.session.rep.mid'), 'the match starts for ' + (g === A ? 'the leader' : 'Bo'));
await ev(A, () => { const w = __los.session.world; w.incT = 1e9; w.wake = 1e9; });
const pick = () => { const l = __los.session.rep.layout; return JSON.stringify([l.sealed, l.zones, l.trait, l.items.length, l.wake, l.liftWait]); };
const la = await ev(A, pick), lb = await ev(B, pick);
ok(la === lb && JSON.parse(la)[0].length >= 3, `both lay the match out the same way (${la})`);
ok(await ev(B, () => { const l = __los.session.rep.layout; return l.sealed.every(id => __los.s3.doors[id].seal.visible) && __los.s3.doors.filter(r => r.seal && r.seal.visible).length === l.sealed.length; }), 'Bo sees the same doors barred');
// the leader's world trips a circuit that has power this match
const z = JSON.parse(la)[1].findIndex((p, i) => i > 0 && p === 2);
console.log(`     (tripping circuit ${z})`);
ok(await ev(A, zz => __los.session.world.tripZone(zz, 6), z), 'the leader\'s world trips a circuit');
ok(await until(B, `__los.session.rep.zoneOff === ${1 << z} && __los.s3.pow[${z}] < 0.15`, 8000), 'Bo sees it go dark');
ok(await feedHas(B, '/has tripped in the/'), 'and is told'); await B.shot('v-bo-dark');
ok(await until(B, `__los.session.rep.zoneOff === 0 && __los.s3.pow[${z}] > 0.85`, 12000), 'and sees it come back');
await ev(A, () => __los.session.world.quake()); ok(await feedHas(B, '/hull is groaning/'), 'Bo feels the hull shudder');
await ev(A, () => { __los.session.world.wake = 0; }); ok(await feedHas(B, '/started to move/'), 'Bo hears it wake');
// it catches Bo
await ev(B, () => { const p = __los.player; p.x = 33; p.z = 33; p.yaw = -Math.PI / 2; p.pitch = 0; p.light = true; window.__minFov = 72; const loop = () => { window.__minFov = Math.min(window.__minFov, __los.cam.fov); requestAnimationFrame(loop); }; loop(); });
await A.page.waitForTimeout(700);
await ev(A, () => { const w = __los.session.world, c = w.creature, bo = [...w.players.values()].find(p => p.name === 'Bo'); w.time = Math.max(w.time, 60); c.enter(1); c.path = null; c.pauseT = 0; c.backoff = 0; c.ventCool = 1e9; c.x = 45; c.z = 33; c.yaw = Math.PI / 2; bo.invuln = 0; c.startHunt(bo); });
ok(await until(B, '__los.session.rep.me.status === 1', 20000), 'the creature brings Bo down');
ok(await ev(B, () => window.__minFov) < 66, 'and Bo\'s view lurched towards it as it did'); await B.shot('v-bo-caught');
ok(await feedHas(A, '/Bo is down/'), 'the leader is told');
for (const g of [A, B]) { ok(g.errors.length === 0, 'no errors on a page'); if (g.errors.length) console.log(g.errors.join('\n')); }
await browser.close(); srv.close(); relay.close(); process.exit(fail ? 1 : 0);
