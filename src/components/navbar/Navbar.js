import React from "react";
import "./navbar.scss";
import logo_blue from "../../imgs/logo_blue.svg";


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
        

        
      </div>

  );
}

export default NavBar;
