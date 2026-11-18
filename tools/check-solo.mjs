// Drives the built page alone, in a headless browser: boots it, starts a match, walks, uses a door, takes a tag, hides, and looks at the creature.
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
const g = await openGame(browser, srv.url, { relay: relay.url, query: 'nolock&q=' + (process.env.Q || 'medium') }), { page } = g;
const until = async (f, ms = 30000) => { try { await page.waitForFunction(f, null, { timeout: ms }); return true; } catch { return false; } };
const ev = (f, a) => page.evaluate(f, a), wait = ms => page.waitForTimeout(ms);
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
await wait(1500); await g.shot('p-title');
await page.click('#m-solo'); await wait(2500);
ok(await ev(() => __los.session.mode === 'solo' && __los.session.rep.phase === 1), 'a solo match starts');
ok(await ev(() => !document.getElementById('hud').hidden), 'the HUD is up');
await g.shot('p-start');
const p0 = await ev(() => ({ x: __los.player.x, z: __los.player.z }));
await ev(() => { __los.keys.add('KeyW'); }); const walked = await until(`Math.hypot(__los.player.x - ${p0.x}, __los.player.z - ${p0.z}) > 2`, 20000); await ev(() => { __los.keys.delete('KeyW'); });
ok(walked, 'walking moves the player');
// the dock door: walk up to it and press E
await ev(() => { const p = __los.player; p.x = 34.6; p.z = 49.6; p.yaw = -Math.PI / 2; }); await wait(400);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'door'), 'facing the dock door offers to open it');
const want0 = await ev(() => __los.session.rep.doorWant[__los.L.doorAt[__los.L.idx(18, 24)]]);
await ev(() => __los.pressed.add('KeyE'));
ok(await until(`__los.session.rep.doorWant[__los.L.doorAt[__los.L.idx(18, 24)]] !== ${want0}`, 8000), 'E works the door'); await wait(700);
await g.shot('p-door');
// lamp
await ev(() => __los.pressed.add('KeyF')); await wait(400); ok(await ev(() => __los.player.light), 'F turns the lamp on'); await g.shot('p-lamp');
// a tag
const tag = await ev(() => { const t = __los.session.rep.layout.tags[0]; const p = __los.player; p.x = t.x + 1.2; p.z = t.z; p.yaw = Math.PI / 2; return t; }); await wait(300);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'tag'), 'standing by a tag offers to take it');
await g.shot('p-tag');
await ev(() => __los.pressed.add('KeyE')); await wait(700);
ok(await ev(() => __los.session.rep.tagCount() === 1), 'E takes the tag'); await g.shot('p-tag-taken');
// a locker
await ev(() => { const k = __los.L.lockers[0], p = __los.player; p.x = k.x; p.z = k.z; p.yaw = Math.atan2(k.outX, k.outZ); }); await wait(300);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'hide'), 'facing a locker offers to hide');
await ev(() => __los.pressed.add('KeyE')); await wait(900); ok(await ev(() => __los.player.hidden === 0 && __los.session.world.players.get(__los.session.id).hidden === 0), 'E hides in it, and the host knows'); await g.shot('p-locker');
await ev(() => __los.pressed.add('KeyE')); await wait(500); ok(await ev(() => __los.player.hidden < 0), 'E again steps out');
// the map and the scanner
await ev(() => __los.keys.add('Tab')); await wait(400); await g.shot('p-map'); await ev(() => __los.keys.delete('Tab'));
await ev(() => __los.keys.add('KeyQ')); await wait(500); ok(await ev(() => !document.getElementById('h-scan').hidden), 'Q brings up the scanner'); await ev(() => __los.keys.delete('KeyQ'));
// meet the creature: stand in front of it with the lamp on
await ev(() => { const w = __los.session.world, c = w.creature, p = __los.player; w.time = Math.max(w.time, 30); c.enter(1); c.path = null; c.pauseT = 20; c.lookT = 0; c.baseYaw = Math.PI / 2; c.backoff = 0; c.x = 59; c.z = 49; c.yaw = Math.PI / 2; p.x = 47; p.z = 49; p.yaw = -Math.PI / 2; p.light = true; });
ok(await until('__los.session.world.creature.stats.hunts >= 1', 15000), 'the creature notices someone standing in its path with a lamp on'); await g.shot('p-creature');
ok(await until('__los.session.rep.me.status === 1', 30000), 'and it catches them'); await g.shot('p-caught');
ok(await until('__los.session.rep.me.status === 0 && __los.session.rep.me.wind === 0', 40000), 'alone, the first time down is a second wind'); await wait(800); await g.shot('p-wind');
// a sounder, thrown down the corridor
await ev(() => { const p = __los.player; p.x = 47; p.z = 49; p.yaw = -Math.PI / 2; p.pitch = 0.1; p.light = false; __los.session.world.creature.update = () => {}; const c = __los.session.world.creature; c.x = 121; c.z = 75; });
await wait(400); await ev(() => __los.pressed.add('KeyG'));
ok(await until('__los.session.rep.decoys.size === 1', 8000), 'G throws a sounder');
ok(await until('[...__los.session.rep.decoys.values()][0] && [...__los.session.rep.decoys.values()][0].state === 1', 20000), 'it lands and starts up');
ok(await ev(() => __los.session.rep.me.decoys === 0), 'and it is gone from the belt'); await wait(500); await g.shot('p-sounder');
// the rest of the tags, the lift, and out
await ev(() => { const w = __los.session.world, p = [...w.players.values()][0]; w.tags.forEach((t, i) => { if (!t.taken) { t.taken = true; w.tagBits |= 1 << i; w.tagsTaken++; } }); w.lift.state = 1; w.event('liftready'); });
ok(await until('__los.session.rep.lift.state === 1 && __los.session.rep.tagCount() === 8', 8000), 'with every tag in, the lift unlocks');
await ev(() => { const c = __los.L.lift.console, p = __los.player; p.x = c.x + 1.6; p.z = c.z + 0.2; p.yaw = Math.PI / 2; p.pitch = -0.3; }); await wait(500);
ok(await ev(() => __los.player.target && __los.player.target.kind === 'lift'), 'the panel offers to call it'); await g.shot('p-panel');
await ev(() => __los.pressed.add('KeyE')); ok(await until('__los.session.rep.lift.state === 2', 8000), 'E calls the lift');
await ev(() => { __los.session.world.lift.timer = 7; const p = __los.player; p.x = 24; p.z = 50; p.yaw = Math.PI / 2; p.pitch = 0.25; });
await wait(2500); await g.shot('p-lift-coming');
ok(await until('__los.session.rep.lift.state === 3', 40000), 'the lift arrives'); await wait(1500); await g.shot('p-lift-here');
await ev(() => { const p = __los.player; p.x = __los.L.lift.x; p.z = __los.L.lift.z; });
ok(await until('__los.session.rep.phase === 2 && __los.session.rep.result && __los.session.rep.result.win === 1', 40000), 'riding it ends the match as a win');
ok(await until('__los.hud.screen === "end"', 8000), 'the end card comes up'); await wait(600); await g.shot('p-end');
ok(await ev(() => /made it out/i.test(document.getElementById('e-title').textContent)), 'and says you made it out');
await page.click('#e-again');
ok(await until('__los.session.rep.phase === 1 && __los.session.rep.tagCount() === 0 && __los.player.mid === __los.session.rep.mid', 15000), '"Go again" starts a fresh match');
await page.evaluate(() => document.getElementById('p-leave').click()); ok(await until('__los.session.mode === "menu" && __los.hud.screen === "title"', 8000), 'leaving goes back to the title');
const info = await ev(() => ({ calls: __los.gfx.renderer.info.render.calls, tris: __los.gfx.renderer.info.render.triangles, build: __los.build }));
console.log(JSON.stringify(info));
ok(g.errors.length === 0, 'no errors on the page' + (g.errors.length ? ':\n' + g.errors.join('\n') : ''));
await browser.close(); srv.close(); relay.close(); process.exit(fail ? 1 : 0);
