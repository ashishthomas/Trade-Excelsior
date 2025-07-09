
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  TextField,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMediaQuery, useTheme } from "@mui/material";

const SuccessStoryForm = ({ open, onClose, onSubmit, selectedStory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isEditMode = Boolean(selectedStory);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("User Name is required"),
    feedback: Yup.string().required("Feedback is required"),
    video: Yup.string().url("Invalid URL").required("Video Link is required"),
    tagline: Yup.string().required("Tagline is required"),
    image: Yup.mixed().required("User Image is required"),
  });

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ zIndex: 1300 }}
      PaperProps={{
        sx: {
          width: isMobile ? "80%" : isTablet ? "70%" : "500px",
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ bgcolor: "whitesmoke", p: 2, mb: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="bold">
              {isEditMode ? "Edit Success Story" : "Add Success Story"}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Form */}
        <Formik
          initialValues={{
            name: selectedStory?.name || "",
            feedback: selectedStory?.feedback || "",
            video: selectedStory?.video || "",
            tagline: selectedStory?.tagline || "",
            image: selectedStory?.image || "",
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => {
            onSubmit({ ...values, id: selectedStory?.id || Date.now() });
            onClose();
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* User Name */}
              <Field
                as={TextField}
                label={
                  <>
                    User Name <span style={{ color: "red" }}>*</span>
                  </>
                }
                name="name"
                fullWidth
                sx={{ mt: 2 }}
              />
              <ErrorMessage name="name" component="div" className="error" />

              {/* Feedback */}
              <Field
                as={TextField}
                label={
                  <>
                    Feedback <span style={{ color: "red" }}>*</span>
                  </>
                }
                name="feedback"
                fullWidth
                multiline
                rows={4}
                sx={{ mt: 2 }}
              />
              <ErrorMessage name="feedback" component="div" className="error" />

              {/* Video Link */}
              <Field
                as={TextField}
                label={
                  <>
                    Video Link <span style={{ color: "red" }}>*</span>
                  </>
                }
                name="video"
                fullWidth
                sx={{ mt: 2 }}
              />
              <ErrorMessage name="video" component="div" className="error" />

              {/* Tagline */}
              <Field
                as={TextField}
                label={
                  <>
                    Tagline <span style={{ color: "red" }}>*</span>
                  </>
                }
                name="tagline"
                fullWidth
                sx={{ mt: 2 }}
              />
              <ErrorMessage name="tagline" component="div" className="error" />

              {/* User Image */}
              <FormControl sx={{ mt: 2, width: "100%" }}>
                <FormLabel>
                  User Image <span style={{ color: "red" }}>*</span>
                </FormLabel>
                {values.image && (
                  <Box
                    component="img"
                    src={values.image}
                    alt="User Image"
                    sx={{
                      width: "100%",
                      maxWidth: "200px",
                      height: "auto",
                      borderRadius: "8px",
                      mt: 1,
                      mb: 2,
                    }}
                  />
                )}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1 }}
                  component="label"
                >
                  {isEditMode ? "Change Image" : "Upload Image"}
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      if (file) {
                        const imageUrl = URL.createObjectURL(file);
                        setFieldValue("image", imageUrl);
                      }
                    }}
                  />
                </Button>
              </FormControl>
              <ErrorMessage name="image" component="div" className="error" />

              {/* Form Actions */}
              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 3, justifyContent: "flex-end" }}
              >
                <Button type="submit" variant="contained">
                  {isEditMode ? "Update" : "Add"}
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "lightgray" }}
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
  );
};

export default SuccessStoryForm;
