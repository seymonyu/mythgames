import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
 
 
  return (
   <div className='navbar--container'>
      <ul className="navbar--list">
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/"  >
            HOME
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/about" >
            ABOUT
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/music" >
            MUSIC
          </Link>
        </li>
     
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/media">
            MEDIA
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
     
      
      
    <div className='line1'></div>
    <div className='line2'></div>
    <div className='line3'></div>

      
      </div>
    
  );
}

export default Navbar;
