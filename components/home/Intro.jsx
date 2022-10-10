import React, { useState, useEffect } from "react";
import Image from "next/future/image";
import { isTablet } from "../../modules/utils/agents";

const Intro = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isTablet());
  }, []);

  return (
    <main className="s hero" id="intro">
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
                  src="/img/will.jpg"
                  alt=""
                  width={356}
                  height={356}
                />
              </figure>
            </div>
          </div>
          <div className="img-container intro-image-5 lg" data-title="Luminar">
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="/img/capital-wall.jpg"
                  alt=""
                  width={356}
                  height={356}
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
                <video
                  crossOrigin="anonymous"
                  playsInline={true}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  src="https://assets.website-files.com/6176c3b63b320c8e291dda54/630617294dc69423131d7a61_b2efca96-9d60-47b4-bdaf-60a0655210ff%20(1)-transcode.mp4"
                  width="100%"
                ></video>
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
              VIDEO&nbsp;&&nbsp;IMAGES,
              <br />
              <span className="is-lc">
                generated for CAPITAL, [GALLERY], & TY_JC
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
