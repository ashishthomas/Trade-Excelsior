import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  tagline: Yup.string().required("Book tagline is required"),
  name: Yup.string().required("Book name is required"),
  buyLink: Yup.string()
    .url("Enter a valid URL")
    .required("Purchase link is required"),
  description: Yup.string()
    .min(10, "Description should be at least 10 characters")
    .required("Book description is required"),
  imageLink: Yup.string()
    .url("Enter a valid image URL")
    .required("Image link is required"),
});

function AddBook() {
  const formik = useFormik({
    initialValues: {
      tagline: "",
      name: "",
      buyLink: "",
      description: "",
      imageLink: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      formik.resetForm();
      alert("Book added successfully");
    },
  });

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      width="100%"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        fullWidth
        id="tagline"
        name="tagline"
        label={
          <>
            Book Tagline <span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        value={formik.values.tagline}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.tagline && Boolean(formik.errors.tagline)}
        helperText={formik.touched.tagline && formik.errors.tagline}
      />

      <TextField
        fullWidth
        id="name"
        name="name"
        label={
          <>
            Book Name <span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        fullWidth
        id="description"
        name="description"
        label={
          <>
            Book Description <span style={{ color: "red" }}>*</span>
          </>
        }
        multiline
        rows={4}
        variant="outlined"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />

      <TextField
        fullWidth
        id="buyLink"
        name="buyLink"
        label={
          <>
            Link to Buy Book <span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        value={formik.values.buyLink}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.buyLink && Boolean(formik.errors.buyLink)}
        helperText={formik.touched.buyLink && formik.errors.buyLink}
      />

      <TextField
        fullWidth
        id="imageLink"
        name="imageLink"
        label={
          <>
            Book Image Link <span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        value={formik.values.imageLink}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.imageLink && Boolean(formik.errors.imageLink)}
        helperText={formik.touched.imageLink && formik.errors.imageLink}
      />
      <Typography variant="p">Book Image Link</Typography>
      <Button variant="contained" component="label" fullWidth>
        Upload Image
        <input
          type="file"
          hidden
          onChange={(event) => {
            formik.setFieldValue(
              "referenceImage",
              event.currentTarget.files[0]
            )
          }}
        />
      </Button>

      <Box sx={{ display: "flex", justifyContent: "end", width: "90%" }}>
        <Button type="submit" sx={{ mr: 2, width: "40%" }} variant="contained">
          Add
        </Button>
        <Button
          type="button"
          onClick={formik.resetForm}
          variant="contained"
          sx={{ bgcolor: "#9e9e9e", width: "40%" }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
export default AddBook;
