import React from "react";
import { Link } from "react-router-dom";
import "../styles/DisplayEvent.css";

const DisplayEvent = ({ image, name, id }) => {
  return (
    <Link to={`/events/${id}`}>
      <div className="displayEvent">
        <img src={image} alt="pict" />
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default DisplayEvent;
