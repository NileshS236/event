import React from "react";

import "../styles/ServicesSec.css";

const ServicesSec = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services__content">
        <div className="service__webDesign service">
          <img src="/images/web-design.svg" alt="web-design" />
          <h4>Creative Web Design</h4>
        </div>

        <div className="service__iot service">
          <img src="/images/iot-services.svg" alt="iot-services" />
          <h4>IOT Services</h4>
        </div>

        <div className="service__digMarketing service">
          <img src="/images/digital-marketing.svg" alt="digital-marketing" />
          <h4>Digital Marketing</h4>
        </div>
      </div>
      <button className="services__viewMore">View More &#62;</button>
    </div>
  );
};

export default ServicesSec;
