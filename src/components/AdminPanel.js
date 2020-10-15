import React, { useEffect, useState } from "react";
import "../index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import axios from "axios";

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
      "http://techtrickz.in/Apis/contact/fetch.php"
    );
    setContInfo(contactInfo.data);
  };

  console.log(contInfo);

  useEffect(() => {
    contactApi();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          {contInfo.length &&
            contInfo?.map((info) => (
              <tr>
                <td>{info.ID}</td>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.num}</td>
                <td>{info.message}</td>
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
      "http://techtrickz.in/Apis/portfolio/fetch.php"
    );
    setImages(portfolioImg.data);
  };

  const [imgAdd, setImgAdd] = useState("");

  console.log(imgAdd);

  useEffect(() => {
    getImg();
  }, []);

  const styles = {
    height: "200px",
    objectFit: "contain",
    margin: "20px",
  };

  const postImg = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://techtrickz.in/Apis/portfolio/insert.php",
      {
        cimage: imgAdd,
      }
    );
    console.log(response);
  };

  return (
    <>
      <form className="container form border py-3" onSubmit={postImg}>
        <input
          type="text"
          placeholder="Enter image address"
          className="form-control"
          value={imgAdd}
          onChange={(e) => setImgAdd(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
      {images?.map((image) => (
        <div>
          <img
            style={styles}
            src={image.P_image}
            alt={image.P_name}
            key={image.P_ID}
          />
          <button
            value={image.P_ID}
            onClick={(e) =>
              // const del = axios.post(
              //   `http://techtrickz.in/Apis/portfolio/delete.php`,
              //   {
              //     cid: e.target.value,
              //   }
              // );
              console.log(e.target.value)
            }
            key={image.P_ID}
          >
            del
          </button>
        </div>
      ))}
    </>
  );
};

const Event = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imgAdd, setImgAdd] = useState("");

  const createEvent = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://techtrickz.in/Apis/eventForm/insert.php",
      {
        cimage: imgAdd,
        cname: name,
        cdiscription: description,
        cdate: date,
      }
    );
    console.log(response);
  };

  return (
    <>
      <form className="container form border py-3" onSubmit={createEvent}>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          type="text"
          className="form-control"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter image address"
          className="form-control"
          value={imgAdd}
          onChange={(e) => {
            setImgAdd(e.target.value);
          }}
        />
        <button className="btn btn-primary" type="submit">
          Create Event
        </button>
      </form>
      <form className="form container py-3 border">
        <input
          type="text"
          className="form-control"
          placeholder="Question here"
        />
        <button className="btn btn-primary">Next</button>
      </form>
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
