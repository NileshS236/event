import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <div className="About">
      <div className="About__home">
        <h1>About</h1>
        <p>
          <Link to="/">Home</Link> / About
        </p>
      </div>
      <div className="About__content">
        <div className="About__info">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vel.
            Ratione labore quod voluptas in sunt aut eaque deserunt unde numquam
            maiores voluptates soluta facere reprehenderit voluptatum,
            doloremque eius? Repellendus aspernatur rem quae itaque veniam,
            pariatur quos tempore velit ullam officiis esse aliquid laboriosam,
            voluptate, tempora laudantium! Quidem, enim fugit.
          </h5>
        </div>
        <img className="About__svg" src="/images/about.svg" alt="about" />
      </div>
      <div className="About__team">
        <h1>Meet Our Team</h1>
        <div className="About__members">
          <div className="member">
            <img src="/images/img.jfif" alt="Riddhi" />
            <h2 className="member__name">SRG</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
