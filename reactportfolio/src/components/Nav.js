import React from "react";

const categories = [
  {
    name: "About Me",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  },
  {
    name: "Contact",
    description: "Portraits of people in my life",
  },
  {
    name: "Portfolio",
    description: "Delicious delicacies",
  },
  {
    name: "Resume",
    description: "Fields, farmhouses, waterfalls, and the beauty of nature",
  },
];

function Nav() {
  return (
    <header class="topnav">
      <h1> Salman Ghouse </h1>{" "}
      <nav>
        <div id="myLinks">
          <ul>
            {categories.map((category) => (
              <li className={currentPage === category.name ? "nav-link active" : "nav-link"}>
                <a
                  href="#"
                  className="mx-1"
                  onClick={() => handlePageChange(category.name)}
                  key={category.name}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </nav>
    </header>
  );
}

export default Nav;
