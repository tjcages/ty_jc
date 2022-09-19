import React, { useState, useEffect } from "react";
import Image from "next/future/image";
import { isTablet } from "../../modules/utils/agents";

const Intro = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isTablet());
  }, []);

  return (
    <main className="s hero">
      <div data-dom="h" data-layer="under" className="logo-container">
        <div className="logo">
          <div>ty_jc</div>
        </div>
      </div>
      <div data-gls="hero" className="intro-container">
        <div
          data-dom="a"
          className="intro-grid"
          style={{ opacity: 1, visibility: "inherit" }}
        >
          <div
            className="img-container intro-image-1 is-flip"
            data-title="Ads Through the Decade"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <video
                  crossOrigin="anonymous"
                  playsInline={true}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  src="https://replicate.com/api/models/andreasjansson/stable-diffusion-animation/files/688a4c61-b298-4386-8c1f-5df3eeaf842e/output.mp4"
                  width="100%"
                ></video>
              </figure>
            </div>
          </div>
          <div
            className="img-container intro-image-2"
            data-title="Startup Supreme"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/63169cae3c13ed9383037f53_calc.jpeg"
                  // src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/631683c2d3e0526177f79106_Gold.jpg"
                  alt=""
                  width={256}
                  height={256}
                />
              </figure>
            </div>
          </div>
          <div
            className="img-container intro-image-3 is-flip lg"
            data-title="Stretching Time"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6316933e196af5752d003e18_IMG_0208.JPG"
                  alt=""
                  width={356}
                  height={356}
                />
              </figure>
            </div>
          </div>
          <div
            className="img-container intro-image-4 is-flip lg"
            data-title="Party Round Mag"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6319530265398e0f2f0bb107_throwback.jpg"
                  alt=""
                  width={356}
                  height={356}
                />
              </figure>
            </div>
          </div>
          <div className="img-container intro-image-5" data-title="Luminar">
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/631952822068da3fe10fec5a_concept.jpg"
                  alt=""
                  width={256}
                  height={256}
                />
              </figure>
            </div>
          </div>
          <div
            className="img-container intro-image-6"
            data-title="Spirituality"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6316933e3c5896d5b39bd35d_skull.png"
                  alt=""
                  width={256}
                  height={256}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="c is-right">
        <div
          data-dom="a"
          className="intro-note"
          style={{ opacity: 1, visibility: "inherit" }}
        >
          <div className="note-num">{mobile ? "(1 - 4)" : "(1 - 6)"}</div>
          <div className="u _2">
            <div>
              <span className="is-alt">Recent Projects,</span> mixed
              VIDEO&nbsp;AND&nbsp;IMAGES.
              <br />
              <span className="is-lc">
                Original pieces from custom databases, generated through
                diffusion or GANs.
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
