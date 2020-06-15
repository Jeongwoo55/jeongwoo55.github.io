import React from "react";
import "./navigation.css";

const Navigation = () => {
  if (matchMedia("(pointer:fine)").matches) {
    return (
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
  } else {
    return null;
  }
};

export default Navigation;
