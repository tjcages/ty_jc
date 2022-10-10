import { Char, Word } from "./anim/text.js";
import { Alpha } from "./anim/appear.js";
import gsap from "gsap";
import InView from "./anim/inview.js";

export default class Dom {
  constructor() {
    this.wrapper = document.querySelector("[data-dom='fp']");
    this.create();
  }

  /* -- Lifecycle */

  create() {
    // this.clean();
    this.titles = this.createTitles();
    this.paragraphs = this.createParagraphs();
    this.alpha = this.createAlpha();
    this.inview = new InView();

    // console.log(this.titles, this.paragraphs, this.alpha, this.inview);

    this.utils = new Utils();
  }

  destroy() {
    if (this.titles) this.titles.forEach((item) => item.animOutAndClear());
    // prettier-ignore
    if (this.paragraphs) this.paragraphs.forEach((item) => item.animOutAndClear());
    if (this.alpha) this.alpha.forEach((item) => item.animOutAndClear());
    if (this.inview) this.inview.stop();
  }

  clean() {
    if (this.titles) this.titles = null;
    if (this.paragraphs) this.paragraphs = null;
    if (this.alpha) this.alpha = null;
    if (this.inview) this.inview = null;
  }

  /* -- Animations */

  transition(duration = 1) {
    this.destroy();

    const halfDuration = duration / 2;
    gsap.to(this.wrapper.children[0], {
      duration: halfDuration,
      delay: halfDuration,
      autoAlpha: 0,
    });
  }

  /* --  Creation Function */

  createTitles(id = '[data-dom="h"]') {
    return [...document.querySelectorAll(id)].map((item) => {
      const el = new Char(item);
      el.setOut();
      return el;
    });
  }

  createParagraphs(id = '[data-dom="p"]') {
    return [...document.querySelectorAll(id)].map((item) => {
      const el = new Word(item);
      el.setOut();
      return el;
    });
  }

  createAlpha(id = '[data-dom="a"]') {
    return [...document.querySelectorAll(id)].map((item) => {
      const el = new Alpha(item);
      el.setOut();
      return el;
    });
  }
}

/* --- Utils Class */
class Utils {
  constructor() {
    this.init();
  }

  init() {
    this.gridScrambler();
  }

  gridScrambler() {
    // grid scrambler
    const gridToScramble = document.querySelector('[data-css="random-grid"]');
    if (gridToScramble)
      gridToScramble.setAttribute("data-css", Math.floor(Math.random() * 4));
  }
}
