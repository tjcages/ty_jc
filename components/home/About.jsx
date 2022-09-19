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
            <span className="tx-intro">Forward Etude.</span>A data based,
            Artificial Intelligence and generative art research collective
            practice roaming &nbsp;<span className="italic">physical and digital spaces</span>.
          </div>
        </div>
      </div>
      <div className="c gr mt-5">
        <Link href="/work">
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
                  All Work ¬
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
