import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  TextField,
  Grid,
  Divider,
  InputAdornment,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Profilemain() {
  const navigate = useNavigate();
  const navigateone = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "Aakas",
      lastName: "W",
      occupation: "Developer",
      mobile: "6274039142",
      email: "mailtojoh.doe@gmail.com",
      address: "123 Main Street, New York",
      instagramUrl: "",
      facebookUrl: "",
      linkedInUrl: "",
      xUrl: "",
    },
    validationSchema: Yup.object({
      instagramUrl: Yup.string()
        .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
          return (
            !value ||
            value.toLowerCase() === "na" ||
            Yup.string().url().isValidSync(value)
          );
        })
        .required("Enter a URL or NA "),
      facebookUrl: Yup.string()
        .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
          return (
            !value ||
            value.toLowerCase() === "na" ||
            Yup.string().url().isValidSync(value)
          );
        })
        .required("Enter a URL  or NA "),
      linkedInUrl: Yup.string()
        .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
          return (
            !value ||
            value.toLowerCase() === "na" ||
            Yup.string().url().isValidSync(value)
          );
        })

        .required("Enter a URL  or NA "),
      xUrl: Yup.string()
        .test("is-url-or-na", "Enter a valid URL or NA", (value) => {
          return (
            !value ||
            value.toLowerCase() === "na" ||
            Yup.string().url().isValidSync(value)
          );
        })
        .required("Enter a URL or NA "),

      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      occupation: Yup.string().required("Occupation is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
        .required("Mobile Number is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted ✅", values);
      alert("Profile updated successfully!");
      setIsEditing(false);
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <img
              src="/public/icon/Excelsior.jpeg"
              alt=""
              height={"40px"}
              width={"40px"}
            />

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#007BFF", ml: 2 }}
            >
              <b>Excelsior</b>
            </Typography>
            <Button
              variant="contained"
              sx={{ textTransform: "none", backgroundColor: "#007BFF" }}
              onClick={() => navigateone("/")}
            >
              {" "}
              <KeyboardArrowLeftIcon />
              Dashboard
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* end of navbar */}

      {/* Responsive Layout */}
      <Box
        sx={{
          display: "flex",
          padding: 3,
          justifyContent: "center",
          backgroundColor: "#E6E6FF",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
              <Card
                sx={{
                  padding: 0,
                  boxShadow: 3,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    <b>Subscription</b>
                  </Typography>
                  <Divider
                    sx={{ backgroundColor: "black", marginBottom: 1 }}
                  ></Divider>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "1rem" }}
                  >
                    License:GOLD
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "1rem" }}
                  >
                    Member Since:2024-10-28
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "1rem" }}
                  >
                    Subscription Start:2024-10-28
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "1rem", marginBottom: 1 }}
                  >
                    Subscription End:2024-11-20
                  </Typography>

                  <TextField
                    fullWidth
                    label="Instagram URL"
                    variant="outlined"
                    name="instagramUrl"
                    value={formik.values.instagramUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.instagramUrl &&
                      Boolean(formik.errors.instagramUrl)
                    }
                    helperText={
                      formik.touched.instagramUrl && formik.errors.instagramUrl
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <InstagramIcon color="error" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="Facebook URL"
                    variant="outlined"
                    name="facebookUrl"
                    value={formik.values.facebookUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.facebookUrl &&
                      Boolean(formik.errors.facebookUrl)
                    }
                    helperText={
                      formik.touched.facebookUrl && formik.errors.facebookUrl
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FacebookIcon color="primary"></FacebookIcon>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="LinkedIn URL"
                    variant="outlined"
                    name="linkedInUrl"
                    value={formik.values.linkedInUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.linkedInUrl &&
                      Boolean(formik.errors.linkedInUrl)
                    }
                    helperText={
                      formik.touched.linkedInUrl && formik.errors.linkedInUrl
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkedInIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="X URL"
                    variant="outlined"
                    name="xUrl"
                    value={formik.values.xUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.xUrl && Boolean(formik.errors.xUrl)}
                    helperText={formik.touched.xUrl && formik.errors.xUrl}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <XIcon color="black"></XIcon>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "1.0rem" }}
                  >
                    <b>Note:</b> Don't have a link, enter NA and save it.
                  </Typography>
                  <Box sx={{ height: 18 }} />
                </CardContent>
              </Card>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={6} md={8} sx={{ display: "flex" }}>
              <Card
                sx={{
                  padding: 0,
                  boxShadow: 3,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    <b>Personal Information</b>
                  </Typography>
                  <Divider sx={{ backgroundColor: "black", marginBottom: 2 }} />

                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="Occupation"
                    variant="outlined"
                    name="occupation"
                    value={formik.values.occupation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.occupation &&
                      Boolean(formik.errors.occupation)
                    }
                    helperText={
                      formik.touched.occupation && formik.errors.occupation
                    }
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.mobile && Boolean(formik.errors.mobile)
                    }
                    helperText={formik.touched.mobile && formik.errors.mobile}
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="Email-Id"
                    name="email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                    sx={{ marginBottom: 2 }}
                    disabled={!isEditing}
                  />

                  <Box sx={{ height: 24 }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          padding: 2,
        }}
      >
        {isEditing ? (
          <>
            <Button
              variant="contained"
              type="submit "
              sx={{
                backgroundColor: "#007BFF",
                color: "white",
                marginRight: 2,
                textTransform: "none",
              }}
              onClick={formik.handleSubmit}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#007BFF",
                color: "white",
                marginRight: 2,
                textTransform: "none",
              }}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              color: "white",
              textTransform: "none",
              marginRight: 2,
            }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
        {!isEditing && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "lightgray",
              color: "white",
              marginRight: 2,
              textTransform: "none",
            }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        )}

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007BFF",
            color: "white",
            textTransform: "none",
          }}
          onClick={() => navigate("/changepassword")}
        >
          Change Password
        </Button>
      </Box>
    </>
  );
}
