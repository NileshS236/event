import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  const openHamMenu = () => {
    document.getElementsByTagName("ul")[0].classList.toggle("open");
  };

  const removeNav = () => {
    document.getElementsByTagName("ul")[0].classList.remove("open");
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
            <li onClick={removeNav}>Home</li>
          </a>
          <a href="/about">
            <li onClick={removeNav}>About</li>
          </a>
          <a href="/services">
            <li onClick={removeNav}>Services</li>
          </a>
          <a href="/events">
            <li onClick={removeNav}>Events</li>
          </a>
          <a href="/portfolio">
            <li onClick={removeNav}>Portfolio</li>
          </a>
          <a href="/contacts">
            <li onClick={removeNav}>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
