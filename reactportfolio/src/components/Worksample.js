import React from "react";

function Worksample() {
  return (
    //   Work Sample props need to be passed in and viewed
    // One Work Sample
    <div class="work-sample">
      <div class="card" id="card" style={props.img}>
        <div class="upper"></div>
        <div class="text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>HTML, CSS, Javascript,Jquery,Tailwind</p>
          <a href="https://github.com/salmanghouse1/global-news-finder">
            Github
          </a>
          <br />
          <a href="https://salmanghouse1.github.io/global-news-finder/">URL</a>
        </div>
      </div>
    </div>
  );
}

export default Worksample;
