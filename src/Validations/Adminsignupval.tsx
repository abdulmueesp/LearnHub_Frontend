import * as yup from "yup";

export  const adminSignupvalidation=yup.object().shape({
    email:yup
    .string()
    .trim()
    .required("email is required")
    .email("please provide a valid email"),

    password:yup
    .string()
    .required("password is required")
    .min(5,"password must contain at least five characters"),

    name:yup
    .string()
    .required("name is required")

})