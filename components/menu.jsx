/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Dom from "../modules/dom";
import Gl from "../modules/gl/gl";
import Preloader from "../modules/preloader";
import { Router } from "../modules/router";

import Scroll from "../modules/scroll";
import MobileScroll from "../modules/mobileScroll";

import { isTablet } from "../modules/utils/agents";

import Header from "./shared/Header";
import Canvas from "./shared/Canvas";

class Main extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.body = document.querySelector("body");
    this.init();

    this.isTablet = isTablet();
  }

  load() {
    this.preloader = new Preloader();
    this.preloader.once("finished", (data) => console.log(data));
    this.preloader.once("out", () => this.init());
    this.preloader.preload();
  }

  init() {
    // this.addEventsListeners();

    // routes
    this.router = new Router();
    this.router.on("T_CLICK", () => this.preTransition());
    this.router.on("T_START", (data) => {
      this.transition(data);
    });

    // this.scroll = new Scroll();
    this.dom = new Dom();

    if (this.isTablet) {
      this.scroll = new MobileScroll();
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

  /*
   ** Events
   */

  addEventsListeners() {
    new ResizeObserver((entry) => this.onResize(entry[0].contentRect)).observe(
      this.body
    );

    if ("ontouchmove" in window) {
      window.addEventListener("touchstart", this.handleMouseDown.bind(this));
      window.addEventListener("touchmove", this.handleMouseMove.bind(this));
      window.addEventListener("touchend", this.handleMouseUp.bind(this));
    } else {
      window.addEventListener("mousedown", this.handleMouseDown.bind(this));
      window.addEventListener("mousemove", this.handleMouseMove.bind(this));
      window.addEventListener("mouseup", this.handleMouseUp.bind(this));
    }
  }

  onResize() {}
  handleMouseDown() {}
  handleMouseMove() {}
  handleMouseUp() {}

  render() {
    return (
      <>
        <Header />
        <Canvas />

        <div
          data-dom="fp"
          data-scroll="100"
          className="pw"
          style={{ transform: "translateY(0px)" }}
        >
          <main data-route="contact" className="w">
            <header className="s hero no-cap">
              <div className="c gr-sl h-full mb-10">
                <a href="/" className="cont-link-w w-inline-block">
                  <div data-lk="b" data-dom="h">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Home ¬
                    </div>
                  </div>
                </a>
                <a href="/projects" className="cont-link-w w-inline-block">
                  <div data-lk="b" data-dom="h">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Work ¬
                    </div>
                  </div>
                </a>
              </div>
              <div className="c gr-sl h-full mt-10">
                <div className="cont-w">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      一
                    </div>
                  </div>
                </div>
                <div className="cont-w">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      CELLULASTUD.IO
                    </div>
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Maji Royal Institute
                    </div>
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Arts of Prime
                    </div>
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      NY Collectors Bureau
                    </div>
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0%)",
                        }}
                      >
                        SUPERFAST.GALLERY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c gr-sl h-full mt-5">
                <div className="cont-w">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      二
                    </div>
                  </div>
                </div>
                <div className="cont-w">
                  <a href="#" className="link-w w-inline-block">
                    <div data-lk="b">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              transform: "translate(0px, 0%)",
                            }}
                          >
                            LICENSE@fwet.studio
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cont-w">
                  <a href="#" className="link-w w-inline-block">
                    <div data-lk="b">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              transform: "translate(0px, 0%)",
                            }}
                          >
                            ART@fwet.studio
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cont-w">
                  <a href="#" className="link-w w-inline-block">
                    <div data-lk="b">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              transform: "translate(0px, 0%)",
                            }}
                          >
                            HELLO@fwet.studio
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="c gr-sl h-full mt-5">
                <div className="cont-w">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      三
                    </div>
                  </div>
                </div>
                <div className="cont-w">
                  <a href="#" className="link-w w-inline-block">
                    <div data-lk="b">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              transform: "translate(0px, 0%)",
                            }}
                          >
                            BIZ-EU@fwet.studio
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cont-w">
                  <a href="#" className="link-w w-inline-block">
                    <div data-lk="b">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              transform: "translate(0px, 0%)",
                            }}
                          >
                            BIZ-US@fwet.studio
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cont-w">
                  <a href="#" className="link-w w-inline-block">
                    <div data-lk="b">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              transform: "translate(0px, 0%)",
                            }}
                          >
                            BIZ-WORLD@fwet.studio
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </header>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
