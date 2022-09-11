import Emitter from "tiny-emitter";
import Watch from "./utils/watch";

export class R extends Emitter {
  constructor() {
    super();
    this.host = window.location.host;
    this.wrapper = document.querySelector("[data-route]").parentElement;

    this.cache = new Map();
    this.pending = new Map();

    this.setup();
    window.onpopstate = (e) => this.onPop(window.location);
  }

  setup() {
    const dom = this.wrapper.querySelector("[data-route]").cloneNode(true);
    if (!this.current) {
      this.current = {
        path: window.location.pathname,
        links: [],
        route: dom.dataset.route,
        dom: dom,
        data: {
          title: document.title,
          meta: {},
          href: window.location.href,
        },
      };
    } else {
      this.current.path = window.location.pathname;
      this.current.dom = dom;
    }

    this.current.links = getPageLinks(this.host, this.current.path);
    this.current.links.forEach((link) => {
      link.addEventListener("mouseover", this.onHover.bind(this, link));
      link.onclick = (e) => this.onClick(e, link);
    });

    this.cache.set(this.current.path, this.current);
  }

  /**
   * Page In Loop
   */

  onPop(target) {
    const data = getCache(this.cache, target.pathname);
    this.initTransition(data);
  }

  async onHover(link) {
    // check cache for route
    const cacheCheck = checkCache(this.cache, link.pathname);
    if (cacheCheck) return;

    // else fetch
    this.pending.set(link.pathname, fetchAndParse(link));
    const page = await this.pending.get(link.pathname);
    this.pending.delete(link.pathname);

    // and update cache
    this.cache.set(page.path, page);

    // console.log("cache +", this.cache);
  }

  onClick(e, link) {
    if (e) e.preventDefault();
    if (link.pathname === window.location.pathname) return;
    this.onLinkClicked();

    this.current = document.querySelector("[data-route]").style.pointerEvents =
      "none";

    const data = getCache(this.cache, link.pathname);

    if (data === null) {
      this.pending.get(link.pathname).then((data) => {
        // [ ] TODO - add a check to see if there's a promise waiting or not
        console.log("no data, waited");
        this.initTransition(data);
      });
      return;
    } else {
      this.initTransition(data);
    }
  }

  /**
   * Transition Ops
   */

  onLinkClicked() {
    this.emit("T_CLICK");
  }

  initTransition(next) {
    this.emit("T_START", this.current, this.next); //((((((EMIT))))))

    // console.log("transitioning from -- to:", this.current, next);

    this.wrapper.querySelector("[data-route]").remove();

    this.wrapper.appendChild(next.dom);
    this.current = next;

    this.emit("T_END", this.next); //((((((EMIT))))))

    updateDom(this.current.data);
    this.setup();

    this.emit("T_DONE", this.next); //((((((EMIT))))))
  }
}

/* UTIL: Dom things */
function updateDom({ title, href }) {
  document.title = title;
  window.history.pushState({}, "", href);
}

/* UTIL: Fetch and Parse */
async function fetchAndParse({ href, pathname }) {
  const page = await fetchPage(href);
  
  const PARSER = new window.DOMParser();
  const parsed = PARSER.parseFromString(page, "text/html");

  const parsedDom = parsed.querySelector("[data-route]");
  console.log(parsedDom);
  const pageData = {
    path: pathname,
    links: [],
    route: parsedDom.dataset.route,
    dom: parsedDom,
    data: {
      title: parsed.title,
      meta: {},
      href: href,
    },
  };

  return pageData;
}

/* UTIL: Fetch  */
async function fetchPage(href) {
  const response = await fetch(href, {
    mode: "same-origin",
    method: "GET",
    headers: { "X-Requested-With": "Router" },
    credentials: "same-origin",
  });

  if (response.status >= 200 && response.status < 300) {
    return response.text();
  }

  // console.log("Location")
  // console.log(this.location)
  // window.location.href = this.location.href;
}

/* UTIL: Setup Links */
function getPageLinks(host, currentPath, domelem = document) {
  const selector = `a:not([target]):not([data-router-disabled])`;
  const pageLinks = document.querySelectorAll(selector);

  const links = [];

  for (const link of pageLinks) {
    if (link.pathname !== currentPath && link.host === host) {
      links.push(link);
    }
  }

  // console.log(links);

  return links;
}

/* UTIL: Cache Check */
function checkCache(cache, route) {
  if (cache.has(route)) {
    return true;
  } else return false;
}

/* UTIL: Cache Get */
function getCache(cache, route) {
  if (cache.has(route)) return cache.get(route);
  return null;
}

/***
 * Variants
 */

export class Router extends R {
  constructor() {
    super();

    this.getScrollTriggers();
  }

  initTransition(next) {
    // console.log("transitioning from -- to:", this.current, next);

    this.next = next;

    this.emit("T_START", {
      current: this.current.route,
      next: this.next.route,
    }); //((((((EMIT))))))
  }

  removeCurrent() {
    this.wrapper.querySelector("[data-route]").remove();
  }

  addNext() {
    this.wrapper.appendChild(this.next.dom);
    this.current = this.next;
  }

  swap() {
    return new Promise((resolve) => {
      this.removeCurrent();
      this.addNext();
      this.finishAndReset();

      resolve();
    });
  }

  finishAndReset() {
    updateDom(this.current.data);
    this.setup();
    this.getScrollTriggers();
  }

  /** --- Variations */
  getScrollTriggers() {
    this.scrollTriggers = [...document.querySelectorAll("[data-href]")];

    this.scrollTriggers.forEach((trigger) => {
      const w = new Watch(trigger);
      w.on("isIn", () => {
        this.onHover(trigger);
        this.onClick(null, trigger);
      });
    });
  }
}
