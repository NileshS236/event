import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="Services">
      <div className="Services__home">
        <h1>Services</h1>
        <p>
          <Link to="/">Home</Link> / Services
        </p>
      </div>
      <div className="Services__content">
        <div className="Service">
          <img src="/images/web-design.svg" alt="web-design" />
          <h4>Creative Web Design</h4>
        </div>

        <div className="Service">
          <img src="/images/iot-services.svg" alt="iot-services" />
          <h4>IOT Services</h4>
        </div>

        <div className="Service">
          <img src="/images/digital-marketing.svg" alt="digital-marketing" />
          <h4>Digital Marketing</h4>
        </div>

        {/* ------------------------------------- */}

        <div className="Service">
          <img src="/images/App-development.svg" alt="web-design" />
          <h4>App Development</h4>
        </div>

        <div className="Service">
          <img src="/images/Bug-fixing.svg" alt="iot-services" />
          <h4>Bug Fixing</h4>
        </div>

        <div className="Service">
          <img src="/images/E-commerce.svg" alt="digital-marketing" />
          <h4>E-Commerce</h4>
        </div>

        {/* ------------------------------- */}

        <div className="Service">
          <img src="/images/Email-marketing.svg" alt="web-design" />
          <h4>Email Marketing</h4>
        </div>

        <div className="Service">
          <img src="/images/Event-management.svg" alt="iot-services" />
          <h4>Event Management</h4>
        </div>

        <div className="Service">
          <img src="/images/Logo-design.svg" alt="digital-marketing" />
          <h4>Logo Designing</h4>
        </div>

        {/* -------------------------------------- */}

        <div className="Service">
          <img src="/images/Software-development.svg" alt="web-design" />
          <h4>Software Development</h4>
        </div>

        <div className="Service">
          <img src="/images/Video-editing.svg" alt="iot-services" />
          <h4>Video Editing</h4>
        </div>

        <div className="Service">
          <img src="/images/Security.svg" alt="digital-marketing" />
          <h4>Security</h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
