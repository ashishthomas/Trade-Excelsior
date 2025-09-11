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
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Reference Name is required"),
  category: Yup.string().required("Reference Type is required"),
  referenceLink: Yup.string()
    .url("Enter a valid URL")
    .required("Reference Link is required"),
});

function FormTextFieldComponent({ label, name, multiline = false, rows = 1 }) {
  return (
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
}

// ✅ Attach propTypes to the actual component
FormTextFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

// ✅ Memoize
const FormTextField = React.memo(FormTextFieldComponent);

// ✅ Add displayName for ESLint happiness
FormTextField.displayName = "FormTextField";

// ✅ AddReferenceForm Component
const AddReferenceForm = ({ open, onClose, handleAdd }) => {
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
            <b>Add Reference</b>
          </Typography>
          <IconButton onClick={onClose} aria-label="Close Add Reference Form">
            <CloseIcon />
          </IconButton>
        </Box>

        <Formik
          initialValues={{
            title: "",
            category: "",
            referenceLink: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleAdd?.({
              ...values,
              id: Date.now(),
              image: selectedImage
                ? selectedImage
                : "https://via.placeholder.com/150",
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
                <FormTextField label="Reference Name" name="title" />
                <FormTextField label="Reference Type" name="category" />
                <FormTextField label="Reference Link" name="referenceLink" />
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
                {/* File Upload Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
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
                  UPLOAD IMAGE
                </Button>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      borderRadius: "6px",
                      border: "1px solid #ddd",
                    }}
                  />
                )}
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
                  Add
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

// ✅ PropTypes for AddReferenceForm
AddReferenceForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

AddReferenceForm.displayName = "AddReferenceForm";

export default AddReferenceForm;
