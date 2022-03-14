import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section class="contact-me-section">
      <h3 class="heading-block" id="contact-me">
        Contact Me
      </h3>

      <div class="contact-me">
        <ul>
          <li>
            <span>Phone:</span>999-9999
          </li>
          <li>
            <span>Email:</span>salmanghouse1@gmail.com
          </li>
          <a href="Full-Stack-Engineer-Resume-2022-02-07.pdf">
            <FontAwesomeIcon className="icon" icon={faDownload} />
          </a>
          <a href="https://github.com/salmanghouse1">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/salmanghouse/">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
