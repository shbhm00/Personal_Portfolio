import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Particles from "react-particles-js";
import About from "./components/about";
import Skill from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    // <Router>
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
