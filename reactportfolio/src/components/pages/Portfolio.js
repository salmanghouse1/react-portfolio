import React from "react";
import Worksample from "../Worksample";

const WorkSamples = [
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    imgstyle: "background:path;",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
  {
    title: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
    img: "",
  },
];

function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>

      <div class="workSamples">
        {/* work sample needs to be mapped and props need to be passed in */}

        {categories.map((category) => {
          <Worksample
            img={WorkSamples.img}
            key={WorkSamples.title}
            descirption={WorkSamples.description}
          ></Worksample>;
        })}
      </div>
    </section>
  );
}

export default Portfolio;
