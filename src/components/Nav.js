import React from "react";
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
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/services">
            <li>Services</li>
          </a>
          <a href="/events">
            <li>Events</li>
          </a>
          <a href="/portfolio">
            <li>Portfolio</li>
          </a>
          <a href="/contacts">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
