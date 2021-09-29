import React from "react";
import Typed from "react-typed";
import Profile from "../assets/IMG_0998.jpg";
const Header = () => {
  return (
    <div className="header-wrapper">
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
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
