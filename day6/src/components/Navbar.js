import React from "react";
import MiniNavbar from "./MiniNavbar";

const Navbar = (props) => {
  return (
    <div>
      <MiniNavbar message={props.message} />
    </div>
  );
};

export default Navbar;
