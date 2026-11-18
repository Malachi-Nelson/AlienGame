// A phone, held sideways, with real touch input: the stick, looking, the buttons, moving a button, and rebinding a key on a desktop.
import { serveDist, standInRelay, launch, openGame, out } from './lib.mjs';
import { join } from 'node:path';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };

// ---- the phone
const ctx = await browser.newContext({ viewport: { width: 844, height: 390 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36' });
const page = await ctx.newPage(), errors = [];
page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/favicon|404/.test(m.text())) errors.push(m.text().slice(0, 200)); });
await page.addInitScript(r => { window.MQ_SERVERS = [r]; }, relay.url);
await page.goto(srv.url + 'index.html');
await page.waitForFunction('window.__los', null, { timeout: 60000 });
const ev = (f, a) => page.evaluate(f, a), wait = ms => page.waitForTimeout(ms), shot = n => page.screenshot({ path: join(out, n + '.png') });
const until = async (f, ms = 20000) => { try { await page.waitForFunction(f, null, { timeout: ms }); return true; } catch { return false; } };
const cdp = await ctx.newCDPSession(page);
const touchAt = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts.map(([x, y, id]) => ({ x, y, id })) });
async function drag(x0, y0, x1, y1, steps = 10, hold = 0, id = 1) {
  await touchAt('touchStart', [[x0, y0, id]]);
  for (let i = 1; i <= steps; i++) { await touchAt('touchMove', [[x0 + (x1 - x0) * i / steps, y0 + (y1 - y0) * i / steps, id]]); await wait(16); }
  if (hold) await wait(hold);
  await touchAt('touchEnd', []);
}
async function tapBtn(id) { const r = await ev(i => { const b = __los.touch.btns[i].el.getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2]; }, id); await touchAt('touchStart', [[r[0], r[1], 7]]); await wait(80); await touchAt('touchEnd', []); await wait(80); }

ok(await ev(() => document.body.classList.contains('touch')), 'a phone gets touch controls without being asked');
ok(await ev(() => __los.settings.q === 'medium'), 'and starts one step down in detail');
ok(await ev(() => /left thumb/i.test(document.getElementById('m-keys').textContent)), 'the title card explains the touch controls');
await shot('t-title');
await page.tap('#m-solo');
ok(await until('__los.session.rep.phase === 1 && __los.player.mid === __los.session.rep.mid'), 'tapping "Go in alone" starts a match');
ok(await until('!document.getElementById("touch").hidden'), 'the touch controls are on screen');
ok(await ev(() => __los.hud.screen === null), 'with no "click to go in" card in the way');
await wait(600); await shot('t-play');
// stick
const p0 = await ev(() => [__los.player.x, __los.player.z, __los.player.yaw]);
await drag(150, 300, 150, 230, 8, 1800);
const p1 = await ev(() => [__los.player.x, __los.player.z, __los.player.yaw]);
ok(Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) > 1.5, `pushing the stick walks (${Math.hypot(p1[0] - p0[0], p1[1] - p0[1]).toFixed(1)} m)`);
// look
await drag(520, 250, 370, 250, 10, 100, 2);
const p2 = await ev(() => __los.player.yaw);
ok(Math.abs(p2 - p1[2]) > 0.3, `dragging on the right turns the view (${(p2 - p1[2]).toFixed(2)} rad)`);
// stick and look at once
await touchAt('touchStart', [[150, 300, 1], [420, 250, 2]]);
for (let i = 1; i <= 10; i++) { await touchAt('touchMove', [[150, 300 - 7 * i, 1], [420 + 12 * i, 250, 2]]); await wait(30); }
const pm = await ev(() => [__los.input.move.y, __los.player.yaw]); await touchAt('touchEnd', []);
ok(pm[0] > 0.5 && Math.abs(pm[1] - p2) > 0.2, 'moving and looking work with two thumbs at once');
// buttons
await tapBtn('lamp'); ok(await ev(() => __los.player.light), 'LAMP turns the lamp on');
await tapBtn('crouch'); ok(await ev(() => __los.player.crouch), 'CROUCH crouches');
await tapBtn('crouch');
await tapBtn('scan'); await wait(250);
ok(await ev(() => __los.player.scan && !document.getElementById('h-scan').hidden && __los.touch.btns.scan.el.classList.contains('lit')), 'SCAN switches the scanner on and stays lit'); await shot('t-scan');
await tapBtn('scan'); await wait(200); ok(await ev(() => !__los.player.scan), 'and off again');
// a thumb that lands on a button can still turn the view
const yb = await ev(() => __los.player.yaw), cb = await ev(() => { const b = __los.touch.btns.crouch.el.getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2]; });
await drag(cb[0], cb[1], cb[0] - 140, cb[1], 10, 60, 5); await tapBtn('crouch');
ok(Math.abs((await ev(() => __los.player.yaw)) - yb) > 0.3, 'dragging from a button still turns the view');
const t = await ev(() => { const t = __los.session.rep.layout.tags[0], p = __los.player; p.x = t.x + 1.2; p.z = t.z; p.yaw = Math.PI / 2; p.pitch = -0.3; return 1; }); await wait(400);
ok(await ev(() => __los.touch.btns.use.el.classList.contains('lit')), 'USE lights up beside a tag');
await shot('t-tag');
await tapBtn('use'); ok(await until('__los.session.rep.tagCount() === 1', 5000), 'USE takes it');
await tapBtn('throw'); ok(await until('__los.session.rep.decoys.size === 1 || __los.session.rep.me.decoys === 0', 5000), 'THROW throws a sounder');
await tapBtn('pause'); ok(await until('__los.hud.screen === "pause"', 5000), 'the pause button pauses'); await shot('t-pause');
await page.tap('#p-controls'); ok(await until('__los.hud.screen === "controls"', 5000), 'Controls opens from the pause card');
await page.tap('#c-edit'); ok(await until('__los.touch.editing && !document.getElementById("t-bar").hidden', 5000), 'the layout editor opens');
const before = await ev(() => __los.settings.touch.layout.use.slice());
const ub = await ev(() => { const b = __los.touch.btns.use.el.getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2]; });
await drag(ub[0], ub[1], ub[0] - 120, ub[1] - 60, 10, 50, 3);
const after = await ev(() => __los.settings.touch.layout.use.slice());
ok(Math.abs(after[0] - before[0]) > 0.08, 'dragging a button moves it');
await page.tap('[data-k="s+"]'); ok(await ev(b => __los.settings.touch.layout.use[2] > 1.05, null), 'Size + grows the selected button');
await page.tap('[data-k="o+"]'); await shot('t-edit');
await page.tap('[data-k="done"]');
ok(await ev(() => { const s = JSON.parse(localStorage.getItem('los-settings')); return Math.abs(s.touch.layout.use[0] - __los.settings.touch.layout.use[0]) < 1e-6; }), 'the new layout is saved');
await page.tap('#c-back'); await page.tap('#p-resume');
ok(await until('__los.hud.screen === null && !__los.touch.editing', 5000), 'and the game carries on');
await page.reload(); await page.waitForFunction('window.__los');
ok(await ev(x => Math.abs(__los.settings.touch.layout.use[0] - x) < 0.02, after[0]), 'the layout survives a reload');
// portrait
await page.setViewportSize({ width: 390, height: 844 }); await page.tap('#m-solo').catch(() => {}); await wait(800);
ok(await ev(() => !document.getElementById('rotate').hidden), 'held upright, it asks for the phone to be turned');
await page.setViewportSize({ width: 844, height: 390 }); await wait(400);
ok(await ev(() => document.getElementById('rotate').hidden), 'and goes away when it is');
ok(errors.length === 0, 'no errors on the phone' + (errors.length ? ':\n' + errors.join('\n') : ''));

// ---- a desktop: rebinding keys
const g = await openGame(browser, srv.url, { relay: relay.url, query: 'nolock&q=low' }), dp = g.page;
ok(await dp.evaluate(() => !document.body.classList.contains('touch')), 'a desktop does not get touch controls');
await dp.click('#m-controls'); await dp.waitForFunction('__los.hud.screen === "controls"');
await g.shot('t-controls');
await dp.click('[data-bind="lamp:0"]'); await dp.keyboard.press('KeyL');
ok(await dp.evaluate(() => __los.settings.binds.lamp[0] === 'KeyL'), 'a key can be rebound');
await dp.click('[data-bind="use:1"]'); await dp.keyboard.press('KeyL');
ok(await dp.evaluate(() => __los.settings.binds.use[1] === 'KeyL' && __los.settings.binds.lamp[0] === ''), 'giving a key a new job takes it off the old one');
await dp.click('[data-bind="throw:1"]'); await dp.mouse.click(400, 300, { button: 'middle' });
ok(await dp.evaluate(() => __los.settings.binds.throw[1] === 'Mouse1'), 'mouse buttons can be bound');
await dp.click('[data-bind="map:0"]'); await dp.keyboard.press('Escape');
ok(await dp.evaluate(() => __los.settings.binds.map[0] === 'Tab' && !__los.input.listen), 'Esc cancels a rebind');
await dp.click('[data-bind="lamp:0"]'); await dp.keyboard.press('KeyZ');
await dp.click('#c-back'); await dp.click('#m-solo'); await dp.waitForFunction('__los.session.rep.phase === 1 && __los.player.mid === __los.session.rep.mid');
await dp.keyboard.press('KeyZ'); await dp.waitForTimeout(300);
ok(await dp.evaluate(() => __los.player.light), 'the rebound key works in a match');
ok(await dp.evaluate(() => /Hold E at each/.test(document.getElementById('h-obj').textContent) && /Q finds them/.test(document.getElementById('h-obj').textContent)), 'prompts name the bound keys');
ok(await dp.evaluate(() => JSON.parse(localStorage.getItem('los-settings')).binds.lamp[0] === 'KeyZ'), 'bindings are saved for next time');   // (the harness rewrites settings on reload, so read them directly)
await dp.evaluate(() => document.getElementById('p-leave').click()); await dp.waitForFunction('__los.hud.screen === "title"');
ok(await dp.evaluate(() => [...document.querySelectorAll('#m-keys div')].some(d => d.querySelector('dt').textContent === 'Z' && /Lamp/.test(d.querySelector('dd').textContent))), 'and the title card lists them');
await dp.click('#m-controls'); await dp.click('#c-reset'); ok(await dp.evaluate(() => __los.settings.binds.lamp[0] === 'KeyF'), 'Reset keys puts them back');
ok(g.errors.length === 0, 'no errors on the desktop' + (g.errors.length ? ':\n' + g.errors.join('\n') : ''));
await browser.close(); srv.close(); relay.close(); process.exit(fail ? 1 : 0);
