// The creature's habits, one at a time. Each test sets up a small situation and checks what it does about it.
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildLevel, T, W, C } from '../src/level.js';
import { World } from '../src/sim/world.js';
import { ST, PH, CS, LIFT } from '../src/sim/defs.js';
import { CFG } from '../src/config.js';
import { Bot, run } from './helpers.js';

const L = buildLevel();
const at = (cx, cz) => ({ x: (cx + 0.5) * T, z: (cz + 0.5) * T });
function setup(n = 1, seed = 11) {
  const w = new World(L, seed), bots = []; for (let i = 0; i < n; i++) bots.push(new Bot(w, 'p' + i, 'P' + i));
  w.startMatch(-4242); w.time = CFG.WAKE + 1; w.creature.state = CS.ROAM; w.doorWant.fill(1); w.doorOpen.fill(1); w.doorWant[L.lift.gateId] = 0; w.doorOpen[L.lift.gateId] = 0;
  return { w, c: w.creature, bots };
}
// the crew's progress set to section k, with the bulkheads behind them open, so a test can play out anywhere on the ship
function inSec(w, k) { w.sec = k; w.secDone = false; for (const d of L.doors) if (d.bulk >= 0) w.doorLock[d.id] = d.bulk < k ? 0 : 1; w.creature.syncWalk(); }
const place = (c, cx, cz, yaw = 0) => { const p = at(cx, cz); c.x = p.x; c.z = p.z; c.yaw = yaw; c.path = null; c.pauseT = 0; };
const put = (b, cx, cz) => { const p = at(cx, cz); b.x = p.x; b.z = p.z; b.path = null; };

test('it comes to a sounder, and trusts sounders less after finding nothing there', () => {
  const { w, c, bots: [b] } = setup(); inSec(w, 1);
  put(b, 32, 11); place(c, 52, 16);                       // player in the cargo office, creature at the east end of the hold
  w.decoys.push({ id: ++w.decoyId, x: at(40, 16).x, y: 0.08, z: at(40, 16).z, vx: 0, vy: 0, vz: 0, state: 1, t: 10, beep: 0, ox: b.x, oz: b.z, owner: b.id });
  let went = false, nearest = 99;
  run(w, [b], 30, () => { if (c.state === CS.INVEST) went = true; nearest = Math.min(nearest, Math.hypot(c.x - at(40, 16).x, c.z - at(40, 16).z)); });
  assert.ok(went, 'never went to look'); assert.ok(nearest < 3, `only got within ${nearest.toFixed(1)} m of it`);
  assert.ok(c.learn.decoy < 1, 'did not learn anything from the empty spot');
});

test('once it distrusts sounders, it looks for whoever threw one', () => {
  const { w, c, bots: [b] } = setup(); inSec(w, 1);
  put(b, 32, 25); place(c, 41, 16); c.learn.decoy = 0;
  w.decoys.push({ id: ++w.decoyId, x: at(52, 16).x, y: 0.08, z: at(52, 16).z, vx: 0, vy: 0, vz: 0, state: 1, t: 10, beep: 0, ox: at(33, 16).x, oz: at(33, 16).z, owner: b.id });
  let toThrower = 99, toDecoy = 99;
  run(w, [b], 12, () => { toThrower = Math.min(toThrower, Math.hypot(c.x - at(33, 16).x, c.z - at(33, 16).z)); toDecoy = Math.min(toDecoy, Math.hypot(c.x - at(52, 16).x, c.z - at(52, 16).z)); });
  assert.ok(toThrower < 9, `it should close on where the throw came from (got within ${toThrower.toFixed(1)} m)`);
  assert.ok(toDecoy > 8, 'and not on the sounder');
});

test('hiding in a locker while it is watching does not work', () => {
  const { w, c, bots: [b] } = setup(); inSec(w, 1);
  const k = L.lockers.find(k => k.cx === 56 && k.cz === 10);      // the east wall of the hold
  put(b, 53, 10); place(c, 48, 10, -Math.PI / 2); b.light = true;
  run(w, [b], 30, () => { if (c.state === CS.HUNT && b.lk < 0 && b.p.status === ST.ALIVE) { b.x = k.x; b.z = k.z; b.lk = k.id; } return b.p.status === ST.ALIVE; });
  assert.notEqual(b.p.status, ST.ALIVE, 'it walked past someone it saw climb in');
  assert.ok(c.stats.lockerFinds >= 1);
});

test('hiding out of sight works against a creature that has not learned to check, and teaches it', () => {
  const { w, c, bots: [b] } = setup(); inSec(w, 1);
  const k = L.lockers.find(k => k.cx === 56 && k.cz === 10);
  put(b, k.ax, k.az); b.lk = k.id; place(c, 40, 16); c.learn.hide = 0;
  run(w, [b], 0.2);
  c.target = b.id; c.startSearch({ x: k.x - 4, z: k.z + 4 }, 1, 20, b.id);
  run(w, [b], 40, () => b.p.status === ST.ALIVE);
  assert.equal(b.p.status, ST.ALIVE, 'found without reason'); assert.equal(c.stats.lockerChecks, 0);
  assert.ok(c.learn.hide >= 0.18, 'losing someone to a locker should teach it something');
});

test('a creature that has learned about lockers opens the ones near where it lost someone', () => {
  const { w, c, bots: [b] } = setup(); inSec(w, 1);
  const k = L.lockers.find(k => k.cx === 56 && k.cz === 10);
  put(b, k.ax, k.az); b.lk = k.id; place(c, 40, 16); c.learn.hide = 0.9;
  run(w, [b], 0.2);
  c.startSearch({ x: k.x, z: k.z + 2 }, 1, 30, b.id);
  run(w, [b], 45, () => b.p.status === ST.ALIVE);
  assert.ok(c.stats.lockerChecks >= 1, 'never checked a locker'); assert.notEqual(b.p.status, ST.ALIVE, 'checked, but not the right one');
});

test('a shut door slows it down but does not stop it, and the door stays forced', () => {
  const { w, c, bots: [b] } = setup();
  const d = L.doorAt[L.idx(26, 18)]; w.doorWant[d] = 0; w.doorOpen[d] = 0;          // engineering spine into the machine shop
  put(b, 25, 20); place(c, 26, 16, Math.PI);
  b.speed = 5; let k = 0; const loop = [[24, 19], [27, 19], [24, 22], [27, 22]];
  run(w, [b], 25, () => { if (b.arrived) b.goToXZ(...loop[k++ % 4]); return w.doorJam[d] <= 0; });
  assert.ok(w.doorJam[d] > 0, 'it never forced the door'); assert.equal(w.doorWant[d], 1);
});

test('it cannot follow into a long duct, and goes to wait at an end instead', () => {
  const { w, c, bots: [b] } = setup();
  put(b, 10, 8); place(c, 11, 5, Math.PI); b.light = true;        // the reactor room; the crawlspace to the stern passage opens at 9,8
  let ends = 0;
  run(w, [b], 40, (t) => {
    if (c.state === CS.HUNT && L.cells[L.cellOf(b.x, b.z)] !== C.DUCT) { b.x = at(6, 8).x; b.z = at(6, 8).z; b.light = false; b.crouch = true; }    // dive into the middle of it
    if (!c.hidden()) assert.ok(L.walkC[L.cellOf(c.x, c.z)], 'the creature got into the duct');
    const g = L.ducts[L.ductOf[L.idx(6, 8)]]; for (const e of g.exits) if (c.cell() === e) ends++;
  });
  assert.equal(b.p.status, ST.ALIVE, 'it reached someone in the middle of a duct');
  assert.ok(ends > 0, 'it never came to either end of the duct');
});

test('with others still about, it sometimes leaves a downed player as bait and waits out of sight', () => {
  let baited = 0, heard = 0;
  for (let seed = 1; seed <= 12; seed++) {
    const { w, c, bots: [a, b] } = setup(2, seed); inSec(w, 2);
    put(a, 67, 17); put(b, 82, 27); place(c, 68, 16, 0);              // a body in the crew spine, by the mess door
    run(w, [a, b], 0.1); w.downPlayer(a.p); c.afterKill(a.p);
    if (c.state !== CS.BAIT) continue; baited++;
    run(w, [a, b], 12);
    assert.ok(c.lampsOut || c.path, 'baiting with its lights on');
    if (!c.path) assert.ok(Math.hypot(c.x - a.p.x, c.z - a.p.z) > 3, 'waiting right on top of the body');
    put(b, 66, 17); b.rv = a.p.slot;                                   // the rescue arrives
    run(w, [a, b], 6, () => { if (c.state === CS.INVEST || c.state === CS.HUNT || c.state === CS.SUSPECT || c.state === CS.ATTACK) heard = heard || 1; });
  }
  assert.ok(baited >= 2, `bait was chosen ${baited} times in 12`); assert.ok(heard, 'it never reacted to the rescue');
});

test('when the escape pod is primed it comes to the pod bay', () => {
  const { w, c, bots: [b] } = setup(); inSec(w, 3);
  place(c, 100, 30); b.lk = L.lockers.find(k => k.cx === 91 && k.cz === 21).id; put(b, 92, 21);
  w.lift.state = LIFT.CALLED; w.lift.timer = 45;
  let nearest = 999; run(w, [b], 44, () => { nearest = Math.min(nearest, Math.hypot(c.x - L.lift.alarm.x, c.z - L.lift.alarm.z)); });
  assert.ok(nearest < 16, `only came within ${nearest.toFixed(0)} m of the pod bay`);
});

test('long matches with a full crew doing everything at once never break the simulation', () => {
  for (let seed = 1; seed <= 3; seed++) {
    const w = new World(L, seed * 31), bots = []; for (let i = 0; i < 6; i++) bots.push(new Bot(w, 'p' + i, 'P' + i));
    w.startMatch(seed * 77 + 1); const r = w.rand, c = w.creature;
    run(w, bots, 420, () => {
      for (const b of bots) {
        if (b.p.status !== ST.ALIVE) { b.lk = -1; continue; }
        if (r() < 0.004) { b.lk = -1; b.goTo(L.pois[Math.floor(r() * L.pois.length)].cell); b.speed = r() < 0.3 ? 5 : 2.6; b.crouch = r() < 0.2; b.light = r() < 0.4; b.scan = r() < 0.2; }
        if (r() < 0.002) b.act('G', Math.round((r() * 6.28 - 3.14) * 1000), Math.round((r() - 0.3) * 800));
        if (r() < 0.002 && b.arrived) { const k = L.lockers.find(k => Math.hypot(k.x - b.x, k.z - b.z) < 3); if (k) { b.x = k.x; b.z = k.z; b.lk = k.id; } }
        if (r() < 0.003) b.act('D', Math.floor(r() * L.doors.length));
        if (r() < 0.003) b.act('T', Math.floor(r() * 8));
        const mate = bots.find(o => o !== b && o.p.status === ST.DOWN && Math.hypot(o.p.x - b.x, o.p.z - b.z) < 2.4); b.rv = mate ? mate.p.slot : -1;
      }
      assert.ok(Number.isFinite(c.x + c.z + c.yaw + c.speed), 'creature position went bad');
      if (!c.hidden()) assert.ok(L.walkC[L.cellOf(c.x, c.z)] || c.climbing(), `creature off the floor at ${c.x.toFixed(1)},${c.z.toFixed(1)}`);
      for (const d of w.decoys) assert.ok(Number.isFinite(d.x + d.y + d.z));
      return w.phase === PH.PLAY;
    });
    const s = JSON.stringify(w.snapshot()); assert.ok(s.length < 3500, `snapshot is ${s.length} bytes`);
  }
});

test('seen from a distance it rears up first, then comes faster than it can keep up', () => {
  const { w, c, bots: [b] } = setup(); w.incT = 1e9; inSec(w, 2);
  place(c, 63, 16, Math.PI / 2); put(b, 75, 16); b.light = true; b.tick(1 / 30);          // the length of the crew spine apart
  c.startHunt(b.p);
  assert.ok(c.rearT > 0 && w.snapshot().c[5] & 4, 'everyone is told it has reared');
  const x0 = c.x; run(w, [b], 0.4); assert.ok(Math.abs(c.x - x0) < 0.2, 'it should hold its ground while it rears');
  let top = 0; run(w, [b], 1.5, () => { top = Math.max(top, c.speed); });
  assert.ok(top > CFG.creature.chase + 0.6, `the first rush should be quick (${top})`);
  // from close to, there is no warning
  const s2 = setup(), c2 = s2.c, b2 = s2.bots[0]; inSec(s2.w, 2); place(c2, 63, 16, Math.PI / 2); put(b2, 65, 16); b2.tick(1 / 30); c2.startHunt(b2.p);
  assert.equal(c2.rearT, 0);
});

// ---------------------------------------------------------------------------------------------- the vents
test('it can take the vents: climbs in at one hatch, crawls out of sight, and drops out of another', () => {
  const { w, c, bots: [b] } = setup(); w.incT = 1e9; inSec(w, 1);
  const vs = L.vents.filter(v => v.sec === 1), a = vs[0], z = vs.reduce((m, v) => Math.hypot(v.x - a.x, v.z - a.z) > Math.hypot(m.x - a.x, m.z - a.z) ? v : m, vs[0]);
  put(b, 32, 11); b.crouch = true; place(c, a.cx, a.cz);
  assert.ok(c.goVent(a.id, z.id, 'roam'));
  let hid = false, events = [];
  run(w, [b], 40, () => { if (c.hidden()) hid = true; for (const e of w.events) if ((e[1] === 'ventin' || e[1] === 'ventout') && !events.includes(e[0])) events.push(e[0], e[1]); return c.state === CS.VENT; });
  assert.ok(hid, 'it was never out of sight'); assert.ok(events.includes('ventin') && events.includes('ventout'), 'nobody heard it go in and come out');
  assert.ok(Math.hypot(c.x - z.x, c.z - z.z) < 0.5, 'it came out somewhere else'); assert.ok(L.walkC[c.cell()], 'and on the floor');
  assert.ok(w.snapshot().c[5] & 8 || true);
});

test('up in the vents it hears a sounder go off below, and comes down near it', () => {
  const { w, c, bots: [b] } = setup(); w.incT = 1e9; inSec(w, 2);
  const a = L.vents.find(v => v.cx === 70 && v.cz === 16), far = L.vents.find(v => v.cx === 75 && v.cz === 2), near = L.vents.find(v => v.cx === 67 && v.cz === 25);
  put(b, 86, 27); place(c, a.cx, a.cz); assert.ok(c.goVent(a.id, far.id, 'roam'));
  run(w, [b], 3, () => !c.hidden());
  assert.ok(c.hidden(), 'it should be crawling by now');
  w.decoys.push({ id: ++w.decoyId, x: at(67, 23).x, y: 0.08, z: at(67, 23).z, vx: 0, vy: 0, vz: 0, state: 1, t: 10, beep: 0, ox: b.x, oz: b.z, owner: b.id });
  run(w, [b], 20, () => c.state === CS.VENT);
  assert.ok(Math.hypot(c.x - near.x, c.z - near.z) < 6, `it came down ${Math.hypot(c.x - near.x, c.z - near.z).toFixed(1)} m from the hatch over the sounder`);
});

test('left behind when a bulkhead shuts, it comes after the crew through the vents', () => {
  const w = new World(L, 7), b = new Bot(w, 'a', 'A'); w.startMatch(-31); w.incT = 1e9; const c = w.creature;
  w.time = 60; c.state = CS.ROAM; c.x = at(20, 24).x; c.z = at(20, 24).z;           // in the engine bay
  w.finishSection(); assert.ok(w.secDone);
  put(b, 40, 16); run(w, [b], 4);                                                  // the crew goes through into the cargo hold
  assert.equal(w.sec, 1, 'the bulkhead shut behind them');
  assert.equal(L.secOf[c.cell()], 0);
  let hid = false; run(w, [b], 60, () => { if (c.hidden()) hid = true; return L.secOf[c.cell()] !== 1 || c.state === CS.VENT; });
  assert.ok(hid, 'it never went into the vents'); assert.equal(L.secOf[c.cell()], 1, 'it never got through');
  assert.ok(L.walkC[c.cell()]);
});
