import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fname: Yup.string().required("Checklist description is required"),
  link: Yup.string().url("Enter a valid URL").required("Link is required"),
  button: Yup.string().required("Button name is required"),
});

function AddCheckList() {
  const formik = useFormik({
    initialValues: {
      fname: "",
      link: "",
      button: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      formik.resetForm();
      alert("checklist added successfully");
    },
  });

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
      width="100%"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        fullWidth
        id="fname"
        name="fname"
        label={
          <>
            Checklist Description <span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        value={formik.values.fname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fname && Boolean(formik.errors.fname)}
        helperText={formik.touched.fname && formik.errors.fname}
      />

      <TextField
        fullWidth
        id="link"
        name="link"
        label={
          <>
            Link<span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        value={formik.values.link}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.link && Boolean(formik.errors.link)}
        helperText={formik.touched.link && formik.errors.link}
      />

      <TextField
        fullWidth
        id="button"
        name="button"
        label={
          <>
            Button Name <span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        value={formik.values.button}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.button && Boolean(formik.errors.button)}
        helperText={formik.touched.button && formik.errors.button}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          height: "50vh",
          width: "90%",
        }}
      >
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

export default AddCheckList;
