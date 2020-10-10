import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AboutSec from "./components/AboutSec";
import Contact from "./components/Contact";
import FactsSec from "./components/FactsSec";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import ServicesSec from "./components/ServicesSec";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
            <WhyUs />
            <AboutSec />
            <FactsSec />
            <ServicesSec />
            <Footer />
          </Route>
          <Route path="/about" exact>
            <About />
            <Footer />
          </Route>
          <Route path="/services" exact>
            <Services />
            <Footer />
          </Route>
          <Route path="/contacts" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
