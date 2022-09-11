import gsap from "gsap";
import { Animation } from "./anim.js";
import { anim } from "../utils/config.js";

export class Alpha extends Animation {
  constructor(element) {
    super(element);
    this.animated = element;

    // control
    this.isAnimating = false;
    this.shouldOut = false;
  }

  animIn() {
    this.isAnimating = true;
    this.shouldOut = false;

    this.element = gsap.timeline();
    this.element.to(this.animated, {
      autoAlpha: 1,
      duration: anim.in.duration,
      ease: anim.in.ease,
      delay: anim.in.delay,
      onComplete: () => {
        this.isAnimating = false;
        if (this.shouldOut) this.setOut();
      },
    });
  }

  animOut() {
    this.element = gsap.timeline();
    this.element.to(this.animated, {
      autoAlpha: 0,
      duration: anim.out.duration,
      ease: anim.out.ease,
      delay: anim.out.delay,
    });
  }

  setIn() {
    this.element = gsap.timeline();
    this.element.to(this.animated, {
      autoAlpha: 1,
    });
  }

  setOut() {
    this.shouldOut = true;
    if (this.isAnimating) return;

    this.element = gsap.timeline();
    this.element.to(this.animated, {
      autoAlpha: 0,
    });
  }

  /* -- Lifecycle */
  animOutAndClear() {
    // this.stop();
    this.animOut();
  }
}
