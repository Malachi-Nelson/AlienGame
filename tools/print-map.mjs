// Prints the outpost as text, and lists anything wrong with it.
import { buildLevel, validateLevel, printLevel } from '../src/level.js';
const L = buildLevel();
console.log(printLevel(L));
const bad = validateLevel(L);
console.log(bad.length ? 'PROBLEMS:\n' + bad.join('\n') : 'map is sound');
console.log(`${L.rooms.length} room rects, ${L.doors.length} doors, ${L.lockers.length} lockers, ${L.ducts.length} ducts, ${L.tagSpots.length} tag spots, ${L.itemSpots.length} item spots, ${L.lights.length} lights, ${L.pois.length} patrol points`);
