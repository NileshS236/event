import React from "react";
import { Link } from "react-router-dom";
import "../styles/DisplayEvent.css";

const DisplayEvent = ({ image, name, id }) => {
  return (
    <a href={`/events/${id}`}>
      <div className="displayEvent">
        <img src={image} alt="pict" />
        <h2>{name}</h2>
      </div>
    </a>
  );
};

export default DisplayEvent;
