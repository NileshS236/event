import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import "../styles/EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState([]);
  const [qts, setQts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  console.log(state);

  console.log(id);
  const fetchDetails = async () => {
    const response = await axios.get(
      `http://localhost:8080/eventForm/singledata.php?E_ID=${id}`
    );
    setState(response.data[0]);
  };

  // const qts = await axios.get('http://localhost:8080/questions/fetch.php')

  const fetchQts = async () => {
    const qts = await axios.get(
      `http://localhost:8080/questions/singledata.php?E_ID=${id}`
    );
    setQts(qts.data);
  };

  const enrollUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8080/response/insert.php",
      {
        E_ID: id,
        name: name,
        email: email,
        num: phone,
      }
    );
    console.log(response);
  };

  useEffect(() => {
    fetchDetails();
    fetchQts();
  }, []);

  return (
    <div className="eventDetails">
      <div className="eventDetails__img">
        <img src={state?.image} alt="" />
      </div>
      <div className="eventDetails__content">
        <div className="eventDetails__name">
          <h2>{state?.name}</h2>
          <p>{state?.edate}</p>
        </div>
        <div className="eventDetails__description">
          <p>{state?.discription}</p>
        </div>
        <div className="eventDetails__form">
          <form method="post" onSubmit={enrollUser}>
            <div className="eventDetails__form">
              <input
                type="text"
                className="userName"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="email"
                placeholder="Email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                className="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="eventDetails__qts">
              <h5>Few Questions</h5>
              {qts.map((qt) => (
                <p>{qt?.qts}</p>
              ))}
            </div>
            <button className="enroll" type="submit">
              Enroll
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
