import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export const applySchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Please enter your name"),
  phone: Yup.number().min(11).required("Please enter a valid number"),
  email: Yup.string().email().required("Please enter your email"),
  address: Yup.string().required("Please enter your address"),
  resume: Yup.string().required("Please upload your leatest resume"),
  cover_letter: Yup.string().required("Please write a cover letter"),
});
