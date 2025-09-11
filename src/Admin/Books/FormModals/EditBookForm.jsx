import { useRef, useCallback, useState } from "react";
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
import PropTypes from "prop-types";

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

FormTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

const EditBookForm = ({ open, onClose, bookData, handleUpdate }) => {
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
            <b>Edit Book</b>
          </Typography>
          <IconButton onClick={onClose} aria-label="Close Edit Book Form">
            <CloseIcon />
          </IconButton>
        </Box>

        <Formik
          initialValues={{
            bookTagline: bookData?.bookTagline || "",
            bookName: bookData?.bookName || "",
            bookDescription: bookData?.bookDescription || "",
            bookLink: bookData?.bookLink || "",
            buttonName: bookData?.buttonName || "",
          }}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleUpdate?.({
              ...bookData,
              ...values,
              image:
                selectedImage ||
                bookData?.image ||
                "https://via.placeholder.com/150",
            });
            setSubmitting(false);
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
                    Change Book Image
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
                  CHANGE IMAGE
                </Button>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                  mt: { xs: 1 },
                  p: { xs: 2, sm: 5 },
                  ml: { xs: 0, sm: 14, md: 18 },
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: "100%", sm: "48%" } }}
                >
                  Update
                </Button>
                <Button
                  onClick={onClose}
                  sx={{
                    width: { xs: "100%", sm: "48%" },
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

// ✅ PropTypes for ESLint
EditBookForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  bookData: PropTypes.shape({
    bookTagline: PropTypes.string,
    bookName: PropTypes.string,
    bookDescription: PropTypes.string,
    bookLink: PropTypes.string,
    buttonName: PropTypes.string,
    image: PropTypes.string,
  }),
  handleUpdate: PropTypes.func.isRequired,
};

export default EditBookForm;
