import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AboutSec from "./components/AboutSec";
import Contact from "./components/Contact";
import Event from "./components/Event";
import EventDetails from "./components/EventDetails";
// import FactsSec from "./components/FactsSec";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import ServicesSec from "./components/ServicesSec";
import WhyUs from "./components/WhyUs";
import AdminPanel from "./components/AdminPanel";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Nav loc="home" />
            <Home />
            <WhyUs />
            <AboutSec />
            {/* <FactsSec /> */}
            <ServicesSec />
            <Testimonials />
            <Footer />
          </Route>
          <Route path="/about" exact>
            <Nav loc="about" />
            <About />
            <Footer />
          </Route>
          <Route path="/services" exact>
            <Nav loc="services" />
            <Services />
            <Footer />
          </Route>
          <Route path="/contacts" exact>
            <Nav loc="contacts" />
            <Contact />
          </Route>
          <Route path="/portfolio" exact>
            <Nav loc="portfolio" />
            <Portfolio />
            <Footer />
          </Route>
          <Route path="/events" exact>
            <Nav loc="events" />
            <Event />
            <Footer />
          </Route>
          <Route path="/events/:id" exact>
            <Nav loc="events" />
            <EventDetails />
            <Footer />
          </Route>
          <Route path="/who-have-admin-page-address/admin-have-the-admin-page-address/what-is-the-admin-page-address-id/7723757327375332">
            <AdminPanel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
