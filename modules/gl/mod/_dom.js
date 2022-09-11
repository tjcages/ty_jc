import {
  createProgramInfo,
  drawBufferInfo,
  m4,
  setBuffersAndAttributes,
  setUniforms,
} from "twgl.js";

import gsap from "gsap";
import Watch from "../../utils/watch";

import { calcDomPosition } from "../../utils/dom-utils.js";

import Quad from "./_quad.js";
import shaders from "../mat/dom/";

import Texture from "./_texture";

export default class DomQuad extends Quad {
  constructor(gl, ref) {
    super(gl, {});

    this.gl = gl;
    this.ref = ref;

    this.a = {
      rand: Math.random() * 10,
      Ain: 0,
      Ahover: 0,
    };

    this.texture = new Texture(this.gl, ref);
    this.texture.load().then(() => this.initAnimation());
  }

  createProgram() {
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);
  }

  resize(gl) {
    this.gl = gl;

    if (this.texture) this.texture.resize(this.gl);

    const pos = calcDomPosition(this.ref, this.gl.vp);
    m4.translation([pos.x, pos.y, 0], this.mat);

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_id: this.mat,
      u_camera: gl.camera.mat,
      u_scale: [pos.width, pos.height],
      u_rand: this.a.rand,
    });
  }

  render(t, y) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);

    if (this.texture) this.texture.render();

    setUniforms(this.programInfo, {
      u_time: t,
      u_id: this.mat,
      u_y: y,
      u_diff: this.texture.texture,
      u_ratio: this.texture.ratio,
      // animation
      u_a_in: this.a.Ain,
    });

    drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  // animation
  initAnimation() {
    this.watch = new Watch(this.ref, this.gl.vp);
    this.watch.on("isIn", () => this.animateIn());
    this.watch.on("isOut", () => this.setOut());

    this.resize(this.gl);
  }

  animateIn(dur = 1.2) {
    if (this.animationInOut) this.animationInOut.kill();
    this.animationInOut = gsap.to(this.a, {
      Ain: 1,
      duration: dur,
      ease: "expo.out",
    });
  }

  animateOut(dur = 0.8) {
    if (this.animationInOut) this.animationInOut.kill();
    this.animationInOut = gsap.to(this.a, {
      Ain: 0,
      duration: dur,
      ease: "power2.inOut",
    });
  }

  setOut() {
    if (this.animationInOut) this.animationInOut.kill();
    this.a.Ain = 0;
  }

  transitionOut(duration = 0.8) {
    this.watch.stop();
    this.animateOut(duration);
  }
}
