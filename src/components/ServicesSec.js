import React from "react";
import { Link } from "react-router-dom";

import "../styles/ServicesSec.css";

const ServicesSec = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services__content">
        <Link to="/contacts">
          <div className="service__webDesign service">
            <img src="/images/web-design.svg" alt="web-design" />
            <h4>Creative Web Design</h4>
          </div>
        </Link>

        <Link to="/contacts">
          <div className="Service">
            <img src="/images/mobile-training.svg" alt="web-design" />
            <h4>Training of Smart Phone</h4>
          </div>
        </Link>
        <Link to="/contacts">
          <div className="service__digMarketing service">
            <img src="/images/digital-marketing.svg" alt="digital-marketing" />
            <h4>Digital Marketing</h4>
          </div>
        </Link>
      </div>
      <Link to="/services">
        <button className="services__viewMore">View More &#62;</button>
      </Link>
    </div>
  );
};

export default ServicesSec;
