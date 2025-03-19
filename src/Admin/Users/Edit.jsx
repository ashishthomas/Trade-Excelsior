import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  Modal,
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
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect mobile & tablet view
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(openEditDrawer);
  }, [openEditDrawer]);

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
      const [firstName, lastName] = editUser.name
        ? editUser.name.split(" ")
        : ["", ""];
      formik.setValues({
        id: editUser.id,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: editUser.email || "",
        password: editUser.password || "",
        phoneNumber: editUser.phone || "",
        address: editUser.address || "",
        occupation: editUser.occupation || "",
      });
    }
  }, [editUser]);

  const FormContent = (
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
        { label: "Email", field: "email", disabled: true }, // Email field is static
        { label: "Password", field: "password", type: "password" }, // New password field
        { label: "Phone Number", field: "phoneNumber" },
        { label: "Address", field: "address" },
        { label: "Occupation", field: "occupation" },
      ].map(({ label, field, type = "text", disabled = false }) => (
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
          required={!disabled} // Email field is not required since it's static
          disabled={disabled} // Disable the email field
          InputLabelProps={{
            required: !disabled,
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
  );

  return (
    <>
      {/* Desktop & Large Screen View - Drawer */}
      {!isMobile && (
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
          {FormContent}
        </Drawer>
      )}

      {/* Mobile & Tablet View - Modal */}
      {isMobile && (
        <Modal open={modalOpen} onClose={handleCloseEditDrawer}>
          <Box
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 350,
              maxHeight: "90vh",
              overflowY: "auto",
              bgcolor: "white",
              boxShadow: 24,
              p: 3,
              borderRadius: 2,
            }}
          >
            {FormContent}
          </Box>
        </Modal>
      )}
    </>
  );
};

export default EditDrawer;
