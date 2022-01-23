import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <span>YL.</span>
        <ul className="navbar-ul">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="details-container">
        <div className="bg-img"></div>
        <div className="my-info">
          <h1>Hello!</h1>
          <h2>I'm Yotam Levy</h2>
          <h3>Full Stack Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            recusandae. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Tempora quas ea numquam error, molestiae asperiores minima.
            Voluptas modi quod eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
