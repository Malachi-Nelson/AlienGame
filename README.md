# Loss of Signal

**Play it: <https://malachi-nelson.github.io/AlienGame/>**

An online co-op survival horror game for the browser. Outpost Ymir, a drilling station under the ice of a frozen
moon, stopped answering nineteen days ago. You are the relief crew, one to six of you. The lift back to the surface is
under quarantine lock and eight crew tags will override it. Something that came up the borehole is still down
there, and it hunts by sound.

Everything in the game is original and made in code: the setting, the creature, the textures and every sound.
There are no image or audio files in this repository.

## How to play

| Key | What it does |
| --- | --- |
| W A S D | Move |
| Shift | Run. Fast, loud, and you run out of breath. |
| C | Crouch. Slow and nearly silent. You need to crouch to use the service ducts. |
| E | Use: doors, lockers, tags, sounders, the lift panel. Hold it beside a downed crewmate to pick them up. |
| F | Lamp. You see more. So does it. |
| Q or right click | Tag scanner. Points at the nearest tag, and pings while it does. |
| G or left click | Throw a sounder, a noise-maker that draws the creature away. |
| Tab | The outpost schematic |
| Esc | Free the mouse, pause |

Find the eight tags, go back to the Dock, call the lift, survive until it arrives, and get on.

Things worth knowing:

- **Signal** (top right) is your suit link. It drops as the creature gets closer, and the picture breaks up with it.
  You also hear it coming: every footfall is a tap.
- **Seen** (bottom left) fills while it is working out whether it has noticed you. Dark corners, crouching and
  standing still all slow that down. A lit lamp speeds it up a lot.
- Its lanterns show its mood: teal when it is wandering, amber when something has its attention, red when it is
  hunting. Sometimes it puts them out and waits.
- It cannot fit in the service ducts. It can reach a little way in, and it knows where they come out.
- Playing alone, the first time it brings you down you get back up. There is no second time.

## Co-op

1. Everyone opens the page. The line under the buttons turns green and says "Online".
2. One player presses **Open a crew**. The others press **Join a crew**, then **Ready**.
3. The crew leader presses **Start the descent**.

Everyone on the plain link shares one public room. **Make a private room** gives you a link with a code for just
your group. Someone who arrives late can join a match that is already under way.

Each player's browser posts to a few free public MQTT relays, which pass the messages on to the others in the room.
There is no game server and nothing connects browser to browser. The crew leader's browser runs the creature; if
the leader leaves, another player's browser takes over and the match carries on.

## The creature

It runs in `src/sim/creature.js` and nothing it does is scripted.

- **Senses.** Sight is a cone, shorter in the dark, blocked by walls, doors and anything you crouch behind. Every
  sound in the game has a reach, and walls and shut doors cut it down.
- **Memory.** When it loses someone it keeps a map of where they could have got to by now, lets that spread along
  the corridors as time passes, wipes it wherever it looks, and walks to wherever the map is densest for the least
  walking. Lockers and ducts keep their share of the doubt, because it cannot see into them.
- **Learning.** It keeps count of how often people turn out to have been in lockers and opens more of them as the
  match goes on. After finding nothing at a sounder a couple of times it starts looking for whoever threw it
  instead. When it brings someone down with others still about, it will sometimes step out of sight, put its
  lights out, and wait for the rescue.
- **Pacing.** A director keeps track of how hard the crew has been pressed. After a long hunt it calls the
  creature off for a while; when things have been quiet too long it leans it back towards you.

## Run it yourself

Needs Node 20 or newer.

```sh
npm install
npm test                 # the simulation tests: the map, the rules, each of the creature's habits
npm run build            # writes dist/index.html, dist/game.js and dist/mqtt.min.js
npm run dev              # the same, served on http://localhost:8123 and rebuilt when a file changes
npm run map              # prints the outpost as text and checks it
node tools/soak.mjs 3 6  # plays six whole matches with three stand-in players and prints what the creature did
```

Two checks drive the built page in a headless browser. They need Playwright, Chrome and a local stand-in for the
relays, none of which are in `package.json`:

```sh
npm i --no-save playwright-core aedes ws
node tools/check-solo.mjs     # one player: walking, doors, a tag, a locker, meeting the creature, the lift
node tools/check-coop.mjs     # three players: lobby, a match, going down, the leader leaving mid-match
node tools/check-audio.mjs    # renders every sound offline and prints how loud each one comes out
```

## How the page gets published

Every push to `main` runs the tests, builds the page and puts `dist/` on the `gh-pages` branch
(`.github/workflows/ci.yml`). GitHub Pages serves that branch at the address above.

If a change alters what players send each other, build with a new protocol name (`PROTO=v2 npm run build`, and set
the same in the workflow) so that old tabs and new ones do not end up in the same room.

## Layout

```
src/level.js          the outpost: every room, door, locker, duct and light, as data
src/nav.js            sight lines, path finding, collision
src/sim/              the match as the host runs it: world.js (rules), creature.js (the AI)
src/net/              relay.js (the public relays), session.js (host, client, taking over as host)
src/client/           what you see and hear: scene, creature model, other players, sound, HUD, the local player
src/main.js           ties it together
test/                 node:test suites
tools/                build, map printer, soak, headless checks
vendor/mqtt.min.js    MQTT.js 4.3.7 (MIT licence), used by the relay
```

three.js (MIT licence) is bundled into `dist/game.js` at build time.

To change the map, edit `src/level.js` and run `npm run map` to see it and check it. To change how the game
plays, most of the numbers are in `src/config.js`.
