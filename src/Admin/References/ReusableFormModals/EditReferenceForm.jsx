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
  title: Yup.string().required("Reference Name is required"),
  category: Yup.string().required("Reference Type is required"),
  referenceLink: Yup.string()
    .url("Enter a valid URL")
    .required("Reference Link is required"),
});

const FormTextField = React.memo(
  ({ label, name, multiline = false, rows = 1 }) => (
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
  )
);

const EditReferenceForm = ({ open, onClose, reference, handleUpdate }) => {
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
            <b>Edit Reference</b>
          </Typography>
          <IconButton onClick={onClose} aria-label="Close Edit Reference Form">
            <CloseIcon />
          </IconButton>
        </Box>

        <Formik
          initialValues={{
            title: reference?.title || "",
            category: reference?.category || "",
            referenceLink: reference?.referenceLink || "",
            image: "",
          }}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleUpdate?.({
              ...reference,
              ...values,
              image:
                selectedImage ||
                reference?.image ||
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
                  CHANGE IMAGE
                </Button>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide broken image
                    }}
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

export default EditReferenceForm;
