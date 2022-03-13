import React from "react";

function Worksample(props) {
  return (
    //   Work Sample props need to be passed in and viewed
    // One Work Sample
    <div className="work-sample">
      <div className="card" id="card" style={props.img}>
        <div className="upper"></div>
        <div className="text">
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
