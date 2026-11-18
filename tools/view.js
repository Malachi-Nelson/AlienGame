// A bare look at the level from any spot, for checking how things look. Not part of the game.
//   view.html?x=26&z=50&yaw=90&pitch=0&lamp=1&cr=30,50,0,4   (tile-free world metres; cr = creature x,z,yaw,state)
import * as THREE from 'three';
import { buildLevel } from '../src/level.js';
import { Scene3D } from '../src/client/scene.js';
import { Gfx } from '../src/client/fx.js';
import { CreatureModel } from '../src/client/creatureModel.js';
import { layoutMatch } from '../src/sim/world.js';

const q = new URLSearchParams(location.search), num = (k, d) => (q.has(k) ? +q.get(k) : d);
const L = buildLevel(), t0 = performance.now();
const gfx = new Gfx(document.getElementById('c')); gfx.setQuality(q.get('q') || 'high');
const s3 = new Scene3D(L);
window.buildMs = performance.now() - t0;
s3.setLayout(layoutMatch(L, num('seed', 7)));
const cam = new THREE.PerspectiveCamera(num('fov', 72), 1, 0.05, 90);
cam.rotation.order = 'YXZ'; cam.position.set(num('x', 26), num('y', 1.62), num('z', 49)); cam.rotation.set(num('pitch', 0) * Math.PI / 180, num('yaw', 0) * Math.PI / 180, 0);
const lamp = new THREE.SpotLight(0xdfeaff, num('lamp', 1) ? num('li', 200) : 0, 38, 0.5, 0.6, 1.6); lamp.castShadow = gfx.q.shadow > 0; lamp.shadow.mapSize.set(1024, 1024); lamp.shadow.camera.near = 0.2; lamp.shadow.camera.far = 36; lamp.shadow.bias = -0.002; lamp.shadow.normalBias = 0.03;
s3.scene.add(lamp); s3.scene.add(lamp.target);
const cr = new CreatureModel(s3), crp = (q.get('cr') || '').split(',').map(Number);
if (crp.length >= 2) cr.setVisible(true);
const rep = { doorOpen: new Float32Array(L.doors.length).fill(num('doors', 0)), doorWant: new Uint8Array(L.doors.length), doorJam: new Uint8Array(L.doors.length), tagBits: 0, itemBits: 0, decoys: new Map(), lift: { state: num('lift', 0), timer: 3, board: 0 } };
gfx.uni.uStatic.value = num('static', 0); gfx.uni.uExposure.value = num('exp', gfx.uni.uExposure.value); gfx.uni.uSlats.value = num('slats', 0);
let last = performance.now(), frames = 0; window.ready = false;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  gfx.resize(innerWidth, innerHeight); cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix();
  const f = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion), r = new THREE.Vector3(1, 0, 0).applyQuaternion(cam.quaternion);
  lamp.position.copy(cam.position).addScaledVector(r, 0.22).add(new THREE.Vector3(0, -0.18, 0)); lamp.target.position.copy(cam.position).addScaledVector(f, 10);
  s3.update(dt, rep);
  if (crp.length >= 2) { const mv = num('walk', 0); cr.update(dt, { x: crp[0] + Math.sin(now / 1000) * mv, z: crp[1], yaw: (crp[2] || 0) * Math.PI / 180, state: crp[3] || 1, lampsOut: false }, null); }
  gfx.uni.uTime.value = now / 1000;
  gfx.render(s3.scene, cam);
  if (++frames > 8) window.ready = true;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.info = () => ({ buildMs: window.buildMs, calls: gfx.renderer.info.render.calls, tris: gfx.renderer.info.render.triangles, float: gfx.float });
