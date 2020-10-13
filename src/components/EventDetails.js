import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import "../styles/EventDetails.css";

const EventDetails = () => {
  const animate = () => {
    const signUpButton = document.querySelector("#signUp");
    const signInButton = document.querySelector("#signIn");
    const container = document.querySelector("#container");

    console.log(signUpButton + "x" + signInButton + "y" + container);

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  };

  const { id } = useParams();
  const [state, setState] = useState([]);
  const [qts, setQts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const fetchDetails = async () => {
    const response = await axios.get(
      `http://localhost:8080/eventForm/singledata.php?E_ID=${id}`
    );
    setState(response.data[0]);
  };

  // const qts = await axios.get('http://localhost:8080/questions/fetch.php')

  const fetchQts = async () => {
    const qtns = await axios.get(
      `http://localhost:8080/questions/singledata.php?E_ID=${id}`
    );
    setQts(qtns.data);
    console.log(qts);
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
          <p>
            Essay topics in English can be difficult to come up with. While
            writing essays, many college and high school students face writer’s
            block and have a hard time to think about topics and ideas for an
            essay. In this article, we will list out many good essay topics from
            different categories like argumentative essays, essays on
            technology, environment essays for students from 5th, 6th, 7th, 8th
            grades. Following list of essay topics are for all – from kids to
            college students. We have the largest collection of essays. An essay
            is nothing but a piece of content which is written from the
            perception of writer or author. Essays are similar to a story,
            pamphlet, thesis, etc. The best thing about Essay is you can use any
            type of language – formal or informal. It can biography, the
            autobiography of anyone. Following is a great list of 100 essay
            topics. We will be adding 400 more soon! Essay topics in English can
            be difficult to come up with. While writing essays, many college and
            high school students face writer’s block and have a hard time to
            think about topics and ideas for an essay. In this article, we will
            list out many good essay topics from different categories like
            argumentative essays, essays on technology, environment essays for
            students from 5th, 6th, 7th, 8th grades. Following list of essay
            topics are for all – from kids to college students. We have the
            largest collection of essays. An essay is nothing but a piece of
            content which is written from the perception of writer or author.
            Essays are similar to a story, pamphlet, thesis, etc. The best thing
            about Essay is you can use any type of language – formal or
            informal. It can biography, the autobiography of anyone. Following
            is a great list of 100 essay topics. We will be adding 400 more
            soon!
          </p>
        </div>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#" method="post" onSubmit={enrollUser}>
              <h1>Few Questions</h1>
              {qts.length &&
                qts.map((qt) => (
                  <input type="text" placeholder={qt?.qts} required />
                ))}
              <button>Enroll</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form method="post">
              <h1>Enroll</h1>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button>Submit</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>Provide personal details</p>
                <button className="ghost" id="signIn">
                  Previous
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Answer few questions to Enroll</p>
                <button className="ghost" id="signUp" onClick={animate}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
