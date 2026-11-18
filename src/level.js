// The mining ship Ymir: the whole map, described as rooms and fittings on a grid of 2 m tiles.
// x runs from the stern to the bow, z from port to starboard. Everything the simulation and the renderer need is
// derived from this one description.
//
// The ship is four sections one after another along a central spine corridor, each closed off from the next by a
// bulkhead that only opens once that section's job is done:
//   Engineering (x 1-30) · Cargo Deck (31-60) · Crew Deck (61-90) · Command Deck (91-118), with the escape pod at the bow.
// Above the ceilings runs a vent network that only the creature uses.

export const T = 2;                 // metres per tile
export const W = 120, H = 34;       // tiles
export const C = { SOLID: 0, FLOOR: 1, DUCT: 2, PIT: 3, TALL: 4, LOW: 5, LOCKER: 6, LIFT: 7 };
export const LOW_H = 1.05;          // height of a desk or crate you can crouch behind
export const DUCT_H = 1.2;          // headroom in a service duct
export const CEIL_H = 3.2;

const DIRS = { N: [0, -1], S: [0, 1], W: [-1, 0], E: [1, 0] };
const LIGHT = {
  white: [0.82, 0.9, 1.0], amber: [1.0, 0.6, 0.24], teal: [0.25, 0.9, 0.78], red: [1.0, 0.14, 0.08],
  violet: [0.72, 0.32, 1.0], cyan: [0.35, 0.78, 1.0], warm: [1.0, 0.84, 0.62],
};

// The ship's five power circuits: one to each section, and the pod bay on its own. Each match some of them may be dead
// or failing, and one can trip while you are in it.
export const ZONES = ['engineering', 'cargo deck', 'crew deck', 'command deck', 'pod bay'];
// The four sections, in the order the crew goes through them, and what has to be done in each before its bulkhead opens.
export const SECTIONS = [
  { name: 'Engineering', x0: 1, x1: 30, task: 'reactor', zones: [0] },
  { name: 'Cargo Deck', x0: 31, x1: 60, task: 'tags', zones: [1] },
  { name: 'Crew Deck', x0: 61, x1: 90, task: 'terminals', zones: [2] },
  { name: 'Command Deck', x0: 91, x1: 119, task: 'launch', zones: [3, 4] },
];
export const secAtX = cx => cx <= 30 ? 0 : cx <= 60 ? 1 : cx <= 90 ? 2 : 3;

export const CREW_LOGS = [
  ['T. Halvorsen', 'Captain', 'We cut into the asteroid at the third seam. The ore came up warm.'],
  ['M. Adeyemi', 'Cargo master', 'Something came aboard with the ore. We logged it as mineral. Then it unfolded.'],
  ['S. Kowalczyk', 'Science officer', 'It has no eyes. Those lights in its chest are how it tastes the air.'],
  ['J. Brandt', 'Comms', 'Every time it comes close the radios drown in static. That is the only warning you get.'],
  ['R. Imani', 'Medic', 'It heard the centrifuge in the medbay from two decks away. Walk. Only run once it has already seen you.'],
  ['D. Castellanos', 'Engineer', 'It cannot fit in the crawlspaces. It lives in the air vents, though. Listen to the ceiling.'],
  ['A. Lindqvist', 'Biology', 'The third time I hid in a locker it did not walk past. It learns.'],
  ['E. Okonkwo', 'Logistics', 'I threw a sounder to pull it off the door. Worked twice. The third time it came looking for whoever threw it.'],
  ['K. Varga', 'Cook', 'It waits. It stood in the dark by the galley door for an hour with its lights out.'],
  ['N. Petrov', 'Engineering', 'A lamp makes you easy to find. Switch yours off when you hear the tapping.'],
  ['H. Nakamura', 'Pilot', 'When one of us goes down it does not always finish the job. It watches to see who comes.'],
  ['T. Halvorsen', 'Captain', 'I have locked the bulkheads. Restart the reactor, open the decks, get to the pod. I am sorry.'],
  ['P. Osei', 'Stores', 'It stood outside my locker and listened. I held my breath until my ears rang, and it moved on.'],
  ['L. Ferreira', 'Electrical', 'Every deck has its own breaker. Throw it and you get light for a minute or so. It hears the breaker, mind.'],
  ['V. Moreau', 'Navigator', 'It goes through the vents. It came down out of the ceiling in the mess, right in front of me.'],
];

export function buildLevel() {
  const cells = new Uint8Array(W * H);
  const ceil = new Float32Array(W * H).fill(CEIL_H);
  const ice = new Uint8Array(W * H);
  const roomId = new Int16Array(W * H).fill(-1);
  const propKind = new Array(W * H).fill('');
  const rooms = [], doors = [], lockers = [], lights = [], tagSpots = [], itemSpots = [], spawns = [], creatureSpawns = [], breakers = [], stations = [], vents = [];
  const secSpawns = SECTIONS.map(() => []);
  const idx = (x, z) => z * W + x;

  function R(name, x0, z0, x1, z1, o = {}) {
    const id = rooms.length;
    rooms.push({ id, name, x0, z0, x1, z1, kind: o.kind || 'room', ice: !!o.ice, zone: o.zone !== undefined ? o.zone : secAtX(x0), sec: secAtX(x0) });
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
      const i = idx(x, z);
      if (cells[i] === C.SOLID) cells[i] = C.FLOOR;
      roomId[i] = id;
      if (o.ceil) ceil[i] = o.ceil;
      if (o.ice) ice[i] = 1;
    }
    return id;
  }
  const fill = (x0, z0, x1, z1, v, kind = '') => { for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) { cells[idx(x, z)] = v; propKind[idx(x, z)] = kind; } };
  const tall = (x0, z0, x1, z1, kind) => fill(x0, z0, x1, z1, C.TALL, kind);
  const low = (x0, z0, x1, z1, kind) => fill(x0, z0, x1, z1, C.LOW, kind);
  function door(list, o = {}) {
    const cs = list.map(([x, z]) => { const i = idx(x, z); cells[i] = C.FLOOR; return i; });
    doors.push({ id: doors.length, cells: cs, gate: !!o.gate, bulk: o.bulk !== undefined ? o.bulk : -1, open0: o.open ? 1 : 0, room: o.room || '' });
  }
  const duct = (...list) => list.forEach(([x, z]) => { cells[idx(x, z)] = C.DUCT; ceil[idx(x, z)] = DUCT_H; });
  const locker = (x, z, d) => { cells[idx(x, z)] = C.LOCKER; lockers.push({ id: lockers.length, cx: x, cz: z, dir: d, ax: x + DIRS[d][0], az: z + DIRS[d][1] }); };
  const light = (x, z, col, I, o = {}) => lights.push({
    x: (x + 0.5) * T, z: (z + 0.5) * T, y: o.y !== undefined ? o.y : -1,      // y -1: hang it just under the ceiling
    r: LIGHT[col][0], g: LIGHT[col][1], b: LIGHT[col][2], I, flicker: o.flicker ? 1 : 0, kind: o.kind || 'ceil', cx: x, cz: z,
  });
  // a breaker box on the wall beside a floor tile: d says which side the wall is on
  const breaker = (x, z, d) => breakers.push({ cx: x, cz: z, dir: d, dx: DIRS[d][0], dz: DIRS[d][1], x: (x + 0.5 + DIRS[d][0] * 0.5) * T, z: (z + 0.5 + DIRS[d][1] * 0.5) * T, ax: (x + 0.5) * T, az: (z + 0.5) * T });
  // something to be worked at, on the wall beside a floor tile: a coolant pump, the reactor lever, a terminal, the uplink.
  // You stand on the tile and hold use.
  const station = (kind, x, z, d) => stations.push({ kind, cx: x, cz: z, dir: d, dx: DIRS[d][0], dz: DIRS[d][1], x: (x + 0.5 + DIRS[d][0] * 0.5) * T, z: (z + 0.5 + DIRS[d][1] * 0.5) * T, ax: (x + 0.5) * T, az: (z + 0.5) * T, sec: secAtX(x) });
  // a hatch in the ceiling over a floor tile, where the creature can get into the vents or drop out of them
  const vent = (x, z) => vents.push({ cx: x, cz: z, x: (x + 0.5) * T, z: (z + 0.5) * T, sec: secAtX(x) });
  const tag = (x, z) => tagSpots.push({ cx: x, cz: z });
  const item = (x, z) => itemSpots.push({ cx: x, cz: z });

  // ================================================================== ENGINEERING, at the stern. The crew comes aboard here.
  R('Aft Airlock', 2, 13, 6, 20, { ceil: 3.6 }); door([[7, 16], [7, 17]]);
  R('Engineering Spine', 8, 16, 29, 17, { kind: 'hall' });
  R('Reactor Room', 9, 4, 20, 14, { ceil: 6 }); door([[14, 15], [15, 15]]);
  R('Coolant Plant', 22, 4, 28, 14); door([[25, 15]]); door([[21, 8]]);
  R('Upper Walkway', 2, 2, 28, 2, { kind: 'hall' }); door([[11, 3]]); door([[26, 3]]);
  R('Stern Passage', 2, 3, 3, 11, { kind: 'hall' }); door([[3, 12]]);
  R('Engine Bay', 9, 19, 22, 29, { ceil: 5 }); door([[12, 18], [13, 18]]); door([[20, 18]]); door([[15, 30]]);
  R('Machine Shop', 24, 19, 28, 23); door([[26, 18]]);
  R('Reactor Control', 24, 25, 28, 29); door([[26, 24]]); door([[23, 27]]); door([[26, 30]]);
  R('Lower Walkway', 2, 31, 28, 31, { kind: 'hall' });
  R('Stern Passage', 2, 22, 3, 30, { kind: 'hall' }); door([[3, 21]]);
  door([[30, 16], [30, 17]], { bulk: 0 });

  tall(13, 7, 16, 11, 'reactor');
  low(10, 12, 11, 12, 'console'); tall(19, 4, 20, 5, 'tank'); low(10, 4, 10, 4, 'crate'); low(19, 13, 19, 13, 'crate');
  tall(27, 5, 28, 6, 'tank'); tall(23, 10, 24, 11, 'tank'); low(27, 9, 28, 9, 'pipes'); low(22, 13, 22, 13, 'crate');
  tall(10, 21, 12, 23, 'engine'); tall(10, 25, 12, 27, 'engine'); tall(16, 24, 17, 26, 'machine'); low(19, 21, 20, 21, 'crate'); low(21, 28, 22, 28, 'crate');
  low(25, 21, 26, 21, 'bench'); tall(28, 23, 28, 23, 'shelf'); low(25, 27, 26, 27, 'console');
  low(2, 13, 2, 14, 'crate'); tall(6, 13, 6, 13, 'rack');
  locker(4, 12, 'S'); locker(5, 21, 'N'); locker(9, 3, 'S'); locker(18, 15, 'N'); locker(19, 15, 'S'); locker(28, 15, 'N'); locker(22, 3, 'S');
  locker(9, 30, 'N'); locker(22, 18, 'S'); locker(28, 18, 'S'); locker(28, 30, 'N'); locker(16, 1, 'S'); locker(20, 32, 'N');
  duct([21, 12]); duct([23, 21]); duct([4, 8], [5, 8], [6, 8], [7, 8], [8, 8]); duct([4, 26], [5, 26], [6, 26], [7, 26], [8, 26]);
  for (const [x, z] of [[3, 15], [5, 15], [3, 17], [5, 17], [3, 19], [5, 19]]) { spawns.push({ cx: x, cz: z }); secSpawns[0].push({ cx: x, cz: z }); }
  station('pump', 20, 10, 'E'); station('pump', 25, 4, 'N'); station('pump', 19, 29, 'S'); station('lever', 28, 26, 'E');
  breaker(10, 17, 'S');
  item(11, 13); item(14, 27); item(24, 13); item(27, 20);
  creatureSpawns.push({ cx: 27, cz: 8 }); creatureSpawns.push({ cx: 20, cz: 24 });
  vent(11, 16); vent(24, 17); vent(10, 6); vent(18, 6); vent(26, 11); vent(14, 20); vent(20, 27); vent(27, 22); vent(17, 2); vent(11, 31);
  light(4, 16, 'amber', 1.6, { kind: 'beacon' }); light(4, 19, 'white', 1.2);
  light(12, 16, 'white', 1.3); light(20, 17, 'white', 1.3); light(27, 16, 'white', 1.1, { flicker: true });
  light(11, 7, 'white', 1.8); light(18, 12, 'white', 1.6); light(12, 9, 'teal', 1.6); light(17, 9, 'teal', 1.6);
  light(25, 7, 'white', 1.6); light(25, 12, 'cyan', 1.0, { flicker: true });
  light(14, 20, 'amber', 2.0); light(19, 26, 'red', 1.8); light(13, 28, 'amber', 1.4, { flicker: true });
  light(26, 21, 'white', 1.3); light(26, 27, 'cyan', 1.1);
  light(8, 2, 'white', 0.9); light(20, 2, 'white', 0.9); light(8, 31, 'white', 0.9); light(20, 31, 'white', 0.9, { flicker: true });
  light(2, 7, 'teal', 0.8); light(2, 26, 'teal', 0.8);

  // ================================================================== CARGO DECK: the hold, stacked with containers
  R('Cargo Spine', 31, 16, 34, 17, { kind: 'hall' }); R('Cargo Spine', 56, 16, 59, 17, { kind: 'hall' });
  R('Cargo Hold', 35, 6, 55, 27, { ceil: 7 });
  R('North Gallery', 31, 3, 59, 4, { kind: 'hall' }); door([[41, 5]]); door([[49, 5]]);
  R('South Gallery', 31, 29, 59, 30, { kind: 'hall' }); door([[41, 28]]); door([[49, 28]]);
  R('Cargo Office', 31, 6, 33, 14); door([[32, 5]]); door([[32, 15]]);
  R('Crew Lockers', 31, 19, 33, 27); door([[32, 18]]); door([[32, 28]]);
  R('Manifest Office', 57, 6, 59, 14); door([[58, 5]]); door([[58, 15]]);
  R('Cargo Airlock', 57, 19, 59, 27); door([[58, 18]]); door([[58, 28]]);
  door([[60, 16], [60, 17]], { bulk: 1 });

  for (const [x0, z0, x1, z1] of [[37, 7, 38, 9], [37, 11, 38, 13], [41, 8, 43, 9], [41, 12, 43, 13], [46, 7, 47, 9], [46, 11, 47, 14], [50, 8, 52, 9], [50, 12, 52, 13],
    [37, 20, 38, 22], [37, 24, 38, 26], [41, 20, 43, 21], [41, 24, 43, 25], [46, 19, 47, 22], [46, 24, 47, 26], [50, 20, 52, 21], [50, 24, 52, 25]]) tall(x0, z0, x1, z1, 'container');
  low(44, 6, 44, 6, 'crate'); low(54, 11, 54, 11, 'crate'); low(39, 14, 39, 14, 'crate'); low(54, 22, 54, 23, 'crate'); low(44, 27, 45, 27, 'crate'); low(35, 19, 35, 19, 'crate');
  low(31, 8, 31, 9, 'desk'); tall(33, 13, 33, 14, 'shelf'); low(59, 8, 59, 9, 'desk'); tall(57, 13, 57, 14, 'rack');
  low(31, 23, 31, 24, 'bench'); tall(59, 21, 59, 22, 'rack'); low(57, 26, 57, 26, 'crate');
  locker(31, 5, 'S'); locker(30, 20, 'E'); locker(30, 22, 'E'); locker(30, 26, 'E'); locker(35, 5, 'S'); locker(55, 28, 'N'); locker(56, 10, 'W'); locker(34, 22, 'E');
  locker(45, 2, 'S'); locker(52, 31, 'N'); locker(59, 5, 'S'); locker(59, 28, 'N');
  duct([34, 10]); duct([56, 22]);
  for (const [x, z] of [[32, 16], [33, 16], [34, 16], [32, 17], [33, 17], [34, 17]]) secSpawns[1].push({ cx: x, cz: z });
  for (const [x, z] of [[36, 8], [40, 10], [44, 12], [48, 8], [53, 10], [36, 25], [40, 23], [44, 20], [48, 26], [53, 22], [32, 11], [58, 24]]) tag(x, z);
  breaker(33, 17, 'S');
  item(33, 25); item(58, 10); item(39, 30); item(44, 4);
  creatureSpawns.push({ cx: 54, cz: 16 });
  vent(38, 15); vent(49, 18); vent(44, 10); vent(44, 22); vent(36, 4); vent(54, 29); vent(32, 7); vent(58, 25);
  light(33, 16, 'white', 1.2); light(57, 17, 'white', 1.2);
  light(40, 16, 'white', 2.2, { y: 6.2 }); light(50, 16, 'white', 2.2, { y: 6.2, flicker: true }); light(39, 10, 'amber', 1.4); light(49, 11, 'amber', 1.4); light(44, 23, 'amber', 1.4); light(53, 25, 'red', 1.0); light(36, 21, 'white', 1.0);
  light(36, 3, 'white', 0.9); light(46, 4, 'white', 0.9); light(55, 3, 'white', 0.9, { flicker: true }); light(36, 30, 'white', 0.9); light(46, 29, 'white', 0.9); light(55, 30, 'white', 0.9);
  light(32, 9, 'warm', 1.2); light(32, 22, 'white', 1.1); light(58, 9, 'warm', 1.1); light(58, 23, 'amber', 1.2, { kind: 'beacon' });

  // ================================================================== CREW DECK: mess, galley, medbay, the cabins
  R('Crew Spine', 61, 16, 89, 17, { kind: 'hall' });
  R('Mess Hall', 62, 4, 72, 14); door([[67, 15], [68, 15]]); door([[65, 3]]);
  R('Galley', 74, 4, 78, 9); door([[73, 6]]); door([[76, 3]]);
  R("Captain's Office", 74, 11, 78, 14); door([[76, 10]]); door([[76, 15]]); door([[79, 12]]);
  R('Medbay', 80, 4, 88, 14); door([[84, 15]]); door([[85, 3]]);
  R('Observation Walk', 62, 2, 88, 2, { kind: 'hall' });
  R('Recreation', 62, 19, 70, 29); door([[66, 18]]); door([[71, 25]]); door([[66, 30]]);
  R('Quarters Hall', 72, 19, 73, 29, { kind: 'hall' }); door([[72, 18], [73, 18]]); door([[72, 30]]);
  R('Quarters Hall', 74, 24, 88, 24, { kind: 'hall' });
  R('Cabin', 75, 19, 78, 22); door([[76, 23]]); R('Cabin', 80, 19, 83, 22); door([[81, 23]]); R('Cabin', 85, 19, 88, 22); door([[86, 23]]);
  R('Cabin', 75, 26, 78, 29); door([[76, 25]]); R('Cabin', 80, 26, 83, 29); door([[81, 25]]);
  R('Washroom', 85, 26, 88, 29); door([[86, 25]]); door([[86, 30]]);
  R('Lower Deck Walk', 62, 31, 88, 31, { kind: 'hall' });
  door([[90, 16], [90, 17]], { bulk: 2 });

  low(64, 7, 66, 7, 'table'); low(69, 7, 71, 7, 'table'); low(64, 11, 66, 11, 'table'); low(69, 11, 71, 11, 'table'); tall(62, 4, 62, 5, 'fridge');
  low(74, 4, 75, 4, 'counter'); tall(78, 4, 78, 5, 'fridge'); low(78, 8, 78, 9, 'counter');
  low(75, 12, 76, 12, 'desk'); tall(74, 14, 74, 14, 'cabinet');
  low(81, 6, 82, 6, 'bed'); low(85, 6, 86, 6, 'bed'); low(81, 12, 82, 12, 'bed'); tall(88, 4, 88, 5, 'cabinet'); tall(88, 13, 88, 14, 'cabinet');
  low(64, 21, 65, 22, 'table'); low(68, 21, 69, 22, 'table'); low(64, 26, 65, 27, 'table'); tall(70, 19, 70, 20, 'shelf');
  for (const x of [75, 78, 80, 83, 85, 88]) low(x, 19, x, 19, 'bunk');
  for (const x of [75, 78, 80, 83]) low(x, 29, x, 29, 'bunk');
  tall(85, 29, 85, 29, 'stall'); tall(88, 29, 88, 29, 'stall');
  locker(62, 15, 'N'); locker(73, 12, 'W'); locker(77, 3, 'S'); locker(87, 15, 'N'); locker(80, 3, 'S'); locker(77, 15, 'N');
  locker(61, 22, 'E'); locker(70, 30, 'N'); locker(77, 18, 'S'); locker(84, 27, 'W'); locker(89, 21, 'W'); locker(74, 27, 'E'); locker(82, 18, 'S');
  locker(70, 1, 'S'); locker(80, 32, 'N'); locker(64, 18, 'N');
  duct([79, 21]); duct([79, 28]); duct([71, 21]);
  for (const [x, z] of [[61, 16], [62, 16], [63, 16], [61, 17], [62, 17], [63, 17]]) secSpawns[2].push({ cx: x, cz: z });
  station('terminal', 88, 9, 'E'); station('terminal', 78, 13, 'E'); station('terminal', 62, 27, 'W'); station('terminal', 62, 9, 'W'); station('terminal', 88, 24, 'E');
  breaker(80, 17, 'S');
  item(70, 9); item(86, 9); item(67, 24);
  creatureSpawns.push({ cx: 84, cz: 9 });
  vent(70, 16); vent(85, 17); vent(66, 9); vent(83, 8); vent(67, 25); vent(80, 24); vent(75, 2); vent(75, 31);
  light(64, 16, 'white', 1.2); light(73, 17, 'white', 1.2); light(82, 16, 'white', 1.2, { flicker: true }); light(88, 17, 'white', 1.0);
  light(65, 9, 'warm', 1.8); light(70, 9, 'warm', 1.6, { flicker: true }); light(76, 6, 'warm', 1.4); light(76, 12, 'warm', 1.2);
  light(83, 9, 'white', 2.2); light(86, 12, 'teal', 1.0, { y: 1.4, kind: 'glow' });
  light(66, 24, 'warm', 1.5); light(68, 28, 'violet', 0.9, { y: 1.5, kind: 'glow' });
  light(73, 22, 'white', 1.0); light(80, 24, 'white', 1.0); light(86, 24, 'white', 0.9, { flicker: true });
  light(77, 20, 'warm', 0.8); light(82, 21, 'warm', 0.8); light(87, 20, 'warm', 0.7); light(77, 27, 'warm', 0.8); light(82, 28, 'warm', 0.7); light(87, 27, 'white', 1.0);
  light(68, 2, 'white', 0.9); light(80, 2, 'white', 0.9); light(68, 31, 'white', 0.9); light(80, 31, 'white', 0.9, { flicker: true });

  // ================================================================== COMMAND DECK: the bridge at the bow, and the escape pod
  R('Command Spine', 91, 16, 104, 17, { kind: 'hall' });
  R('Bridge', 106, 8, 117, 25, { ceil: 4.2 }); door([[105, 16], [105, 17]]); door([[105, 10]]); door([[105, 22]]);
  R('Pod Bay', 92, 6, 104, 14, { zone: 4, ceil: 5 }); door([[98, 15]]);
  fill(97, 2, 99, 4, C.LIFT); for (let z = 2; z <= 4; z++) for (let x = 97; x <= 99; x++) ceil[idx(x, z)] = 2.6;
  door([[97, 5], [98, 5], [99, 5]], { gate: true });
  R("Officers' Quarters", 92, 19, 98, 24); door([[95, 18]]); door([[95, 25]]);
  R('Comms', 100, 19, 104, 24); door([[102, 18]]); door([[102, 25]]);
  R('Observation Lounge', 92, 26, 104, 31);

  low(108, 10, 110, 10, 'console'); low(113, 10, 115, 10, 'console'); low(108, 23, 110, 23, 'console'); low(113, 23, 115, 23, 'console');
  low(116, 14, 116, 19, 'console'); low(111, 16, 112, 17, 'desk'); tall(107, 13, 107, 13, 'pillar'); tall(107, 20, 107, 20, 'pillar');
  low(96, 6, 96, 6, 'liftconsole');
  low(93, 8, 94, 8, 'crate'); low(102, 12, 103, 12, 'crate'); tall(92, 13, 92, 14, 'rack'); tall(104, 7, 104, 8, 'rack');
  low(93, 20, 93, 21, 'bunk'); low(97, 20, 97, 21, 'bunk'); tall(98, 24, 98, 24, 'cabinet');
  low(101, 20, 103, 20, 'console'); tall(104, 23, 104, 24, 'rack');
  low(95, 28, 96, 29, 'table'); low(100, 28, 101, 29, 'table'); low(92, 31, 93, 31, 'couch'); low(103, 31, 104, 31, 'couch');
  locker(92, 5, 'S'); locker(104, 5, 'S'); locker(103, 15, 'N'); locker(106, 7, 'S'); locker(118, 10, 'W'); locker(91, 21, 'E'); locker(104, 18, 'S'); locker(91, 28, 'E'); locker(100, 32, 'N'); locker(117, 26, 'N');
  duct([99, 21]); duct([105, 13]);
  for (const [x, z] of [[91, 16], [92, 16], [93, 16], [91, 17], [92, 17], [94, 16]]) secSpawns[3].push({ cx: x, cz: z });
  station('uplink', 112, 8, 'N');
  breaker(93, 17, 'S'); breaker(92, 10, 'W');
  item(114, 20); item(93, 29); item(103, 22);
  creatureSpawns.push({ cx: 110, cz: 14 });
  vent(96, 17); vent(110, 19); vent(114, 13); vent(100, 10); vent(95, 21); vent(102, 22); vent(98, 28);
  light(94, 16, 'white', 1.2); light(101, 17, 'white', 1.2, { flicker: true });
  light(110, 12, 'cyan', 1.6); light(110, 21, 'cyan', 1.6); light(115, 16, 'cyan', 1.2, { y: 1.2, kind: 'glow' }); light(112, 16, 'white', 1.4);
  light(95, 10, 'white', 2.0); light(102, 9, 'white', 1.6, { flicker: true }); light(98, 7, 'amber', 1.4, { kind: 'beacon' }); light(98, 3, 'white', 0.9);
  light(95, 22, 'warm', 1.2); light(102, 22, 'cyan', 1.0, { y: 1.3, kind: 'glow' }); light(98, 28, 'warm', 1.4); light(102, 30, 'violet', 0.8);

  // ------------------------------------------------------------------ derived tables
  const doorAt = new Int16Array(W * H).fill(-1);
  for (const d of doors) {
    for (const i of d.cells) doorAt[i] = d.id;
    const x = d.cells[0] % W, z = (d.cells[0] / W) | 0;
    const ew = cells[idx(x - 1, z)] !== C.SOLID && cells[idx(x + 1, z)] !== C.SOLID && cells[idx(x - 1, z)] !== C.LOCKER && cells[idx(x + 1, z)] !== C.LOCKER;
    d.axis = d.cells.length > 1 ? (d.cells[1] - d.cells[0] === 1 ? 'x' : 'z') : (ew ? 'z' : 'x');   // the direction the door leaf lies along
    let sx = 0, sz = 0; for (const i of d.cells) { sx += (i % W) + 0.5; sz += ((i / W) | 0) + 0.5; }
    d.x = sx / d.cells.length * T; d.z = sz / d.cells.length * T; d.len = d.cells.length * T;
  }
  const lockerAt = new Int16Array(W * H).fill(-1);
  for (const k of lockers) { lockerAt[idx(k.cx, k.cz)] = k.id; k.access = idx(k.ax, k.az); k.x = (k.ax + 0.5) * T; k.z = (k.az + 0.5) * T; }

  // ducts: connected runs, and the floor tiles they open onto
  const ductOf = new Int16Array(W * H).fill(-1), ducts = [];
  for (let i = 0; i < W * H; i++) {
    if (cells[i] !== C.DUCT || ductOf[i] >= 0) continue;
    const g = { id: ducts.length, cells: [], exits: [] }, st = [i]; ductOf[i] = g.id;
    while (st.length) {
      const c = st.pop(); g.cells.push(c);
      for (const n of [c - 1, c + 1, c - W, c + W]) {
        if (cells[n] === C.DUCT && ductOf[n] < 0) { ductOf[n] = g.id; st.push(n); }
        else if (cells[n] === C.FLOOR && !g.exits.includes(n)) g.exits.push(n);
      }
    }
    ducts.push(g);
  }

  // the escape pod: its cells, its hatch, the console that primes it, and where its alarm sounds from
  const liftCells = []; for (let i = 0; i < W * H; i++) if (cells[i] === C.LIFT) liftCells.push(i);
  const gate = doors.find(d => d.gate);
  const lift = { cells: liftCells, gateId: gate.id, x: 98.5 * T, z: 3.5 * T, console: { cx: 96, cz: 6, x: 96.5 * T, z: 6.5 * T }, alarm: { x: 98.5 * T, z: 10 * T } };

  for (const l of lights) if (l.y < 0) l.y = l.y === -1 ? ceil[idx(l.cx, l.cz)] - 0.25 : l.y;

  // which power circuit each tile is on: its room's, or for a doorway, duct or fitting, the nearest room's
  const zoneOf = new Uint8Array(W * H).fill(255);
  { const q = []; for (let i = 0; i < W * H; i++) if (roomId[i] >= 0) { zoneOf[i] = rooms[roomId[i]].zone; q.push(i); }
    for (let h = 0; h < q.length; h++) { const c = q[h], x = c % W, z = (c / W) | 0; for (const [dx, dz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) { const nx = x + dx, nz = z + dz; if (nx < 0 || nz < 0 || nx >= W || nz >= H) continue; const n = idx(nx, nz); if (zoneOf[n] === 255) { zoneOf[n] = zoneOf[c]; q.push(n); } } } }
  for (const l of lights) l.zone = zoneOf[idx(l.cx, l.cz)];
  breakers.forEach((b, i) => { b.id = i; b.zone = zoneOf[idx(b.cx, b.cz)]; });
  stations.forEach((st, i) => { st.id = i; st.zone = zoneOf[idx(st.cx, st.cz)]; });
  // the sections, their bulkheads, and which one each tile belongs to
  const secOf = new Uint8Array(W * H); for (let i = 0; i < W * H; i++) secOf[i] = secAtX(i % W);
  const sections = SECTIONS.map((sc, i) => Object.assign({}, sc, { id: i, spawns: secSpawns[i], bulkIn: -1, bulkOut: -1 }));
  for (const d of doors) if (d.bulk >= 0) { sections[d.bulk].bulkOut = d.id; sections[d.bulk + 1].bulkIn = d.id; }
  // The vents: every hatch is joined to its two nearest in the same section, and to whatever else it takes to join them
  // all up; one duct runs over each bulkhead. Then the shortest way through from any hatch to any other.
  vents.forEach((v, i) => { v.id = i; v.cell = idx(v.cx, v.cz); });
  const nv = vents.length, adj = vents.map(() => new Set()), link = (a, b) => { if (a !== b) { adj[a].add(b); adj[b].add(a); } };
  const vd = (a, b) => Math.hypot(vents[a].x - vents[b].x, vents[a].z - vents[b].z);
  for (let k = 0; k < sections.length; k++) {
    const ids = vents.filter(v => v.sec === k).map(v => v.id); if (!ids.length) continue;
    for (const a of ids) ids.filter(b => b !== a).sort((p, q) => vd(a, p) - vd(a, q)).slice(0, 2).forEach(b => link(a, b));
    const inT = new Set([ids[0]]);        // and a spanning tree, so that no section's vents fall into two pieces
    while (inT.size < ids.length) { let best = null; for (const a of inT) for (const b of ids) if (!inT.has(b) && (!best || vd(a, b) < best[2])) best = [a, b, vd(a, b)]; link(best[0], best[1]); inT.add(best[1]); }
  }
  for (const d of doors) if (d.bulk >= 0) {
    const near = sec => vents.filter(v => v.sec === sec).sort((p, q) => Math.hypot(p.x - d.x, p.z - d.z) - Math.hypot(q.x - d.x, q.z - d.z))[0];
    const a = near(d.bulk), b = near(d.bulk + 1); if (a && b) link(a.id, b.id);
  }
  const ventLen = new Float32Array(nv * nv).fill(1e9), ventNext = new Int16Array(nv * nv).fill(-1);
  for (let a = 0; a < nv; a++) { ventLen[a * nv + a] = 0; ventNext[a * nv + a] = a; for (const b of adj[a]) { ventLen[a * nv + b] = vd(a, b); ventNext[a * nv + b] = b; } }
  for (let m = 0; m < nv; m++) for (let a = 0; a < nv; a++) for (let b = 0; b < nv; b++) { const l = ventLen[a * nv + m] + ventLen[m * nv + b]; if (l < ventLen[a * nv + b]) { ventLen[a * nv + b] = l; ventNext[a * nv + b] = ventNext[a * nv + m]; } }
  const ventLinks = []; for (let a = 0; a < nv; a++) for (const b of adj[a]) if (a < b) ventLinks.push([a, b]);
  // Emergency lamps: small red ones low on the walls every few metres, on their own batteries. They are always there,
  // but they only show once a wing has lost its power. They do not count as light for anything's eyes.
  const elights = [];
  for (let z = 1; z < H - 1; z++) for (let x = 1; x < W - 1; x++) {
    const i = idx(x, z); if (cells[i] !== C.FLOOR || doorAt[i] >= 0 || ice[i] || (x * 7 + z * 13) % 5 !== 0) continue;
    for (const [dx, dz] of [[0, -1], [1, 0], [0, 1], [-1, 0]]) if (cells[idx(x + dx, z + dz)] === C.SOLID) { elights.push({ x: (x + 0.5 + dx * 0.47) * T, y: 0.34, z: (z + 0.5 + dz * 0.47) * T, dx, dz, zone: zoneOf[i] }); break; }
  }

  const L = {
    T, W, H, cells, ceil, ice, roomId, rooms, propKind, doors, doorAt, lockers, lockerAt, ducts, ductOf, lights, tagSpots, itemSpots, spawns, creatureSpawns, lift, zoneOf, breakers, elights,
    sections, secOf, stations, vents, ventLinks, ventLen, ventNext, ventAdj: adj.map(a => [...a]),
    idx, cellOf: (x, z) => (Math.floor(z / T) * W + Math.floor(x / T)),
    cx: i => (i % W + 0.5) * T, cz: i => (((i / W) | 0) + 0.5) * T,
  };

  // which cells the creature can stand on, and which a player can
  L.walkC = new Uint8Array(W * H); L.walkP = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) {
    const c = cells[i], isGate = doorAt[i] >= 0 && doors[doorAt[i]].gate;
    L.walkC[i] = (c === C.FLOOR && !isGate) ? 1 : 0;
    L.walkP[i] = (c === C.FLOOR || c === C.DUCT || c === C.LIFT) ? 1 : 0;
  }
  // how well lit each tile is, 0 (black) to 1, for how easily the creature sees someone standing there
  L.lightLevel = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) {
    if (!L.walkP[i]) continue;
    const e = lightAt(L, L.cx(i), 1.0, L.cz(i), 0, 1, 0);
    L.lightLevel[i] = Math.min(1, (e[0] + e[1] + e[2] + e[3] + e[4] + e[5]) / 3 / 1.1);
  }
  // places worth walking to on a patrol: a few per room
  L.pois = [];
  for (const r of rooms) {
    const pts = [];
    const nx = Math.max(1, Math.round((r.x1 - r.x0 + 1) / 7)), nz = Math.max(1, Math.round((r.z1 - r.z0 + 1) / 7));
    for (let a = 0; a < nx; a++) for (let b = 0; b < nz; b++) {
      const px = r.x0 + (r.x1 - r.x0 + 1) * (a + 0.5) / nx, pz = r.z0 + (r.z1 - r.z0 + 1) * (b + 0.5) / nz;
      let best = -1, bd = 1e9;
      for (let z = r.z0; z <= r.z1; z++) for (let x = r.x0; x <= r.x1; x++) {
        const i = idx(x, z); if (!L.walkC[i]) continue;
        const d = (x + 0.5 - px) ** 2 + (z + 0.5 - pz) ** 2; if (d < bd) { bd = d; best = i; }
      }
      if (best >= 0 && !pts.includes(best)) pts.push(best);
    }
    for (const c of pts) L.pois.push({ cell: c, room: r.id, x: L.cx(c), z: L.cz(c) });
  }
  L.roomName = (x, z) => { const cxi = Math.floor(x / T), czi = Math.floor(z / T); if (cxi < 0 || czi < 0 || cxi >= W || czi >= H) return ''; const r = roomId[idx(cxi, czi)]; return r >= 0 ? rooms[r].name : ''; };
  return L;
}

// Static sight line for light and sound: walls, lockers, tall fittings and ducts stop it; doors and low fittings do not.
export function staticClear(L, x0, z0, x1, z1) {
  const { cells } = L;
  let cx = Math.floor(x0 / T), cz = Math.floor(z0 / T); const ex = Math.floor(x1 / T), ez = Math.floor(z1 / T);
  const dx = x1 - x0, dz = z1 - z0, sx = dx > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1;
  const tdx = dx !== 0 ? Math.abs(T / dx) : Infinity, tdz = dz !== 0 ? Math.abs(T / dz) : Infinity;
  let tmx = dx !== 0 ? (dx > 0 ? (cx + 1) * T - x0 : x0 - cx * T) / Math.abs(dx) : Infinity;
  let tmz = dz !== 0 ? (dz > 0 ? (cz + 1) * T - z0 : z0 - cz * T) / Math.abs(dz) : Infinity;
  for (let g = 0; g < 300 && !(cx === ex && cz === ez); g++) {
    if (tmx < tmz) { tmx += tdx; cx += sx; } else { tmz += tdz; cz += sz; }
    if (cx === ex && cz === ez) break;
    if (cx < 0 || cz < 0 || cx >= W || cz >= H) return false;
    const c = cells[cz * W + cx];
    if (c === C.SOLID || c === C.TALL || c === C.LOCKER || c === C.DUCT) return false;
  }
  return true;
}

// Light arriving at a point with a given facing. Returns [r, g, b, flickerR, flickerG, flickerB, then how much comes from each of
// the five power circuits, then the emergency lamps: how much red they give here, and which circuit's they are]: steady light,
// the share from failing fixtures, what would be lost if a circuit went down, and what would show instead.
export function lightAt(L, x, y, z, nx, ny, nz) {
  const out = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const px = x + nx * 0.06, pz = z + nz * 0.06;
  for (const l of L.lights) {
    const dx = l.x - px, dy = l.y - y, dz = l.z - pz, d2 = dx * dx + dy * dy + dz * dz;
    if (d2 > 260) continue;
    const d = Math.sqrt(d2) || 1e-3;
    if (!staticClear(L, px, pz, l.x, l.z)) continue;
    const ndl = Math.max(0, (nx * dx + ny * dy + nz * dz) / d);
    const e = l.I * (0.28 + 0.72 * ndl) / (1 + 0.25 * Math.max(d2, 0.4));
    const o = l.flicker ? 3 : 0;
    out[o] += e * l.r; out[o + 1] += e * l.g; out[o + 2] += e * l.b;
    out[6 + l.zone] += e * (0.3 * l.r + 0.6 * l.g + 0.1 * l.b);
  }
  let best = 0;
  for (const l of L.elights) {
    const dx = l.x - px, dy = l.y - y, dz = l.z - pz, d2 = dx * dx + dy * dy + dz * dz;
    if (d2 > 90) continue;
    const d = Math.sqrt(d2) || 1e-3;
    if (!staticClear(L, px, pz, l.x - l.dx * 0.2, l.z - l.dz * 0.2)) continue;
    const e = 1.25 * (0.34 + 0.66 * Math.max(0, (nx * dx + ny * dy + nz * dz) / d)) / (1 + 0.2 * Math.max(d2, 0.25));
    out[11] += e; if (e > best) { best = e; out[12] = l.zone; }
  }
  return out;
}

// A list of problems with the map; empty when it is sound. Used by the tests.
export function validateLevel(L) {
  const bad = [], { cells, doors, lockers, ducts, tagSpots, itemSpots, spawns, creatureSpawns } = L;
  const flood = (start, ok) => { const seen = new Uint8Array(W * H), st = [start]; seen[start] = 1; while (st.length) { const c = st.pop(); for (const n of [c - 1, c + 1, c - W, c + W]) if (!seen[n] && ok(n)) { seen[n] = 1; st.push(n); } } return seen; };
  const start = L.idx(spawns[0].cx, spawns[0].cz);
  const seenP = flood(start, n => L.walkP[n]), seenC = flood(start, n => L.walkC[n]);
  for (let i = 0; i < W * H; i++) {
    if (L.walkP[i] && !seenP[i]) bad.push(`player cannot reach ${i % W},${(i / W) | 0}`);
    if (L.walkC[i] && !seenC[i]) bad.push(`creature cannot reach ${i % W},${(i / W) | 0}`);
    const x = i % W, z = (i / W) | 0;
    if ((x === 0 || z === 0 || x === W - 1 || z === H - 1) && cells[i] !== C.SOLID) bad.push(`open edge at ${x},${z}`);
  }
  const spot = (s, what) => { const i = L.idx(s.cx, s.cz); if (cells[i] !== C.FLOOR || !seenC[i] || L.doorAt[i] >= 0) bad.push(`${what} at ${s.cx},${s.cz} is not on open floor`); };
  tagSpots.forEach(s => spot(s, 'tag')); itemSpots.forEach(s => spot(s, 'item')); spawns.forEach(s => spot(s, 'spawn')); creatureSpawns.forEach(s => spot(s, 'creature spawn'));
  const all = [...tagSpots, ...itemSpots, ...spawns, ...creatureSpawns].map(s => s.cx + ',' + s.cz);
  if (new Set(all).size !== all.length) bad.push('two things share a tile');
  for (const k of lockers) if (cells[k.access] !== C.FLOOR || !seenC[k.access]) bad.push(`locker ${k.cx},${k.cz} does not face open floor`);
  for (const d of doors) for (const i of d.cells) {
    const x = i % W, z = (i / W) | 0, open = n => cells[n] !== C.SOLID && cells[n] !== C.LOCKER;
    const ax = d.axis === 'x';   // leaf lies along x, so you walk through along z
    const a = ax ? L.idx(x, z - 1) : L.idx(x - 1, z), b = ax ? L.idx(x, z + 1) : L.idx(x + 1, z);
    if (!open(a) || !open(b)) bad.push(`door at ${x},${z} does not lead anywhere`);
  }
  for (const g of ducts) if (g.exits.length < 2) bad.push(`duct ${g.id} has ${g.exits.length} exit(s)`);
  if (L.breakers.length !== ZONES.length) bad.push('there should be one breaker to each circuit');
  L.breakers.forEach((b, i) => {
    if (b.zone !== i) bad.push(`breaker ${i} is on the ${ZONES[b.zone]} circuit`);
    if (cells[L.idx(b.cx, b.cz)] !== C.FLOOR || !seenC[L.idx(b.cx, b.cz)]) bad.push(`breaker ${i} cannot be reached`);
    if (cells[L.idx(b.cx + b.dx, b.cz + b.dz)] !== C.SOLID) bad.push(`breaker ${i} is not on a wall`);
  });
  if (tagSpots.length < 8) bad.push('too few tag spots');
  L.stations.forEach(st => {
    if (cells[L.idx(st.cx, st.cz)] !== C.FLOOR || !seenC[L.idx(st.cx, st.cz)] || L.doorAt[L.idx(st.cx, st.cz)] >= 0) bad.push(`station at ${st.cx},${st.cz} cannot be reached`);
    if (cells[L.idx(st.cx + st.dx, st.cz + st.dz)] !== C.SOLID) bad.push(`station at ${st.cx},${st.cz} is not on a wall`);
    if (L.lockers.some(k => k.access === L.idx(st.cx, st.cz)) || L.breakers.some(b => b.cx === st.cx && b.cz === st.cz)) bad.push(`station at ${st.cx},${st.cz} shares a tile`);
  });
  L.vents.forEach(v => { if (cells[v.cell] !== C.FLOOR || L.doorAt[v.cell] >= 0 || !seenC[v.cell]) bad.push(`vent at ${v.cx},${v.cz} is not over open floor`); });
  for (let a = 0; a < L.vents.length; a++) for (let b = 0; b < L.vents.length; b++) if (L.ventLen[a * L.vents.length + b] > 1e8) { bad.push('the vents are not all joined up'); a = b = 1e9; }
  L.sections.forEach((sc, k) => {
    if (sc.spawns.length < 6) bad.push(`section ${k} needs six places to start`);
    if (L.vents.filter(v => v.sec === k).length < 5) bad.push(`section ${k} has too few vents`);
    if (k < L.sections.length - 1 && sc.bulkOut < 0) bad.push(`section ${k} has no bulkhead out`);
    sc.spawns.forEach(sp => { if (L.secOf[L.idx(sp.cx, sp.cz)] !== k) bad.push(`a start in section ${k} is outside it`); });
  });
  // nothing but the bulkheads joins one section to the next
  for (let i = 0; i < W * H; i++) { if (!L.walkP[i] && L.cells[i] !== C.LIFT) continue; const x = i % W; for (const n of [i - 1, i + 1]) { if ((L.walkP[n] || L.cells[n] === C.LIFT) && L.secOf[n] !== L.secOf[i] && !(L.doorAt[i] >= 0 && L.doors[L.doorAt[i]].bulk >= 0) && !(L.doorAt[n] >= 0 && L.doors[L.doorAt[n]].bulk >= 0)) bad.push(`sections meet at ${x},${(i / W) | 0} without a bulkhead`); } }
  L.ducts.forEach(g => { if (new Set(g.exits.map(e => L.secOf[e])).size > 1) bad.push(`duct ${g.id} runs between sections`); });
  return bad;
}

export function printLevel(L) {
  const ch = { [C.SOLID]: '#', [C.FLOOR]: '.', [C.DUCT]: 'v', [C.PIT]: ' ', [C.TALL]: 'T', [C.LOW]: 'c', [C.LOCKER]: 'L', [C.LIFT]: 'X' };
  const rows = [];
  for (let z = 0; z < H; z++) {
    let s = '';
    for (let x = 0; x < W; x++) {
      const i = L.idx(x, z); let c = ch[L.cells[i]];
      if (L.doorAt[i] >= 0) c = L.doors[L.doorAt[i]].gate ? 'G' : L.doors[L.doorAt[i]].bulk >= 0 ? 'B' : 'D';
      if (L.vents.some(v => v.cx === x && v.cz === z)) c = '^';
      if (L.stations.some(t => t.cx === x && t.cz === z)) c = '$';
      if (L.tagSpots.some(t => t.cx === x && t.cz === z)) c = 'o';
      if (L.itemSpots.some(t => t.cx === x && t.cz === z)) c = 'i';
      if (L.spawns.some(t => t.cx === x && t.cz === z)) c = 'S';
      if (L.creatureSpawns.some(t => t.cx === x && t.cz === z)) c = 'M';
      s += c;
    }
    rows.push(String(z).padStart(2) + ' ' + s);
  }
  let head = '   '; for (let x = 0; x < W; x++) head += x % 10 === 0 ? String((x / 10) | 0) : (x % 5 === 0 ? '+' : ' ');
  return head + '\n' + rows.join('\n');
}
