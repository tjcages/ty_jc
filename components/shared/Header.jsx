/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

const Header = () => {
  return (
    <nav className="s nav">
      <div className="c nav">
        <div data-nav="a" className="u c-nav-col">
          <a data-lk="b" href="/" className="w-inline-block">
            <div data-nav="sc">ty_jc</div>
          </a>
        </div>
        <div className="c-nav-col is-cent">
          <div className="u _5">
            A experimental practice targeting unique based outputs
          </div>
          <div className="u _1">
            DE CO <span data-clock="it">0000</span>
          </div>
          <div className="u _1">
            NY NY <span data-clock="ba">0001</span>
          </div>
          <div data-bp="tab" className="u"></div>
          <div data-bp="tab" className="u"></div>
          <div data-bp="tab" className="u"></div>
          <div className="u _4">running on virtual & physical mediums</div>
          <div className="u _5">
            Repped by PARTY ROUND & [GALLERY] + NY Founder Group ©
          </div>
        </div>
        <div className="c-nav-col is-right">
          <div data-nav="a" className="u">
            <a data-lk="b" href="/menu" className="w-inline-block">
              <div data-nav="p">&ldquo; Menu &rdquo;</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
