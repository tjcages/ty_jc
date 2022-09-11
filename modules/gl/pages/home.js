import Page from "./page";
import DomQuad from "../mod/_dom";
import GridQuad from "../mod/_gridQuad";

export default class Home extends Page {
  constructor(gl) {
    super(gl);
    this.gl = gl;
    // console.log("PAGE -> homepage");

    this.create();
  }

  create() {
    // quads
    const quad = [...document.querySelectorAll('[data-gl="grid"]')];
    if (quad) this.dq = quad.map((q) => new GridQuad(this.gl, q));

    // images
    const imgs = [...document.querySelectorAll('[data-gl="homei"]')];
    if (imgs) this.images = imgs.map((q) => new DomQuad(this.gl, q));
  }

  /** Lifecycle */
  render(t, y) {
    if (this.dq) this.dq.forEach((item) => item.render(t, y));
    if (this.images) this.images.forEach((item) => item.render(t, y));
  }

  resize(gl) {
    this.gl = gl;

    if (this.dq) this.dq.forEach((item) => item.resize(this.gl));
    if (this.images) this.images.forEach((item) => item.resize(this.gl));
  }

  /* ---- Animation */
  transitionOut(duration = 0.8) {
    if (this.dq) this.dq.forEach((item) => item.transitionOut(duration));
    if (this.images)
      this.images.forEach((item) => item.transitionOut(duration));
  }
}
