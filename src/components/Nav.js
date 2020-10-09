import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  const openHamMenu = () => {
    document.getElementsByTagName("ul")[0].classList.toggle("open");
  };

  return (
    <div className="nav">
      <button onClick={openHamMenu} className="nav__hamMenu">
        &#9776;
      </button>
      <div className="nav__logo">
        <img className="nav__logo" src="/images/nav-logo.png" alt="logo" />
      </div>
      <div className="nav__lists">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link to="contacts">
            <li>Contacts</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
