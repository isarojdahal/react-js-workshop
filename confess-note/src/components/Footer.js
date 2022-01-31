import React from "react";
import "../assets/css/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      Copyright &copy; 2022 - {new Date().getFullYear()} | All rights reserved
      by Confess Note Inc.
    </div>
  );
};

export default Footer;
