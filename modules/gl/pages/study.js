import Page from "./page";
import Quad from "../mod/_dom";

export default class StudyPage extends Page {
  constructor(gl) {
    super(gl);
    this.gl = gl;
    console.log("PAGE -> study");

    this.create();
  }

  create() {
    // project quads
    const quad = [...document.querySelectorAll('[data-gl="studyt"]')];
    if (quad) this.pquad = quad.map((q) => new Quad(this.gl, q));

    // project quads
    // const squad = [...document.querySelectorAll('[data-gl="studys"]')];
    // if (squad) this.squad = squad.map((q) => new Quad(this.gl, q));

    // maion quad
    const mquad = [...document.querySelectorAll('[data-gl="studyh"]')];
    if (mquad) this.mquad = mquad.map((q) => new Quad(this.gl, q));
  }

  /** Lifecycle */
  render(t, y) {
    if (this.pquad) this.pquad.forEach((item) => item.render(t, y));
    if (this.squad) this.squad.forEach((item) => item.render(t, y));
    if (this.mquad) this.mquad.forEach((item) => item.render(t, y));
  }

  resize(gl) {
    this.gl = gl;

    if (this.pquad) this.pquad.forEach((item) => item.resize(this.gl));
    if (this.squad) this.squad.forEach((item) => item.resize(this.gl));
    if (this.mquad) this.mquad.forEach((item) => item.resize(this.gl));
  }

  /* ---- Animation */
  transitionOut(duration = 0.8) {
    if (this.pquad) this.pquad.forEach((item) => item.transitionOut(duration));
    if (this.squad) this.squad.forEach((item) => item.transitionOut(duration));
    if (this.mquad) this.mquad.forEach((item) => item.transitionOut(duration));
  }
}
