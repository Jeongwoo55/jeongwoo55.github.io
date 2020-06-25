import React from "react";
import "./about.css";
import Portrait from "../../images/original/portrait.webp";
import PortraitLarge from "../../images/responsive/portrait-large.webp";
import PortraitMedium from "../../images/responsive/portrait-medium.webp";
import PortraitSmall from "../../images/responsive/portrait-small.webp";

const About = () => {
  return (
    <div className="about">
      <a name="about" href="# " style={{ position: "relative", top: -80 }}> </a>
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
          src={Portrait}
          alt="Portrait"
          className="portrait"
          srcset={
            PortraitLarge +
            " 2160w, " +
            PortraitMedium +
            " 1080w, " +
            PortraitSmall +
            " 768w"
          }
          size="40vw"
        />
      </div>
    </div>
  );
};

export default About;
