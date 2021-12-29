import Particle from "../components/particle/particle";
import { Avatar, Card } from "@mui/material";
import Profile from "../assets/profile.jpg";
const About = () => {
  return (
    <div className="about-wrapper">
      {/* <Particle type={"circle"} value={10} /> */}
      <h1 id="about"></h1>
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
            <ul>
              <li>Reading</li>
              <li>Travelling</li>
              <li>Writing quotes</li>
              <li>Cooking</li>
            </ul>
          </p>
        </div>
        <div>
          <Card
            sx={{
              height: 300,
              width: 300,
              borderRadius: "50%",
              marginRight: 20,
            }}
          >
            <Avatar src={Profile} sx={{ height: 300, width: 300 }} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default About;
