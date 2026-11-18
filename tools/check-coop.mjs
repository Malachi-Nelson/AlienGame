// Three browser pages meet through a stand-in for the public relays and play a match together:
// lobby, start, moving, a tag, a door, going down and being picked up, and the host walking out in the middle of it.
import { serveDist, standInRelay, launch, openGame } from './lib.mjs';
const srv = await serveDist(), relay = await standInRelay(), browser = await launch();
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
const open = name => openGame(browser, srv.url, { relay: relay.url, name, size: [480, 270], query: 'nolock&q=low' });
const A = await open('Ada'), B = await open('Bo'), Cc = await open('Cy'), all = [A, B, Cc];
const until = async (g, f, ms = 40000) => { try { await g.page.waitForFunction(f, null, { timeout: ms }); return true; } catch { return false; } };
const ev = (g, f, a) => g.page.evaluate(f, a);

ok(await until(A, '!document.getElementById("m-host").disabled'), 'a page that reaches a relay can open a crew');
await A.page.click('#m-host');
ok(await until(A, '__los.session.mode === "host" && __los.hud.screen === "lobby"'), 'opening a crew puts the leader in the lobby');
ok(await until(B, '!document.getElementById("m-join").disabled') && await until(Cc, '!document.getElementById("m-join").disabled'), 'the others are offered the crew to join');
const label = await ev(B, () => document.getElementById('m-join').textContent); ok(/Ada/.test(label), `the offer names the leader ("${label}")`);
await B.page.click('#m-join'); await Cc.page.click('#m-join');
ok(await until(A, '__los.session.rep.players.size === 3') && await until(B, '__los.session.rep.players.size === 3 && __los.hud.screen === "lobby"'), 'all three are in the lobby');
await B.page.click('#l-ready');
ok(await until(A, '[...__los.session.rep.players.values()].filter(p => p.ready).length >= 2'), 'ready shows up for the leader');
await A.shot('c-lobby');
await A.page.click('#l-start');
for (const g of all) ok(await until(g, '__los.session.rep.phase === 1 && __los.session.rep.me && __los.player.mid === __los.session.rep.mid'), 'the match starts for ' + (g === A ? 'the leader' : g === B ? 'Bo' : 'Cy'));
for (const g of all) { const st = await ev(g, () => ({ mode: __los.session.mode, ph: __los.session.rep.phase, mid: __los.session.rep.mid, pm: __los.player.mid, me: !!__los.session.rep.me, lay: !!__los.session.rep.layout })); if (!st.lay || st.pm !== st.mid) console.log('     state', JSON.stringify(st), g.errors.join(' | ').slice(0, 600)); }
const slots = await Promise.all(all.map(g => ev(g, () => __los.session.rep.me.slot))); ok(new Set(slots).size === 3, `everyone has their own place (${slots})`);
const seeds = await Promise.all(all.map(g => ev(g, () => __los.session.rep.layout.tags.map(t => t.cell).join()))); ok(seeds[0] === seeds[1] && seeds[1] === seeds[2], 'everyone has the same tags in the same places');
const ids = await Promise.all(all.map(g => ev(g, () => __los.session.id)));

// moving: Bo walks, the others see it
const b0 = await ev(B, () => ({ x: __los.player.x, z: __los.player.z }));
await ev(B, () => __los.input.hold('fwd', true));
ok(await until(A, `(() => { const o = []; __los.session.others(performance.now(), o); const b = o.find(p => p.id === '${ids[1]}'); return b && Math.hypot(b.x - ${b0.x}, b.z - ${b0.z}) > 1.5; })()`), 'the leader sees Bo walk');
ok(await until(Cc, `(() => { const o = []; __los.session.others(performance.now(), o); const b = o.find(p => p.id === '${ids[1]}'); return b && Math.hypot(b.x - ${b0.x}, b.z - ${b0.z}) > 1.5; })()`), 'so does Cy');
await ev(B, () => __los.input.hold('fwd', false));
await ev(Cc, () => { __los.player.yaw = Math.PI; }); await Cc.page.waitForTimeout(600); await Cc.shot('c-crew');

// a tag, taken by a client
await ev(B, () => { const t = __los.session.rep.layout.tags[3], p = __los.player; p.x = t.x + 1.1; p.z = t.z; p.yaw = Math.PI / 2; });
ok(await until(B, '__los.player.target && __los.player.target.kind === "tag"'), 'Bo reaches a tag');
await ev(B, () => __los.input.press('use'));
for (const g of all) ok(await until(g, '(__los.session.rep.tagBits & 8) !== 0'), 'the tag is gone for ' + (g === A ? 'the leader' : g === B ? 'Bo' : 'Cy'));
ok(await ev(B, () => __los.session.rep.me.tags === 1 && __los.session.acts.length === 0), 'and Bo is credited, with nothing left unanswered');

// a door, worked by a client
await ev(Cc, () => { const p = __los.player; p.x = 12.4; p.z = 34; p.yaw = -Math.PI / 2; p.pitch = 0; });
const dId = await ev(A, () => __los.L.doorAt[__los.L.idx(7, 16)]), w0 = await ev(A, d => __los.session.world.doorWant[d], dId);
ok(await until(Cc, '__los.player.target && __los.player.target.kind === "door"'), 'Cy reaches the airlock door');
await ev(Cc, () => __los.input.press('use'));
ok(await until(B, `__los.session.rep.doorWant[${dId}] !== ${w0}`), 'Bo sees the door Cy worked');

// down and back up
await ev(A, id => { const w = __los.session.world; w.creature.update = () => {}; w.downPlayer(w.players.get(id)); }, ids[1]);
ok(await until(B, '__los.session.rep.me.status === 1'), 'Bo goes down');
ok(await until(Cc, `[...__los.session.rep.players.values()].some(p => p.id === '${ids[1]}' && p.status === 1)`), 'Cy is told');
const bp = await ev(B, () => ({ x: __los.player.x, z: __los.player.z }));
await ev(Cc, p => { const q = __los.player; q.x = p.x + 1.3; q.z = p.z; q.yaw = Math.PI / 2; }, bp);
ok(await until(Cc, '__los.player.target && __los.player.target.kind === "revive"'), 'Cy is offered the pick-up');
await ev(Cc, () => __los.input.hold('use', true));
ok(await until(B, '__los.session.rep.me.status === 0', 60000), 'holding E gets Bo back up');
await ev(Cc, () => __los.input.hold('use', false));
await B.shot('c-revived');

// the leader walks out mid-match
const before = await ev(B, () => ({ tg: __los.session.rep.tagBits, mid: __los.session.rep.mid, t: __los.session.rep.time }));
await A.ctx.close();
ok(await until(B, '__los.session.mode === "host"', 30000) || await until(Cc, '__los.session.mode === "host"', 5000), 'when the leader leaves, one of the others takes over');
const modes = await Promise.all([B, Cc].map(g => ev(g, () => __los.session.mode))); ok(modes.sort().join() === 'client,host', `exactly one of them (${modes})`);
const H = modes[0] === 'host' ? B : (await ev(B, () => __los.session.mode)) === 'host' ? B : Cc, K = H === B ? Cc : B;
ok(await until(K, `__los.session.hostId === '${H === B ? ids[1] : ids[2]}' && __los.session.rep.players.size === 2`, 30000), 'the other follows the new leader');
const after = await ev(K, () => ({ tg: __los.session.rep.tagBits, mid: __los.session.rep.mid, ph: __los.session.rep.phase }));
ok(after.tg === before.tg && after.mid === before.mid && after.ph === 1, 'the match carries on where it was');
ok(await until(K, `__los.session.rep.time > ${before.t} + 3`, 40000), 'and time moves again');
await ev(K, () => { const t = __los.session.rep.layout.tags[1], p = __los.player; p.x = t.x + 1.1; p.z = t.z; p.yaw = Math.PI / 2; });
ok(await until(K, '__los.player.target && __los.player.target.kind === "tag"'), 'the follower reaches another tag');
await ev(K, () => __los.input.press('use'));
ok(await until(H, '(__los.session.rep.tagBits & 2) !== 0'), 'and the new leader grants it');

const st = relay.stats(); console.log(`relay carried ${st.count} messages, ${(st.bytes / 1024).toFixed(0)} kB`);
for (const g of [B, Cc]) ok(g.errors.length === 0, 'no errors on a page' + (g.errors.length ? ':\n' + g.errors.join('\n') : ''));
await browser.close(); srv.close(); relay.close(); process.exit(fail ? 1 : 0);
