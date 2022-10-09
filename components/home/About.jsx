import Link from "next/link";

const About = () => {
  return (
    <section className="s footer">
      <div className="c gr">
        <div
          data-watch="inview"
          id="w-node-_90d72030-2b6e-4923-8fc7-7c78509c6e66-eb1dda55"
        >
          <div data-dom="bl" className="tx-xl">
            <span className="tx-intro">Forward Etude.</span>A collection of
            unique projects, experiences, & ideas formed through a unquie design
            practice that spans{" "}
            <span className="italic">physical and digital spaces</span>.
            {/* <span className="tx-intro">Forward Etude.</span>An experience based,
            Artificial Intelligence and generative art research collective
            practice roaming{" "}
            <span className="italic">physical and digital spaces</span>. */}
          </div>
        </div>
      </div>
      <div className="c gr mt-5">
        <Link href="https://twitter.com/tjcages">
          <div data-lk="b" className="link-u link-w w-inline-block work-link">
            <div data-dom="h">
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
                  }}
                >
                  Contact ¬
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default About;
