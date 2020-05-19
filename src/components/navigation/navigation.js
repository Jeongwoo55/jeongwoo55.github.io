import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    // <div className="navigation">
    //   <ul>
    //     <li>
    //       <a href="#contacts">Contacts</a>
    //     </li>
    //     <li>
    //       <a href="#portfolio">Portfolio</a>
    //     </li>
    //     <li>
    //       <a href="#about">About</a>
    //     </li>
    //     <li>
    //       <a href="#">Home</a>
    //     </li>
    //   </ul>
    // </div>
    <div className="navigation">
      <ul>
        <li>
          <a href={process.env.PUBLIC_URL + "#contacts"} draggable="false">
            Contacts
          </a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL + "#portfolio"} draggable="false">
            Portfolio
          </a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL + "#about"} draggable="false">
            About
          </a>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL + "/"} draggable="false">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
