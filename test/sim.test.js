import test from 'node:test';
import assert from 'node:assert/strict';
import { buildLevel, validateLevel, T, W, H, C } from '../src/level.js';
import { Pather, sight } from '../src/nav.js';
import { World, layoutMatch } from '../src/sim/world.js';
import { ST, PH, LIFT, CS } from '../src/sim/defs.js';
import { CFG } from '../src/config.js';
import { Bot, run } from './helpers.js';

const L = buildLevel();

test('the outpost is sound', () => {
  assert.deepEqual(validateLevel(L), []);
});

test('every match lays out eight tags that all players agree on', () => {
  for (let seed = 1; seed < 200; seed++) {
    const a = layoutMatch(L, seed), b = layoutMatch(L, seed);
    assert.equal(a.tags.length, CFG.TAGS); assert.equal(a.items.length, CFG.ITEMS);
    assert.deepEqual(a.tags.map(t => t.cell), b.tags.map(t => t.cell));
    assert.equal(new Set(a.tags.map(t => t.cell)).size, CFG.TAGS);
  }
});

test('paths exist between every pair of patrol points and never cut a corner', () => {
  const pa = new Pather(L, L.walkC);
  for (let i = 0; i < L.pois.length; i += 3) for (let j = 1; j < L.pois.length; j += 5) {
    const path = pa.find(L.pois[i].cell, L.pois[j].cell, null);
    assert.ok(path, `no path ${i} -> ${j}`);
    for (let k = 1; k < path.length; k++) {
      const a = path[k - 1], b = path[k], dx = (b % W) - (a % W), dz = ((b / W) | 0) - ((a / W) | 0);
      assert.ok(Math.abs(dx) <= 1 && Math.abs(dz) <= 1);
      if (dx && dz) assert.ok(L.walkC[a + dx] && L.walkC[a + dz * W], 'cut a corner');
    }
  }
});

test('walls block sight, open floor does not, and a desk hides only someone crouching', () => {
  const open = new Float32Array(L.doors.length).fill(1), shut = new Float32Array(L.doors.length);
  const at = (cx, cz) => [(cx + 0.5) * T, (cz + 0.5) * T];
  assert.ok(sight(L, open, ...at(12, 23), 2, ...at(14, 27), 1.6));               // across the dock
  assert.ok(!sight(L, open, ...at(12, 23), 2, ...at(8, 8), 1.6));                // dock to comms, through rock
  assert.ok(sight(L, open, ...at(15, 24), 2, ...at(21, 24), 1.6));               // through the open dock door
  assert.ok(!sight(L, shut, ...at(15, 24), 2, ...at(21, 24), 1.6));              // and not through it shut
  // mess table at 27..28,42: creature at 25,42 looking east at someone just beyond it
  assert.ok(sight(L, open, ...at(25, 42), 2, ...at(29, 42), 1.6));
  assert.ok(!sight(L, open, ...at(25, 42), 2, 58.4, 85, 0.9), 'crouched tight against the table');
  assert.ok(sight(L, open, ...at(25, 42), 2, 61, 85, 0.9), 'crouched well back from it: seen over the top');
});

test('the creature wakes, patrols, and stays on the floor', () => {
  const w = new World(L, 7), b = new Bot(w, 'a', 'A'); w.startMatch(1234);
  const c = w.creature, start = { x: c.x, z: c.z }; let far = 0; const seen = new Set();
  run(w, [b], 240, () => {
    assert.ok(Number.isFinite(c.x) && Number.isFinite(c.z) && Number.isFinite(c.yaw));
    assert.ok(L.walkC[L.cellOf(c.x, c.z)], 'creature left the floor');
    far = Math.max(far, Math.hypot(c.x - start.x, c.z - start.z)); seen.add(c.state);
  });
  assert.ok(far > 20, 'it never went anywhere');
  assert.ok(seen.has(CS.ROAM));
});

test('someone who runs about with a lamp on gets caught', () => {
  const w = new World(L, 3), b = new Bot(w, 'a', 'A'); w.startMatch(77);
  b.speed = 5; b.light = true; let k = 0;
  const loop = [[34, 20], [39, 24], [35, 29], [30, 24]];
  const t = run(w, [b], 600, () => { if (b.arrived) b.goToXZ(...loop[k++ % loop.length]); return w.phase === PH.PLAY; });
  assert.equal(w.phase, PH.END, 'still alive after ten minutes');
  assert.equal(w.result.win, 0);
  assert.ok(w.creature.stats.hunts >= 1);
});

test('collecting every tag unlocks the lift, and riding it wins', () => {
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(99);
  w.creature.update = () => {};                         // this test is about the rules, not the creature
  for (let i = 0; i < w.tags.length; i++) {
    assert.equal(w.lift.state, LIFT.LOCKED);
    b.x = w.tags[i].x + 0.8; b.z = w.tags[i].z; b.act('T', i); run(w, [b], 0.5);
    assert.ok(w.tags[i].taken, `tag ${i} not taken`);
  }
  assert.equal(w.lift.state, LIFT.READY);
  b.x = L.lift.console.x + 2; b.z = L.lift.console.z; b.act('L'); run(w, [b], 0.5);
  assert.equal(w.lift.state, LIFT.CALLED);
  run(w, [b], CFG.lift.call + 1);
  assert.equal(w.lift.state, LIFT.ARRIVED);
  assert.equal(w.doorWant[L.lift.gateId], 1);
  b.x = L.lift.x; b.z = L.lift.z; run(w, [b], 6);
  assert.equal(w.phase, PH.END); assert.equal(w.result.win, 1); assert.equal(b.p.status, ST.OUT);
});

test('a tag cannot be taken from across the room, or twice', () => {
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(99); w.creature.update = () => {};
  b.act('T', 0); run(w, [b], 0.3); assert.ok(!w.tags[0].taken);
  b.x = w.tags[0].x; b.z = w.tags[0].z + 0.9; b.act('T', 0); b.act('T', 0); run(w, [b], 0.3);
  assert.equal(w.tagsTaken, 1); assert.equal(b.p.tags, 1);
});

test('a downed player can be picked up, and bleeds out if left', () => {
  const w = new World(L, 5), a = new Bot(w, 'a', 'A'), b = new Bot(w, 'b', 'B'); w.startMatch(5); w.creature.update = () => {};
  w.downPlayer(a.p); assert.equal(a.p.status, ST.DOWN);
  b.x = a.p.x + 1; b.z = a.p.z; b.rv = a.p.slot; run(w, [a, b], CFG.down.revive + 0.5);
  assert.equal(a.p.status, ST.ALIVE);
  w.downPlayer(b.p); a.rv = -1; a.x = b.p.x + 20; run(w, [a, b], CFG.down.bleed + 1);
  assert.equal(b.p.status, ST.DEAD);
  assert.equal(w.phase, PH.PLAY);
  w.downPlayer(a.p); run(w, [a, b], 4);
  assert.equal(w.phase, PH.END); assert.equal(w.result.win, 0);
});

test('a snapshot is enough for someone else to carry the match on', () => {
  const w = new World(L, 5), a = new Bot(w, 'a', 'A'), b = new Bot(w, 'b', 'B'); w.startMatch(31);
  a.x = w.tags[2].x; a.z = w.tags[2].z + 0.8; a.act('T', 2); run(w, [a, b], 30);
  const s = JSON.parse(JSON.stringify(w.snapshot()));
  const w2 = World.restore(L, s);
  assert.equal(w2.phase, PH.PLAY); assert.equal(w2.tagsTaken, 1); assert.ok(w2.tags[2].taken); assert.equal(w2.players.size, 2);
  assert.equal(w2.players.get('a').slot, a.p.slot); assert.equal(w2.players.get('a').tags, 1);
  assert.deepEqual(w2.tags.map(t => t.cell), w.tags.map(t => t.cell));
  const s2 = w2.snapshot(); assert.equal(s2.dr, s.dr); assert.equal(s2.tg, s.tg);
  const a2 = new Bot(w2, 'a', 'A'); run(w2, [a2], 60);               // and it keeps running
  assert.ok(Number.isFinite(w2.creature.x));
});
