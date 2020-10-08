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
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Events</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
