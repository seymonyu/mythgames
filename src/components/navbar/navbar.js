import React from "react";
import "./navbar.css";
import logo_blue from "../../imgs/logo_blue.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar-div">
        <div className="navbar-logo">
          <img
            className="navbar-logo-img"
            src={logo_blue}
            alt="Logo"
            height={100}
          />
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            {" "}
            <Link className="navbar-link" to="/">
              HOME
            </Link>
          </li>

          <li className="navbar-list-item">
            {" "}
            <Link className="navbar-link" to="/games">
              GAMES
            </Link>
          </li>

          <li className="navbar-list-item">
            {" "}
            <Link className="navbar-link" to="/about">
              ABOUT
            </Link>
          </li>

          <li className="navbar-list-item">
            {" "}
            <Link className="navbar-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
