import React from "react";
import "./contacts.css";
import SvgIcon from "@material-ui/core/SvgIcon";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { ReactComponent as DevpostIcon } from "./devpost.svg";

const Contacts = () => {
  return (
    <div className="contacts">
      <a name="contacts" href="# " style={{ position: "relative", top: -80 }}> </a>
      <h2>Contacts</h2>
      <ul>
        <li>
          <a
            href="mailto: jon@jeongwoo.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jeongwoo55/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jeongwoo-choi-0505/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://devpost.com/Jeongwoo55"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcon component={DevpostIcon} viewBox="0 0 280.3 242" />
          </a>
        </li>
      </ul>
      <p>Last updated November 26th, 2020</p>
    </div>
  );
};

export default Contacts;
