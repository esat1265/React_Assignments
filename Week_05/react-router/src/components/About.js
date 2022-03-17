import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className="text-light ms-2" to="/">
                Home
              </Link>
              <Link className="text-light ms-2" to="/About">
                About
              </Link>
              <Link className="text-light ms-2" to="/Contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="alert alert-danger">
        <h1>About</h1>
      </div>
    </>
  );
}

export default About;
