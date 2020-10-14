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
            Founded in 2020, Techtrickz is growing into one company which can
            give you all best Service related to TECHNOLOGY. Technology is fast
            changing the fundamental nature of businesses. One company which you
            can experience with all the amazing service You don’t need to get
            afraid now our company will help you to get friendly with
            technology, we have all expertise in our team for all things related
            to tech We believe that technology is very useful in day-to-day life
            it be business, teaching, marketing, event etc..all are going
            digital and we are there with you now. Our aim is to help you to GO
            DIGITAL.and also how to make the most of today's tech. The only
            company with all facilities just for you We're tech enthusiasts on a
            mission to give service to the world under one company how to use
            and understand the technology in their life. Phones, laptops,
            gadgets, apps, software, websites, services etc… for making your
            life better, we will show you all the tips, tricks, techniques and
            also will give you best service. you need to know to get the most
            out of what you have. We are there to grow your digital experience
            with us so get services and solutions as we aimed to deliver value
            to each client's specific business goals. so Visit us today!
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
