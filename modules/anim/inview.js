export default class InView {
  constructor(ids = "[data-watch]", classToAdd = "inview") {
    this.items = [...document.querySelectorAll(ids)].map((item) => {
      return {
        item: item,
        attr: item.dataset.watch || classToAdd,
      };
    });

    this.init();
  }

  init() {
    this.items.forEach((item) => (item.watch = new IsItIn(item)));
  }

  stop() {
    this.items.forEach((item) => item.watch.stop());
  }
}

/* Single Watched Item */
class IsItIn {
  constructor(item) {
    this.item = item.item;
    this.className = item.attr;
    this.setup();
  }

  setup() {
    this.obs = {};
    const callbackIn = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) this.isIn();
      });
    };

    this.obs.in = new IntersectionObserver(callbackIn, {
      rootMargin: "0px",
      threshold: 0.2,
    });
    this.obs.in.observe(this.item);

    const callbackOut = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) this.isOut();
      });
    };

    this.obs.out = new IntersectionObserver(callbackOut, {
      rootMargin: "0px",
      threshold: 0,
    });
    this.obs.out.observe(this.item);
  }

  stop() {
    this.obs.in.unobserve(this.item);
    this.obs.out.unobserve(this.item);
    this.item.classList.add("an-out"); // revert class name
  }

  isIn() {
    this.item.classList.add(this.className);
  }

  isOut() {
    this.item.classList.remove(this.className);
  }
}
