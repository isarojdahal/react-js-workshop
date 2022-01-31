import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link to="/">Confess Note</Link>
      </div>
      <div className="navbar-routes">
        <Link to="/aboutus">About us</Link>
      </div>
    </div>
  );
};

export default Navbar;
