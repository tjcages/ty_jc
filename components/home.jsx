import React from "react";
import Dom from "../modules/dom";
import Gl from "../modules/gl/gl";
import Preloader from "../modules/preloader";
import { Router } from "../modules/router";

import Scroll from "../modules/scroll";

import { isTablet, isMobile } from "../modules/utils/agents";

import Header from "./shared/Header";
import Canvas from "./shared/Canvas";
import Intro from "./home/Intro";
import Projects from "./home/Projects";
import About from "./home/About";
import Images from "./home/Images";
import Ethos from "./home/Ethos";
import Footer from "./shared/Footer";

class Main extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.body = document.querySelector("body");
    this.load();

    this.isTablet = isTablet();
    this.isMobile = isMobile();
  }

  load() {
    this.preloader = new Preloader();
    this.preloader.once("finished", (data) => console.log(data));
    this.preloader.once("out", () => this.init());
    this.preloader.preload();
  }

  init() {
    // routes
    this.router = new Router();
    this.router.on("T_CLICK", () => this.preTransition());
    this.router.on("T_START", (data) => {
      this.transition(data);
    });

    this.dom = new Dom();

    if (this.isTablet || this.isMobile) {
      this.scroll = new Scroll({ factor: 0.5 });
    } else {
      this.scroll = new Scroll();
    }

    // gl
    this.gl = new Gl();

    this.update();
  }

  /*
   ** Pages
   */

  preTransition() {
    //  transition current out
    if (this.dom) {
      this.dom.transition(0.9);
      if (this.gl && this.gl.scene) this.gl.scene.current.transitionOut(0.4);
    }
  }

  transition({ current, next }) {
    console.log("Transitioning");
    // trigger page change
    const timer = 1;
    setTimeout(() => this.changePage(next), timer * 1000);

    this.gl.startTransition(timer);
  }

  changePage(next) {
    //  remove old and next new in
    this.router.swap().then(() => {
      this.handleNext(next);
    });
  }

  handleNext(next) {
    if (this.scroll) this.scroll.scrollTo(0, true);
    if (this.dom) this.dom.create();
    if (this.gl) this.gl.handlePageChange(next);
  }

  /*
   ** Loop
   */

  update() {
    if (this.gl && this.scroll)
      this.gl.render(this.scroll.y.current, this.scroll.speed);
    window.requestAnimationFrame(this.update.bind(this));
  }

  render() {
    return (
      <>
        <Header />
        <Canvas />

        <div data-dom="fp" data-scroll="0">
          <main data-route="home">
            <Intro />
            <Projects />
            <About />
            <Images />
            <Ethos />

            <Footer />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
