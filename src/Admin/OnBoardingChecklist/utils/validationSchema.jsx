import * as Yup from "yup";

export const checklistValidationSchema = Yup.object({
  title: Yup.string().required("Checklist description is required"),
  link: Yup.string().url("Enter a valid URL").required("Link is required"),
  buttonName: Yup.string().required("Button name is required"),
});
