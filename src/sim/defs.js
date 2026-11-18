// Names for the numbers that travel between the host and the other players.
export const ST = { ALIVE: 0, DOWN: 1, DEAD: 2, OUT: 3 };                 // a player: on their feet, down, dead, or out on the lift
export const PH = { LOBBY: 0, PLAY: 1, END: 2 };                          // the match
export const LIFT = { LOCKED: 0, READY: 1, CALLED: 2, ARRIVED: 3, LEFT: 4 };
export const CS = { IDLE: 0, ROAM: 1, SUSPECT: 2, INVEST: 3, HUNT: 4, SEARCH: 5, ATTACK: 6, AMBUSH: 7, BAIT: 8, LOCKER: 9 };   // what the creature is doing
export const CS_NAME = ['idle', 'roam', 'suspect', 'investigate', 'hunt', 'search', 'attack', 'ambush', 'bait', 'locker'];
// bits of a player's flags
export const F = { CROUCH: 1, LIGHT: 2, RUN: 4, SCAN: 8, MOVE: 16 };

// How this match's creature differs from the last one. Nobody is told which they got until the match is over.
// Anything not listed is 1 for a multiplier and 0 for an offset (see Creature.reset).
export const TRAITS = [
  { key: 'prowler', name: 'The Prowler', line: 'No strong habits this time. It patrolled, listened and looked in equal measure.' },
  { key: 'listener', name: 'The Listener', hear: 1.3, sight: 0.8, line: 'It heard about a third further than usual and saw less. Quiet feet mattered more than dark corners.' },
  { key: 'watcher', name: 'The Watcher', hear: 0.78, sight: 1.25, cone: 0.05, line: 'Sharp-eyed and hard of hearing. It saw further and wider, and missed sounds it would normally have come for.' },
  { key: 'stalker', name: 'The Stalker', ambush: 2.6, roam: 0.9, chase: -0.3, line: 'It spent much of the match standing in the dark with its lights out, waiting to be walked into. It was slower in a chase.' },
  { key: 'runner', name: 'The Runner', chase: 0.55, corner: 0.2, search: 0.75, line: 'Faster in a straight line than usual and clumsier round corners. It gave up a search sooner.' },
  { key: 'warden', name: 'The Warden', hide0: 0.5, guard: 0.6, search: 1.25, line: 'It opened lockers from the very start, searched for longer, and kept close to the tags.' },
];
// power on each of the five circuits (see ZONES in level.js)
export const PWR = { DEAD: 0, FAILING: 1, ON: 2 };
