import React, { useEffect, useState } from "react";
import "../index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import axios from "axios";
import { Divider } from "@material-ui/core";

const AdminNav = () => {
  return (
    <>
      <div className="py-2 my-1 shadow">
        <ul className="d-flex justify-content-around align-items-center">
          <li>
            <NavLink
              activeClassName="active"
              exact
              to="/who-have-admin-page-address/admin-have-the-admin-page-address/what-is-the-admin-page-address-id/7723757327375332/"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              exact
              to="/who-have-admin-page-address/admin-have-the-admin-page-address/what-is-the-admin-page-address-id/7723757327375332/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              exact
              to="/who-have-admin-page-address/admin-have-the-admin-page-address/what-is-the-admin-page-address-id/7723757327375332/event"
            >
              Event
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

const Contact = () => {
  const [contInfo, setContInfo] = useState([]);
  const contactApi = async () => {
    const contactInfo = await axios.get(
      "https://techtrickz.in/Apis/contact/fetch.php"
    );
    setContInfo(contactInfo.data);
  };

  let details =
    contInfo.length &&
    contInfo.filter((detail) => {
      if (detail.name !== "") {
        return detail;
      }
    });

  useEffect(() => {
    contactApi();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr></tr>
          </thead>
          {details &&
            details?.map((detail) => (
              <tr>
                <td>{detail.ID}</td>
                <td>{detail.name}</td>
                <td>{detail.email}</td>
                <td>{detail.num}</td>
                <td>{detail.message}</td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
};
const Portfolio = () => {
  const [images, setImages] = useState([]);

  const getImg = async () => {
    const portfolioImg = await axios.get(
      "https://techtrickz.in/Apis/portfolio/fetch.php"
    );
    setImages(portfolioImg.data);
  };

  let imgsAdd =
    images.length &&
    images.filter((img) => {
      if (img.P_image !== "") {
        return img;
      }
    });

  const [imgAdd, setImgAdd] = useState("");

  useEffect(() => {
    getImg();
  }, []);

  const styles = {
    height: "200px",
    objectFit: "contain",
    margin: "20px",
  };

  // console.log(images);

  const delImg = (id) => {
    axios
      .post(`https://techtrickz.in/Apis/portfolio/delete.php`, {
        cid: id,
      })
      .then((res) => getImg());
  };

  const postImg = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://techtrickz.in/Apis/portfolio/insert.php",
      {
        cimage: imgAdd,
      }
    );
    document.querySelector(".form-control").value = "";
  };

  return (
    <>
      <form className="container form border py-3" onSubmit={postImg}>
        <input
          type="text"
          placeholder="Enter image address"
          className="form-control"
          required
          value={imgAdd}
          onChange={(e) => setImgAdd(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
      <table className="table table-bordered">
        <tbody>
          {imgsAdd &&
            imgsAdd?.map((image) => (
              <tr>
                <td>
                  <img
                    style={styles}
                    src={image.P_image}
                    alt={image.P_name}
                    key={image.P_id}
                  />
                </td>
                <td>
                  <button
                    id={image.P_id}
                    onClick={() => {
                      delImg(image.P_id);
                    }}
                    className="btn btn-danger"
                  >
                    del
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

const Event = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imgAdd, setImgAdd] = useState("");

  const [eventData, setEventData] = useState([]);
  const [lastEvent, setLastEvent] = useState("");

  const [question, setQuestion] = useState("");

  const [eventRes, setEventRes] = useState([]);
  const [qtnAns, setQtnRes] = useState([]);

  const createEvent = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://techtrickz.in/Apis/eventForm/insert.php",
      {
        cimage: imgAdd,
        cname: name,
        cdiscription: description,
        cdate: date,
      }
    );
    console.log(response);
  };

  let events =
    eventData.length &&
    eventData.filter((event) => {
      if (event.name !== "" && event.image !== "") {
        return event;
      }
    });

  const fetchEventData = async () => {
    const response = await axios.get(
      "https://techtrickz.in/Apis/eventForm/fetch.php"
    );
    setEventData(response.data);
    setLastEvent(eventData[eventData.length - 1]);
  };

  useEffect(() => {
    fetchEventData();
  }, [question, imgAdd]);

  const addQt = (e) => {
    e.preventDefault();

    axios
      .post("https://techtrickz.in/Apis/questions/insert.php", {
        eid: lastEvent.E_ID,
        cqts: question,
      })
      .then((quest) => console.log(quest));

    setQuestion("");
    document.querySelector(".eventQuestion").value = "";
  };

  const fetchEventRes = async () => {
    const res = await axios.get(
      "https://techtrickz.in/Apis/adminEve/eventResponse.php"
    );
    setEventRes(res.data);
  };

  const fetchQtnAns = async () => {
    const res = await axios.get(
      "https://techtrickz.in/Apis/adminEve/quesAns.php"
    );
    setQtnRes(res.data);
  };

  const delEvent = (id) => {
    console.log(id);
    axios
      .post(`https://techtrickz.in/Apis/eventForm/delete.php`, {
        cid: id,
      })
      .then((res) => console.log(res))
      .then((res) => fetchEventData());
  };

  useEffect(() => {
    fetchQtnAns();
    fetchEventRes();
  }, []);

  return (
    <>
      <form
        className="container form border py-3 eventDetails"
        onSubmit={createEvent}
      >
        <input
          type="text"
          className="form-control detail"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          className="form-control detail"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          type="text"
          className="form-control detail"
          placeholder="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter image address detail"
          className="form-control"
          required
          value={imgAdd}
          onChange={(e) => {
            setImgAdd(e.target.value);
          }}
        />
        <button className="btn btn-primary" type="submit">
          Create Event
        </button>
      </form>
      <form
        className="form container py-3 border eventQuestion"
        onSubmit={addQt}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Question here"
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Next
        </button>
      </form>

      <Divider />
      <Divider />
      <Divider />
      <div className="container">
        <table className="table table-bordered">
          <tbody>
            {events &&
              events.map((event) => (
                <tr>
                  <td>{event.name}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        delEvent(event.E_ID);
                      }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <th>E_ID</th>
            <th>Event Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
          </thead>
          <tbody>
            {eventRes.length &&
              eventRes.map((e) => (
                <tr>
                  <td>{e.E_ID}</td>
                  <td>{e.Event_Name}</td>
                  <td>{e.User_Name}</td>
                  <td>{e.email}</td>
                  <td>{e.num}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <th>Q_ID</th>
            <th>Question</th>
            <th>Email</th>
            <th>Answer</th>
          </thead>
          <tbody>
            {qtnAns.length &&
              qtnAns.map((e) => (
                <tr>
                  <td>{e.Q_ID}</td>
                  <td>{e.questn}</td>
                  <td>{e.email}</td>
                  <td>{e.ans}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

function AdminPanel() {
  return (
    <Router>
      <AdminNav />
      <Switch>
        <Route
          exact
          path="/who-have-admin-page-address/admin-have-the-admin-page-address/what-is-the-admin-page-address-id/7723757327375332/"
          component={Contact}
        ></Route>
        <Route
          exact
          path="/who-have-admin-page-address/admin-have-the-admin-page-address/what-is-the-admin-page-address-id/7723757327375332/portfolio"
          component={Portfolio}
        ></Route>
        <Route
          exact
          path="/who-have-admin-page-address/admin-have-the-admin-page-address/what-is-the-admin-page-address-id/7723757327375332/event"
          component={Event}
        ></Route>
      </Switch>
    </Router>
  );
}

export default AdminPanel;
