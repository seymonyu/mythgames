import React from "react";
import "./navbar.scss";
import logo_blue from "../../imgs/logo_blue.svg";
import { Link } from "react-router-dom";


function NavBar() {
  return (
  
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

  );
}

export default NavBar;
