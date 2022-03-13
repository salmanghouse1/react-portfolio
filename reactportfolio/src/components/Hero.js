import React from "react";
import SplitText from "./SplitText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../images/Avatar.jpg";

function Hero() {
  return (
    <section className="subheading">
      <a href="Full-Stack-Engineer-Resume-2022-02-07.pdf">
        <FontAwesomeIcon className="icon" icon={faDownload} />
      </a>
      <a href="https://github.com/salmanghouse1">
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/salmanghouse/">
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </a>
      <img
        src={require("./../images/Avatar.jpg")}
        className="avatar"
        alt="Salman Ghouse"
      />
      <h2>
        I am a&nbsp;
        <span class="job-title">
          <SplitText copy="Full Stack Developer" role="heading" />
        </span>
      </h2>
    </section>
  );
}

export default Hero;
