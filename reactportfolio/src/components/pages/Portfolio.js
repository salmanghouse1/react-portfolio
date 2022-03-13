import React from "react";

function Portfolio() {
  const WorkSamples = [
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
      img: "background:url(./images/work-sample-16.png)",
    },
    {
      title: "About Me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
      img: "background:url(./images/work-sample-17.png)",
    },
  ];

  const displayWorkSamples = WorkSamples.map((WorkSample, index) => {
    return (
      <div className="work-sample" key={WorkSample.title + index}>
        <div className="card" id="card">
          <div className="upper"></div>
          <div className="text">
            <h2>{WorkSample.title}</h2>
            <p>{WorkSample.description}</p>
            <p>HTML, CSS, Javascript,Jquery,Tailwind{WorkSample.img}</p>
            <a href="https://github.com/salmanghouse1/global-news-finder">
              Github
            </a>
            <br />
            <a href="https://salmanghouse1.github.io/global-news-finder/">
              URL
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="flex" id="portfolio">
      <h1 className="heading-block">Portfolio</h1>

      <div className="work-samples">
        {/* work sample needs to be mapped and WorkSample need to be passed in */}

        {displayWorkSamples}
      </div>
    </section>
  );
}

export default Portfolio;
