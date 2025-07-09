import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddCoreWatchList() {
  const formik = useFormik({
    initialValues: {
      fname: "",
      link: "",
      sector: "",
      marketCap: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("Company name is required"),
      link: Yup.string()
        .url("Enter a valid URL")
        .required("Analysis link is required"),
      sector: Yup.string().required("Sector is required"),
      marketCap: Yup.number()
        .typeError("Market Cap must be a number")
        .positive("Market Cap must be positive")
        .required("Market Cap is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      formik.resetForm();
      alert("coreWatchlist added successfully");
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} autoComplete="off">
      <TextField
        fullWidth
        id="fname"
        name="fname"
        label="Company Name"
        variant="outlined"
        value={formik.values.fname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fname && Boolean(formik.errors.fname)}
        helperText={formik.touched.fname && formik.errors.fname}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        id="link"
        name="link"
        label="Analysis Link"
        variant="outlined"
        value={formik.values.link}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.link && Boolean(formik.errors.link)}
        helperText={formik.touched.link && formik.errors.link}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        id="sector"
        name="sector"
        label="Sector"
        variant="outlined"
        value={formik.values.sector}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sector && Boolean(formik.errors.sector)}
        helperText={formik.touched.sector && formik.errors.sector}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        id="marketCap"
        name="marketCap"
        label="Market Cap"
        variant="outlined"
        value={formik.values.marketCap}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.marketCap && Boolean(formik.errors.marketCap)}
        helperText={formik.touched.marketCap && formik.errors.marketCap}
        sx={{ mb: 2 }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          height: "40vh",
          width: "90%",
        }}
      >
        <Button type="submit" sx={{ mr: 2, width: "40%" }} variant="contained">
          Add
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ bgcolor: "#9e9e9e", width: "40%" }}
          onClick={formik.resetForm}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default AddCoreWatchList;
