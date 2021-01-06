import React, { useEffect } from "react";
import "../styles/Nav.css";

const Nav = ({ loc }) => {
  const openHamMenu = () => {
    document.getElementsByTagName("ul")[0].classList.toggle("open");
  };

  const removeNav = () => {
    document.getElementsByTagName("ul")[0].classList.remove("open");
  };

  const setActive = () => {
    let navlinksLI = document.querySelectorAll(".link");
    for (let i = 0; i < navlinksLI.length; i++) {
      navlinksLI[i].addEventListener("click", () => {
        for (let j = 0; j < navlinksLI.length; j++) {
          navlinksLI[j].classList.remove("active");
        }
        navlinksLI[i].classList.add("active");
      });
    }
  };

  useEffect(() => {
    setActive();
    removeNav();
  });

  useEffect(() => {
    window.addEventListener("load", () => {
      let navlinks = document.querySelectorAll(".link");
      for (let i = 0; i < navlinks.length; i++) {
        if (navlinks[i].getAttribute("id") == loc) {
          for (let j = 0; j < navlinks.length; j++) {
            navlinks[j].classList.remove("active");
          }
          navlinks[i].classList.add("active");
          break;
        } else {
          continue;
        }
      }
    });
  }, []);

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
            <li className="link" id="home" onClick={(removeNav, setActive)}>
              Home
            </li>
          </a>
          <a href="/about">
            <li className="link" id="about" onClick={(removeNav, setActive)}>
              About
            </li>
          </a>
          <a href="/services">
            <li className="link" id="services" onClick={(removeNav, setActive)}>
              Services
            </li>
          </a>
          <a href="/events">
            <li className="link" id="events" onClick={(removeNav, setActive)}>
              Events
            </li>
          </a>
          <a href="/portfolio">
            <li
              className="link"
              id="portfolio"
              onClick={(removeNav, setActive)}
            >
              Portfolio
            </li>
          </a>
          <a href="/contacts">
            <li className="link" id="contacts" onClick={(removeNav, setActive)}>
              Contact Us
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
