import React from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link to="/">Confess Note</Link>
      </div>
      <div className="routes">
        <Link to="/aboutus">About us</Link>
      </div>
    </div>
  );
};

export default Navbar;
