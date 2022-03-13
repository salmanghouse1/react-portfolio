import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="topnav">
      <h1>Salman Ghouse</h1>
      <nav>
        <div id="myLinks">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                //  TODO: Add a comment explaining what this logic is doing

                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                //  TODO: Add a comment explaining what this logic is doing

                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                //  TODO: Add a comment explaining what this logic is doing

                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                //  TODO: Add a comment explaining what this logic is doing

                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
