import React from "react";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div>
      <Navbar message={props.message} />
    </div>
  );
};

export default Header;
