import Image from "next/future/image";

const Images = () => {
  return (
    <section className="s footer">
      <div className="c gr">
        <div
          data-gl="homei"
          id="w-node-_8845df39-e57a-adda-87fe-5765ca567273-eb1dda55"
          className="home-img"
        >
          <Image
            src="/img/bust-rgb.jpg"
            alt=""
            data-utils="hid"
            sizes="100vw"
            width={256}
            height={256}
          />
        </div>
        <div
          data-gl="homei"
          id="w-node-c6f02f81-bf86-ddc5-ebd3-b2b8bddf651e-eb1dda55"
          className="home-img"
        >
          <Image
            crossOrigin=""
            loading="eager"
            src="/img/skull.jpg"
            alt=""
            width={256}
            height={256}
          />
        </div>
        <div
          data-gl="homei"
          id="w-node-_0df836a3-f22f-24c1-f5c6-ff4625f7c8f2-eb1dda55"
          className="home-img"
        >
          <Image
            src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6316b2876f7b0e2e25f0dc18_nyt.png"
            alt=""
            data-utils="hid"
            sizes="100vw"
            width={256}
            height={256}
          />
        </div>
        <div
          data-gl="homei"
          id="w-node-c7cc95d3-f9d1-b35b-f6b1-19c5fab69c1c-eb1dda55"
          className="home-img"
        >
          <Image
            src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6316b28744c1d2ae983a1e9b_boulder.png"
            alt=""
            data-utils="hid"
            sizes="100vw"
            width={256}
            height={256}
          />
        </div>
        <div
          data-gl="homei"
          id="w-node-_903604be-e8b7-5558-508f-99b476fe336c-eb1dda55"
          className="home-img"
        >
          <Image
            src="https://uploads-ssl.webflow.com/5f162b0e0ce5746130d59063/6316933d599b5810dfdcb80b_IMG_9184.JPG"
            alt=""
            data-utils="hid"
            sizes="100vw"
            width={256}
            height={256}
          />
        </div>
      </div>
    </section>
  );
};

export default Images;
