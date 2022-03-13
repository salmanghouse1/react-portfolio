import React from "react";

function Hero() {
  return (
    <section className="subheading">
      <a href="Full-Stack-Engineer-Resume-2022-02-07.pdf">
        <i className="fa-solid fa-download"></i>
      </a>
      <a href="https://github.com/salmanghouse1">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/salmanghouse/">
        <i className="fab fa-linkedin"></i>
      </a>
      <img className="avatar" src="../images/Avatar.jpg" alt="Salman Ghouse" />
      <h2>
        I am a&nbsp;<span id="occupation" className="occupation"></span>
      </h2>
    </section>
  );
}

export default Hero;
