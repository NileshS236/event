import React from "react";
import "../styles/FactsSec.css";

const FactsSec = () => {
  return (
    <div className="facts">
      <div className="facts__header">
        <h1>Some Fun Facts</h1>
        <p>More than 100,000 websites hosted.</p>
      </div>
      <div className="facts__content">
        <div className="content">
          <h2>2,000</h2>
          <h6>COM Installation</h6>
        </div>
        <div className="content">
          <h2>100</h2>
          <h6>Awards Won</h6>
        </div>
        <div className="content">
          <h2>32,000</h2>
          <h6>Registered Domains</h6>
        </div>
        <div className="content">
          <h2>31,998</h2>
          <h6>Satisfied Customers</h6>
        </div>
      </div>
    </div>
  );
};

export default FactsSec;
