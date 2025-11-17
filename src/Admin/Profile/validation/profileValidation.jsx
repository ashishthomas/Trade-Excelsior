import * as Yup from "yup";

export const profileValidationSchema = Yup.object({
  instagramUrl: Yup.string()
    .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
      return (
        !value ||
        value.toLowerCase() === "na" ||
        Yup.string().url().isValidSync(value)
      );
    })
    .required("Enter a URL or NA"),

  facebookUrl: Yup.string()
    .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
      return (
        !value ||
        value.toLowerCase() === "na" ||
        Yup.string().url().isValidSync(value)
      );
    })
    .required("Enter a URL or NA"),

  linkedInUrl: Yup.string()
    .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
      return (
        !value ||
        value.toLowerCase() === "na" ||
        Yup.string().url().isValidSync(value)
      );
    })
    .required("Enter a URL or NA"),

  xUrl: Yup.string()
    .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
      return (
        !value ||
        value.toLowerCase() === "na" ||
        Yup.string().url().isValidSync(value)
      );
    })
    .required("Enter a URL or NA"),

  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  occupation: Yup.string().required("Occupation is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
    .required("Mobile Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
});
