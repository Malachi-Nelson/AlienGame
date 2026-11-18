// Plays whole matches with stand-in players and prints what the creature did. For tuning, not a test.
//   node tools/soak.mjs [players=2] [seeds=4] [verbose=0]
import { buildLevel, C } from '../src/level.js';
import { World } from '../src/sim/world.js';
import { ST, PH, LIFT, CS, CS_NAME } from '../src/sim/defs.js';
import { Bot, run } from '../test/helpers.js';

const L = buildLevel();
const nPlayers = +(process.argv[2] || 2), nSeeds = +(process.argv[3] || 4), verbose = +(process.argv[4] || 0);
const summary = [];
for (let seed = 1; seed <= nSeeds; seed++) {
  const w = new World(L, seed * 13), bots = [];
  for (let i = 0; i < nPlayers; i++) { const b = new Bot(w, 'p' + i, 'P' + i); b.mode = 'seek'; b.hideT = 0; b.goal = -1; bots.push(b); }
  w.startMatch(seed * 1009);
  const c = w.creature; let last = -1, stateTime = new Array(10).fill(0), log = [];
  const nearest = () => Math.min(...bots.filter(b => b.p.status === ST.ALIVE).map(b => Math.hypot(b.x - c.x, b.z - c.z)), 999);
  const t = run(w, bots, 1500, (t, dt) => {
    stateTime[c.state] += dt;
    if (c.state !== last) { log.push(`${t.toFixed(0).padStart(4)}s ${CS_NAME[c.state].padEnd(11)} near=${nearest().toFixed(0).padStart(3)}m room=${L.roomName(c.x, c.z)}`); last = c.state; }
    for (const b of bots) {
      const p = b.p; if (p.status !== ST.ALIVE) { b.lk = -1; continue; }
      const d = Math.hypot(b.x - c.x, b.z - c.z);
      const scared = p.aware > 0.5 || (d < 12 && (c.state === CS.HUNT || c.state === CS.SEARCH));
      if (b.mode === 'hide') {
        if (b.lk < 0 && b.arrived) { b.lk = b.locker; }
        if (b.lk >= 0) { b.hideT -= dt; if (b.hideT <= 0 && d > 14 && c.state !== CS.HUNT) { b.lk = -1; b.mode = 'seek'; b.goal = -1; } }
        continue;
      }
      if (scared && b.mode !== 'hide') {
        // nearest locker by straight line that is not towards the creature
        let best = null, bd = 1e9; for (const k of L.lockers) { const dk = Math.hypot(k.x - b.x, k.z - b.z), dc = Math.hypot(k.x - c.x, k.z - c.z); if (dc > dk && dk < bd) { bd = dk; best = k; } }
        if (best && bd < 30 && b.goTo(best.access)) { b.mode = 'hide'; b.locker = best.id; b.hideT = 20; b.speed = 5; b.crouch = false; continue; }
        b.speed = 5;
      } else b.speed = 2.6;
      // revive a mate first
      const mate = bots.find(o => o !== b && o.p.status === ST.DOWN);
      if (mate && d > 10) { const md = Math.hypot(mate.p.x - b.x, mate.p.z - b.z); if (md < 2) { b.rv = mate.p.slot; b.path = null; continue; } b.rv = -1; if (b.goal !== -2 || b.arrived) { b.goTo(L.cellOf(mate.p.x, mate.p.z)); b.goal = -2; } continue; }
      b.rv = -1;
      if (w.lift.state === LIFT.LOCKED) {
        if (b.goal < 0 || w.tags[b.goal].taken || b.arrived) {
          if (b.goal >= 0 && !w.tags[b.goal].taken && Math.hypot(w.tags[b.goal].x - b.x, w.tags[b.goal].z - b.z) < 2.5) b.act('T', b.goal);
          let best = -1, bd = 1e9; w.tags.forEach((tg, i) => { if (tg.taken) return; const dd = Math.hypot(tg.x - b.x, tg.z - b.z) + (bots.some(o => o !== b && o.goal === i) ? 40 : 0); if (dd < bd) { bd = dd; best = i; } });
          if (best >= 0) { b.goal = best; b.goTo(w.tags[best].cell); }
        }
      } else if (w.lift.state === LIFT.READY) { if (b.arrived) { if (Math.hypot(L.lift.console.x - b.x, L.lift.console.z - b.z) < 4) b.act('L'); else b.goToXZ(10, 22); } }
      else if (w.lift.state === LIFT.CALLED) { if (b.arrived) b.goToXZ(12 + (b.p.slot % 3), 21 + (b.p.slot % 2) * 7); }
      else if (w.lift.state === LIFT.ARRIVED) { if (b.arrived && L.cells[L.cellOf(b.x, b.z)] !== C.LIFT) b.goToXZ(6 + b.p.slot % 2, 24 + (b.p.slot >> 1) % 2); }
    }
    return w.phase === PH.PLAY;
  });
  const tot = stateTime.reduce((a, b) => a + b, 0);
  summary.push(`seed ${seed}: ${w.result ? (w.result.win ? 'ESCAPED' : 'wiped  ') : 'timeout'} at ${t.toFixed(0)}s, tags ${w.tagsTaken}/8, hunts ${c.stats.hunts}, catches ${c.stats.catches}, locker checks ${c.stats.lockerChecks} (found ${c.stats.lockerFinds}), learn hide=${c.learn.hide.toFixed(2)} decoy=${c.learn.decoy.toFixed(2)} | ` + stateTime.map((v, i) => v > 0 ? `${CS_NAME[i]} ${(v / tot * 100).toFixed(0)}%` : '').filter(Boolean).join(' '));
  if (verbose) console.log(`--- seed ${seed}\n` + log.join('\n'));
}
console.log(summary.join('\n'));
