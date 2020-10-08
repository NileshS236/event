import React from "react";
import "./App.css";
import AboutSec from "./components/AboutSec";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <WhyUs />
      <AboutSec />
      <Footer />
    </div>
  );
}

export default App;
