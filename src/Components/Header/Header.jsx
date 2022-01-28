import './Header.scss';
import './Menu.scss';
import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-scroll';

const Header = () => {
  const animationContainer = useRef(null);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./animation.json'),
    });
  }, []);


  const MenuBar = (
    <div className="menu-container" id="home">
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
    <div className="header" id='header'>
      <div className="bg-layer"></div>
<div className="header-wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
</div>
      <div className="navbar">
     <div className="back-to-top"> <Link to="header" smooth="true" duration={1000}><IoIosArrowUp/></Link></div>
        <span className="logo">YL.</span>
        {menu ? (
          <span className="menu" onClick={() => setMenu(!menu)}>
            <GoThreeBars />
          </span>
        ) : (
          MenuBar
        )}
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
          <h1>Hi!</h1>
          <h2>
            I'm <strong>Yotam Levy</strong>
          </h2>
          <span>Full Stack Developer</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            recusandae. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Tempora quas ea numquam error, molestiae asperiores minima.
            Voluptas modi quod eligendi.
          </p>
          <button className="view-work"><Link to="projects" smooth="true" duration={1000}>View my work.</Link></button>
        </div>
        <div className="my-icon">
          <div className="hero-animation" ref={animationContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
