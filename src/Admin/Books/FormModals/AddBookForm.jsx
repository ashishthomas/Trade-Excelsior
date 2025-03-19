import React, { useRef, useCallback, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  bookTagline: Yup.string().required("Book Tagline is required"),
  bookName: Yup.string().required("Book Name is required"),
  bookDescription: Yup.string().required("Book Description is required"),
  bookLink: Yup.string()
    .url("Enter a valid URL")
    .required("Book link is required"),
  buttonName: Yup.string().required("Button Name is required"),
});

const FormTextField = ({ label, name, multiline = false, rows = 1 }) => (
  <Field name={name}>
    {({ field, meta }) => (
      <TextField
        fullWidth
        label={
          <>
            {label} <span style={{ color: "red" }}>*</span>
          </>
        }
        variant="outlined"
        size="small"
        multiline={multiline}
        rows={rows}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        {...field}
      />
    )}
  </Field>
);

const AddBookForm = ({ open, onClose, handleAdd }) => {
  const fileInputRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  }, []);

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: 1300 }}>
      <Box
        sx={{
          width: isMobile ? "80vw" : isTablet ? "53vw" : "400px",
          p: isMobile ? 1 : 0,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ bgcolor: "#E6E6FA", mb: 0, p: 1 }}
        >
          <Typography variant="h6">
            <b>Add Book</b>
          </Typography>
          <IconButton onClick={onClose} aria-label="Close Add Book Form">
            <CloseIcon />
          </IconButton>
        </Box>

        <Formik
          initialValues={{
            bookTagline: "",
            bookName: "",
            bookDescription: "",
            bookLink: "",
            buttonName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleAdd?.({
              ...values,
              id: Date.now(),
              image: selectedImage || "https://via.placeholder.com/150",
            });
            resetForm();
            setSelectedImage(null);
            onClose();
          }}
        >
          {() => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  p: { xs: 2, sm: 5, md: 5 },
                }}
              >
                <FormTextField label="Book Tagline" name="bookTagline" />
                <FormTextField label="Book Name" name="bookName" />
                <FormTextField
                  label="Book Description"
                  name="bookDescription"
                  multiline
                  rows={3}
                />
                <FormTextField label="Link to Buy Book" name="bookLink" />
                <FormTextField label="Button Name" name="buttonName" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  pl: { xs: 2, sm: 5 },
                  pr: { xs: 2, sm: 5 },
                }}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Book Preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      borderRadius: "6px",
                      border: "1px solid #ddd",
                    }}
                  />
                ) : (
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", color: "#333", mt: 1 }}
                  >
                    Add Book Image
                  </Typography>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#1976D2",
                    textTransform: "none",
                    borderRadius: "6px",
                    p: "10px 0",
                  }}
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload Image
                </Button>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                  mt: { xs: 1 }, // Smaller margin for mobile, larger for desktop
                  p: { xs: 2, sm: 5 }, // Adjust padding for different screens
                  ml: { xs: 0, sm: 14, md: 18 }, // No margin-left for mobile, gradually increasing for larger screens
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", sm: "48%" } }} // Full width on mobile, 48% on larger screens
                >
                  Add
                </Button>
                <Button
                  onClick={onClose}
                  sx={{
                    width: { xs: "100%", sm: "48%" }, // Same width adjustment
                    bgcolor: "grey",
                    color: "white",
                    ml: { xs: 2, sm: 2 },
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
  );
};

export default AddBookForm;
