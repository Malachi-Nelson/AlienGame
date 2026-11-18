// Names for the numbers that travel between the host and the other players.
export const ST = { ALIVE: 0, DOWN: 1, DEAD: 2, OUT: 3 };                 // a player: on their feet, down, dead, or out on the lift
export const PH = { LOBBY: 0, PLAY: 1, END: 2 };                          // the match
export const LIFT = { LOCKED: 0, READY: 1, CALLED: 2, ARRIVED: 3, LEFT: 4 };
export const CS = { IDLE: 0, ROAM: 1, SUSPECT: 2, INVEST: 3, HUNT: 4, SEARCH: 5, ATTACK: 6, AMBUSH: 7, BAIT: 8, LOCKER: 9 };   // what the creature is doing
export const CS_NAME = ['idle', 'roam', 'suspect', 'investigate', 'hunt', 'search', 'attack', 'ambush', 'bait', 'locker'];
// bits of a player's flags
export const F = { CROUCH: 1, LIGHT: 2, RUN: 4, SCAN: 8, MOVE: 16 };
