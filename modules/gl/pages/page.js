export default class Page {
  constructor(gl) {
    this.gl = gl;
    this.children = [];
  }

  create() {
    // quads
  }

  /** Lifecycle */
  render(t, y) {}

  resize(gl) {
    this.gl = gl;
  }

  /* ---- Animation */
  transitionOut(duration = 0.8) {}
}
