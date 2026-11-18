// Drives the built page alone, in a headless browser, from the airlock to the escape pod: walking, a door, a station,
// a bulkhead, a tag, a locker, the creature, a sounder, the uplink, and the pod.
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
const g = await openGame(browser, srv.url, { relay: relay.url, query: 'nolock&q=' + (process.env.Q || 'medium') }), { page } = g;
const until = async (f, ms = 30000) => { try { await page.waitForFunction(f, null, { timeout: ms }); return true; } catch { return false; } };
const ev = (f, a) => page.evaluate(f, a), wait = ms => page.waitForTimeout(ms);
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
const at = (cx, cz, yaw = 0, pitch = 0) => ev(([cx, cz, yaw, pitch]) => { const p = __los.player; p.x = (cx + 0.5) * 2; p.z = (cz + 0.5) * 2; p.yaw = yaw; p.pitch = pitch; }, [cx, cz, yaw, pitch]);
const E = -Math.PI / 2, Wd = Math.PI / 2, N = 0, S = Math.PI;
// finish the job in the crew's section and walk them through the bulkhead into the next
const moveOn = async k => { await ev(() => __los.session.world.finishSection()); await until(`__los.session.rep.secDone`, 8000); const sp = await ev(k => __los.L.sections[k].spawns[0], k); await at(sp.cx, sp.cz, E); return until(`__los.session.rep.sec === ${k}`, 15000); };
await wait(1500); await g.shot('p-title');
await page.click('#m-solo'); await wait(2500);
ok(await ev(() => __los.session.mode === 'solo' && __los.session.rep.phase === 1), 'a solo match starts');
ok(await ev(() => !document.getElementById('hud').hidden && /engineering/i.test(document.getElementById('h-cap').textContent) && document.getElementById('h-tags').children.length === 4), 'the HUD is up: engineering, with four things to do');
await ev(() => { const w = __los.session.world; w.wake = 1e9; }); await g.shot('p-start');
const p0 = await ev(() => ({ x: __los.player.x, z: __los.player.z }));
await ev(() => { __los.input.hold('fwd', true); }); const walked = await until(`Math.hypot(__los.player.x - ${p0.x}, __los.player.z - ${p0.z}) > 2`, 20000); await ev(() => { __los.input.hold('fwd', false); });
ok(walked, 'walking moves the player');
// the airlock door
await ev(() => { const p = __los.player; p.x = 12.4; p.z = 34; p.yaw = -Math.PI / 2; p.pitch = 0; }); await wait(400);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'door'), 'facing the airlock door offers to open it');
const want0 = await ev(() => __los.session.rep.doorWant[__los.L.doorAt[__los.L.idx(7, 16)]]);
await ev(() => __los.input.press('use'));
ok(await until(`__los.session.rep.doorWant[__los.L.doorAt[__los.L.idx(7, 16)]] !== ${want0}`, 8000), 'E works the door'); await wait(700); await g.shot('p-door');
await ev(() => __los.input.press('lamp')); await wait(400); ok(await ev(() => __los.player.light), 'F turns the lamp on');
// a coolant pump
await at(20, 10, E); await wait(400);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'station' && /coolant pump/i.test(__los.player.target.text)), 'standing at a coolant pump offers to work it');
await ev(() => __los.input.hold('use', true)); await wait(1500); await g.shot('p-pump');
ok(await until('__los.session.rep.stProg[0] >= 1', 60000), 'holding use brings it back online');
await ev(() => __los.input.hold('use', false));
ok(await until(`document.getElementById('h-tags').querySelectorAll('i.on').length === 1`, 5000), 'and the HUD counts it');
await at(28, 26, E); await wait(400);
ok(await ev(() => __los.player.target && /pumps are not running/.test(__los.player.target.text)), 'the reactor lever waits for the other pumps');
// the bulkhead: shut until the job is done, then open, then sealed behind
await at(29, 16, E); await wait(400);
ok(await ev(() => __los.player.target && /locked until the job here is done/.test(__los.player.target.text)), 'the bulkhead says it is locked');
ok(await moveOn(1), 'with the reactor running the bulkhead opens, and going through moves the crew on');
ok(await until(`/cargo deck/i.test(document.getElementById('h-cap').textContent) && __los.session.rep.doorWant[__los.L.sections[0].bulkOut] === 0`, 8000), 'the HUD says Cargo Deck and the bulkhead shuts behind'); await g.shot('p-cargo');
// a tag
await ev(() => { const t = __los.session.rep.layout.tags[0]; const p = __los.player; p.x = t.x + 1.2; p.z = t.z; p.yaw = Math.PI / 2; }); await wait(300);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'tag'), 'standing by a tag offers to take it');
await ev(() => __los.input.press('use')); await wait(700);
ok(await ev(() => __los.session.rep.tagCount() === 1), 'E takes the tag'); await g.shot('p-tag-taken');
// a locker
const kid = await ev(() => { const k = __los.L.lockers.find(k => k.cx === 31 && k.cz === 5), p = __los.player; p.x = k.x; p.z = k.z; p.yaw = Math.atan2(k.outX, k.outZ); return k.id; }); await wait(300);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'hide'), 'facing a locker offers to hide');
await ev(() => __los.input.press('use')); await wait(900); ok(await ev(id => __los.player.hidden === id && __los.session.world.players.get(__los.session.id).hidden === id, kid), 'E hides in it, and the host knows'); await g.shot('p-locker');
await ev(() => __los.input.press('use')); await wait(500); ok(await ev(() => __los.player.hidden < 0), 'E again steps out');
// the map and the scanner
await ev(() => __los.input.hold('map', true)); await wait(400); await g.shot('p-map'); await ev(() => __los.input.hold('map', false));
await ev(() => __los.input.hold('scan', true)); await wait(500); ok(await ev(() => !document.getElementById('h-scan').hidden && /TAG/.test(document.getElementById('h-scan').textContent)), 'Q brings up the scanner, pointing to a tag'); await ev(() => __los.input.hold('scan', false));
// meet the creature: stand in front of it in the hold with the lamp on
await ev(() => { const w = __los.session.world, c = w.creature, p = __los.player; w.time = Math.max(w.time, 30); w.wake = 0; c.enter(1); c.path = null; c.pauseT = 20; c.lookT = 0; c.baseYaw = Math.PI / 2; c.backoff = 0; c.ventCool = 1e9; c.x = 105; c.z = 33; c.yaw = Math.PI / 2; p.x = 81; p.z = 33; p.yaw = -Math.PI / 2; p.light = true; });
ok(await until('__los.session.world.creature.stats.hunts >= 1', 15000), 'the creature notices someone standing in its path with a lamp on'); await g.shot('p-creature');
ok(await until('__los.session.rep.me.status === 1', 30000), 'and it catches them'); await g.shot('p-caught');
ok(await until('__los.session.rep.me.status === 0 && __los.session.rep.me.wind === 0', 40000), 'alone, the first time down is a second wind'); await wait(800);
// a sounder, thrown down the hold
await ev(() => { const p = __los.player; p.x = 81; p.z = 33; p.yaw = -Math.PI / 2; p.pitch = 0.1; p.light = false; __los.session.world.creature.update = () => {}; const c = __los.session.world.creature; c.x = 117; c.z = 59; });
await wait(400); await ev(() => __los.input.press('throw'));
ok(await until('__los.session.rep.decoys.size === 1', 8000), 'G throws a sounder');
ok(await until('[...__los.session.rep.decoys.values()][0] && [...__los.session.rep.decoys.values()][0].state === 1', 20000), 'it lands and starts up');
// on through the crew deck to the bridge
ok(await moveOn(2), 'the cargo deck done, on to the crew deck');
ok(await moveOn(3), 'and the crew deck done, on to the command deck'); await g.shot('p-command');
const up = await ev(() => __los.L.stations.find(s => s.kind === 'uplink'));
await at(up.cx, up.cz, N); await wait(400);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'station'), 'the uplink offers to take the codes');
await ev(() => __los.input.hold('use', true)); ok(await until('__los.session.rep.lift.state === 1', 60000), 'holding use uploads them, and the pod is ready'); await ev(() => __los.input.hold('use', false));
await ev(() => { const c = __los.L.lift.console, p = __los.player; p.x = c.x + 1.6; p.z = c.z + 0.2; p.yaw = Math.PI / 2; p.pitch = -0.3; }); await wait(500);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'lift'), 'the pod console offers to prime it'); await g.shot('p-panel');
await ev(() => __los.input.press('use')); ok(await until('__los.session.rep.lift.state === 2', 8000), 'E primes the pod');
await ev(() => { __los.session.world.lift.timer = 4; const p = __los.player; p.x = 197; p.z = 22; p.yaw = 0; p.pitch = 0.1; });
ok(await until('__los.session.rep.lift.state === 3', 40000), 'the hatch opens'); await wait(1500); await g.shot('p-pod-open');
await ev(() => { const p = __los.player; p.x = __los.L.lift.x; p.z = __los.L.lift.z; });
ok(await until('__los.session.rep.phase === 2 && __los.session.rep.result && __los.session.rep.result.win === 1', 40000), 'getting in ends the match as a win');
ok(await until('__los.hud.screen === "end"', 8000), 'the end card comes up'); await wait(600); await g.shot('p-end');
ok(await ev(() => /made it out/i.test(document.getElementById('e-title').textContent)), 'and says you made it out');
await page.click('#e-again');
ok(await until('__los.session.rep.phase === 1 && __los.session.rep.sec === 0 && __los.session.rep.tagCount() === 0 && __los.player.mid === __los.session.rep.mid', 15000), '"Go again" starts a fresh match, back in engineering');
ok(await ev(() => __los.L.secOf[__los.L.cellOf(__los.player.x, __los.player.z)] === 0), 'with the player back at the airlock');
await page.evaluate(() => document.getElementById('p-leave').click()); ok(await until('__los.session.mode === "menu" && __los.hud.screen === "title"', 8000), 'leaving goes back to the title');
const info = await ev(() => ({ calls: __los.gfx.renderer.info.render.calls, tris: __los.gfx.renderer.info.render.triangles, build: __los.build }));
console.log(JSON.stringify(info));
ok(g.errors.length === 0, 'no errors on the page' + (g.errors.length ? ':\n' + g.errors.join('\n') : ''));
await browser.close(); srv.close(); relay.close(); process.exit(fail ? 1 : 0);
