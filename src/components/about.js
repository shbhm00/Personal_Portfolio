import Particle from "../components/particle/particle";
import { Avatar, Card } from "@mui/material";
import Profile from "../assets/about3.svg";
import Lottie from "react-lottie";
import animationData from "../../src/assets/lf30_editor_8yziwwk8.json";
const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="about" className="about-wrapper">
      <div className="aboutContainer">
        <div className="about-intro">
          <h2>
            <span>LET ME </span>INTRODUCE<span>MYSELF</span>
          </h2>
          <p>
            Hi Everyone, I am <span>Shubham Mishra</span> from{" "}
            <span>U P, India</span>. I am
            <span>Mobile Application Developer</span>. Currently working for{" "}
            <span>Appinventiv, Noida</span>.
            <h4>Apart from coding, some other activities I love do.</h4>
          </p>
          <div className="hobbies-icon">
            <div className="hobbies-wrapper">
              <ion-icon name="book-outline"></ion-icon>
              <h5>Reading</h5>
            </div>
            <div className="hobbies-wrapper">
              <ion-icon name="bus-outline"></ion-icon>
              <h5>Travelling</h5>
            </div>
            <div className="hobbies-wrapper">
              <ion-icon name="pencil-outline"></ion-icon>
              <h5>Writing</h5>
            </div>
            <div className="hobbies-wrapper">
              <ion-icon name="fast-food-outline"></ion-icon>
              <h5>Cooking</h5>
            </div>
          </div>
        </div>
        <div className="profileAnimator">
          {/* <img src={Profile} style={{ height: "auto", width: "100%" }} /> */}
          <Lottie options={defaultOptions} height={450} width={450} />
        </div>
      </div>
    </div>
  );
};
export default About;
