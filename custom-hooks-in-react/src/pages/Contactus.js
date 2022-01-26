import React, { useState } from "react";
import useForm from "../hooks/useForm";

import useTitle from "../hooks/useTitle";

const Contactus = () => {
  useTitle("Contact us | Website");

  const [values, handleChange] = useForm();

  return (
    <div>
      {values.fullname}
      <form action="">
        <input type="text" name="fullname" onChange={(e) => handleChange(e)} />
        <input type="text" name="username" onChange={(e) => handleChange(e)} />
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Contactus;
