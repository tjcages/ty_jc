import React, { useState, useEffect } from "react";
import Image from "next/future/image";
import { isTablet } from "../../modules/utils/agents";
import DomQuad from "../../modules/gl/mod/_dom";

const data = [
  {
    num: "009",
    title: "CAPITAL",
    year: "2022",
    build: "Launch",
    result: "Visit site",
    href: "https://capital.xyz/",
    image: "/img/capital.png",
  },
  {
    num: "008",
    title: "NEW YORK TECH WEEK",
    year: "2022",
    build: "Events",
    result: "Check out",
    href: "https://nyctechweek.xyz/",
    image: "/img/nyctw.png",
  },
  {
    num: "007",
    title: "PARTY ROUND MAG",
    year: "2022",
    build: "Drop",
    result: "Visit site",
    href: "https://partyroundmag.com/",
    image: "/img/mag.jpg",
  },
  {
    num: "006",
    title: "STARTUP SUPREME",
    year: "2022",
    build: "Drop",
    result: "Visit site",
    href: "https://www.startupsupreme.xyz/",
    image: "/img/bust-rgb.jpg",
    image:
      "https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/63168234191886565f7b6c17_62ce33f67ec6b08ed8de4b7d_greyscale.png",
  },
  {
    num: "005",
    title: "VENTURE PARTNERSHIPS",
    year: "2022",
    build: "GTM",
    result: "More info",
    href: "http://google.com",
    image: "/img/capital-wall.jpg",
    active: false,
  },
  {
    num: "004",
    title: "PARTY ROUND",
    year: "2022",
    build: "Site",
    result: "Visit site",
    href: "https://www.partyround.com/",
    image: "/img/partyround.jpg",
  },
  {
    num: "003",
    title: "GOTTA CATCH THEM ALL",
    year: "2022",
    build: "Mini-Drop",
    result: "Visit drop",
    href: "https://twitter.com/jordihays/status/1512102958929887232",
    image:
      "https://uploads-ssl.webflow.com/5f47fcf4fc81fecce371f46f/62521ae826b5ff151826cb9d_624f09c370adc21a89f58dd3_starting-round.gif",
  },
  {
    num: "002",
    title: "THE CURATED AESTHETIC",
    year: "2022",
    build: "Experiment",
    result: "Visit site",
    href: "https://www.thecuratedaesthetic.xyz/",
    image: "/img/curated.jpg",
  },
  {
    num: "001",
    title: "WEBFLITE",
    year: "2022",
    build: "App",
    result: "Check out",
    href: "https://www.webflow-cms.com/",
    image: "/img/webflite.jpg",
  },
];

const Projects = (props) => {
  const [mobile, setMobile] = useState(false);
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    setMobile(isTablet());

    init();
  }, []);

  const init = () => {
    if (focus == null) {
      setTimeout(() => {
        setFocus(0);
      }, 1000);
    }
  };

  return (
    <section data-gls="list" className="s">
      <div className="c is-st">
        <div className="u _2">
          <div data-dom="p">
            <div
              style={{
                display: "block",
                textAlign: "start",
                position: "relative",
              }}
            >
              Work & Display
            </div>
          </div>
        </div>
        <div className="u _2">
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
                Most recent experiences built &
              </div>
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
                displayed in physical or
              </div>
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
                digital spaces.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c is-st tx-alt">
        <div className="u _12"></div>
        <div className="u _3 to-2"></div>
        <div data-bp="tab" className="u _1"></div>
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
              Project
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
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  transform: "translate(0px, 0%)",
                }}
              >
                Showcase
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-mouse="calc" className="w-dyn-list">
        <div role="list" className="c din-el">
          {data
            .filter((item) => item.active !== false)
            .map((item, index) => (
              <>
                {item.image && (
                  <div className="project-image-container">
                    <div
                      data-gl="homei"
                      className="home-img"
                      style={{
                        display:
                          focus == index || focus == null ? "block" : "none",
                      }}
                    >
                      <Image
                        crossOrigin=""
                        loading="eager"
                        src={item.image}
                        alt={item.title}
                        width={256}
                        height={256}
                      />
                    </div>
                  </div>
                )}

                <a
                  key={index}
                  data-nav="a"
                  href={item.href}
                  target="_blank"
                  aria-current="page"
                  rel="noreferrer"
                  onMouseEnter={() => setFocus(index)}
                  // onMouseLeave={() => setFocus(null)}
                >
                  <div
                    role="listitem"
                    className="w-dyn-item line-el w-inline-block"
                  >
                    <div className="u _1">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          [ 00{index} ]
                        </div>
                      </div>
                    </div>
                    <div className="u _3 to-2">
                      <div data-ho="arrow" data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          {item.title}
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
                          {item.year}
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
                          {item.build}
                        </div>
                      </div>
                    </div>
                    <div data-bp="tab" className="u _2">
                      <div data-dom="p">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                          }}
                        >
                          ↗ {item.result}
                        </div>
                      </div>
                    </div>
                    <div data-bp="tab" className="u _4"></div>
                  </div>
                </a>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
