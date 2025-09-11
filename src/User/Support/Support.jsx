import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contact: Yup.string().required("Contact is required"),
  message: Yup.string().required("Message is required"),
});

function Support() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "", 
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: isMobile ? "10px" : "15px",
        minHeight: "84vh",
      }}
    >
      {/* Centered "How Can I Help?" Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: isMobile ? 1 : 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "1.25rem" : isTablet ? "2rem" : "3rem",
            padding: isMobile ? "8px" : "20px",
            borderRadius: "8px",
            textAlign: "center",
            width: isMobile ? "100%" : isTablet ? "70%" : "50%",
          }}
        >
          How Can I Help?
        </Typography>
      </Box>

      {/* Main Content */}
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
        {/* Image - Left on Desktop, Top on Mobile/Tablet */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src="src\User\assets\women contact support.png"
            alt="Support Image"
            sx={{
              width: isMobile ? "70%" : isTablet ? "50%" : "80%",
              height: "auto",
              borderRadius: "8px",
              mb: isMobile ? 1 : 0,
              alignSelf: "center",
            }}
          />
        </Grid>

        {/* Form - Right on Desktop, Below on Mobile/Tablet */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 1 : 2,
              borderRadius: "8px",
              padding: isMobile ? "12px" : "24px",
              height: "100%",
              justifyContent: "center",
            }}
          >
            {/* Formik Form */}
            <form onSubmit={formik.handleSubmit}>
              {["name", "email", "contact", "message"].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  id={field}
                  name={field}
                  label={
                    <span>
                      {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  variant="outlined"
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                  sx={{
                    mb: isMobile ? 1 : 2,
                    "& .MuiOutlinedInput-root": {
                      ...(field !== "message" && {
                        height: isMobile ? "56px" : "56px",
                      }),
                      "& input": {
                        textAlign: isMobile ? "center" : "left",
                        fontSize: isMobile
                          ? "0.8rem"
                          : isTablet
                          ? "0.9rem"
                          : "1rem",
                        padding: isMobile ? "8px" : "16px",
                      },
                    },
                  }}
                  multiline={field === "message"}
                  rows={field === "message" ? 3 : 1}
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  mt: isMobile ? 1 : 2,
                  padding: isMobile ? "6px 12px" : "12px 48px",
                  fontSize: isMobile ? "0.8rem" : isTablet ? "1rem" : "1.2rem",
                  width: "100%",
                  height: isMobile ? "36px" : "48px",
                }}
              >
                SUBMIT
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Support;
