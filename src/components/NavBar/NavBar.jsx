import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import Maxson_Green_Resume from "../../Assets/other/Maxson_Green_Resume.pdf";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm nav-custom fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="brand-text"> mG-Dev</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end px-4"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                <span className="link-text">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <span className="link-text">About Me</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                <span className="link-text">My Work</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <span className="link-text">Contact</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">
                <span className="link-text">
                  <FiDownload className="m-1" />
                  <a
                    href={Maxson_Green_Resume}
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Resume
                  </a>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
