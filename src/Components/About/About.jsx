import './About.scss';
import ICONS from './icons';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className='bg-layer shape'></div>
      <h2 className="title">About me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque alias
        praesentium, aliquam, cum tempore id eligendi aspernatur, sit soluta
        voluptas officia vero! Distinctio hic facere necessitatibus amet odit
        error repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit quia aspernatur soluta ullam facere tempore fuga ipsam cum, aut
        debitis placeat nulla laborum unde dolorum nesciunt, tenetur dolores
        perspiciatis dicta ex laboriosam delectus! Atque illum tempore odio,
        illo eveniet rerum recusandae autem ducimus ipsum numquam, corporis
        inventore doloribus perspiciatis dolores!
      </p>
      <div className="skills">
      <h3>Skills</h3>
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
            <img src={ICONS.logoExpress} style={{padding:"6px 0", width:"30px"}} alt="" />
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
