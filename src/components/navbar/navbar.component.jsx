import React from "react";
import './navbar.styles.css'
import Logo from "../assets/logo/cocacola.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
