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
            data-title="Startup Supreme"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/63168234191886565f7b6c17_62ce33f67ec6b08ed8de4b7d_greyscale.png"
                  alt=""
                  width={256}
                  height={256}
                />
              </figure>
            </div>
          </div>
          {/* <div id="home-image-2" className="gl-img-w is-flip" data-title="Monolith">
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid" className="grid-item">
                <video
                  crossOrigin="anonymous"
                  playsInline=""
                  autoPlay=""
                  loop=""
                  muted=""
                  src="https://replicate.com/api/models/andreasjansson/stable-diffusion-animation/files/56df19d7-3776-4119-a0f9-d278b26a4a8a/output.mp4"
                  width="100%"
                ></video>
              </figure>
            </div>
          </div> */}
          <div
            id="home-image-3"
            className="gl-img-w"
            data-title="Pixel sorting"
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
          {/* <div id="home-image-4" className="gl-img-w" data-title="Pixel sorting">
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6316933e196af5752d003e18_IMG_0208.JPG"
                  alt=""
                  width={256}
                  height={256}
                />
              </figure>
            </div>
          </div> */}
          <div
            id="home-image-5"
            className="gl-img-w is-flip lg"
            data-title="The Butterfly Nebula"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6316933e196af5752d003e18_IMG_0208.JPG"
                  alt=""
                  width={256}
                  height={256}
                />
              </figure>
            </div>
          </div>
          <div
            id="home-image-6"
            className="gl-img-w is-flip lg"
            data-title="Death"
          >
            <div data-utils="hid" className="grid-item w-embed">
              <figure data-gl="grid">
                <Image
                  crossOrigin=""
                  loading="eager"
                  src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6319530265398e0f2f0bb107_throwback.jpg"
                  alt=""
                  width={256}
                  height={256}
                />
              </figure>
            </div>
          </div>
          <div
            id="home-image-7"
            data-utils="hid"
            className="gl-img-w"
            data-title="Startup Supreme"
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
          <div id="home-image-8" className="gl-img-w" data-title="Skull">
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
