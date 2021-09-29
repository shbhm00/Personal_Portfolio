import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import NavBar from "./components/navbar";
import Particles from "react-particles-js";
import About from "./components/about";
function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#f57f17",
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
      <About />
    </div>
  );
}

export default App;
