import React from "react";
import "../styles/WhyUs.css";

const WhyUs = () => {
  return (
    <div className="whyus">
      <h1 className="whyus__title">Why Choose Us?</h1>
      <div className="whyus__whys">
        <div className="whyus__whys1 whys">
          <img src="/images/active-support.svg" alt="active-support" />
          <h4>Active Support</h4>
          <h5>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </h5>
        </div>
        <div className="whyus__whys2 whys">
          <img src="/images/secured.svg" alt="active-support" />
          <h4>Safe and Secured</h4>
          <h5>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </h5>
        </div>
        <div className="whyus__whys3 whys">
          <img src="/images/100per-guarantee.svg" alt="active-support" />
          <h4>100% Uptime Guarantee</h4>
          <h5>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
