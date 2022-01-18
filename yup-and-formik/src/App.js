import React from "react";
import { number, object, string } from "yup";

const App = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactFormSchema = object({
      email: string().required().email(),
      password: string().required().min(7).max(30),
      address: string().required().min(8),
      contact: number().positive().required(),
    });

    const formData = {
      email: event.target[0].value,
      password: event.target[1].value,
      address: event.target[2].value,
      contact: event.target[3].value,
    };

    const isValid = await contactFormSchema.isValid(formData);
    console.log(isValid);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="email" />
        <br />
        <input type="text" name="password" />
        <br />
        <input type="text" name="address" />
        <br />
        <input type="text" name="contact" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
