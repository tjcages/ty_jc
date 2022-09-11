import { resizeCanvasToDisplaySize } from "twgl.js";
import Camera from "./camera.js";
import Scene from "./scene";
import Post from "../post/post";

export default class Gl {
  constructor() {
    this.canvas = document.getElementById("c");

    this.gl = this.canvas.getContext("webgl");

    this.gl.clearColor(0.04, 0.04, 0.04, 1);
    this.gl.vp = { dpr: Math.min(window.devicePixelRatio, 2) };
    //this.gl.enable(this.gl.CULL_FACE);
    //this.gl.cullFace(this.gl.BACK);
    //this.gl.enable(this.gl.DEPTH_TEST)

    this.camera = new Camera(this.gl);
    this.gl.camera = this.camera.get(this.gl);

    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(
      this.canvas
    );

    this.time = 0;

    this.initEvents();

    this.create();

    this.render();
    this.resize();
  }

  create() {
    this.post = new Post(this.gl);
    this.post.isActive = true;
    this.scene = new Scene(this.gl); 
  }

  render(y, speed) {
    this.time += 0.01;

    this.scroll = y * this.gl.vp.px;

    this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    if (this.post && this.post.isActive) this.post.setupRender();
    if (this.scene) this.scene.render(this.time, this.scroll);
    if (this.post && this.post.isActive)
      this.post.render(this.time, this.mouse, speed);
  }

  resize() {
    resizeCanvasToDisplaySize(this.gl.canvas, this.gl.vp.dpr);

    // resize mouse
    this.resizeEvents();

    // viewport data
    this.gl.vp = {
      viewSize: this.viewSize,
      px: this.pixelSize,
      inner: [window.innerWidth, window.innerHeight],
      scroll: this.scroll,
    };

    if (this.gl.camera) this.gl.camera = this.camera.get(this.gl);

    // resize scene
    if (this.post) this.post.resize(this.gl);
    if (this.scene) this.scene.resize(this.gl);
  }

  /** --- Events */

  initEvents() {
    this.evtCtrl = {
      ww: window.innerWidth,
      wh: window.innerHeight,
    };

    // mouse
    this.mouse = {
      x: 0,
      y: 0,
    };

    document.onmousemove = (e) => {
      this.mouse.x = (e.clientX / this.evtCtrl.ww) * 2 - 1;
      this.mouse.y = -(e.clientY / this.evtCtrl.wh) * 2 + 1;
      // console.log(this.mouse.x, this.mouse.y);
    };
  }

  resizeEvents() {
    this.evtCtrl = {
      ww: window.innerWidth,
      wh: window.innerHeight,
    };
  }

  /** --- Router */
  startTransition(dur) {
    this.post?.startTransition(dur);
  }

  handlePageChange(next) {
    this.scene?.handlePageChange(next);
    this.post?.handlePageChange(next);
  }

  /** --- Utils */

  get viewSize() {
    const height = Math.abs(
      this.gl.camera.z * Math.tan(this.gl.camera.fov / 2) * 2
    );
    return [height * (this.gl.canvas.width / this.gl.canvas.height), height];
  }

  get pixelSize() {
    return this.viewSize[0] / window.innerWidth;
  }
}
