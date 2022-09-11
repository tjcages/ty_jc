const Footer = () => {
  return (
    <footer className="s footer">
      <div className="c is-low">
        <div data-watch="inview" className="u _7 to-full inview">
          <div data-dom="bl">
            No data is collected on this website apart from non-intrusive,
            anonymous count and usage statistics in an attempt to better
            the navigation experience. <br />Data is collected in an untraceable and
            anonymous form. <br />
            <br />
            Crafted by {" "}
            <a
              href="https://twitter.com/tjcages"
              data-lk="b"
              target="_blank"
              rel="noreferrer"
            >
              tylerj
            </a>
          </div>
        </div>
        <div className="u _2"></div>
        <div className="u _2 right">
          <div data-dom="h">
            <div
              style={{
                display: "block",
                textAlign: "start",
                position: "relative",
              }}
            >
              @ NYC / 2022
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;