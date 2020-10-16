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
      <div className="img">
        <img className="About__png" src="/images/riddhi.png" alt="about" />
        <div className="Aboutpng__info">
          <h5>
            Hello, People out there! I, Riddhi Bharti Hitesh Savla. Founder of
            Techtrickz, wants to share this good news with you all. Techtrickz,
            is a company which will provide an individual a wholesome services
            related to TECHNOLOGY. Globally, an individual's perspective is to
            UPGRAD YOURSELF AND UPDATE YOURSELF! So have we, decided to provide
            all kind of services which will not only be helpful to you but also
            informative. Techtrickz, is a dream which definitely will come true
            with all your love and support. So let's make a pact, hand in hand
            WE ALL WILL GROW TOGETHER, AND GLOW TOGETHER. We are dropping our
            "Bada Packet, Bada Dhamaka" - Techtrickz. It's time to live your own
            life in your style. We have come a long way from, NOKIA 312c to
            ANDROID TOUCH screen. Indulge yourself in enhancing your methods for
            using smart phones. A great initiative, one firm platform for
            Everything required to be fulfilled on your demands. Remember the
            motive, UPGRADE YOURSELF, AND UPDATE YOURSELF! with Techtrickz.
          </h5>
        </div>
      </div>
      <div className="About__team">
        <h1>Meet Our Team</h1>
        <div className="About__members">
          <div className="member">
            <img src="/images/SRG_LOGO.png" alt="Riddhi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
