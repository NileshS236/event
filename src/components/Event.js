import React, { useEffect, useState } from "react";
import "../styles/Event.css";
import axios from "axios";
import DisplayEvent from "./DisplayEvent";

function Event() {
  const [eventData, setEventData] = useState([]);

  const fetchEventData = async () => {
    const response = await axios.get(
      "http://techtrickz.in/Apis/eventForm/fetch.php"
    );
    setEventData(response?.data);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="Event">
      <div className="Event__home">
        <h1>Upcoming Events</h1>
      </div>
      <div className="Event__content">
        {eventData?.map((event) => (
          <DisplayEvent
            key={event.E_ID}
            id={event.E_ID}
            image={event.image}
            name={event.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
