import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="Services">
      <div className="Services__home">
        <h1>Services</h1>
        <p>
          <a href="/">Home</a> / Services
        </p>
      </div>
      <div className="Services__content">
        <a href="/contacts">
          <div className="Service">
            <img src="/images/web-design.svg" alt="web-design" />
            <h4>Creative Web Design</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/iot-services.svg" alt="iot-services" />
            <h4>IOT Services</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/digital-marketing.svg" alt="digital-marketing" />
            <h4>Digital Marketing</h4>
          </div>
        </a>

        {/* ------------------------------------- */}
        <a href="/contacts">
          <div className="Service">
            <img src="/images/App-development.svg" alt="web-design" />
            <h4>App Development</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/Bug-fixing.svg" alt="iot-services" />
            <h4>Bug Fixing</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/E-commerce.svg" alt="digital-marketing" />
            <h4>E-Commerce</h4>
          </div>
        </a>

        {/* ------------------------------- */}
        <a href="/contacts">
          <div className="Service">
            <img src="/images/mobile-training.svg" alt="web-design" />
            <h4>Training of Smart Phone</h4>
          </div>
        </a>
        <a href="/contacts">
          <div className="Service">
            <img src="/images/computer-training.svg" alt="web-design" />
            <h4>Training of Laptop/Computer</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/computer-repair.svg" alt="web-design" />
            <h4>Computer Repair</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/computer-services.svg" alt="web-design" />
            <h4>Computer Services</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/digital-event-designing.svg" alt="web-design" />
            <h4>Digital Event Designing</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/digital-event-organising.svg" alt="web-design" />
            <h4>Digital Event Organising</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/Event-management.svg" alt="iot-services" />
            <h4>Teaching of all coding languages</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/Logo-design.svg" alt="digital-marketing" />
            <h4>Graphic Designing</h4>
          </div>
        </a>

        {/* -------------------------------------- */}
        <a href="/contacts">
          <div className="Service">
            <img src="/images/Software-development.svg" alt="web-design" />
            <h4>Software Development</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/Video-editing.svg" alt="iot-services" />
            <h4>Video Editing</h4>
          </div>
        </a>

        <a href="/contacts">
          <div className="Service">
            <img src="/images/Security.svg" alt="digital-marketing" />
            <h4>Cyber Security</h4>
          </div>
        </a>
        <a href="/contacts">
          <div className="Service">
            <img src="/images/ethical-hacking.svg" alt="digital-marketing" />
            <h4>Ethical Hacking</h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Services;
