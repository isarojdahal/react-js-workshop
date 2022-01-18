import { object, string } from "yup";
export default object({
  email: string()
    .email("Email must be a valid one")
    .required("Email is required."),
  password: string()
    .required()
    .min(7, "minimum password length should be of 7 characters")
    .max(30, "max password length is 30"),
  confirmPassword: string(),
});
