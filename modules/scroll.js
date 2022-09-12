import normalizeWheel from "normalize-wheel";
import Prefix from "prefix";

// import { isTablet } from "./utils/agents";

/**
 * @param {object} [parameters]
 * @param {string} [wrapper=['data-scroll']] Scrollable element
 * @param {number} [factor=1] Scroll power parameter
 * @param {boolean} [mouse=false] Scroll on mouse drag
 * @param {boolean} [speed=false] Calculates the speed of the scroll (accessed using - this.scroll.speed)
 * @param {boolean} [percentage=false] Calculates 0 to 1 percentage of scrolling page height
 * @param {boolean} [events=false] Emit Events - WIP (no events emitted currently)
 */

export default class Scroll {
  constructor(config = {}) {
    // 1. config
    const {
      wrapper = "[data-scroll]",
      factor = 0.5,
      mouse = false,
      speed = true,
      percentage = true,
      events = false,
    } = config;

    // this.isTablet = isTablet();

    this.wrapper = document.querySelector(wrapper);
    this.factor = factor;
    this.mouseDrive = mouse;
    this.shouldGetSpeed = speed;
    this.shouldGetPercentage = percentage;
    this.shouldEmitEvents = events;

    // 2. setup
    this.changeCss();
    this.position = 0;
    this.y = {
      current: 0,
      target: 0,
      last: 0,
      limit: 500,
    };
    this.speed = 0;
    this.percentage = 0;

    // 3. utils
    this.transformPrefix = Prefix("transform");
    new ResizeObserver((entry) => this.onResize(entry[0].contentRect)).observe(
      this.wrapper
    );

    // 4. start
    this.init();
  }

  /**
   * Init and Destroy, Start and Stop
   */

  init() {
    // wheel
    document.addEventListener("wheel", this.handleWheel.bind(this));

    if ("ontouchmove" in window) {
      this.touch = {
        isDown: false,
        down: 0,
        factor: this.factor,
      };

      window.addEventListener("touchstart", this.touchDown.bind(this), {
        passive: false,
      });
      window.addEventListener("touchmove", this.touchMove.bind(this), {
        passive: false,
      });
      window.addEventListener("touchend", this.touchUp.bind(this), {
        passive: false,
      });
    } else if (this.mouseDrive) this.initMouse();

    this.start();
  }

  initMouse() {
    this.mouse = {
      isDown: false,
      down: 0,
      factor: this.factor * 3,
    };

    window.addEventListener("mousedown", this.mouseDown.bind(this));
    window.addEventListener("mousemove", this.mouseMove.bind(this));
    window.addEventListener("mouseup", this.mouseUp.bind(this));
    window.addEventListener("mouseout", this.mouseUp.bind(this));
  }

  destroy() {
    document.removeEventListener("wheel", this.handleWheel.bind(this));
    if (this.mouseDrive) this.destroyMouse();

    this.stop();
  }

  destroyMouse() {
    window.removeEventListener("mousedown", this.mouseDown.bind(this));
    window.removeEventListener("mousemove", this.mouseMove.bind(this));
    window.removeEventListener("mouseup", this.mouseUp.bind(this));
  }

  start() {
    this.shouldScroll = true;
    this.raf();
  }

  stop() {
    this.shouldScroll = false;
  }

  /**
   * Utility methods
   */

  onResize(data) {
    this.y.limit = data.height - window.innerHeight;

    this.scrollUtils();
  }

  scrollUtils() {
    this.scrollMarks = [...document.querySelectorAll("[data-scrollto]")].map(
      (item) => {
        const id = item.dataset.scrollto;
        const { y } = document
          .querySelector(`[data-scrollmark="${id}"]`)
          .getBoundingClientRect();

        item.onclick = () => this.scrollTo(y);
      }
    );
    // console.log(this.scrollMarks);
  }

  /**
   * ----------------  Wheel Events
   */

  handleWheel(e) {
    const normal = normalizeWheel(e).spinY;
    this.y.target += normal * 30 * this.factor;
  }

  /**
   * ---------------- Mouse Events
   */

  mouseDown(e) {
    if (e.which !== 1) return;
    this.mouse.isDown = true;
    this.mouse.down = e.pageY;
  }

  mouseUp() {
    // console.log("UP");
    this.mouse.isDown = false;
  }

  mouseMove(e) {
    if (!this.mouse.isDown) return;
    this.y.target += -e.movementY * this.mouse.factor;
  }

  /**
   * ----------------  Touch Events
   */

  touchDown(e) {
    this.touch.isDown = true;
    this.touch.down = e.touches[0].clientY;
  }

  touchUp() {
    this.touch.isDown = false;
  }

  touchMove(e) {
    if (!this.touch.isDown) return;
    e.preventDefault();
    this.y.target +=
      (this.touch.down - e.touches[0].clientY) * this.touch.factor;

    /** Prevent pull torefresh ??? */
    // if (this.y.target > 0) {
    //   e.preventDefault();
    //   console.log("prevented");
    //   return;
    // }
  }

  /**
   * Loop!
   */

  raf() {
    if (!this.shouldScroll) return;

    this.calc();
    if (this.shouldGetSpeed) this.getSpeed();
    if (this.shouldGetPercentage) this.getPercentage();

    window.requestAnimationFrame(this.raf.bind(this));
  }

  calc() {
    if (Math.abs(this.y.target - this.y.current) < 0.1) return;

    this.y.target = clamp(0, this.y.limit, this.y.target);
    this.y.current = lerp(this.y.current, this.y.target, 0.05);
    if (this.y.target < 0.01) this.y.target = 0;

    this.move();
  }

  move() {
    this.wrapper.style[
      this.transformPrefix
    ] = `translateY(-${this.y.current}px)`;
  }

  getSpeed() {
    let speed = this.y.current - this.y.target;
    this.speed = -map(speed, -1000, 1000, -1, 1);
  }

  getPercentage() {
    this.percentage = this.y.current / this.y.limit;
  }

  /**
   * Attached Events
   */

  scrollTo(val, instant = false) {
    // action
    this.y.target = val;
    if (instant) {
      this.y.current = val;
      this.move();
    }
  }

  /**
   * Utils and Fallbacks
   */

  changeCss() {
    this.wrapper.style.draggable = "false";

    const parent = this.wrapper.parentElement;
    parent.overflow = "hidden";
    parent.style.position = "fixed";
    parent.style.width = "100%";
    parent.style.height = "100%";
  }
}

// lerp
export function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

// clamp
export function clamp(min, max, num) {
  return Math.min(Math.max(num, min), max);
}

// map
export function map(value, inLow, inHigh, outLow, outHigh) {
  return outLow + ((outHigh - outLow) * (value - inLow)) / (inHigh - inLow);
}

/*
Scrollto

data-scrollto="ID"
data-scrollmark="ID"
*/
