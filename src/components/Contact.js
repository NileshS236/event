import React, { useState } from "react";
import "../styles/Contact.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitMsg = (e) => {
    e.preventDefault();
    const response = axios.post(
      `https://techtrickz.in/Apis/contact/insert.php/`,
      {
        cname: name,
        cemail: email,
        cnum: phone,
        cmessage: message,
      }
    );

    const inputs = document.querySelectorAll(".form-control");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    alert(`Message received. You'll be replied soon on ${email}`);
  };
  return (
    <div className="Contact">
      <div className="Contact__home">
        <h1>Contact Us</h1>
      </div>
      <div className="Contact__content">
        <form onSubmit={submitMsg}>
          <div className="Contact__form border">
            <input
              type="text"
              className="userName form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="email form-control"
              placeholder="Email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="number"
              className="phone form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              className="messageBox form-control"
              placeholder="Message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="button mx-auto" type="submit">
            Submit
          </button>
        </form>
        <div className="Contact__map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="1080"
                height="416"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=chinchpokli&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://www.embedgooglemap.net"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact__footer">
        <p>Copyright &copy;2020 | Made With ❤ by SRG solutions IT Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Contact;
