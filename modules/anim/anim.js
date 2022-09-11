export class Animation {
  constructor(element) {
    this.element = element;

    // // displayt none gate
    // if (this.element.offsetWidth === 0 || this.element.offsetHeight === 0)
    //   return;

    this.createObserver();
    this.start();
  }

  createObserver() {
    this.observerIn = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) this.animIn();
      },
      {
        root: null,
        threshold: 0.8,
        rootMargin: `0px`,
      }
    );

    this.observerOut = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) this.setOut();
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `0px`,
      }
    );
  }

  start() {
    this.observerIn.observe(this.element);
    this.observerOut.observe(this.element);
  }

  stop() {
    this.observerIn.unobserve(this.element);
    this.observerOut.unobserve(this.element);
  }

  animIn() {}
  animOut() {}
  setIn() {}
  setOut() {}
}
