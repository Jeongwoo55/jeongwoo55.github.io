import React from "react";
import "./navigation.css";

const Navigation = () => {
  if (matchMedia("(pointer:fine)").matches) {
    return (
      <div className="navigation">
        <ul>
          <li>
            <a href={process.env.PUBLIC_URL + "#contacts"}>
              Contacts
            </a>
          </li>
          {/* <li>
            <a href={process.env.PUBLIC_URL + "#portfolio"}>
              Portfolio
            </a>
          </li> */}
          <li>
            <a href={process.env.PUBLIC_URL + "#about"}>
              About
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + "/"}>
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
