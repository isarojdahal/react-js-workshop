import React from "react";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  let navigate = useNavigate();
  return (
    <div>
      Contactus
      <br />
      <button onClick={() => navigate("/about")}>Go to Home</button>
    </div>
  );
};

export default Contactus;
