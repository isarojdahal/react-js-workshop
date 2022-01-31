import React from "react";
import useTitle from "../hooks/useTitle";

const Aboutus = () => {
  useTitle("About us | Confess Note");
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>About us</h2>
      <br />
      <p>
        Confess Note is a public forum; where you can confess your ideas or
        opinions or thoughts about anything. And , all the confessions made will
        be deleted after 24 hrs.
      </p>
    </div>
  );
};

export default Aboutus;
