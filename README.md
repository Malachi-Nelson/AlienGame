# Loss of Signal

**Play it: <https://malachi-nelson.github.io/AlienGame/>**

An online co-op survival horror game for the browser. The mining ship Ymir stopped answering nineteen days ago and
is drifting over a gas giant. You are the salvage crew, one to six of you, aboard through the aft airlock. The ship
is dark and every bulkhead is locked. Get the reactor running, work your way forward deck by deck, and reach the
escape pod at the bow. Something came aboard with the ore. It hunts by sound, and it moves through the vents.

Everything in the game is original and made in code: the setting, the creature, the textures and every sound.
There are no image or audio files in this repository.

## How to play

| Key | What it does |
| --- | --- |
| W A S D | Move |
| Shift | Run. Fast, loud, and you run out of breath. Shut in a locker, hold it to hold your breath. |
| C | Crouch. Slow and nearly silent. You need to crouch to use the service ducts. |
| E | Use: doors, lockers, tags, sounders, breakers, the pod console. Hold it at a pump, lever, terminal or the uplink to work it, and beside a downed crewmate to pick them up. |
| F | Lamp. You see more. So does it. |
| Q or right click | Tag scanner. Points at the nearest tag, and pings while it does. |
| G or left click | Throw a sounder, a noise-maker that draws the creature away. |
| Tab | The ship's schematic |
| Esc | Free the mouse, pause |

Those are the keys it starts with. **Controls**, on the title card and the pause card, lets you change every one of
them, give an action a second key or a mouse button, turn the view upside down, and switch crouch to hold.

### On a phone or tablet

Open the same link and turn the phone sideways. The left thumb moves, the right thumb looks, and the buttons do the
rest: USE, RUN, CROUCH, THROW, LAMP, SCAN (tap on, tap off) and MAP (hold). In a locker RUN turns into BREATH, which
you hold down. **Controls → Move and resize the touch buttons** lets
you drag each button where you want it, resize them, fade them, swap the sides and change how fast the view turns.
If the touch buttons do not come up by themselves, Controls has an On switch for them.

Get through the four sections of the ship, doing what each one needs, and get off in the escape pod (see below).

Things worth knowing:

- **Signal** (top right) is your suit link. It drops as the creature gets closer, and the picture breaks up with it.
  You also hear it coming: every footfall is a tap.
- **Seen** (bottom left) fills while it is working out whether it has noticed you. Dark corners, crouching and
  standing still all slow that down. A lit lamp speeds it up a lot.
- Its lanterns hang inside its ribs and show its mood: teal when it is wandering, amber when something has its
  attention, red when it is hunting. Sometimes it puts them out and stands in the dark, waiting. A lamp turned on it
  then still catches them.
- When it starts to notice you, its head turns to follow you, in jerks, as far round as it needs to go. You will hear
  its neck. When it means to come for you from a distance it draws itself up to its full height first. Then it runs.
- **Lockers.** It can hear you breathing in one if it stands close. Hold your breath (Shift, or BREATH on a phone) and
  there is a fair chance it opens nothing and moves on, though less as the match goes on, and never if it saw you
  get in. You have about ten seconds of air. Run out and you gasp, which it hears.
- **Breakers.** Every deck has a yellow breaker box. Throwing it ends a blackout, resets a circuit that has tripped,
  or gives a dark deck power for a little over a minute. It is loud, and the creature hears it. The schematic marks
  breakers in yellow.
- **The vents.** It climbs into hatches in the ceiling and crawls through the ducts above. You can hear it overhead,
  the hatches bang when it goes in or comes out, and your signal still finds it up there. It can come down anywhere.
- It cannot fit in the crawlspaces (the low ducts you crouch through). It can reach a little way in, and it knows
  where they come out.
- Playing alone, the first time it brings you down you get back up. There is no second time.
- The lights stutter when it is within about fourteen metres, and your own lamp catches when it is closer still.

## The ship

Four sections, one after another along a spine corridor, each closed off from the next by a bulkhead. A bulkhead
opens when its section's job is done, with an alarm the creature hears, and shuts again once the last of the crew
still on their feet is through it. Behind it, that part of the ship is finished with.

1. **Engineering**, at the stern, where you come aboard. The ship is dark. Bring the three coolant pumps back online
   (hold use at each; it takes a few seconds and they are loud), then throw the reactor lever in Reactor Control. The
   lights come back.
2. **Cargo Deck.** The hold is stacked with containers. The crew tags are somewhere among them, and their codes open
   the next bulkhead.
3. **Crew Deck.** Mess, galley, medbay and cabins. Three of its five terminals hold the launch codes: download them
   (hold use; they chirp while they work).
4. **Command Deck**, at the bow. Upload the codes at the uplink on the bridge, then prime the escape pod in the pod
   bay. The launch alarm brings the creature. When the hatch opens, get in before the pod goes.

The top left of the screen names the section and has a pip for each part of its job. The scanner points to whatever
needs doing next. The schematic greys out the sections you cannot reach and circles what is left to do in yours.
The hull has windows: stars, and the planet below.

## No two matches are alike

Each match is laid out from one random number, which every player's browser works out the same way.

- **Tags, terminals and sounders.** Four of twelve tag spots in the cargo hold, three of the crew deck's five
  terminals, and five to nine sounders lying about.
- **Sealed doors.** Four to seven doors are welded shut, barred across and showing a red lamp. The schematic marks them
  in red. Nothing is ever cut off, but the way you went last time may not be there.
- **Power.** The ship has five circuits: engineering, the cargo deck, the crew deck, the command deck and the pod bay.
  Engineering is dark until the reactor runs. Further in, most matches one circuit is dead or failing, sometimes two.
  A dead deck is dark apart from the red emergency lamps low on the walls, screens and indicator lamps. The dark hides
  you from the creature unless your lamp is on. The schematic shades a deck with no power.
- **The creature.** There are six kinds and you are not told which one you have until the match is over. One hears
  further and sees less, one is the other way round, one waits in the dark far more, one is faster in a straight line
  and worse at corners, one opens lockers from the start and guards whatever you have to work at. The end card says
  which it was.
- **Timing.** How long it sleeps before it starts to move, and how long the pod takes to launch, both change.
- **What the crew left.** Bodies beside some of the tags, stains, drag marks, gouges in the walls and on the sealed
  doors, warnings scrawled by people who did not get out, and conduits that arc and spit sparks. Different every match.
  Signs marked ESCAPE POD point the shortest way forward, round whatever is sealed.

The title card keeps count, in that browser, of your runs, how many times you got out, your best time out, and how
many of the six kinds of creature you have met. The first time something new comes up, a line at the bottom left
says what it is, once.

Things also go wrong while you are in there, at no fixed time:

- **A circuit trips**, usually the one someone is standing in, and comes back by itself half a minute later.
- **A blackout** takes every circuit for a quarter of a minute.
- **A door fault** opens or shuts a few doors near someone. The creature does not come for the noise.
- **The hull groans.** For about seven seconds the noise covers everything and the creature hears half as far.
  That is the time to run.

## Scares

- When it catches you the view is taken from you for a second and turned to face it.
- Now and then someone in a suit is standing at the far end of a corridor: person-sized, with no lights. Look
  straight at them, or walk up, and they are gone. Only you see them.
- The suit radio picks up fragments of whoever is still transmitting.
- The ship knocks, cracks and groans, and occasionally something happens close by: a locker is struck from
  inside, something scuttles off down a duct, a light tube gives out overhead.

None of this ever looks or sounds like the creature. Its sounds are its own: the tapping of its feet, its breathing,
its neck clicking round, and the static is always how close it is. **Sudden scares and stuttering lights**, on the title card and the pause card, switches off the figures,
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

It stands on two legs and is shaped, roughly, like a person: nearly three metres of it when it straightens, which
the ceilings seldom let it do, so it goes about stooped. Its head has no eyes and no face, only a seam down the middle
laced shut with thin fangs, and the seam pulls apart when it is close. Its ribcage opens like two hands, with its
lanterns hanging inside on stalks. Its arms reach its shins and end in three long fingers, dark at the tips. It has no
feet; its shins come down to points, which is the tapping. The model is built from shapes in code in
`src/client/creatureModel.js`, and it is the game's own design.

Its behaviour runs in `src/sim/creature.js` and nothing it does is scripted.

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
  creature off for a while; when things have been quiet too long it leans it back towards you. It grows bolder the
  further forward the crew gets.
- **The vents.** Every section has hatches in its ceilings, joined by ducts that only it uses, with one run over each
  bulkhead. It goes up into them to cut across a deck when the walk is long, to come down near a noise it hears
  through the grilles, sometimes after a search turns up nothing, and to follow the crew through a bulkhead that has
  shut on it.

## Run it yourself

Needs Node 20 or newer.

```sh
npm install
npm test                 # the simulation tests: the map, the rules, the match set-up, each of the creature's habits
npm run build            # writes dist/index.html, dist/game.js and dist/mqtt.min.js
npm run dev              # the same, served on http://localhost:8123 and rebuilt when a file changes
npm run map              # prints the ship as text and checks it
node tools/soak.mjs 3 6  # plays six whole matches with three stand-in players and prints what the creature did
PLAIN=1 node tools/soak.mjs 3 6   # the same in plain matches: nothing sealed, all power on, the ordinary creature
```

A few checks drive the built page in a headless browser. They need Playwright, Chrome and a local stand-in for the
relays, none of which are in `package.json`. Apart from the three that say otherwise they play plain matches (`?plain` on
the address: nothing sealed, all power on, no incidents), so that they can rely on the map:

```sh
npm i --no-save playwright-core aedes ws
node tools/check-solo.mjs     # one player, airlock to escape pod: a door, a pump, the bulkheads, a tag, a locker, the creature, the uplink, the pod
node tools/check-coop.mjs     # three players: lobby, a match, going down, the leader leaving mid-match
node tools/check-touch.mjs    # a phone-sized touch screen: the stick, the buttons, arranging them; and rebinding keys
node tools/check-scares.mjs   # a varied match: sealed doors, power going and coming back, a figure, being caught
node tools/check-coop-varied.mjs   # two players in a varied match: same set-up for both, and the second player's side of it
node tools/check-wreck.mjs    # a varied match: holding your breath in a locker, breakers, sparks, it rearing up and catching you, the record
node tools/check-audio.mjs    # renders every sound offline and prints how loud each one comes out
```

## How the page gets published

Every push to `main` runs the tests, builds the page and puts `dist/` on the `gh-pages` branch
(`.github/workflows/ci.yml`). GitHub Pages serves that branch at the address above.

If a change alters what players send each other, or how a match is laid out from its seed, change the protocol name
(`v4` at present, in `src/config.js` and `tools/build.mjs`) so that old tabs and new ones do not end up in the same room.

## Layout

```
src/level.js          the ship: every section, room, door, bulkhead, locker, crawlspace, vent, station and light, as data
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
