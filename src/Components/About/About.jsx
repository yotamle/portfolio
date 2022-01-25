import './About.scss';
import { SiHtml5,SiCss3,SiJavascript,SiMongodb,SiFirebase} from 'react-icons/si';
import {FaSass,FaReact,FaNodeJs, FaNpm,FaGitAlt} from 'react-icons/fa'
const About = () => {
  return (
    <div className="about-container">
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
      <h3>Skills</h3>
      <div className="skills">
        <ul className='ul-flex'>
          <li className='vscode-icons:file-type-css'><SiHtml5/></li>
          <li><SiCss3/></li>
          <li><FaSass/></li>
          <li><SiJavascript/></li>
          <li><FaReact/></li>

          <li><FaNodeJs/></li>
          <li><SiMongodb/></li>
          <li><SiFirebase/></li>
          <li><FaNpm/></li>
          <li><FaGitAlt/></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
