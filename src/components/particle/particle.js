import Particles from "react-particles-js";

const Particle = () => {
  return (
    <div>
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
                width: 4,
                color: "#f57f17",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Particle;
