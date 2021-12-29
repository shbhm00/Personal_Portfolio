import React from "react";
import Typed from "react-typed";
import Particle from "./particle/particle";
import Social from "./socialIcon";
const Home = () => {
  return (
    <div className="header-wrapper" id="home">
      <Particle type={"star"} value={40} />
      <div className="main-info">
        <h1>Shubham Mishra</h1>
        <Typed
          className="typed-info"
          strings={[
            "Web Design",
            "Web Development",
            "Mobile Application Development",
            "DataBase Management",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a className="contact-me" href="#">
          Find me on
        </a>
        <Social />
      </div>
    </div>
  );
};

export default Home;
