import React, { useState, useEffect } from "react";
import Image from "next/future/image";
import { isTablet } from "../../modules/utils/agents";

const data = [
  {
    num: "008",
    title: "PARTY ROUND MAG",
    year: "2022",
    build: "Drop",
    result: "Visit site",
    href: "https://partyroundmag.com/",
  },
  {
    num: "007",
    title: "NEW YORK TECH WEEK",
    year: "2022",
    build: "Events",
    result: "Check out",
    href: "https://nyctechweek.xyz/",
  },
  {
    num: "006",
    title: "STARTUP SUPREME",
    year: "2022",
    build: "Drop",
    result: "Visit site",
    href: "https://www.startupsupreme.xyz/",
  },
  {
    num: "005",
    title: "VENTURE PARTNERSHIPS",
    year: "2022",
    build: "GTM",
    result: "More info",
    href: "http://google.com",
  },
  {
    num: "004",
    title: "PARTY ROUND",
    year: "2022",
    build: "Site",
    result: "Visit site",
    href: "https://www.partyround.com/",
  },
  {
    num: "003",
    title: "GOTTA CATCH THEM ALL",
    year: "2022",
    build: "Mini-Drop",
    result: "Visit drop",
    href: "https://twitter.com/jordihays/status/1512102958929887232",
  },
  {
    num: "002",
    title: "THE CURATED AESTHETIC",
    year: "2022",
    build: "Experiment",
    result: "Visit site",
    href: "https://www.thecuratedaesthetic.xyz/",
  },
  {
    num: "001",
    title: "WEBFLITE",
    year: "2022",
    build: "App",
    result: "Check out",
    href: "https://www.webflow-cms.com/",
  },
];

const Projects = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isTablet());
  }, []);

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
                CURRENT WORK AND ONGOING RESEARCH INDEX,
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
                DETAILS AND AVAILABILITY. FUTURE
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
                AND CURRENT EXHIBITS IN PHYSICAL AND DIGITAL SPACES ARE
                LISTEDBELOW AS WELL.
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
                BELOW AS WELL.
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
              {mobile ? "Year" : "Projects"}
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
              Build
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
        <div className="project-image-container">
          <div data-gl="homei" className="home-img">
            <Image
              crossOrigin=""
              loading="eager"
              src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/63168234191886565f7b6c17_62ce33f67ec6b08ed8de4b7d_greyscale.png"
              alt=""
              width={256}
              height={256}
            />
          </div>
        </div>
        <div role="list" className="c din-el">
          {data.map((item, i) => (
            <a
              key={i}
              data-nav="a"
              href={item.href}
              target="_blank"
              aria-current="page"
              rel="noreferrer"
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
                      [ {item.num} ]
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
