import React from "react";
import useTitle from "../hooks/useTitle";

const Aboutus = () => {
  useTitle("About us | Confess Note ");
  return (
    <div style={{ marginTop: "12px", padding: "30px" }}>
      <center>
        <h1>About us</h1>
        <br />
        <p>
          Confess Note is a public forum; where anyone from the globe can put
          their confession about themselves,or of other people or of the world
          stuffs or anything.
        </p>
      </center>
    </div>
  );
};

export default Aboutus;
