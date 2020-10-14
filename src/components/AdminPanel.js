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
      "http://localhost:8080/contact/fetch.php"
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
      "http://localhost:8080/portfolio/fetch.php"
    );
    setImages(portfolioImg.data);
  };

  console.log(images);

  useEffect(() => {
    getImg();
  }, []);

  const styles = {
    height: "200px",
    objectFit: "contain",
    margin: "20px",
  };

  // const delImg = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <React.Fragment>
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
              //   `http://localhost:8080/portfolio/delete.php`,
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
    </React.Fragment>
  );
};

const Event = () => {
  return (
    <>
      <h1>test Event</h1>
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
