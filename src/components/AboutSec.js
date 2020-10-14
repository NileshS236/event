import React from "react";
import "../styles/AboutSec.css";

const AboutSec = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about__content">
        <img className="about__svg" src="/images/about.svg" alt="about" />
        <div className="about__info">
          <h5>
            Founded in 2020, Techtrickz is growing into one company which can
            give you all best Service related to TECHNOLOGY. Technology is fast
            changing the fundamental nature of businesses. One company which you
            can experience with all the amazing service You don’t need to get
            afraid now our company will help you to get friendly with
            technology, we have all expertise in our team for all things related
            to tech
          </h5>
          <a href="/about">
            <button className="about__more">View More &#62;</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
