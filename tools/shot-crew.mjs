// A close look at another player, and at the creature from a second player's side. Screenshots only.
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
const A = await openGame(browser, srv.url, { relay: relay.url, name: 'Ada', size: [1280, 720], query: 'nolock&q=medium' });
const B = await openGame(browser, srv.url, { relay: relay.url, name: 'Bo', size: [480, 270], query: 'nolock&q=low' });
const until = (g, f, ms = 40000) => g.page.waitForFunction(f, null, { timeout: ms });
await until(A, '!document.getElementById("m-host").disabled'); await A.page.click('#m-host');
await until(B, '!document.getElementById("m-join").disabled'); await B.page.click('#m-join');
await until(A, '__los.session.rep.players.size === 2'); await A.page.click('#l-start');
await until(B, '__los.session.rep.phase === 1 && __los.session.rep.me'); await until(A, '__los.session.rep.phase === 1 && __los.session.rep.me');
await A.page.evaluate(() => { const p = __los.player; p.x = 27; p.z = 49; p.yaw = -Math.PI / 2; p.light = true; __los.session.world.creature.update = () => {}; });
await B.page.evaluate(() => { const p = __los.player; p.x = 30.2; p.z = 49.4; p.yaw = Math.PI / 2 + 0.5; p.light = false; });
await A.page.waitForTimeout(2500); await A.shot('a-crew');
await B.page.evaluate(() => { __los.player.crouch = true; __los.player.light = true; }); await A.page.evaluate(() => { __los.player.light = false; });
await A.page.waitForTimeout(2500); await A.shot('a-crew-crouch');
await A.page.evaluate(id => { const w = __los.session.world; w.downPlayer([...w.players.values()].find(p => !p.local)); }); await A.page.waitForTimeout(2500); await A.page.evaluate(() => { __los.player.light = true; __los.player.pitch = -0.35; }); await A.page.waitForTimeout(1500); await A.shot('a-crew-down');
console.log('errors', A.errors, B.errors);
await browser.close(); srv.close(); relay.close();
