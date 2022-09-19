import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="projects">
        <div className="project">
          <h2>Home Design</h2>
          <div className="project-flex">
            <p>
              Home design landing page that offers new design for you. <br />
               technologies: <strong>javascript, HTML, sCSS</strong>.
            </p>
            <div>
              <span>
                <a
                  href="https://github.com/yotamle/home-design-web"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>
              <span>
                <a
                  href="https://yl-homedesign.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="project">
          <h2>Countries Finder</h2>
          <div className="project-flex">
            <p>
              Countries Finder is a front-end application where you can get information about countries. <br />
              technologies: <strong>ReactJS, Rest Api, HTML, CSS</strong>.
            </p>
            <div>
              <span>
                <a
                  href="https://github.com/yotamle/countries-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>
              <span>
                <a
                  href="https://yl-countries-finder.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="project">
          <h2>Practice Programming</h2>
          <div className="project-flex">
            <p>
              Practice Programming is online website, where you can explore and learn program languages. <br />
              technologies: <strong>ReactJS, Rest Api, HTML, CSS, nodejs, express, mongodb</strong>.
            </p>
            <div>
              <span>
                <a
                  href="https://github.com/yotamle/practice-programming/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>
              <span>
                <strong className="in-process">in process</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="project">
          <h2>My Portfolio</h2>
          <div className="project-flex">
            <p>
            My personal website, where I can show my works, give information about myself and how to contact with me.
              <br />
              technologies: <strong>ReactJS, SCSS</strong>.
            </p>
            <div>
              <span>
                <a
                  href="https://github.com/yotamle/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
