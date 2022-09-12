import Image from "next/future/image";

const Intro = () => {
  return (
    <header className="s hero">
      <div data-dom="h" data-layer="under" className="c-u is-cent is-fh">
        <div className="logo-brand">
          <div>TJC</div>
        </div>
      </div>
      <div data-gls="hero" className="gl-ph abs">
        <div
          data-dom="a"
          className="grid-w"
          style={{ opacity: 1, visibility: "inherit" }}
        >
          <div
            id="home-image-1"
            className="gl-img-w is-flip"
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
            id="home-image-2"
            className="gl-img-w"
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
            id="home-image-3"
            className="gl-img-w is-flip lg"
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
            id="home-image-4"
            className="gl-img-w is-flip lg"
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
          <div
            id="home-image-5"
            data-utils="hid"
            className="gl-img-w"
            data-title="Luminar"
          >
            <div className="grid-item w-embed">
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
          <div id="home-image-6" className="gl-img-w" data-title="Spirituality">
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
          className="note-c"
          style={{ opacity: 1, visibility: "inherit" }}
        >
          <div className="note-num">(1 - 8)</div>
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
    </header>
  );
};

export default Intro;
