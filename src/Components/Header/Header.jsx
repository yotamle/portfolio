import './Header.scss';
import './Menu.scss';
import hero from './hero.svg';
import { useEffect, useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-scroll';

const Header = () => {
  const [scroll, setScroll] = useState(true);
  const [menu, setMenu] = useState(false);

  const controlScroll = () => {
    window.scrollY > 100 ? setScroll(false) : setScroll(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlScroll);
    return () => {
      window.removeEventListener('scroll', controlScroll);
    };
  }, []);

  const MenuBar = (
    <div className={`menu-container ${menu && 'toggleMenu'}`} id="home">
      <div className="exit-menu">
        <FaTimes onClick={() => setMenu(!menu)} />
      </div>
      <ul className="menu-navbar">
        <li>
          <Link
            to="home"
            smooth="true"
            duration={1000}
            onClick={() => setMenu(!menu)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth="true"
            duration={1000}
            onClick={() => setMenu(!menu)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth="true"
            duration={1000}
            onClick={() => setMenu(!menu)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth="true"
            duration={1000}
            onClick={() => setMenu(!menu)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="header" id="header">
      <div className="bg-layer"></div>
      <div className="navbar">
        <div className={`back-to-top ${scroll && 'show_back-to-top'}`}>
          <Link to="header" smooth="true" duration={400}>
            <IoIosArrowUp />
          </Link>
        </div>
        <span className="logo">YL</span>
        <span className="menu" onClick={() => setMenu(!menu)}>
          <GoThreeBars />
          {MenuBar}
        </span>
        <ul className="navbar-ul">
          <li>Home</li>
          <li>
            <Link to="projects" smooth="true" duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="about" smooth="true" duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth="true" duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="details-container">
        <div className="my-info">
          <h1>
            Hi, Im <strong>Yotam</strong>
          </h1>
          <h2>full-stack developer</h2>
          <h2>with a passion for design.</h2>
          <Link to="projects" smooth="true" duration={1000}>
            <button className="view-work">View my work.</button>
          </Link>
        </div>
        <div className="my-icon">
          <img src={hero} alt="hero icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
