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

Those are the keys it starts with. **Controls**, on the title card and the pause card, lets you change every one of
them, give an action a second key or a mouse button, turn the view upside down, and switch crouch to hold.

### On a phone or tablet

Open the same link and turn the phone sideways. The left thumb moves, the right thumb looks, and the buttons do the
rest: USE, RUN, CROUCH, THROW, LAMP, SCAN (tap on, tap off) and MAP (hold). **Controls → Move and resize the touch buttons** lets
you drag each button where you want it, resize them, fade them, swap the sides and change how fast the view turns.
If the touch buttons do not come up by themselves, Controls has an On switch for them.

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
- The lights stutter when it is within about fourteen metres, and your own lamp catches when it is closer still.

## No two matches are alike

Each match is laid out from one random number, which every player's browser works out the same way.

- **Tags and sounders.** Eight of twenty-three possible tag spots, and five to nine sounders lying about.
- **Sealed doors.** Three to six doors are welded shut, barred across and showing a red lamp. The schematic marks them
  in red. Nothing is ever cut off, but the way you went last time may not be there.
- **Power.** The outpost has five circuits: the west wing, the ring, the south wing, the north wing and the east wing.
  Most matches one of them is dead or failing, sometimes two. A dead wing is dark apart from screens and indicator
  lamps. The dark hides you from the creature unless your lamp is on. The schematic shades a wing with no power.
- **The creature.** There are six kinds and you are not told which one you have until the match is over. One hears
  further and sees less, one is the other way round, one waits in the dark far more, one is faster in a straight line
  and worse at corners, one opens lockers from the start and guards the tags. The end card says which it was.
- **Timing.** How long it sleeps before it starts to move, and how long the lift takes to arrive, both change.

Things also go wrong while you are in there, at no fixed time:

- **A circuit trips**, usually the one someone is standing in, and comes back by itself half a minute later.
- **A blackout** takes every circuit for a quarter of a minute.
- **A door fault** opens or shuts a few doors near someone. The creature does not come for the noise.
- **The borehole shifts.** For about seven seconds the rumble covers everything and the creature hears half as far.
  That is the time to run.

## Scares

- When it catches you the view is taken from you for a second and turned to face it.
- Now and then someone in a suit is standing at the far end of a corridor. Look straight at them, or walk up, and
  they are gone. Only you see them.
- The suit radio picks up fragments of whoever is still transmitting.
- The outpost knocks, cracks and groans, and occasionally something happens close by: a locker is struck from
  inside, something scuttles off down a duct, a light tube gives out overhead.

None of this ever looks or sounds like the creature. The tapping is always its feet and the static is always how
close it is. **Sudden scares and stuttering lights**, on the title card and the pause card, switches off the figures,
the close-by noises and the flash when you are caught, and makes lights go down and come up smoothly instead of
stuttering. Switch it off if flashing light is a problem for you. The creature is just as dangerous with it off.

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
npm test                 # the simulation tests: the map, the rules, the match set-up, each of the creature's habits
npm run build            # writes dist/index.html, dist/game.js and dist/mqtt.min.js
npm run dev              # the same, served on http://localhost:8123 and rebuilt when a file changes
npm run map              # prints the outpost as text and checks it
node tools/soak.mjs 3 6  # plays six whole matches with three stand-in players and prints what the creature did
PLAIN=1 node tools/soak.mjs 3 6   # the same in plain matches: nothing sealed, all power on, the ordinary creature
```

A few checks drive the built page in a headless browser. They need Playwright, Chrome and a local stand-in for the
relays, none of which are in `package.json`. Apart from the two that say otherwise they play plain matches (`?plain` on
the address: nothing sealed, all power on, no incidents), so that they can rely on the map:

```sh
npm i --no-save playwright-core aedes ws
node tools/check-solo.mjs     # one player: walking, doors, a tag, a locker, meeting the creature, the lift
node tools/check-coop.mjs     # three players: lobby, a match, going down, the leader leaving mid-match
node tools/check-touch.mjs    # a phone-sized touch screen: the stick, the buttons, arranging them; and rebinding keys
node tools/check-scares.mjs   # a varied match: sealed doors, power going and coming back, a figure, being caught
node tools/check-coop-varied.mjs   # two players in a varied match: same set-up for both, and the second player's side of it
node tools/check-audio.mjs    # renders every sound offline and prints how loud each one comes out
```

## How the page gets published

Every push to `main` runs the tests, builds the page and puts `dist/` on the `gh-pages` branch
(`.github/workflows/ci.yml`). GitHub Pages serves that branch at the address above.

If a change alters what players send each other, or how a match is laid out from its seed, change the protocol name
(`v2` at present, in `src/config.js` and `tools/build.mjs`) so that old tabs and new ones do not end up in the same room.

## Layout

```
src/level.js          the outpost: every room, door, locker, duct and light, as data
src/nav.js            sight lines, path finding, collision
src/sim/              the match as the host runs it: world.js (rules, what differs from match to match, incidents),
                      creature.js (the AI), defs.js (shared names, the six kinds of creature)
src/net/              relay.js (the public relays), session.js (host, client, taking over as host)
src/client/           what you see and hear: scene, creature model, other players, sound, HUD, the local player,
                      controls.js (actions and key bindings), touch.js (the phone controls),
                      scares.js (the lights' behaviour, figures that are not there, the radio, noises)
src/main.js           ties it together
test/                 node:test suites
tools/                build, map printer, soak, headless checks
vendor/mqtt.min.js    MQTT.js 4.3.7 (MIT licence), used by the relay
```

three.js (MIT licence) is bundled into `dist/game.js` at build time.

To change the map, edit `src/level.js` and run `npm run map` to see it and check it. To change how the game
plays, most of the numbers are in `src/config.js`.
