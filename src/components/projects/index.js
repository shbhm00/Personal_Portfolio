import React from "react";
import "./Project.css";

function Card() {
  return (
    <div>
      <div className="card"></div>
    </div>
  );
}

const projects = () => {
  return (
    <div className="wrapper">
      <div>
        <h1 style={{ fontSize: 50, color: "white", marginTop: 100 }}>
          Projects
        </h1>
        <div className="card-wrapper">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="card-wrapper">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default projects;
