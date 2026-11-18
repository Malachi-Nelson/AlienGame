// Every number that shapes how the game plays, in one place.
export const CFG = {
  PROTO: typeof __PROTO__ === 'string' ? __PROTO__ : 'v4',     // set at build time; change it when players' messages change shape, so old and new tabs do not meet
  MAX_PLAYERS: 6,
  TAGS: 4,                   // crew tags to find in the cargo hold
  ITEMS: 7,                  // sounders lying around the ship
  START_SOUNDERS: 1,
  MAX_SOUNDERS: 3,
  WAKE: 18,                  // seconds of quiet before the creature starts to move

  player: { r: 0.32, eye: 1.62, eyeCrouch: 0.9, walk: 2.6, run: 5.1, crouch: 1.35, stamina: 100, drain: 17, regen: 12, regenDelay: 1.2 },
  // how far each sound carries, in metres, before walls and doors muffle it
  noise: { run: 15, walk: 6.5, crouch: 1.6, door: 9, locker: 5, tag: 8, scan: 10, decoy: 30, revive: 11, klaxon: 80, breath: 3.6, gasp: 8, breaker: 18, work: 9, pump: 20, bulkhead: 45 },
  breath: { hold: 10, recover: 5, gasp: 2.5 },       // shut in a locker: seconds of air, seconds to get it all back, and how long a gasp leaves you unable to hold it again
  boost: 80,                 // seconds of power a breaker gives a deck that is otherwise dead or failing
  down: { bleed: 50, revive: 4, reach: 2.6, invuln: 3.5 },
  lift: { call: 45, board: 15 },       // the escape pod: seconds from priming it to the hatch opening, and how long it waits for the crew
  // seconds of holding use at each kind of station
  station: { pump: 5, lever: 1.5, terminal: 7, uplink: 5 },
  reach: 2.4,                // how close you must be to use something
  creature: {
    r: 0.5, eye: 2.0, roam: 2.0, chase: 4.7, chaseGain: 1.1,    // chase speed grows with every tag recovered
    sight: 18, sightLamp: 30, catchDist: 1.55, hitDist: 2.1,
    vent: 3.6, climb: 0.8, drop: 0.75,      // how fast it crawls through the vents, and how long getting in and dropping out take
  },
  net: { hz: 10, stale: 8000, interp: 160 },
};
