import React, { useContext } from "react";
import { UserContext } from "../App";
import Navbar from "./Navbar";

const Header = () => {
  let ctx = useContext(UserContext);

  let [loginStaus, setLoginStatus ] = ctx;
  return (
    <div>
      {/* <Navbar /> */}
      {ctx.map((user) => {
        return (
          <div style={{ borderBottom: "1px solid red" }}>
            {user.name}
            <br />
            {user.location}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
