// Outpost Ymir — the whole map, described as rooms and fittings on a grid of 2 m tiles.
// x runs east, z runs south. Everything the simulation and the renderer need is derived from this one description.

export const T = 2;                 // metres per tile
export const W = 69, H = 49;        // tiles
export const C = { SOLID: 0, FLOOR: 1, DUCT: 2, PIT: 3, TALL: 4, LOW: 5, LOCKER: 6, LIFT: 7 };
export const LOW_H = 1.05;          // height of a desk or crate you can crouch behind
export const DUCT_H = 1.2;          // headroom in a service duct
export const CEIL_H = 3.2;

const DIRS = { N: [0, -1], S: [0, 1], W: [-1, 0], E: [1, 0] };
const LIGHT = {
  white: [0.82, 0.9, 1.0], amber: [1.0, 0.6, 0.24], teal: [0.25, 0.9, 0.78], red: [1.0, 0.14, 0.08],
  violet: [0.72, 0.32, 1.0], cyan: [0.35, 0.78, 1.0], warm: [1.0, 0.84, 0.62],
};

export const CREW_LOGS = [
  ['T. Halvorsen', 'Station chief', 'The drill broke through at 3,912 metres. The water under the ice is warm.'],
  ['M. Adeyemi', 'Drilling', 'Something came up the bore with the core barrel. We logged it as mineral. Then it unfolded.'],
  ['S. Kowalczyk', 'Geology', 'It has no eyes. Those lights are how it tastes the air.'],
  ['J. Brandt', 'Comms', 'Every time it comes close the radios drown in static. That is the only warning you get.'],
  ['R. Imani', 'Medic', 'It heard the centrifuge from two modules away. Walk. Only run once it has already seen you.'],
  ['D. Castellanos', 'Power', 'It cannot fit the service ducts. It knows where they come out, though.'],
  ['A. Lindqvist', 'Biology', 'The third time I hid in a locker it did not walk past. It learns.'],
  ['E. Okonkwo', 'Logistics', 'I threw a sounder to pull it off the door. Worked twice. The third time it came looking for whoever threw it.'],
  ['K. Varga', 'Hydroponics', 'It waits. It stood in the dark by the racks for an hour with its lights out.'],
  ['N. Petrov', 'Engineering', 'A lamp makes you easy to find. Switch yours off when you hear the tapping.'],
  ['H. Nakamura', 'Drill control', 'When one of us goes down it does not always finish the job. It watches to see who comes.'],
  ['T. Halvorsen', 'Station chief', 'Quarantine lock is on the lift. Eight tags will override it. I am sorry.'],
];

export function buildLevel() {
  const cells = new Uint8Array(W * H);
  const ceil = new Float32Array(W * H).fill(CEIL_H);
  const ice = new Uint8Array(W * H);
  const roomId = new Int16Array(W * H).fill(-1);
  const propKind = new Array(W * H).fill('');
  const rooms = [], doors = [], lockers = [], lights = [], tagSpots = [], itemSpots = [], spawns = [], creatureSpawns = [];
  const idx = (x, z) => z * W + x;

  function R(name, x0, z0, x1, z1, o = {}) {
    const id = rooms.length;
    rooms.push({ id, name, x0, z0, x1, z1, kind: o.kind || 'room', ice: !!o.ice });
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
    doors.push({ id: doors.length, cells: cs, gate: !!o.gate, open0: o.open ? 1 : 0, room: o.room || '' });
  }
  const duct = (...list) => list.forEach(([x, z]) => { cells[idx(x, z)] = C.DUCT; ceil[idx(x, z)] = DUCT_H; });
  const locker = (x, z, d) => { cells[idx(x, z)] = C.LOCKER; lockers.push({ id: lockers.length, cx: x, cz: z, dir: d, ax: x + DIRS[d][0], az: z + DIRS[d][1] }); };
  const light = (x, z, col, I, o = {}) => lights.push({
    x: (x + 0.5) * T, z: (z + 0.5) * T, y: o.y !== undefined ? o.y : -1,      // y -1: hang it just under the ceiling
    r: LIGHT[col][0], g: LIGHT[col][1], b: LIGHT[col][2], I, flicker: o.flicker ? 1 : 0, kind: o.kind || 'ceil', cx: x, cz: z,
  });
  const tag = (x, z) => tagSpots.push({ cx: x, cz: z });
  const item = (x, z) => itemSpots.push({ cx: x, cz: z });

  // ------------------------------------------------------------------ the hub and the ring around it
  R('Borehole', 29, 19, 40, 30, { ceil: 9 });
  fill(32, 22, 37, 27, C.PIT);
  R('Ring North', 22, 12, 47, 13, { kind: 'hall' });
  R('Ring South', 22, 36, 47, 37, { kind: 'hall' });
  R('Ring West', 22, 14, 23, 35, { kind: 'hall' });
  R('Ring East', 46, 14, 47, 35, { kind: 'hall' });
  R('North Spoke', 34, 14, 35, 18, { kind: 'hall' });
  R('South Spoke', 34, 31, 35, 35, { kind: 'hall' });
  R('West Spoke', 24, 24, 28, 25, { kind: 'hall' });
  R('East Spoke', 41, 24, 45, 25, { kind: 'hall' });

  // rooms between the ring and the hub
  R('Pump Room', 25, 15, 32, 17); door([[28, 14]]); door([[33, 16]]);
  R('Sample Store', 37, 15, 44, 17); door([[36, 16]]); door([[45, 16]]);
  R('Suit Lockers', 25, 32, 32, 34); door([[28, 35]]); door([[33, 33]]);
  R('Workshop', 37, 32, 44, 34); door([[36, 33]]); door([[41, 35]]);
  R('Battery Closet', 25, 19, 27, 22); door([[24, 20]]); duct([28, 21]);
  R('Filter Room', 25, 27, 27, 30); door([[24, 28]]); duct([26, 31]);
  R('Sensor Bay', 42, 19, 44, 22); door([[45, 20]]);
  R('Coolant Closet', 42, 27, 44, 30); door([[45, 28]]); duct([41, 29]);

  // ------------------------------------------------------------------ west: dock, comms, quarters
  R('Dock', 5, 20, 17, 29, { ceil: 4.6 });
  fill(5, 22, 8, 22, C.SOLID); fill(5, 27, 8, 27, C.SOLID);
  fill(5, 23, 8, 26, C.LIFT); for (let z = 23; z <= 26; z++) for (let x = 5; x <= 8; x++) ceil[idx(x, z)] = 18;
  door([[9, 23], [9, 24], [9, 25], [9, 26]], { gate: true });
  door([[18, 24], [18, 25]]); R('Dock Corridor', 19, 24, 21, 25, { kind: 'hall' });
  door([[10, 19]]); R('Comms Passage', 10, 13, 10, 18, { kind: 'hall' });
  door([[10, 30]]); R('Quarters Passage', 10, 31, 10, 40, { kind: 'hall' });

  R('Comms', 6, 5, 15, 11);
  door([[10, 12]]); door([[16, 8]]); door([[5, 8]]);
  R('North Corridor', 17, 8, 25, 9, { kind: 'hall' }); R('North Link', 22, 10, 23, 11, { kind: 'hall' });

  R('Quarters Hall', 5, 41, 21, 42, { kind: 'hall' }); R('Quarters Link', 22, 38, 23, 42, { kind: 'hall' });
  R('Cabin A', 5, 37, 8, 39); door([[6, 40]]);
  R('Cabin B', 12, 37, 15, 39); door([[13, 40]]);
  R('Cabin C', 17, 37, 20, 39); door([[18, 40]]); duct([16, 38]);
  R('Cabin D', 5, 44, 7, 46); door([[6, 43]]);
  R('Cabin E', 9, 44, 11, 46); door([[10, 43]]);
  R('Cabin F', 13, 44, 15, 46); door([[14, 43]]);
  R('Washroom', 17, 44, 21, 46); door([[19, 43]]);

  // the west tunnel, cut through the ice from Comms round to the Quarters
  R('West Tunnel', 2, 8, 3, 19, { kind: 'tunnel', ice: true, ceil: 2.9 });
  R('West Tunnel', 1, 19, 2, 31, { kind: 'tunnel', ice: true, ceil: 2.9 });
  R('West Tunnel', 2, 31, 3, 42, { kind: 'tunnel', ice: true, ceil: 2.9 });
  R('West Tunnel', 4, 8, 4, 8, { kind: 'tunnel', ice: true, ceil: 2.9 });
  door([[4, 41], [4, 42]]);

  // ------------------------------------------------------------------ north: hydroponics and the lab
  R('Hydroponics', 27, 3, 42, 9, { ceil: 3.6 });
  door([[34, 10], [35, 10]]); R('Hydro Link', 34, 11, 35, 11, { kind: 'hall' });
  door([[26, 8]]);
  door([[43, 6], [43, 7]]); R('Lab Corridor', 44, 6, 49, 7, { kind: 'hall' }); door([[50, 6], [50, 7]]);
  R('Core Lab', 51, 3, 64, 12);
  door([[57, 13]]); R('Lab Passage', 57, 14, 57, 15, { kind: 'hall' });
  duct([61, 13], [61, 14], [61, 15]);

  // ------------------------------------------------------------------ east: drill control, generators, the east tunnel
  R('East Corridor', 48, 16, 66, 17, { kind: 'hall' });
  R('Drill Control', 50, 21, 59, 28);
  door([[49, 24]]); R('Drill Control', 48, 24, 48, 24, { kind: 'hall' });
  door([[54, 20]]); R('Drill Control', 54, 18, 54, 19, { kind: 'hall' });
  duct([55, 29], [55, 30], [55, 31], [55, 32]);
  R('Generator Hall', 50, 33, 63, 42, { ceil: 5 });
  door([[49, 36]]); R('Generator Hall', 48, 36, 48, 36, { kind: 'hall' });
  door([[49, 42]]); R('Service Passage', 47, 42, 48, 42, { kind: 'hall' });
  R('East Tunnel', 65, 18, 66, 25, { kind: 'tunnel', ice: true, ceil: 2.9 });
  R('East Tunnel', 66, 25, 67, 32, { kind: 'tunnel', ice: true, ceil: 2.9 });
  R('East Tunnel', 65, 32, 66, 39, { kind: 'tunnel', ice: true, ceil: 2.9 });
  door([[64, 38]]);

  // ------------------------------------------------------------------ south: mess and med bay
  R('Mess', 25, 40, 35, 45); door([[30, 39]]); R('Mess', 30, 38, 30, 38, { kind: 'hall' }); door([[24, 42]]);
  R('Med Bay', 38, 40, 45, 45); door([[42, 39]]); R('Med Bay', 42, 38, 42, 38, { kind: 'hall' }); door([[46, 42]]);
  duct([36, 43], [37, 43]);

  // ------------------------------------------------------------------ fittings, room by room
  // Dock
  low(9, 22, 9, 22, 'liftconsole'); low(9, 27, 9, 27, 'crate');
  tall(16, 20, 17, 20, 'crate'); tall(17, 21, 17, 21, 'crate'); low(15, 28, 16, 28, 'crate'); low(11, 20, 12, 20, 'crate'); tall(16, 29, 17, 29, 'crate');
  locker(13, 19, 'S'); locker(14, 19, 'S'); locker(14, 30, 'N');
  for (const [x, z] of [[12, 23], [14, 23], [12, 25], [14, 25], [12, 27], [14, 27]]) spawns.push({ cx: x, cz: z });
  light(13, 22, 'white', 3.2); light(13, 27, 'white', 2.6); light(10, 25, 'amber', 1.6, { kind: 'beacon' }); light(6, 24, 'amber', 0.9, { y: 6, kind: 'bare' });
  // Comms and its passages
  low(7, 5, 13, 5, 'console'); low(10, 8, 11, 8, 'desk'); tall(15, 5, 15, 6, 'rack'); tall(15, 10, 15, 11, 'rack'); tall(6, 5, 6, 5, 'rack');
  locker(5, 10, 'E'); locker(13, 12, 'N');
  tag(8, 7); tag(14, 9); item(7, 10);
  light(10, 9, 'white', 2.0, { flicker: true }); light(9, 6, 'cyan', 0.9, { y: 1.2, kind: 'glow' }); light(10, 15, 'amber', 1.0);
  low(19, 9, 19, 9, 'crate'); locker(18, 7, 'S'); light(20, 8, 'teal', 1.1);
  // Hydroponics
  tall(29, 5, 32, 5, 'growrack'); tall(37, 5, 40, 5, 'growrack'); tall(29, 7, 32, 7, 'growrack'); tall(37, 7, 40, 7, 'growrack');
  low(27, 3, 27, 3, 'planter'); low(42, 3, 42, 3, 'planter'); tall(42, 9, 42, 9, 'tank'); low(27, 5, 27, 5, 'planter');
  locker(30, 2, 'S'); locker(39, 2, 'S');
  tag(29, 4); tag(40, 8); item(33, 3);
  light(30, 6, 'violet', 2.4); light(39, 6, 'violet', 2.4); light(34, 4, 'white', 1.0); light(35, 8, 'white', 1.4);
  light(46, 6, 'white', 1.6, { flicker: true }); low(47, 7, 47, 7, 'crate');
  // Core Lab
  tall(57, 7, 58, 8, 'spectank'); low(53, 5, 55, 5, 'bench'); low(60, 5, 62, 5, 'bench'); low(53, 10, 55, 10, 'bench'); low(60, 10, 62, 10, 'bench');
  tall(64, 3, 64, 4, 'freezer'); tall(64, 11, 64, 12, 'freezer'); tall(51, 12, 52, 12, 'freezer'); tall(51, 3, 51, 3, 'freezer');
  locker(54, 2, 'S'); locker(60, 2, 'S'); locker(65, 8, 'W');
  tag(63, 6); tag(52, 10); item(56, 11);
  creatureSpawns.push({ cx: 60, cz: 8 });
  light(54, 7, 'white', 2.4, { flicker: true }); light(61, 8, 'white', 2.0); light(57, 6, 'cyan', 1.3, { y: 1.6, kind: 'glow' });
  // East corridor and tunnel
  low(52, 16, 52, 16, 'crate'); low(60, 17, 60, 17, 'crate'); locker(56, 15, 'S'); locker(62, 18, 'N');
  light(50, 16, 'teal', 1.2); light(58, 17, 'red', 1.1); creatureSpawns.push({ cx: 62, cz: 16 });
  low(66, 21, 66, 21, 'ice'); low(65, 35, 65, 35, 'ice'); tag(67, 28); item(66, 36);
  light(66, 27, 'white', 1.2, { y: 0.6, kind: 'lamp' });
  // Drill Control
  low(52, 23, 57, 23, 'console'); low(52, 26, 53, 26, 'console'); low(56, 26, 57, 26, 'console'); tall(59, 21, 59, 21, 'rack'); tall(59, 28, 59, 28, 'rack'); tall(50, 28, 50, 28, 'rack');
  locker(60, 24, 'W'); locker(60, 25, 'W');
  tag(58, 22); item(51, 27);
  light(54, 25, 'white', 1.5); light(54, 22, 'cyan', 0.9, { y: 1.3, kind: 'glow' });
  // Generator Hall
  tall(52, 35, 54, 36, 'machine'); tall(57, 35, 59, 36, 'machine'); tall(52, 39, 54, 40, 'machine'); tall(57, 39, 59, 40, 'machine');
  low(62, 33, 63, 33, 'pipes'); tall(62, 41, 62, 42, 'tank');
  locker(56, 43, 'N'); locker(60, 32, 'S');
  tag(61, 41); tag(51, 38); item(56, 34);
  creatureSpawns.push({ cx: 60, cz: 37 });
  light(55, 34, 'red', 2.0); light(55, 41, 'red', 2.0); light(61, 38, 'red', 1.6, { flicker: true }); light(51, 34, 'amber', 1.0);
  // Mess
  low(27, 42, 28, 42, 'table'); low(31, 42, 32, 42, 'table'); low(27, 44, 28, 44, 'table'); low(31, 44, 32, 44, 'table');
  low(34, 40, 35, 40, 'counter'); tall(35, 45, 35, 45, 'fridge'); tall(25, 40, 25, 40, 'fridge');
  locker(29, 46, 'N');
  tag(26, 45); item(33, 40);
  light(29, 43, 'warm', 2.2); light(33, 43, 'warm', 1.8, { flicker: true });
  // Med Bay
  low(39, 44, 40, 44, 'bed'); low(43, 44, 44, 44, 'bed'); tall(38, 40, 38, 40, 'cabinet'); tall(45, 40, 45, 40, 'cabinet'); low(40, 41, 40, 41, 'bed');
  locker(37, 41, 'E'); locker(41, 46, 'N');
  tag(44, 41); item(39, 42);
  light(41, 42, 'white', 2.6); light(44, 44, 'white', 1.4, { flicker: true });
  // Workshop
  low(39, 32, 40, 32, 'bench'); tall(44, 32, 44, 32, 'shelf'); tall(44, 34, 44, 34, 'shelf'); low(42, 32, 42, 32, 'bench');
  locker(43, 31, 'S'); tag(43, 33); item(38, 34);
  light(40, 33, 'amber', 1.5);
  // Suit Lockers
  locker(28, 31, 'S'); locker(29, 31, 'S'); locker(30, 31, 'S'); locker(31, 31, 'S');
  low(29, 33, 30, 33, 'bench'); item(25, 34);
  light(30, 33, 'white', 1.3);
  // Pump Room
  tall(26, 15, 27, 15, 'machine'); tall(30, 17, 31, 17, 'machine');
  locker(26, 18, 'N'); tag(25, 17);
  light(29, 16, 'amber', 1.3);
  // Sample Store
  tall(39, 15, 41, 15, 'shelf'); tall(39, 17, 40, 17, 'shelf');
  locker(42, 18, 'N'); tag(43, 15); item(38, 17);
  light(42, 16, 'white', 1.4, { flicker: true });
  // closets
  tall(25, 22, 25, 22, 'rack'); tall(27, 19, 27, 19, 'rack'); tag(26, 22);
  tall(27, 27, 27, 27, 'tank'); tag(27, 30);
  low(43, 19, 44, 19, 'console'); item(42, 22); light(43, 20, 'cyan', 0.8, { y: 1.3, kind: 'glow' });
  tall(43, 30, 44, 30, 'tank'); tag(43, 27);
  // Borehole
  low(29, 19, 30, 19, 'crate'); tall(40, 30, 40, 30, 'crate'); low(39, 19, 39, 19, 'crate'); low(29, 30, 29, 30, 'crate'); low(31, 28, 31, 28, 'crate');
  locker(31, 18, 'S'); locker(38, 31, 'N');
  tag(39, 27);
  light(30, 21, 'amber', 1.7, { y: 3.0 }); light(39, 21, 'amber', 1.4, { y: 3.0, flicker: true }); light(30, 28, 'amber', 1.4, { y: 3.0 }); light(39, 28, 'amber', 1.7, { y: 3.0 });
  light(34, 24, 'teal', 5.0, { y: -5, kind: 'bare' });
  // Ring corridors
  low(26, 13, 26, 13, 'crate'); low(40, 12, 40, 12, 'crate'); locker(29, 11, 'S'); locker(41, 11, 'S');
  light(25, 12, 'teal', 1.0); light(38, 13, 'teal', 1.0); light(44, 12, 'white', 1.2, { flicker: true });
  low(27, 36, 27, 36, 'crate'); low(44, 37, 44, 37, 'crate'); locker(33, 38, 'N'); locker(45, 38, 'N');
  light(25, 37, 'teal', 1.0); light(38, 36, 'teal', 1.0); light(32, 37, 'amber', 0.8);
  low(23, 17, 23, 17, 'crate'); low(22, 31, 22, 31, 'crate'); locker(21, 15, 'E'); locker(21, 33, 'E');
  light(22, 19, 'teal', 1.0); light(23, 29, 'teal', 1.0); light(22, 35, 'white', 1.2, { flicker: true });
  low(47, 20, 47, 20, 'crate'); low(46, 31, 46, 31, 'crate'); locker(48, 13, 'W'); locker(48, 31, 'W');
  light(47, 15, 'teal', 1.0); light(46, 22, 'teal', 1.0); light(47, 30, 'red', 1.0);
  light(34, 16, 'white', 1.1); light(35, 33, 'white', 1.1); light(26, 24, 'teal', 0.8); light(43, 25, 'teal', 0.8);
  light(20, 24, 'white', 1.3);
  // Quarters
  low(5, 37, 5, 37, 'bunk'); low(8, 37, 8, 37, 'bunk'); tall(8, 39, 8, 39, 'cabinet'); tag(5, 39);
  low(12, 37, 12, 37, 'bunk'); low(15, 37, 15, 37, 'bunk'); item(14, 37);
  low(20, 37, 20, 37, 'bunk'); low(18, 37, 18, 37, 'bunk'); tag(20, 39);
  low(5, 46, 5, 46, 'bunk'); low(7, 46, 7, 46, 'bunk'); locker(4, 45, 'E');
  low(9, 46, 9, 46, 'bunk'); low(11, 46, 11, 46, 'bunk'); tag(10, 46);
  low(13, 46, 13, 46, 'bunk'); locker(16, 45, 'W');
  tall(17, 46, 17, 46, 'stall'); tall(19, 46, 19, 46, 'stall'); tall(21, 46, 21, 46, 'stall'); item(21, 44);
  locker(16, 40, 'S'); low(20, 41, 20, 41, 'crate');
  light(8, 41, 'warm', 1.4); light(15, 42, 'warm', 1.2, { flicker: true }); light(10, 35, 'amber', 0.9); light(6, 38, 'warm', 1.0); light(19, 45, 'white', 1.5); light(10, 45, 'warm', 0.8);
  // West tunnel
  low(3, 13, 3, 13, 'ice'); low(1, 25, 1, 25, 'ice'); low(3, 36, 3, 36, 'ice'); tag(1, 22); item(2, 29);
  light(2, 15, 'white', 1.1, { y: 0.6, kind: 'lamp' }); light(2, 34, 'white', 1.1, { y: 0.6, kind: 'lamp' });

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

  const liftCells = []; for (let i = 0; i < W * H; i++) if (cells[i] === C.LIFT) liftCells.push(i);
  const gate = doors.find(d => d.gate);
  const lift = { cells: liftCells, gateId: gate.id, x: 7 * T, z: 25 * T, console: { cx: 9, cz: 22, x: 9.5 * T, z: 22.5 * T } };

  for (const l of lights) if (l.y < 0) l.y = l.y === -1 ? ceil[idx(l.cx, l.cz)] - 0.25 : l.y;

  const L = {
    T, W, H, cells, ceil, ice, roomId, rooms, propKind, doors, doorAt, lockers, lockerAt, ducts, ductOf, lights, tagSpots, itemSpots, spawns, creatureSpawns, lift,
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

// Light arriving at a point with a given facing. Returns [r, g, b, flickerR, flickerG, flickerB]: steady light and the share from failing fixtures.
export function lightAt(L, x, y, z, nx, ny, nz) {
  const out = [0, 0, 0, 0, 0, 0];
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
  if (tagSpots.length < 12) bad.push('too few tag spots');
  return bad;
}

export function printLevel(L) {
  const ch = { [C.SOLID]: '#', [C.FLOOR]: '.', [C.DUCT]: 'v', [C.PIT]: ' ', [C.TALL]: 'T', [C.LOW]: 'c', [C.LOCKER]: 'L', [C.LIFT]: 'X' };
  const rows = [];
  for (let z = 0; z < H; z++) {
    let s = '';
    for (let x = 0; x < W; x++) {
      const i = L.idx(x, z); let c = ch[L.cells[i]];
      if (L.doorAt[i] >= 0) c = L.doors[L.doorAt[i]].gate ? 'G' : 'D';
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
