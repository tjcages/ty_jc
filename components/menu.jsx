/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { Word } from "../modules/anim/text.js";
import Dom from "../modules/dom";
import Gl from "../modules/gl/gl";
import Preloader from "../modules/preloader";
import { Router } from "../modules/router";

import Scroll from "../modules/scroll";
import MobileScroll from "../modules/mobileScroll";

import { isTablet } from "../modules/utils/agents";

import Header from "./shared/Header";
import Canvas from "./shared/Canvas";

const positions = [
  {
    company: "Capital",
    position: "Marketing Engineer",
    year: "Now",
    href: "https://capital.xyz"
  },
  {
    company: "TOCA",
    position: "Digital Product Manager",
    year: "2021",
    href: "https://www.tocafootball.com/"
  },
  {
    company: "Drivewayz",
    position: "Founder",
    year: "2020",
  },
  {
    company: "Milwaukee Bucks",
    position: "Lead iOS Engineer",
    year: "2020",
  },
  {
    company: "COAD",
    position: "Founder",
    year: "2019",
  },
  {
    company: "Xfinity",
    position: "Innovations Engineer",
    year: "2018",
  },
  {
    company: "EMP",
    position: "Mechanical Engineer",
    year: "2017",
  },
];

const boards = [
  {
    company: "GOLD",
    position: "Board Member",
    year: "Now",
  },
  {
    company: "EEF",
    position: "Chairman – ME Board",
    year: "2019",
  },
  {
    company: "National MS Society",
    position: "Campus Director of Philanthropy",
    year: "2018",
  },
];

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
    this.createParagraphs();
  }

  createParagraphs(id = '[data-dom="p"]') {
    return [...document.querySelectorAll(id)].map((item) => {
      const el = new Word(item);
      el.setOut();
      setTimeout(() => {
        el.animIn();
      }, 1000);
      return el;
    });
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

    this.createParagraphs();
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
          data-scroll="0"
          className="pw"
          style={{ transform: "translateY(0px)" }}
        >
          <main data-route="contact" className="w">
            <header className="s hero no-cap">
              <div className="c gr-sl h-full">
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
                {/* <a href="/projects" className="cont-link-w w-inline-block">
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
                </a> */}
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
                      CAPITAL
                    </div>
                  </div>
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      [GALLERY]
                    </div>
                    <div data-dom="p">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                        }}
                      >
                        NY Founder Group
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {positions.map((job, index) => (
                <div
                  key={index}
                  className={`c gr-sl h-full ${index == 0 && "mt-5"}`}
                >
                  <div className="cont-w">
                    <div data-dom="p">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                        }}
                      >
                        {index == 0 ? "二" : ""}
                      </div>
                    </div>
                  </div>
                  <div className="cont-w">
                    <a href={job.href && job.href} target="_blank" rel="noreferrer" className="link-w w-inline-block">
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
                              {job.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cont-w">
                    <a href={job.href && job.href} target="_blank" rel="noreferrer" className="link-w w-inline-block">
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
                              {job.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cont-w">
                    <a href={job.href && job.href} target="_blank" rel="noreferrer" className="link-w w-inline-block">
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
                              {job.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              {boards.map((job, index) => (
                <div
                  key={index}
                  className={`c gr-sl h-full ${index == 0 && "mt-5"}`}
                >
                  <div className="cont-w">
                    <div data-dom="p">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                        }}
                      >
                        {index == 0 ? "三" : ""}
                      </div>
                    </div>
                  </div>
                  <div className="cont-w">
                    <a href={job.href && job.href} target="_blank" rel="noreferrer" className="link-w w-inline-block">
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
                              {job.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cont-w">
                    <a href={job.href && job.href} target="_blank" rel="noreferrer" className="link-w w-inline-block">
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
                              {job.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cont-w">
                    <a href={job.href && job.href} target="_blank" rel="noreferrer" className="link-w w-inline-block">
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
                              {job.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </header>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
