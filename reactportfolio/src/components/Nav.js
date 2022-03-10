import React from "react";

function Nav() {
  return (
    <header class="topnav">
      <h1>Salman Ghouse</h1>
      <nav>
        <div id="myLinks">
          <a href="#news">About Me</a>
          <a href="#contact">Contact</a>
          <a href="#about">Portfolio</a>
          <a href="#about">Resume</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </nav>
    </header>
  );
}

export default Nav;
