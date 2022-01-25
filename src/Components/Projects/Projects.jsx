import './Projects.scss';
import { DiGithubFull } from 'react-icons/di';
const Projects = () => {
  return (
    <div className="projects-container">
        <h2 className='title'>Projects</h2>
      <div className="projects">
        <div className="project">
          <h2>Countries Finder</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi maxime obcaecati dolorum.
          </p>
          <span>
            <a href="">Link</a>
          </span>
          <span>
            <a href="">Github</a>
          </span>
        </div>
        <div className="project">
          <h2 style={{ color: 'red' }}>Todo List</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi maxime obcaecati dolorum. lorem
          </p>
          <span>
            <a
              style={{ color: 'red', textDecoration: 'underline red' }}
              href=""
            >
              Link
            </a>
          </span>
          <span>
            <a
              style={{ color: 'red', textDecoration: 'underline red' }}
              href=""
            >
              Github
            </a>
          </span>
        </div>
        <div className="project">
          <h2 style={{ color: 'limegreen' }}>Countries Finder</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi maxime obcaecati dolorum.
          </p>
          <span>
            <a
              style={{
                color: 'limegreen',
                textDecoration: 'underline limegreen',
              }}
              href=""
            >
              Link
            </a>
          </span>
          <span>
            <a
              style={{
                color: 'limegreen',
                textDecoration: 'underline limegreen',
              }}
              href=""
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
