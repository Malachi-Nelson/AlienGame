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
    assert.equal(a.tags.length, CFG.TAGS); assert.ok(a.items.length >= CFG.ITEMS - 2 && a.items.length <= CFG.ITEMS + 2);
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
  b.light = true; let k = 0;
  const loop = [[34, 20], [39, 24], [35, 29], [30, 24]];
  // like a person, it cannot sprint for ever: six seconds of running, then eight to get its breath back
  const t = run(w, [b], 600, tt => { b.speed = tt % 14 < 6 ? 5 : 2.6; if (b.arrived) b.goToXZ(...loop[k++ % loop.length]); return w.phase === PH.PLAY; });
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
  run(w, [b], w.liftWait + 1);
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

// ---------------------------------------------------------------------------------------------- what changes from match to match
import { TRAITS, PWR } from '../src/sim/defs.js';
import { ZONES } from '../src/level.js';

test('no two matches are set up alike, and every player still agrees on each one', () => {
  const traits = new Set(), power = new Set(), sealedCounts = new Set(), itemCounts = new Set(), sealedDoors = new Set();
  for (let seed = 1; seed <= 400; seed++) {
    const a = layoutMatch(L, seed), b = layoutMatch(L, seed);
    assert.deepEqual(a, b);
    assert.ok(a.sealed.length >= 3 && a.sealed.length <= 6, `seed ${seed}: ${a.sealed.length} doors sealed`);
    assert.equal(a.zones.length, ZONES.length);
    assert.ok(a.zones.every(z => z === PWR.DEAD || z === PWR.FAILING || z === PWR.ON));
    assert.ok(a.zones.filter(z => z === PWR.DEAD).length <= 2, 'never more than two circuits dead');
    assert.ok(a.trait >= 0 && a.trait < TRAITS.length);
    assert.ok(a.wake >= 12 && a.wake <= 28); assert.ok(a.liftWait >= 38 && a.liftWait <= 55);
    for (const d of a.sealed) { assert.ok(!L.doors[d].gate, 'the lift gate is never sealed'); assert.equal(a.doorsOpen[d], 0, 'a sealed door starts shut'); sealedDoors.add(d); }
    traits.add(a.trait); power.add(a.zones.join('')); sealedCounts.add(a.sealed.length); itemCounts.add(a.items.length);
  }
  assert.equal(traits.size, TRAITS.length, 'every kind of creature turns up');
  assert.ok(power.size > 12, 'the power is laid out many different ways');
  assert.ok(sealedCounts.size >= 3 && itemCounts.size >= 4);
  assert.ok(sealedDoors.size > 15, 'it is not always the same doors');
});

test('sealed doors never cut anything off', () => {
  for (let seed = 1; seed <= 300; seed++) {
    const lay = layoutMatch(L, seed), block = new Uint8Array(W * H);
    for (const d of lay.sealed) for (const c of L.doors[d].cells) block[c] = 1;
    const start = L.idx(L.spawns[0].cx, L.spawns[0].cz), seen = new Uint8Array(W * H), st = [start]; seen[start] = 1;
    while (st.length) { const c = st.pop(); for (const n of [c - 1, c + 1, c - W, c + W]) if (L.walkC[n] && !block[n] && !seen[n]) { seen[n] = 1; st.push(n); } }
    for (let i = 0; i < W * H; i++) if (L.walkC[i] && !block[i]) assert.ok(seen[i], `seed ${seed}: ${i % W},${(i / W) | 0} cut off by doors ${lay.sealed}`);
    for (const t of lay.tags) assert.ok(seen[t.cell]); for (const t of lay.items) assert.ok(seen[t.cell]); assert.ok(seen[lay.creatureCell]);
  }
});

test('a negative seed gives a plain match: all power on, nothing sealed, no incidents', () => {
  const lay = layoutMatch(L, -31);
  assert.ok(lay.plain); assert.deepEqual(lay.sealed, []); assert.ok(lay.zones.every(z => z === PWR.ON)); assert.equal(lay.trait, 0);
  assert.equal(lay.wake, CFG.WAKE); assert.equal(lay.liftWait, CFG.lift.call); assert.equal(lay.items.length, CFG.ITEMS);
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-31); w.creature.update = () => {};
  run(w, [b], 400);
  assert.ok(!w.events.some(e => ['pwr', 'fault', 'quake'].includes(e[1])));
  assert.equal(w.powerMask(), 0);
});

test('a sealed door cannot be opened by anyone, and the creature never goes through one', () => {
  let seed = 1; while (layoutMatch(L, seed).sealed.length < 5) seed++;
  const w = new World(L, 9), b = new Bot(w, 'a', 'A'); w.startMatch(seed);
  const sealed = layoutMatch(L, seed).sealed, d = L.doors[sealed[0]], c = w.creature;
  b.x = d.x + (d.axis === 'x' ? 0 : 1.2); b.z = d.z + (d.axis === 'x' ? 1.2 : 0); b.act('D', d.id);
  let through = false;
  run(w, [b], 1, () => {}); assert.equal(w.doorWant[d.id], 0, 'it opened');
  b.light = true; b.speed = 2.6; let k = 0; const tour = w.tags.map(t => t.cell);
  // a stand-in walks from tag to tag with its lamp on for a while; the creature hunts it through the outpost
  run(w, [b], 420, () => {
    if (b.arrived && b.p.status === ST.ALIVE) { const bp = new Pather(L, c.walk).find(L.cellOf(b.x, b.z), tour[k++ % tour.length], null, 0); b.path = bp; b.pi = 0; }
    const dc = L.doorAt[L.cellOf(c.x, c.z)]; if (dc >= 0 && w.doorSeal[dc]) through = true;
    for (const s of sealed) assert.equal(w.doorWant[s], 0, 'a sealed door was opened');
    return w.phase === PH.PLAY;
  });
  assert.ok(!through, 'the creature stood in a sealed doorway');
  assert.ok(c.stats.hunts >= 1, 'and it did get to hunt');
});

test('a tripped circuit goes dark and comes back by itself; a blackout takes every circuit', () => {
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.creature.update = () => {};
  const cell = L.idx(13, 24), z = L.zoneOf[cell];
  assert.equal(ZONES[z], 'west wing'); assert.equal(w.zonePower(z), 1);
  const lit = w.litAt(cell); assert.ok(lit > 0.2, 'the dock is lit');
  assert.ok(w.tripZone(z, 5)); assert.ok(w.zonePower(z) < 0.1); assert.ok(w.litAt(cell) < lit * 0.1);
  assert.equal(w.powerMask(), 1 << z); assert.ok(!w.tripZone(z, 5), 'it cannot trip twice');
  run(w, [b], 6); assert.equal(w.zonePower(z), 1); assert.equal(w.powerMask(), 0);
  assert.ok(w.events.some(e => e[1] === 'pwr' && e[2] === z && e[3] === 1), 'everyone is told it is back');
  assert.ok(w.blackout(4)); for (let k = 0; k < ZONES.length; k++) assert.ok(w.zonePower(k) < 0.1); assert.equal(w.powerMask(), 32);
  run(w, [b], 5); assert.equal(w.powerMask(), 0);
});

test('a dead circuit stays dead, and the dark there hides someone without a lamp', () => {
  let seed = 1, lay; for (;; seed++) { lay = layoutMatch(L, seed); if (lay.zones[0] === PWR.DEAD) break; }
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(seed);
  assert.ok(w.zonePower(0) < 0.1); assert.ok(!w.tripZone(0, 5), 'nothing left to trip');
  // the same spot in the dock, with the power on and off: how fast the creature becomes sure of someone standing there
  const rate = (s, light) => {
    const w2 = new World(L, 5), b2 = new Bot(w2, 'a', 'A'); w2.startMatch(s); w2.incT = 1e9; const c = w2.creature; Object.assign(c.tr, { sight: 1, cone: 0.25 });      // the same eyes each time: this is about the light
    w2.time = 60; c.state = CS.ROAM; c.x = 15.5 * T; c.z = 24.5 * T; c.yaw = Math.PI / 2; c.pauseT = 99; c.path = null;       // looking west across the dock
    w2.doorWant.fill(0); b2.x = 11.5 * T; b2.z = 24.5 * T; b2.light = light; b2.tick(1 / 30); w2.input('a', { x: b2.x, z: b2.z, yaw: 0, pitch: 0, f: light ? 2 : 0, lk: -1, rv: -1, acts: [] });
    c.sense(0.1); return c.aware.get('a') || 0;
  };
  const dark = rate(seed, false), lit = rate(-seed, false), lamp = rate(seed, true);
  assert.ok(lit > dark * 1.5, `lit ${lit} dark ${dark}`);
  assert.ok(lamp > lit, 'and a lamp gives them away whatever the power is doing');
});

test('doors that open and shut by themselves leave sealed ones alone, and the creature does not come for them', () => {
  let seed = 1; while (layoutMatch(L, seed).sealed.length < 4) seed++;
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(seed); w.incT = 1e9;
  const c = w.creature; w.time = 60; c.state = CS.ROAM; c.pauseT = 99;
  b.x = 34.5 * T; b.z = 13 * T; b.tick(0.03);
  const before = Array.from(w.doorWant), n = w.doorFault(b.p);
  assert.ok(n >= 2, 'nothing happened');
  let changed = 0; for (let d = 0; d < before.length; d++) if (before[d] !== w.doorWant[d]) { changed++; assert.ok(!w.doorSeal[d] && !L.doors[d].gate); }
  assert.equal(changed, n);
  run(w, [b], 2); assert.equal(c.state, CS.ROAM, 'it came to look');
});

test('while the borehole is shifting the creature hears half as far', () => {
  const heard = quake => {
    const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.incT = 1e9; const c = w.creature;
    w.time = 60; c.state = CS.ROAM; c.x = 13.5 * T; c.z = 24.5 * T; c.pauseT = 99; c.path = null; if (quake) w.quake();
    w.noise(13.5 * T + 5, 24.5 * T, 'walk', 'a'); run(w, [b], 0.1);
    return c.state === CS.INVEST;
  };
  assert.ok(heard(false), 'footsteps five metres off are normally heard'); assert.ok(!heard(true));
});

test('the kind of creature changes what it can do', () => {
  const mk = key => { const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.trait = TRAITS.find(t => t.key === key); w.creature.reset(L.idx(13, 24)); w.incT = 1e9; w.time = 60; const c = w.creature; c.state = CS.ROAM; c.pauseT = 99; return { w, b, c }; };
  const hears = (key, dist) => { const { w, b, c } = mk(key); w.noise(c.x + dist, c.z, 'walk', 'a'); run(w, [b], 0.1); return c.state === CS.INVEST; };
  assert.ok(!hears('prowler', 6.2)); assert.ok(hears('listener', 6.2), 'the listener hears further'); assert.ok(!hears('watcher', 4.9)); assert.ok(hears('prowler', 4.9));
  const sees = (key, dist) => { const { w, b, c } = mk(key); c.x = 15.5 * T; c.yaw = Math.PI / 2; b.x = c.x - dist; b.z = c.z; b.tick(0.03); c.sense(0.1); return b.p.visible; };
  assert.ok(sees('prowler', 8)); assert.ok(sees('watcher', 8));
  assert.ok(mk('warden').c.learn.hide > mk('prowler').c.learn.hide, 'the warden starts out suspicious of lockers');
  const top = key => { const { w, b, c } = mk(key); b.x = c.x - 16; b.z = c.z; b.light = true; b.tick(0.03); c.startHunt(b.p); let v = 0; run(w, [b], 2.5, () => { v = Math.max(v, c.speed); }); return v; };
  const pr = top('prowler'), ru = top('runner'), sk = top('stalker');
  assert.ok(ru > pr + 0.3 && sk < pr - 0.15, `runner ${ru} prowler ${pr} stalker ${sk}`);
});

test('a snapshot carries the power state and the set-up across a change of host', () => {
  let seed = 1; while (layoutMatch(L, seed).sealed.length < 4 || layoutMatch(L, seed).zones[1] !== PWR.ON) seed++;
  const w = new World(L, 5), a = new Bot(w, 'a', 'A'); w.startMatch(seed); w.incT = 1e9; run(w, [a], 2);
  assert.ok(w.tripZone(1, 30));
  const s = JSON.parse(JSON.stringify(w.snapshot())), w2 = World.restore(L, s);
  assert.equal(s.zo, 2); assert.equal(w2.powerMask(), 2);
  assert.deepEqual(Array.from(w2.doorSeal), Array.from(w.doorSeal)); assert.equal(w2.trait.key, w.trait.key); assert.equal(w2.liftWait, w.liftWait);
  for (let i = 0; i < W * H; i++) assert.equal(w2.creature.walk[i], w.creature.walk[i]);
});

// ---------------------------------------------------------------------------------------------- breakers
test('a breaker resets a tripped circuit, ends a blackout, and is loud', () => {
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.incT = 1e9; const c = w.creature;
  w.time = 60; c.state = CS.ROAM; c.pauseT = 99; c.path = null; c.x = 13.5 * T; c.z = 27.5 * T;
  const bk = L.breakers[0]; assert.equal(ZONES[bk.zone], 'west wing');
  b.x = bk.ax; b.z = bk.az; b.act('B', 0); run(w, [b], 0.2);
  assert.ok(!w.events.some(e => e[1] === 'breaker'), 'with the power on there is nothing for it to do');
  w.tripZone(0, 60); assert.ok(w.zonePower(0) < 0.1);
  b.act('B', 0); run(w, [b], 0.2);
  assert.equal(w.zonePower(0), 1); assert.equal(w.powerMask(), 0);
  assert.ok(w.events.some(e => e[1] === 'breaker' && e[2] === 0));
  assert.equal(c.state, CS.INVEST, 'the creature did not hear a breaker thrown twelve metres away');
  w.blackout(60); b.act('B', 0); run(w, [b], 0.2);
  for (let z = 0; z < ZONES.length; z++) assert.equal(w.zonePower(z), 1, 'the blackout is over');
  b.x += 20; w.tripZone(0, 60); b.act('B', 0); run(w, [b], 0.2);
  assert.ok(w.zonePower(0) < 0.1, 'it cannot be thrown from across the room');
});

test('a breaker gives a dead wing power for a while, and then it goes again', () => {
  let seed = 1; while (layoutMatch(L, seed).zones[2] !== PWR.DEAD) seed++;
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(seed); w.incT = 1e9; w.creature.update = () => {};
  const bk = L.breakers[2]; assert.ok(w.zonePower(2) < 0.1);
  b.x = bk.ax; b.z = bk.az; b.act('B', 2); run(w, [b], 0.2);
  assert.equal(w.zonePower(2), 1); assert.equal(w.powerMask(), 64 << 2);
  const s = JSON.parse(JSON.stringify(w.snapshot())), w2 = World.restore(L, s); assert.equal(w2.zonePower(2), 1, 'a new host keeps the lights on');
  assert.ok(w.tripZone(2, 5), 'while it lasts the circuit can trip like any other'); run(w, [b], 6); assert.equal(w.zonePower(2), 1);
  run(w, [b], CFG.boost); assert.ok(w.zonePower(2) < 0.1, 'it did not run out');
  assert.ok(w.events.some(e => e[1] === 'pwr' && e[2] === 2 && e[3] === 0 && e[4] === 1), 'everyone is told when it goes');
});

// ---------------------------------------------------------------------------------------------- holding your breath
const hideIn = (w, b, k) => { const lk = L.lockers[k]; b.x = lk.x; b.z = lk.z; b.lk = k; b.tick(1 / 30); return lk; };
test('breathing in a locker is heard by something standing outside; holding your breath is not', () => {
  const heard = hold => {
    const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.incT = 1e9; const c = w.creature, lk = hideIn(w, b, 0);
    w.time = 60; c.state = CS.ROAM; c.pauseT = 99; c.path = null; c.x = lk.x + 2.5; c.z = lk.z + 1; c.yaw = 0; b.hold = hold;
    let checked = false; run(w, [b], 5, () => { if (c.state === CS.LOCKER) checked = true; });
    return { checked, breath: b.p.breath, status: b.p.status };
  };
  const a = heard(false), h = heard(true);
  assert.ok(a.checked && a.status === ST.DOWN, 'it did not come for the breathing');
  assert.ok(!h.checked && h.status === ST.ALIVE, 'it heard someone who was holding their breath');
  assert.ok(h.breath < 0.6 && h.breath > 0.4, `five seconds should use half the air (${h.breath})`);
});

test('nobody can hold their breath for ever: the gasp is louder than the breathing was', () => {
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.incT = 1e9; const c = w.creature, lk = hideIn(w, b, 0);
  w.time = 60; c.state = CS.ROAM; c.pauseT = 99; c.path = null; c.x = lk.x; c.z = lk.z + 6.5; b.hold = true;
  run(w, [b], CFG.breath.hold - 0.5); assert.equal(c.state, CS.ROAM, 'six metres off it should hear nothing yet'); assert.ok(!w.events.some(e => e[1] === 'gasp'));
  run(w, [b], 1); assert.ok(w.events.some(e => e[1] === 'gasp' && e[2] === b.p.slot), 'no gasp');
  assert.ok(!w.holding(b.p), 'and for a moment the breath cannot be held again');
  assert.notEqual(c.state, CS.ROAM, 'the gasp carried to it');
});

test('held breath can get someone through a locker check, less and less as it learns', () => {
  const survive = (learn, hold) => {
    let alive = 0; const N = 60;
    for (let i = 0; i < N; i++) {
      const w = new World(L, 100 + i), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.incT = 1e9; const c = w.creature, lk = hideIn(w, b, 0);
      w.time = 60; c.state = CS.SEARCH; c.searchLeft = 20; c.x = lk.x; c.z = lk.z; c.learn.hide = learn; b.hold = hold; b.p.hold = hold; c.enterLocker(0, CS.SEARCH);
      run(w, [b], 1.6); if (b.p.status === ST.ALIVE) alive++;
    }
    return alive / N;
  };
  assert.equal(survive(0.15, false), 0, 'breathing normally, a checked locker is always a find');
  const early = survive(0.15, true), late = survive(0.9, true);
  assert.ok(early > 0.7, `early on it should mostly be fooled (${early})`); assert.ok(late < 0.3, `once it has learned, mostly not (${late})`);
  // and never when it watched them get in
  const w = new World(L, 5), b = new Bot(w, 'a', 'A'); w.startMatch(-8); w.incT = 1e9; const c = w.creature, lk = hideIn(w, b, 0);
  w.time = 60; c.x = lk.x; c.z = lk.z; b.hold = true; b.p.hold = true; c.target = 'a'; c.enterLocker(0, CS.HUNT); run(w, [b], 1.6);
  assert.equal(b.p.status, ST.DOWN);
});
