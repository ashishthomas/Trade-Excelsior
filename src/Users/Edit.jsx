import React, { useEffect } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditDrawer = ({
  openEditDrawer,
  handleCloseEditDrawer,
  editUser,
  handleUpdateUser,
}) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    occupation: Yup.string().required("Occupation is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "", 
      phoneNumber: "",
      address: "",
      occupation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleUpdateUser(values);
      handleCloseEditDrawer();
    },
  });

  useEffect(() => {
    if (editUser) {
      const transformedUser = transformUserData(editUser);
      formik.setValues(transformedUser);
    }
  }, [editUser]);

  const transformUserData = (user) => {
    if (!user) return {};

    const [firstName, lastName] = user.name ? user.name.split(" ") : ["", ""];

    const address = user.address || "";

    const occupation = user.occupation || "";

    return {
      id: user.id,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: user.email || "",
      password: user.password || "", 
      phoneNumber: user.phone || "",
      address: address.trim(),
      occupation: occupation.trim(),
    };
  };

  return (
    <Drawer
      anchor="right"
      open={openEditDrawer}
      onClose={handleCloseEditDrawer}
      sx={{
        zIndex: 1300,
        "& .MuiDrawer-paper": {
          width: "400px",
          zIndex: 1301,   
        },
      }}
    >
      <Box
        sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        {/* Header with Close Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#D6EAF8",
            padding: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" sx={{ color: "#007BFF" }}>
            Edit User
          </Typography>
          <IconButton onClick={handleCloseEditDrawer} size="small">
            <Close sx={{ color: "black" }} />
          </IconButton>
        </Box>

        {/* Form Fields */}
        {[
          { label: "First Name", field: "firstName" },
          { label: "Last Name", field: "lastName" },
          { label: "Email", field: "email" },
          { label: "Password", field: "password", type: "password" }, 
          { label: "Phone Number", field: "phoneNumber" },
          { label: "Address", field: "address" },
          { label: "Occupation", field: "occupation" },
        ].map(({ label, field, type = "text" }) => (
          <TextField
            key={field}
            label={label}
            type={type}
            name={field}
            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[field] && Boolean(formik.errors[field])}
            helperText={formik.touched[field] && formik.errors[field]}
            fullWidth
            required
            InputLabelProps={{
              required: true,
              sx: {
                "& .MuiFormLabel-asterisk": {
                  color: "red",
                },
              },
            }}
          />
        ))}

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            marginTop: 2,
          }}
        >
          <Button
            type="submit"
            sx={{
              backgroundColor: "#007BFF",
              color: "white",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Update
          </Button>
          <Button
            onClick={handleCloseEditDrawer}
            sx={{
              backgroundColor: "#808080",
              color: "white",
              "&:hover": { backgroundColor: "#606060" },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default EditDrawer;