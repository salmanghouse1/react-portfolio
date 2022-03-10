import React from "react";
import Worksample from "./Worksample";

function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>
      <div class="workSamples">

{/* work sample needs to be mapped and props need to be passed in */}
        <Worksample></Worksample>
      </div>
    </section>
  );
}

export default Portfolio;
