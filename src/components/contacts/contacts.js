import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ul>
        <li>
          <a href="mailto: JeongwooChoi@my.unt.com">
            <i class="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/jeongwoo55/">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeongwoo-choi-0505/">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://devpost.com/Jeongwoo55">
            <i class="fas fa-tools"></i>
          </a>
        </li>
      </ul>
      <p>Last updated May 19th, 2020</p>
    </div>
  );
};

export default Contacts;