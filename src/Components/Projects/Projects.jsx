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
              build with: html, scss, javascript.
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
              Countries App with search by country and show information about
              that country. <br />
              react, rest api , css.
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
              App where can you practice programming languages, see the
              solution, and share with other people. <br />
              front-end: react, css. <br />
              back-end: node, mongodb, express.
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
              My personal portfolio where you can connect with me.
              <br />
              build with react, scss.
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
