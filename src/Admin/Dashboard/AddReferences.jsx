import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  referenceName: Yup.string().required("Reference name is required"),
  referenceType: Yup.string().required("Reference type is required"),
  referenceLink: Yup.string()
    .url("Enter a valid URL")
    .required("Reference link is required"),
});

function AddReferences() {
  const formik = useFormik({
    initialValues: {
      referenceName: "",
      referenceType: "",
      referenceLink: "",
      referenceImage: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      formik.resetForm(); 
      alert("Reference added successfully!");
    },
  });

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      width="100%"
    >
      <TextField
        fullWidth
        id="referenceName"
        name="referenceName"
        label={<>Reference Name <span style={{color:"red"}}>*</span></>}
        variant="outlined"
        value={formik.values.referenceName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.referenceName && Boolean(formik.errors.referenceName)}
        helperText={formik.touched.referenceName && formik.errors.referenceName}
      />

      <TextField
        fullWidth
        id="referenceType"
        name="referenceType"
        label={<>Reference Type <span style={{color:"red"}}>*</span></>}
        variant="outlined"
        value={formik.values.referenceType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.referenceType && Boolean(formik.errors.referenceType)}
        helperText={formik.touched.referenceType && formik.errors.referenceType}
      />

      <TextField
        fullWidth
        id="referenceLink"
        name="referenceLink"
        label={<>Reference Link <span style={{color:"red"}}>*</span></>}
        variant="outlined"
        value={formik.values.referenceLink}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.referenceLink && Boolean(formik.errors.referenceLink)}
        helperText={formik.touched.referenceLink && formik.errors.referenceLink}
      />

      <Button variant="contained" component="label" fullWidth>
        Upload Image
        <input
          type="file"
          hidden
          onChange={(event) => {
            formik.setFieldValue("referenceImage", event.currentTarget.files[0]);
          }}
        />
      </Button>

      <Box sx={{ display: "flex", justifyContent: "end",alignItems:"end", height: "40vh", width: "90%" }}>
        <Button type="submit" sx={{ mr: 2, width: "40%" }} variant="contained">
          Add
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ bgcolor: "#9e9e9e", width: "40%" }}
          onClick={formik.handleReset}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default AddReferences;
