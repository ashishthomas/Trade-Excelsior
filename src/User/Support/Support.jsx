import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";

import validationSchema from "./utils/supportValidation";
import SupportHeading from "./components/SupportHeading";
import SupportImage from "./components/SupportImage";
import SupportForm from "./components/SupportForm";

export default function Support() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: { name: "", email: "", contact: "", message: "" },
    validationSchema,
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
  });

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: isMobile ? "10px" : "15px",
        minHeight: "84vh",
      }}
    >
      <SupportHeading />

      <Grid
        container
        spacing={isMobile ? 1 : 4}
        sx={{
          mt: isMobile ? 1 : 4,
          px: isMobile ? 1 : 4,
          justifyContent: "center",
          textAlign: "center",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <SupportImage />

        <SupportForm formik={formik} />
      </Grid>
    </Box>
  );
}
