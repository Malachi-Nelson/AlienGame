// The renderer, and the last pass over every frame: exposure, grain, vignette, and the static that eats the picture as the creature closes in.
import * as THREE from 'three';

const VS = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
const FS = `
precision highp float;
uniform sampler2D tScene; uniform vec2 uRes;
uniform float uTime, uStatic, uHurt, uFade, uExposure, uGrain, uSrgbIn, uDesat, uVig, uSlats;
varying vec2 vUv;
float hash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 grab(vec2 uv){ vec3 c = texture2D(tScene, uv).rgb; if (uSrgbIn > 0.5) c = pow(c, vec3(2.2)); return c; }
void main(){
  vec2 uv = vUv; float s = uStatic;
  float band = floor(uv.y * 80.0), tick = floor(uTime * 18.0);
  float torn = step(1.0 - 0.3 * s * s, hash(vec2(band, tick)));
  uv.x += torn * (hash(vec2(band * 1.7, tick + 3.0)) - 0.5) * 0.07 * s;
  vec2 c = uv - 0.5;
  float ca = 0.0012 + 0.009 * s * s;
  vec3 col = vec3(grab(uv + c * ca).r, grab(uv).g, grab(uv - c * ca).b);
  col *= uExposure;
  col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);
  col = pow(clamp(col, 0.0, 1.0), vec3(1.0 / 2.2));
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, vec3(lum) * vec3(0.8, 0.95, 1.0), uDesat);
  float snow = hash(floor(vUv * uRes / 3.0) + tick * 17.0);
  col = mix(col, vec3(snow * 0.7), clamp(s * s * 0.34 * step(0.55, hash(vec2(band * 0.31, tick + 9.0))) + torn * 0.3 * s, 0.0, 0.7));
  col += (hash(vUv * uRes + fract(uTime) * 61.0) - 0.5) * (uGrain + 0.09 * s);
  float v = length(c * vec2(1.0, uRes.y / uRes.x * 1.2));
  col *= 1.0 - smoothstep(0.3, 0.92, v) * uVig;
  col = mix(col, vec3(0.5, 0.0, 0.0) * (0.35 + lum), uHurt * smoothstep(0.1, 0.7, v + 0.3 * uHurt));
  // looking out through the vents of a locker door
  float bar = smoothstep(0.34, 0.5, abs(fract(vUv.y * 7.0) - 0.5));
  float frame = max(bar, smoothstep(0.30, 0.36, abs(vUv.x - 0.5)));
  frame = max(frame, 1.0 - smoothstep(0.0, 0.04, min(vUv.y - 0.18, 0.86 - vUv.y)));
  col *= 1.0 - uSlats * frame * 0.985;
  col *= uFade;
  gl_FragColor = vec4(col, 1.0);
}`;

export const QUALITY = {       // scale: share of the window's own pixels drawn; maxDpr: how far a high-density screen is honoured
  low: { scale: 0.7, maxDpr: 1, samples: 0, shadow: 0 },
  medium: { scale: 1, maxDpr: 1, samples: 0, shadow: 512 },
  high: { scale: 1, maxDpr: 1.25, samples: 4, shadow: 1024 },
};

export class Gfx {
  constructor(canvas) {
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    r.setPixelRatio(1); r.info.autoReset = false;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
    this.float = r.extensions.has('EXT_color_buffer_float') || r.extensions.has('EXT_color_buffer_half_float');
    this.q = QUALITY.high; this.qName = 'high'; this.w = 2; this.h = 2;
    this.uni = {
      tScene: { value: null }, uRes: { value: new THREE.Vector2(2, 2) }, uTime: { value: 0 }, uStatic: { value: 0 }, uHurt: { value: 0 }, uFade: { value: 1 },
      uExposure: { value: 1.0 }, uGrain: { value: 0.045 }, uSrgbIn: { value: this.float ? 0 : 1 }, uDesat: { value: 0 }, uVig: { value: 0.75 }, uSlats: { value: 0 },
    };
    this.post = new THREE.ShaderMaterial({ uniforms: this.uni, vertexShader: VS, fragmentShader: FS, depthTest: false, depthWrite: false });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.post); quad.frustumCulled = false;
    this.pscene = new THREE.Scene(); this.pscene.add(quad); this.pcam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.makeTarget();
  }
  makeTarget() {
    if (this.rt) this.rt.dispose();
    this.rt = new THREE.WebGLRenderTarget(this.w, this.h, { type: this.float ? THREE.HalfFloatType : THREE.UnsignedByteType, samples: this.q.samples, depthBuffer: true });
    if (!this.float) this.rt.texture.colorSpace = THREE.SRGBColorSpace;
    this.uni.tScene.value = this.rt.texture;
  }
  setQuality(name) { if (!QUALITY[name]) name = 'high'; const samples = this.q.samples; this.q = QUALITY[name]; this.qName = name; this.renderer.shadowMap.enabled = this.q.shadow > 0; if (samples !== this.q.samples) this.makeTarget(); if (this.cssW) this.resize(this.cssW, this.cssH); }
  resize(cssW, cssH) {
    this.cssW = cssW; this.cssH = cssH;
    const dpr = Math.min(window.devicePixelRatio || 1, this.q.maxDpr), s = this.q.scale * dpr;
    const w = Math.max(2, Math.round(cssW * s)), h = Math.max(2, Math.round(cssH * s));
    if (w === this.w && h === this.h) return;
    this.w = w; this.h = h;
    this.renderer.setSize(w, h, false); this.rt.setSize(w, h); this.uni.uRes.value.set(w, h);
  }
  render(scene, camera) {
    const r = this.renderer;
    r.info.reset();
    r.setRenderTarget(this.rt); r.render(scene, camera);
    r.setRenderTarget(null); r.render(this.pscene, this.pcam);
  }
}
