import { loadTextureAndData, calcRatio } from "../../utils/texture-loader.js";
import { createTexture } from "twgl.js";

export default class Texture {
  constructor(gl, ref, config = {}) {
    this.gl = gl;
    this.config = config;
    // public
    this.texture = null;
    this.ratio = [1, 1];

    this.ref = this.setRef(ref);
    this.src = this.ref.children[0];
  }

  /* --- utils */
  setRef(ref) {
    const tag = ref.children[0].tagName;

    if (tag === "VIDEO") {
      this.texture = createTexture(this.gl, {
        src: [0, 0, 0, 0],
        format: this.gl.RGBA,
        min: this.gl.LINEAR,
        wrap: this.gl.CLAMP_TO_EDGE,
      });

      this.video = ref.children[0];
      this.setVideoParams();
      this.isVideo = true;
    }

    return ref;
  }

  async load() {
    if (this.isVideo) {
      this.video.addEventListener("loadeddata", () => {
        return;
      });
    } else {
      // check image loading progress

      // get texture from dom
      const loadedData = await loadTextureAndData(
        this.gl,
        this.src,
        this.gl.NEAREST
      );

      this.isReady = true;
      this.texture = loadedData.texture;
      this.ratio = loadedData.ratio;

      this.resize();
    }
  }

  /*** -- Lifecycle */

  render() {
    if (!this.isVideo) return;

    if (this.video && this.video.currentTime > 0) {
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.RGB,
        this.gl.RGB,
        this.gl.UNSIGNED_BYTE,
        this.video
      );
    }
  }

  resize(gl = this.gl) {
    if (!this.isReady) return;
    this.gl = gl;

    this.texture.ratio = calcRatio(this.ref.children[0]);
  }

  /*** -- Video Utils */
  setVideoParams() {
    this.video.muted = true;
    this.video.loop = true;
    this.video.playbackRate = 1;
    this.video.playsinline = true;
    this.video.crossOrigin = "anonymous";
    this.video.play();
  }

  playVideo() {
    if (!this.isVideo) return;
    if (this.video) this.video.play();
  }

  setopVideo() {
    if (!this.isVideo) return;
    if (this.video) this.video.pause();
  }
}
