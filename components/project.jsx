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

        <div data-dom="fp" data-scroll="0" className="pw">
          <main data-route="project" className="w">
            <header className="s hero project">
              <div data-gls="project" className="c project">
                <div className="p-main">
                  <div
                    id="w-node-_96c3e5d9-51b9-f005-ef75-26fc64b2ba13-6b813456"
                    className="div-block"
                  >
                    <h2 data-dom="h" className="p-date">
                      <div
                        style={{
                          display: "block",
                          textAlign: "right",
                          position: "relative",
                        }}
                      >
                        {" "}
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          0
                        </div>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          1
                        </div>{" "}
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          -
                        </div>{" "}
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          0
                        </div>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          5
                        </div>{" "}
                      </div>
                      <div
                        style={{
                          display: "block",
                          textAlign: "right",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          2
                        </div>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          0
                        </div>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          2
                        </div>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            transform: "translate(0px, 0%);",
                          }}
                        >
                          2
                        </div>{" "}
                      </div>
                    </h2>
                    <div data-scroller="0" className="scroller-w">
                      <div className="p-meta">
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Year)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              2022
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Medium)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              Mixed
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Ref#)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              0x01240132e
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Items)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              34
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (State)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              Sketches
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="p-meta">
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Year)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              2022
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Medium)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              Mixed Media (Image, Video)
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Ref#)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              0x01240132e
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Items)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              34
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (State)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              Sketches
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="p-meta">
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Year)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              2022
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Medium)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              Mixed Media (Image & Video)
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Ref#)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              0x01240132e
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (Items)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              34
                            </div>
                          </div>
                        </div>
                        <div className="meta-info">
                          <div data-dom="a" className="tx-acc">
                            (State)
                          </div>
                          <div data-dom="p">
                            <div
                              style={{
                                display: "block",
                                textAlign: "start",
                                position: "relative",
                              }}
                            >
                              Sketches
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_96c3e5d9-51b9-f005-ef75-26fc64b2ba67-6b813456"
                    className="p-notes"
                  >
                    <div data-dom="a" className="intro-note is-spaced">
                      <div className="u _2">
                        <div data-note="img">
                          <div className="p-caption-w w-richtext">
                            <p>
                              <span className="is-alt">
                                <em>Cellula Stud.io,</em>
                              </span>{" "}
                              <strong>generative moodboard</strong> prompted
                              through various tti models. captionhero.
                            </p>
                            <p>‍</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_96c3e5d9-51b9-f005-ef75-26fc64b2ba80-6b813456"
                    className="p-main-desc"
                  >
                    <div data-tx="Ab." data-dom="a" className="p-desc">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                  <div id="w-node-_96c3e5d9-51b9-f005-ef75-26fc64b2ba85-6b813456">
                    <h1 data-dom="h" className="p-title">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                        }}
                      >
                        Sketch
                      </div>
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                        }}
                      >
                        Book
                      </div>
                    </h1>
                  </div>
                  <div id="w-node-_96c3e5d9-51b9-f005-ef75-26fc64b2ba95-6b813456">
                    <div
                      data-dom="a"
                      id="w-node-_96c3e5d9-51b9-f005-ef75-26fc64b2ba96-6b813456"
                      className="p-cta"
                    >
                      <a href="#" data-scrollto="details" data-lk="b">
                        Details,
                      </a>{" "}
                      <em data-lk="b" className="is-unavailable">
                        Buy.
                      </em>
                    </div>
                  </div>
                  <div
                    id="w-node-_44fab5b6-3da3-3e7a-a35b-258e836900aa-6b813456"
                    className="p-overl"
                  >
                    <div className="gl-proj-img">
                      <div data-utils="hid" className="grid-item w-embed">
                        <figure data-gl="pro">
                          <img
                            crossOrigin=""
                            src="https://assets.website-files.com/6255dd9242faeb172f3fe028/62efa142ca7d1166b16691f7_main-sketch.png"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section
              data-scrollmark="details"
              data-change="close"
              className="s is-black"
            >
              <div className="c gr">
                <div
                  data-watch="inview"
                  id="w-node-_96c3e5d9-51b9-f005-ef75-26fc64b2ba9e-6b813456"
                  className="rel-w"
                >
                  <div data-dom="bl" className="tx-xl w-richtext">
                    <p>
                      <strong>Sed</strong> ut perspiciatis unde omnis iste natus
                      error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam. descLmain
                    </p>
                    <p>‍</p>
                  </div>
                  <div className="tx-abs font-it">Sketch Book</div>
                </div>
              </div>
              <div data-watch="inview" className="c gr a-top">
                <div
                  data-dom="bl"
                  id="w-node-e6eefcba-5f91-5da5-0dd5-7944f55f9704-6b813456"
                  className="p-spec-w"
                >
                  <div className="p-spec-line mt-0">
                    <div className="font-alt">#Ref</div>
                    <div>Sketch Book</div>
                  </div>
                  <div className="p-spec-line">
                    <div className="font-alt">Year</div>
                    <div>2022</div>
                  </div>
                  <div className="p-spec-line">
                    <div className="font-alt">Output</div>
                    <div>Imgs</div>
                  </div>
                  <div className="p-spec-line">
                    <div className="font-alt">Count</div>
                    <div>10 / 10</div>
                  </div>
                  <div className="p-spec-line">
                    <div className="font-alt">Stage</div>
                    <div>Research</div>
                  </div>
                  <div className="p-spec-line">
                    <div className="font-alt">Type</div>
                    <div>Practice</div>
                  </div>
                </div>
                <div id="w-node-_9b98297d-6694-f36b-b4d7-6093ca47c5ae-6b813456">
                  <div data-dom="bl" className="text-lc _w-ch w-richtext">
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat, this is
                      the desc @hero -formatted
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
              <div data-watch="inview" className="c gr a-top">
                <div id="w-node-_9f7b5d45-7208-1b6a-29e6-866d293bd6c1-6b813456">
                  <a
                    data-dom="a"
                    href="https://fwet.webflow.io/study/botanical-variations"
                    className="link-w w-inline-block"
                  >
                    <div>Case Study</div>
                  </a>
                </div>
              </div>
            </section>
            <section data-change="close" className="s is-black">
              <div className="w-dyn-list">
                <script
                  type="text/x-wf-template"
                  id="wf-template-a66644db-ff96-ddff-f0c8-b3fc05643c61"
                >
                  %3Cdiv%20role%3D%22listitem%22%20class%3D%22w-dyn-item%20w-dyn-repeater-item%22%3E%3Cdiv%20data-gl%3D%22homei%22%20class%3D%22home-img%22%3E%3Cimg%20data-utils%3D%22hid%22%20loading%3D%22eager%22%20src%3D%22https%3A%2F%2Fassets.website-files.com%2F6255dd9242faeb172f3fe028%2F62ef96b07ed5f431ddce03ff_grid2.png%22%20alt%3D%22%22%20sizes%3D%22100vw%22%20srcset%3D%22https%3A%2F%2Fassets.website-files.com%2F6255dd9242faeb172f3fe028%2F62ef96b07ed5f431ddce03ff_grid2-p-500.png%20500w%2C%20https%3A%2F%2Fassets.website-files.com%2F6255dd9242faeb172f3fe028%2F62ef96b07ed5f431ddce03ff_grid2-p-800.png%20800w%2C%20https%3A%2F%2Fassets.website-files.com%2F6255dd9242faeb172f3fe028%2F62ef96b07ed5f431ddce03ff_grid2.png%201024w%22%20class%3D%22image-2%22%2F%3E%3C%2Fdiv%3E%3C%2Fdiv%3E
                </script>
                <div data-css="3" role="list" className="c gr-sl w-dyn-items">
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div data-gl="homei" className="home-img">
                      <img
                        data-utils="hid"
                        loading="eager"
                        src="https://assets.website-files.com/6255dd9242faeb172f3fe028/62ef96b07ed5f431ddce03ff_grid2.png"
                        alt=""
                        sizes="100vw"
                        className="image-2"
                      />
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div data-gl="homei" className="home-img">
                      <img
                        data-utils="hid"
                        loading="eager"
                        src="https://assets.website-files.com/6255dd9242faeb172f3fe028/62ef96b058ad152f1611f50e_grid4.png"
                        alt=""
                        sizes="100vw"
                        className="image-2"
                      />
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div data-gl="homei" className="home-img">
                      <img
                        data-utils="hid"
                        loading="eager"
                        src="https://assets.website-files.com/6255dd9242faeb172f3fe028/62ef96b006d8483708c37742_grid3.png"
                        alt=""
                        sizes="100vw"
                        className="image-2"
                      />
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div data-gl="homei" className="home-img">
                      <img
                        data-utils="hid"
                        loading="eager"
                        src="https://assets.website-files.com/6255dd9242faeb172f3fe028/62ef96b017fa633b93a620ba_grid5.png"
                        alt=""
                        sizes="100vw"
                        className="image-2"
                      />
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="w-dyn-item w-dyn-repeater-item"
                  >
                    <div data-gl="homei" className="home-img">
                      <img
                        data-utils="hid"
                        loading="eager"
                        src="https://assets.website-files.com/6255dd9242faeb172f3fe028/62ef96b07ed5f40921ce03fe_grid7.png"
                        alt=""
                        sizes="100vw"
                        className="image-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="empty-state w-dyn-hide w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </section>
            <section data-change="close" className="s is-black hide">
              <div data-gl="img" className="c fill">
                <img
                  src="https://assets.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  loading="eager"
                  alt=""
                  className="p-main-img"
                />
              </div>
            </section>
            <section data-change="close" className="s is-black">
              <div data-watch="inview" className="c gr">
                <div
                  data-dom="bl"
                  id="w-node-e5486f00-1d9b-a9dc-551e-3596ce06d877-6b813456"
                  className="p-spec-w"
                >
                  <div>exhibitions, AUCTIONS, GALLERIES</div>
                  <div className="p-spec-line mt-10">
                    <div className="shows-text w-richtext">
                      <ul role="list">
                        <li>
                          Center for the Arts, Porto, PT <em>2022</em>
                        </li>
                        <li>
                          EICBA, Marseille, FR <em>2021</em>
                        </li>
                        <li>
                          New Grounds, Milan, IT <em>2021</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section data-gls="list" className="s">
              <div className="c is-st tx-alt">
                <div className="u _12"></div>
                <div className="u _3 to-2">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      ref#
                    </div>
                  </div>
                </div>
                <div className="u _1">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Year
                    </div>
                  </div>
                </div>
                <div data-bp="tab" className="u _1">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Output
                    </div>
                  </div>
                </div>
                <div data-bp="tab" className="u _1"></div>
                <div data-bp="tab" className="u _1">
                  <div data-dom="p">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Result
                    </div>
                  </div>
                </div>
                <div data-bp="tab" className="u _4"></div>
                <div className="u _1">
                  <div data-dom="p" data-bp="tab">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                      }}
                    >
                      Buy
                    </div>
                  </div>
                </div>
              </div>
              <div data-mouse="calc" className="w-dyn-list">
                <div role="list" className="c din-el w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      data-ho="line"
                      href="/work/test-6"
                      className="line-el w-inline-block"
                    >
                      <div className="u _3 to-2">
                        <div data-ho="arrow" data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Test 6
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                           2022
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Imgs
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            10 / 10
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Commercial
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _4"></div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p" data-bp="tab">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            -
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      data-ho="line"
                      href="/work/test-5"
                      className="line-el w-inline-block"
                    >
                      <div className="u _3 to-2">
                        <div data-ho="arrow" data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                           Test 5
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            2022
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Imgs
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            10 / 10
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Commercial
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _4"></div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p" data-bp="tab">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            -
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      data-ho="line"
                      href="/work/test4"
                      className="line-el w-inline-block"
                    >
                      <div className="u _3 to-2">
                        <div data-ho="arrow" data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                           Another Title
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            2022
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                           Imgs
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            10 / 10
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Commercial
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _4"></div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p" data-bp="tab">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            -
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      data-ho="line"
                      href="/work/test3"
                      className="line-el w-inline-block"
                    >
                      <div className="u _3 to-2">
                        <div data-ho="arrow" data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Title
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            2022
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Imgs
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            10 / 10
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Commercial
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _4"></div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p" data-bp="tab">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            -
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      data-ho="line"
                      href="/work/test2"
                      className="line-el w-inline-block"
                    >
                      <div className="u _3 to-2">
                        <div data-ho="arrow" data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Two Lines Titel
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            2022
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Imgs
                          </div>
                        </div>
                      </div>
                      <div className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            10 / 10
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            Commercial
                          </div>
                        </div>
                      </div>
                      <div data-bp="tab" className="u _4"></div>
                      <div data-bp="tab" className="u _1">
                        <div data-dom="p" data-bp="tab">
                          <div
                            style={{
                              display: "block",
                              textAlign: "start",
                              position: "relative",
                            }}
                          >
                            -
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <footer data-change="close" className="s is-black">
              <div data-watch="inview" className="c h-full">
                <div data-dom="vline" className="el-line-v"></div>
              </div>
              <a data-href="home" href="/" className="c w-inline-block"></a>
              <div data-watch="inview" className="c h-full longer"></div>
            </footer>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
