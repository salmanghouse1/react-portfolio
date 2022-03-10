import React from "react";

function Hero() {
  return (
    <section class="subheading">
      <a href="Full-Stack-Engineer-Resume-2022-02-07.pdf">
        <i class="fa-solid fa-download"></i>
      </a>
      <a href="https://github.com/salmanghouse1">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/salmanghouse/">
        <i class="fab fa-linkedin"></i>
      </a>
      <img class="avatar" src="./assets/images/Avatar.jpg" />
      <h2>
        I am a&nbsp;<span id="occupation" class="occupation"></span>
      </h2>
    </section>
  );
}

export default Hero;
