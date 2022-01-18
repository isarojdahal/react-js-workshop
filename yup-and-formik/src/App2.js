import React from "react";
import { Formik } from "formik";
import UserLoginSchema from "./validation-schemas/UserLoginSchema";
import TextField from "./TextField";

const App2 = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data) => {
          console.log("form submitted");
          // axios.get("")
          // axios.post("")
        }}
        validationSchema={UserLoginSchema}
      >
        {({ errors, handleChange, handleSubmit, values }) => {
          //   console.log(values);

          return (
            <form onSubmit={handleSubmit}>
              <label>Email</label>{" "}
              <TextField name="email" placeholder="Email address" />
              <label>Password</label>
              <TextField name="password" type="password" />
              <input type="submit" />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App2;
