import React from "react";

import "../styles/ServicesSec.css";

const ServicesSec = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services__content">
        <a to="/contacts">
          <div className="service__webDesign service">
            <img src="/images/web-design.svg" alt="web-design" />
            <h4>Creative Web Design</h4>
          </div>
        </a>

        <a to="/contacts">
          <div className="Service">
            <img src="/images/mobile-training.svg" alt="web-design" />
            <h4>Training of Smart Phone</h4>
          </div>
        </a>
        <a to="/contacts">
          <div className="service__digMarketing service">
            <img src="/images/digital-marketing.svg" alt="digital-marketing" />
            <h4>Digital Marketing</h4>
          </div>
        </a>
      </div>
      <a href="/services">
        <button className="services__viewMore">View More &#62;</button>
      </a>
    </div>
  );
};

export default ServicesSec;
