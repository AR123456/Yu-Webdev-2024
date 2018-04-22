// Dependencies
import React from "react";
import "./Header.css";

// Header component
const Header = props => (
  <div
    className="header center"
    
  >
    {props.children}
  </div>
);

export default Header;
