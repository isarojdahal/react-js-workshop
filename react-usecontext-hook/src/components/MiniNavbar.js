import React, { useContext } from "react";
import { UserContext } from "../App";

const MiniNavbar = () => {
  let ctx = useContext(UserContext);
  console.log(ctx);
  return (
    <div>
      <button>{ctx.name}</button>
      <button>{ctx.age}</button>
      <button>{ctx.location}</button>
    </div>
  );
};

export default MiniNavbar;
