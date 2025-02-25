import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  userName: Yup.string().required("User Name is required"),
  feedback: Yup.string().required("Feedback is required"),
  videoLink: Yup.string()
    .url("Invalid URL format")
    .required("Video Link is required"),
  tagline: Yup.string().required("Tagline is required"),
});

function AddSuccess() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      feedback: "",
      videoLink: "",
      tagline: "",
      userImage: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      formik.resetForm(); 
      alert("SuccessStory added successfully!");
    },
  });

  return (
    <Box component="form" autoComplete="off" onSubmit={formik.handleSubmit} 
    sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      width="100%"
      >
      <TextField
        fullWidth
        id="userName"
        name="userName"
        label={
          <>
            User Name <span style={{ color: "red" }}>*</span>
          </>
        }
        value={formik.values.userName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
      />

      <TextField
        fullWidth
        id="feedback"
        name="feedback"
        label={
          <>
            Feedback <span style={{ color: "red" }}>*</span>
          </>
        }
        multiline
        rows={4}
        value={formik.values.feedback}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.feedback && Boolean(formik.errors.feedback)}
        helperText={formik.touched.feedback && formik.errors.feedback}
      />

      <TextField
        fullWidth
        id="videoLink"
        name="videoLink"
        label={
          <>
            Video Link <span style={{ color: "red" }}>*</span>
          </>
        }
        value={formik.values.videoLink}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.videoLink && Boolean(formik.errors.videoLink)}
        helperText={formik.touched.videoLink && formik.errors.videoLink}
      />

      <TextField
        fullWidth
        id="tagline"
        name="tagline"
        label={
          <>
            Tagline <span style={{ color: "red" }}>*</span>
          </>
        }
        value={formik.values.tagline}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.tagline && Boolean(formik.errors.tagline)}
        helperText={formik.touched.tagline && formik.errors.tagline}
      />

      <Typography variant="p">User Image</Typography>
      <Button variant="contained" component="label" fullWidth>
        Upload Image
        <input
          type="file"
          hidden
          onChange={(event) =>
            formik.setFieldValue("userImage", event.currentTarget.files[0])
          }
        />
      </Button>

      <Box sx={{ display: "flex", justifyContent: "end", width: "90%", mt: 2 }}>
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

export default AddSuccess;
