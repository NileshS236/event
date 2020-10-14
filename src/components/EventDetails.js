import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import "../styles/EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState([]);
  const [qnum, setQnum] = useState(0);
  const [questions, setQuestions] = useState([]);

  const [userDetails, setUserDetails] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ans, setAns] = useState("");

  const fetchDetails = async () => {
    const response = await axios.get(
      `http://localhost:8080/eventForm/singledata.php?E_ID=${id}`
    );
    setState(response.data[0]);
  };

  const fetchUserDetails = async () => {
    const userdetails = await axios.get(
      "http://localhost:8080/response/fetch.php"
    );
    setUserDetails(userdetails.data);
  };

  const fetchQtns = async () => {
    const qtns = await axios.get(
      `http://localhost:8080/questions/singledata.php?E_ID=${id}`
    );
    setQuestions(qtns.data);
  };

  const submitDetails = (e) => {
    e.preventDefault();
    const user = axios.post("http://localhost:8080/response/insert.php", {
      E_ID: questions[0].E_ID,
      name: name,
      email: email,
      num: phone,
    });

    document.querySelector(".detailsFormContent").style.display = "none";
    document.querySelector(".qtnFormContent").style.display = "flex";
  };

  useEffect(() => {
    fetchDetails();
    fetchQtns();
    fetchUserDetails();
  }, []);

  const changeqts = async (e) => {
    e.preventDefault();
    const answered = await axios.post(
      "http://localhost:8080/answer/insert.php",
      {
        U_ID: userDetails[userDetails.length - 1]?.ID,
        Q_ID: questions[qnum]?.Q_ID,
        E_ID: questions[qnum]?.E_ID,
        ans: ans,
      }
    );
    if (
      qnum < questions.length - 1 &&
      document.querySelector(".answer").value != ""
    ) {
      setQnum((prevCount) => prevCount + 1);
      setAns("");
    } else {
      document.querySelector(".qtnFormContent").style.display = "none";
      document.querySelector(".enrolled").style.display = "block";
    }
  };

  return (
    <>
      <div className="eventDetails">
        <div className="eventDetails__img">
          <img src={state?.image} alt="" />
        </div>
        <div className="eventDetails__content">
          <div className="eventDetails__name">
            <h2>{state?.name}</h2>
            <p>{state?.edate}</p>
          </div>
          <div className="eventDetails__description border">
            <p>{state?.discription}</p>
          </div>
        </div>
      </div>
      <div className="detailsFormContent container border my-3 py-3 justify-content-center align-items-center">
        <form
          className="detailsForm w-50 d-flex flex-column"
          onSubmit={submitDetails}
        >
          <input
            type="text"
            placeholder="Name"
            className="form-control my-2 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Email"
            className="form-control my-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="form-control my-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className="submit btn btn-primary w-30 mx-auto">
            Submit
          </button>
        </form>
      </div>
      <div className="qtnFormContent container border my-3 py-3 justify-content-center align-items-center">
        <form
          className="qtnForm d-flex flex-column w-100 py-3"
          onSubmit={changeqts}
        >
          <h2>{questions[qnum]?.questn}</h2>
          <input
            type="text"
            className="answer form-control my-3"
            placeholder="Your answer here..."
            value={ans}
            onChange={(e) => setAns(e.target.value)}
            required
          />

          <button
            type="submit"
            className="enroll btn btn-primary my-3 w-25 ml-auto"
          >
            Next
          </button>
        </form>
      </div>
      <h1 className="enrolled">You're Enrolled</h1>
    </>
  );
};

export default EventDetails;
