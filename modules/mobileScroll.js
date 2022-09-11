export default class MobileScroll {
  constructor(gl) {
    this.gl = gl;
    this.y = 0;
    this.isActive = this.canScroll;

    this.y = {
      current: 0,
      target: 0,
      last: 0,
      limit: 500,
    };

    this.speed = 0;
    this.percentage = 0;

    document.onscroll = (e) => this.onScroll(e);
  }

  onScroll(e) {
    if (!this.isActive) return;
    //console.log("scroll", e);

    this.y.current = window.scrollY;
  }

  resize(gl) {
    this.gl = gl;
    this.isActive = this.canScroll;
    this.y.current = window.scrollY;
  }

  get canScroll() {
    //console.log(document.documentElement.scrollHeight, window.innerHeight);
    return document.documentElement.scrollHeight > window.innerHeight;
  }

  scrollTo(val, instant = false) {
    if (instant) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      this.y.current = val;
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }
}
