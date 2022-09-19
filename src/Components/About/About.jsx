import './About.scss';
import ICONS from './icons';

const About = () => {
  const date = new Date();
  const myYear = 1994

  return (
    <div className="about-container" id="about">
      <div className="bg-layer shape"></div>
      <h2 className="title">Who am I?</h2>
      <p>
        I'm Yotam Levy, {date.getFullYear() - myYear} years old from Israel. <br />
        Full-stack developer with
        passion to explore and learn new things every day. Programming has been
        an interest of mine for many years. In my free time I love traveling, working out and play video
        games. I'm looking for my next challenge to take my programming skills
        to another level.
      </p>

      <a
        href="https://drive.google.com/file/d/1OF0ajD_ugY2LaBYxjq_SwZWbUCQJ-kCh/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="resume-btn">My Resume</button>
      </a>
      <div className="skills">
        <h3>Skills & Tools</h3>
        <div className="skills-flex">
          <div>
            <img src={ICONS.logoHTML} alt="" />
            <span>HTML</span>
          </div>
          <div>
            <img src={ICONS.logoCSS} alt="" />
            <span>CSS</span>
          </div>
          <div>
            <img src={ICONS.logoSASS} alt="" />
            <span>SASS</span>
          </div>
          <div>
            <img src={ICONS.logoJS} alt="" />
            <span>JavaScript</span>
          </div>
          <div>
            <img src={ICONS.logoReact} alt="" />
            <span>React</span>
          </div>
          <div>
            <img src={ICONS.logoNode} alt="" />
            <span>Node</span>
          </div>
          <div>
            <img
              src={ICONS.logoExpress}
              style={{ padding: '6px 0', width: '30px' }}
              alt=""
            />
            <span>Express</span>
          </div>
          <div>
            <img src={ICONS.logoNpm} alt="" />
            <span>NPM</span>
          </div>
          <div>
            <img src={ICONS.logoMongo} alt="" />
            <span>MongoDB</span>
          </div>
          <div>
            <img src={ICONS.logoFirebase} alt="" />
            <span>Firebase</span>
          </div>
          <div>
            <img src={ICONS.logoSql} alt="" />
            <span>SQL</span>
          </div>
          <div>
            <img src={ICONS.logoGit} alt="" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
