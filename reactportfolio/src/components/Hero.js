import React from "react";
import SplitText from "./SplitText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ResumeFile from "../assets/Full Stack Developer Resume 2022-03-27.pdf";

function Hero() {
  return (
    <section className="subheading">
      <a href={ResumeFile}>
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
