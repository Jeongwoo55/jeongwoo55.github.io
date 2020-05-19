import React from "react";
import "./about.css";
import Protrait from "./portrait.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h2>About me</h2>
        <p>
          I am computer science student at the Texas Academy of Mathematics and
          Science (TAMS). TAMS is a residential early entrance college program
          for high school students at the University of North Texas. I have a
          strong interest in hardware-related projects and hackathons. I also
          enjoy playing the violin and doing{" "}
          <a href="https://www.instagram.com/jeongwoo.photos/">photography</a>.
        </p>
      </div>
      <div>
        <img
          src={Protrait}
          alt="Portrait"
          className="portrait"
        />
      </div>
    </div>
  );
};

export default About;
