import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const showNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <Link
        className="navbar-brand"
        to="/home"
      ></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/home"
            >
              Home{" "}
              <span className="sr-only">
                (current)
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="signin"
            >
              Signin
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item"></li>
        </ul>
      </div>
    </nav>
  );
  return (
    <header id="header">
      {showNavbar()}
    </header>
  );
};

export default Header;
