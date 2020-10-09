import React from "react";
import "./App.css";
import AboutSec from "./components/AboutSec";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ServicesSec from "./components/ServicesSec";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <WhyUs />
      <AboutSec />
      <ServicesSec />
      <Footer />
    </div>
  );
}

export default App;
