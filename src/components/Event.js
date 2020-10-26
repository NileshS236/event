import React, { useEffect, useState } from "react";
import "../styles/Event.css";
import axios from "axios";
import DisplayEvent from "./DisplayEvent";

function Event() {
  const [eventData, setEventData] = useState([]);

  // console.log(view);

  const fetchEventData = async () => {
    const response = await axios.get(
      "https://techtrickz.in/Apis/eventForm/fetch.php"
    );
    setEventData(response.data);
  };

  let events =
    eventData.length &&
    eventData.filter((event) => {
      if (event.name !== "" && event.image !== "") {
        return event;
      }
    });

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="Event">
      <div className="Event__home">
        <h1>Upcoming Events</h1>
      </div>
      <div className="Event__content">
        {events &&
          events?.map((event) => (
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
