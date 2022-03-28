import React from "react";
import ResumeFile from "../../assets/Full Stack Developer Resume 2022-03-27.pdf";

function Resume() {
  return (
    <section className="flex">
      <h1 class="heading-block">Resume</h1>
      <embed src={ResumeFile} width="800px" height="2100px" />
    </section>
  );
}

export default Resume;
