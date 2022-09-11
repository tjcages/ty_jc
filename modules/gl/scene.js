import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import WorkPage from "./pages/work";
import Page from "./pages/page";
import StudyPage from "./pages/study";

export default class Scene {
  constructor(gl) {
    this.gl = gl;

    this.create();
    setTimeout((_) => this.resize(this.gl), 100);
  }

  create() {
    // initial
    const start = document.querySelector("[data-route]").dataset.route;
    const page = pagePicker(start);
    this.current = new page(this.gl);
  }

  /** --- Lifecycle */
  render(t, y = 0, mouse) {
    if (this.current) this.current.render(t, y);
  }

  resize(gl) {
    this.gl = gl;
    if (this.current) this.current.resize(gl);
  }

  /** --- Router */
  handlePageChange(next) {
    // console.log("scene:", next);
    this.current = null;

    const page = pagePicker(next);
    this.current = new page(this.gl);
    this.resize(this.gl);

    setTimeout((_) => this.resize(this.gl), 100);
  }
}

/** () Pages */
function pagePicker(page) {
  switch (page) {
    case "home":
      return HomePage;
    case "project":
      return ProjectPage;
    case "work":
      return WorkPage;
    case "study":
      return StudyPage;
    default:
      return Page;
  }
}
