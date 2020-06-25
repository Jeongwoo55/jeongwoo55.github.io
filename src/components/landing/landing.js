import React from "react";
import "./landing.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Landing = () => {
  return (
    <div className="landing">
      <h2>Hello, my name is</h2>
      <h1>Jeongwoo Choi</h1>
      <div id="icon">
        <a href={process.env.PUBLIC_URL + "#about"} draggable="false">
          <ExpandMoreIcon fontSize="inherit" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
