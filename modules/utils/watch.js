import Emitter from "tiny-emitter";

import { isTablet } from "./agents";

export default class Watch extends Emitter {
  constructor(el) {
    super();
    this.el = el;

    // this.isTablet = isTablet();
    // console.log(this.isTablet);

    this.config = {
      in: {
        t: 0.01,
        my: "0px",
      },
      out: {
        t: 0,
        my: "0px",
      },
    };

    if (isTablet()) this.config.in.t = 0.9;

    this.setup();
    if (this.el) this.init();
  }

  init() {
    this.observerIn.observe(this.el);
    this.observerOut.observe(this.el);
  }

  stop() {
    this.observerIn.unobserve(this.el);
    this.observerOut.unobserve(this.el);
  }

  setup() {
    this.observerIn = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) this.emit("isIn");
      },
      {
        root: null,
        threshold: this.config.in.t,
        rootMargin: `${this.config.in.my}`,
      }
    );

    this.observerOut = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) this.emit("isOut");
      },
      {
        root: null,
        threshold: this.config.out.t,
        rootMargin: `${this.config.out.my}`,
      }
    );
  }
}
