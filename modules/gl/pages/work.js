import Page from "./page";
import DomQuad from "../mod/_dom";

export default class WorkPage extends Page {
  constructor(gl) {
    super(gl);
    this.gl = gl;
    // console.log("PAGE -> project");

    this.create();
  }

  create() {
    // hero
    const hero = [...document.querySelectorAll('[data-gl="pro"]')];
    if (hero) this.hero = hero.map((q) => new DomQuad(this.gl, q));

    // giga quad
    // const quad = document.querySelector('[data-gl="img"]');
    // if (quad) this.quad = new DomQuad(this.gl, quad);

    // project images
    const imgs = [...document.querySelectorAll('[data-gl="homei"]')];
    if (imgs) this.images = imgs.map((q) => new DomQuad(this.gl, q));

    // console.log(this.quad);
  }

  /** Lifecycle */
  render(t, y) {
    if (this.hero) this.hero.forEach((item) => item.render(t, y));
    // if (this.quad) this.quad.render(t, y);
    if (this.images) this.images.forEach((item) => item.render(t, y));
  }

  resize(gl) {
    this.gl = gl;

    if (this.hero) this.hero.forEach((item) => item.resize(this.gl));
    // if (this.quad) this.quad.resize(this.gl);
    if (this.images) this.images.forEach((item) => item.resize(this.gl));
  }

  /* ---- Animation */
  transitionOut(duration = 0.8) {
    if (this.hero) this.hero.forEach((item) => item.transitionOut(0.8));
    if (this.images) this.images.forEach((item) => item.transitionOut(0.8));
  }
}
