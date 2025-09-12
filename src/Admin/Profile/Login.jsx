// Login.js
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
  InputAdornment,
  Paper,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (values, { setSubmitting }) => {
    const { email, password } = values;

    // Save credentials in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    setSubmitting(false);

    // Navigate to dashboard
    navigate("/");
  };

  const handleForgotPassword = () => {
    navigate("/changepassword");
  };

  return (
    <>
      {/* Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <img
              src="/icon/Excelsior.jpeg"
              alt=""
              height={"40px"}
              width={"40px"}
            />
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "#007BFF", ml: 2 }}
            >
              <b>Excelsior</b>
            </Typography>
            <Button
              variant="contained"
              sx={{ textTransform: "none", backgroundColor: "#007BFF" }}
              onClick={() => navigate("/")}
            >
              <KeyboardArrowLeftIcon /> Dashboard
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Login Form */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: 400,
            padding: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <LockIcon sx={{ fontSize: 50, color: "#007BFF", mb: 2 }} />

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Login
          </Typography>

          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Please enter your email and password
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, handleChange, values, handleSubmit }) => (
              <Form onSubmit={handleSubmit} noValidate>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  label={
                    <>
                      Email <span style={{ color: "red" }}>*</span>
                    </>
                  }
                  variant="outlined"
                  sx={{ mb: 2 }}
                  value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />

                <Box sx={{ position: "relative", mb: 2 }}>
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label={
                      <>
                        Password <span style={{ color: "red" }}>*</span>
                      </>
                    }
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Forgot Password Link */}
                  <Box sx={{ textAlign: "right", mt: 0.5 }}>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleForgotPassword}
                      sx={{ fontWeight: "bold" }}
                    >
                      Forgot your password?
                    </Link>
                  </Box>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    textTransform: "none",
                    mt: 2,
                    "&:hover": { backgroundColor: "#0056b3" },
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </>
  );
}
