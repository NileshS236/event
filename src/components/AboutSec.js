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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            laudantium ipsam blanditiis corporis inventore repellat. Quod eum
            dignissimos, nulla
            <br /> consectetur quis eligendi ea? Blanditiis modi eligendi nobis
            assumenda placeat expedita hic, harum soluta quibusdam at est eaque
            officiis quam vitae commodi? Vero sed labore officia asperiores?
            Voluptas ut placeat in!
          </h5>
          <button className="about__more">View More &#62;</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
