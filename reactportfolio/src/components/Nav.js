import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="topnav">
      <h1>Salman Ghouse</h1>
      <nav id="myLinks" class="navbar">
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
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
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
