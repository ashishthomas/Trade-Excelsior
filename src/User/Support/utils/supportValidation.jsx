import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contact: Yup.string().required("Contact is required"),
  message: Yup.string().required("Message is required"),
});

export default validationSchema;
