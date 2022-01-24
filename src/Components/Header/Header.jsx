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
         <div className="my-info">
          <h1>Hello!</h1>
          <h2>I'm <strong>Yotam Levy,</strong></h2>
          <span>Full Stack Developer</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            recusandae. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Tempora quas ea numquam error, molestiae asperiores minima.
            Voluptas modi quod eligendi.
          </p>
        </div>
        <div className="my-icon">
        </div>
      </div>
    </div>
  );
};

export default Header;
