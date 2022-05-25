import React from "react";
import "./navbar.css";
import logo_blue from "../../imgs/logo_blue.svg";

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
        
      </div>
    </div>
  );
}

export default NavBar;
