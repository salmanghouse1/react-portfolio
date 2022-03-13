import React from "react";

function Portfolio() {
  const WorkSamples = [
    {
      title: "Car Inventory App",
      description: "Search Car Data",
      technology: "HTML,CSS,JS,Node,Express,Sequelize,Handlebars",
      githubUrl: "https://github.com/salmanghouse1/Project_2_Group_5/tree/main",
      deployUrl: "https://still-reef-50696.herokuapp.com/",
    },
    {
      title: "News App",
      description: "Select a country get the news",

      technology: "HTML,CSS,JS",
      githubUrl: "https://github.com/salmanghouse1/global-news-finder",
      deployUrl: "https://salmanghouse1.github.io/global-news-finder/",
    },

    {
      title: "Budget tracker",
      description: "Tracks your transactions in graph",
      githubUrl: "https://github.com/salmanghouse1/budget-tracker",
      deployUrl: "https://tranquil-dawn-47998.herokuapp.com/",
    },
    {
      title: "Astro-Portfolio",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
      technology: "HTML, CSS, Javascript,Lottie",
      githubUrl: "",
      deployUrl: "https://salmanwebdeveloper.com/port4.0/",
    },
    {
      title: "Quiz",
      description: "A timed and scored coding quiz",
      technology: "HTML, CSS, JS",
      githubUrl: "https://github.com/salmanghouse1/web-dev-skills-quiz",
      deployUrl: "https://salmanghouse1.github.io/web-dev-skills-quiz/",
    },
    {
      title: "Favourite Heroes",
      description: "Slideable Scrollable Fan Fav Heroes",
      technology: "HTML, CSS, JS, JQuery",
      deployUrl: "https://salmanwebdeveloper.com/Heroes/Fav%20heros/",
    },
    {
      title: "Port 3.0",
      description: "Single Page portfolio",
      technology: "HTML,CSS",
      deployUrl: "https://salmanwebdeveloper.com/Salman3.0/",
    },
    {
      title: "Best Anime Toys",
      description: "Toys Anime",
      technology: "HTML, CSS, Wordpress",
      deployUrl: "https://www.bestanimetoys.com",
    },
    {
      title: "Best Web Developer",
      description: "Website",
      technology: "HTML, CSS, JS, Wordpress",
    },
    {
      title: "Jewelry And Handbags",
      description: "Ecommerce Handbags And Jewelry",
      deployUrl: "https://www.jewelryandhandbags.com",
      technology: "HTML, CSS, Wordpress",
    },
    {
      title: "3T Solutions Inc",
      description: "Company Website",
      deployUrl: "https://www.3tsolutionsinc.com",
      technology: "HTML, CSS, JS, JQuery, Bootstrap",
    },
    {
      title: "Fat Loss Innovation",
      description: "Weight Loss Product Landing Page",
      deployUrl: "https://www.fatlossinnovation.com",
      technology: "HTML,CSS.JS, Wordpress",
    },
    {
      title: "Box Generator",
      description: "Generates A Box Based on your size and color preference",
      deployUrl: "",
    },
    {
      title: "Thazkira",
      description: "Ramadan Reminders",
      technology: "HTML, CSS, JS, Wordpress",
      deployUrl: "https://www.thazkira.work",
    },

    {
      title: "Our Madurai Charity",
      description: "Charity Website",
      technology: "HTML CSS, JS, Wordpress",
      deployUrl: "https://www.ourmaduraicharity.ca",
    },
    {
      title: "Nature By NH",
      description: "Naturopathy Service Website",
      technology: "HTML CSS, JS, Wordpress",
      deployUrl: "https://www.naturebynh.com",
    },
    {
      title: "Port 4.0",
      description: "My Portfolio 4.0 version",
      technology: "HTML,CSS,JS,Lottie",
      deployUrl: "./port4.0",
    },
    {
      title: "3x3 Battleship",
      description: "3x3 Battleship Game",
      technology: "HTML, CSS, JS",
      deployUrl: "./bship",
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
            <p>{WorkSample.technology}</p>
            <a href={WorkSample.githubUrl}>Github</a>
            <br />
            <a href={WorkSample.deployUrl}>URL</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="flex" id="portfolio">
      <h3 className="heading-block">Portfolio</h3>

      <div className="work-samples">
        {/* work sample needs to be mapped and WorkSample need to be passed in */}

        {displayWorkSamples}
      </div>
    </section>
  );
}

export default Portfolio;
