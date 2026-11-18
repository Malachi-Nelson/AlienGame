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
  w.startMatch(4242); w.time = CFG.WAKE + 1; w.creature.state = CS.ROAM; w.doorWant.fill(1); w.doorOpen.fill(1); w.doorWant[L.lift.gateId] = 0; w.doorOpen[L.lift.gateId] = 0;
  return { w, c: w.creature, bots };
}
const place = (c, cx, cz, yaw = 0) => { const p = at(cx, cz); c.x = p.x; c.z = p.z; c.yaw = yaw; c.path = null; c.pauseT = 0; };
const put = (b, cx, cz) => { const p = at(cx, cz); b.x = p.x; b.z = p.z; b.path = null; };

test('it comes to a sounder, and trusts sounders less after finding nothing there', () => {
  const { w, c, bots: [b] } = setup();
  put(b, 12, 23); place(c, 39, 22);                       // player in the dock, creature in the hub
  w.decoys.push({ id: ++w.decoyId, x: at(44, 24).x, y: 0.08, z: at(44, 24).z, vx: 0, vy: 0, vz: 0, state: 1, t: 10, beep: 0, ox: b.x, oz: b.z, owner: b.id });
  let went = false, nearest = 99;
  run(w, [b], 30, () => { if (c.state === CS.INVEST) went = true; nearest = Math.min(nearest, Math.hypot(c.x - at(44, 24).x, c.z - at(44, 24).z)); });
  assert.ok(went, 'never went to look'); assert.ok(nearest < 3, `only got within ${nearest.toFixed(1)} m of it`);
  assert.ok(c.learn.decoy < 1, 'did not learn anything from the empty spot');
});

test('once it distrusts sounders, it looks for whoever threw one', () => {
  const { w, c, bots: [b] } = setup();
  put(b, 12, 23); place(c, 30, 22); c.learn.decoy = 0;
  w.decoys.push({ id: ++w.decoyId, x: at(39, 24).x, y: 0.08, z: at(39, 24).z, vx: 0, vy: 0, vz: 0, state: 1, t: 10, beep: 0, ox: at(24, 24).x, oz: at(24, 24).z, owner: b.id });
  let toThrower = 99, toDecoy = 99;
  run(w, [b], 12, () => { toThrower = Math.min(toThrower, Math.hypot(c.x - at(24, 24).x, c.z - at(24, 24).z)); toDecoy = Math.min(toDecoy, Math.hypot(c.x - at(39, 24).x, c.z - at(39, 24).z)); });
  assert.ok(toThrower < 9, `it should close on where the throw came from (got within ${toThrower.toFixed(1)} m)`);
  assert.ok(toDecoy > 8, 'and not on the sounder');
});

test('hiding in a locker while it is watching does not work', () => {
  const { w, c, bots: [b] } = setup();
  const k = L.lockers.find(k => k.cx === 13 && k.cz === 19);      // dock, north wall
  put(b, k.ax, k.az + 2); place(c, k.ax + 4, k.az + 2, Math.PI / 2); b.light = true;
  run(w, [b], 30, () => { if (c.state === CS.HUNT && b.lk < 0 && b.p.status === ST.ALIVE) { b.x = k.x; b.z = k.z; b.lk = k.id; } return b.p.status === ST.ALIVE; });
  assert.notEqual(b.p.status, ST.ALIVE, 'it walked past someone it saw climb in');
  assert.ok(c.stats.lockerFinds >= 1);
});

test('hiding out of sight works against a creature that has not learned to check, and teaches it', () => {
  const { w, c, bots: [b] } = setup();
  const k = L.lockers.find(k => k.cx === 13 && k.cz === 19);
  put(b, k.ax, k.az); b.lk = k.id; place(c, 21, 24); c.learn.hide = 0;
  run(w, [b], 0.2);
  c.target = b.id; c.startSearch({ x: k.x + 4, z: k.z + 4 }, 1, 20, b.id);
  run(w, [b], 40, () => b.p.status === ST.ALIVE);
  assert.equal(b.p.status, ST.ALIVE, 'found without reason'); assert.equal(c.stats.lockerChecks, 0);
  assert.ok(c.learn.hide >= 0.18, 'losing someone to a locker should teach it something');
});

test('a creature that has learned about lockers opens the ones near where it lost someone', () => {
  const { w, c, bots: [b] } = setup();
  const k = L.lockers.find(k => k.cx === 13 && k.cz === 19);
  put(b, k.ax, k.az); b.lk = k.id; place(c, 21, 24); c.learn.hide = 0.9;
  run(w, [b], 0.2);
  c.startSearch({ x: k.x, z: k.z + 2 }, 1, 30, b.id);
  run(w, [b], 45, () => b.p.status === ST.ALIVE);
  assert.ok(c.stats.lockerChecks >= 1, 'never checked a locker'); assert.notEqual(b.p.status, ST.ALIVE, 'checked, but not the right one');
});

test('a shut door slows it down but does not stop it, and the door stays forced', () => {
  const { w, c, bots: [b] } = setup();
  const d = L.doorAt[L.idx(18, 24)]; w.doorWant[d] = 0; w.doorOpen[d] = 0;
  put(b, 14, 24); place(c, 21, 24, Math.PI / 2);
  b.speed = 5; let k = 0; const loop = [[12, 22], [15, 26], [12, 27], [15, 22]];
  run(w, [b], 25, () => { if (b.arrived) b.goToXZ(...loop[k++ % 4]); return w.doorJam[d] <= 0; });
  assert.ok(w.doorJam[d] > 0, 'it never forced the door'); assert.equal(w.doorWant[d], 1);
});

test('it cannot follow into a long duct, and goes to wait at an end instead', () => {
  const { w, c, bots: [b] } = setup();
  put(b, 55, 28); place(c, 52, 22, Math.PI); b.light = true;        // drill control; the duct to the generators opens at 55,28
  let ends = 0;
  run(w, [b], 40, (t) => {
    if (c.state === CS.HUNT && L.cells[L.cellOf(b.x, b.z)] !== C.DUCT) { b.x = at(55, 30).x; b.z = at(55, 30).z + 1; b.light = false; b.crouch = true; }    // dive into the middle of it
    assert.ok(L.walkC[L.cellOf(c.x, c.z)], 'the creature got into the duct');
    const g = L.ducts[L.ductOf[L.idx(55, 30)]]; for (const e of g.exits) if (c.cell() === e) ends++;
  });
  assert.equal(b.p.status, ST.ALIVE, 'it reached someone two tiles into a duct');
  assert.ok(ends > 0, 'it never came to either end of the duct');
});

test('with others still about, it sometimes leaves a downed player as bait and waits out of sight', () => {
  let baited = 0, heard = 0;
  for (let seed = 1; seed <= 12; seed++) {
    const { w, c, bots: [a, b] } = setup(2, seed);
    put(a, 30, 13); put(b, 12, 45); place(c, 31, 12, 0);              // a body in the north ring, by the pump room door
    run(w, [a, b], 0.1); w.downPlayer(a.p); c.afterKill(a.p);
    if (c.state !== CS.BAIT) continue; baited++;
    run(w, [a, b], 12);
    assert.ok(c.lampsOut || c.path, 'baiting with its lights on');
    if (!c.path) assert.ok(Math.hypot(c.x - a.p.x, c.z - a.p.z) > 3, 'waiting right on top of the body');
    put(b, 30, 12); b.rv = a.p.slot;                                   // the rescue arrives
    run(w, [a, b], 6, () => { if (c.state === CS.INVEST || c.state === CS.HUNT || c.state === CS.SUSPECT || c.state === CS.ATTACK) heard = heard || 1; });
  }
  assert.ok(baited >= 2, `bait was chosen ${baited} times in 12`); assert.ok(heard, 'it never reacted to the rescue');
});

test('when the lift is called it comes to the dock', () => {
  const { w, c, bots: [b] } = setup();
  put(b, 60, 40); place(c, 60, 8); b.lk = L.lockers.find(k => k.cx === 56 && k.cz === 43).id; put(b, 56, 42);
  w.lift.state = LIFT.CALLED; w.lift.timer = 45;
  let nearest = 999; run(w, [b], 44, () => { nearest = Math.min(nearest, Math.hypot(c.x - L.lift.x, c.z - L.lift.z)); });
  assert.ok(nearest < 30, `only came within ${nearest.toFixed(0)} m of the lift`);
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
      assert.ok(L.walkC[L.cellOf(c.x, c.z)], `creature off the floor at ${c.x.toFixed(1)},${c.z.toFixed(1)}`);
      for (const d of w.decoys) assert.ok(Number.isFinite(d.x + d.y + d.z));
      return w.phase === PH.PLAY;
    });
    const s = JSON.stringify(w.snapshot()); assert.ok(s.length < 3500, `snapshot is ${s.length} bytes`);
  }
});
