import React from "react";
// import { Box, Button, Drawer, IconButton, Stack, TextField, Typography, FormControl, FormLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Box,Button, Drawer, FormControl, FormLabel, IconButton, Stack, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";

// const SuccessStoryForm = ({ open, onClose, onSubmit, selectedStory }) => {
  
//   const isEditMode = Boolean(selectedStory); // Check if editing or adding
  
//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("User Name is required"),
//     feedback: Yup.string().required("Feedback is required"),
//     video: Yup.string().url("Invalid URL").required("Video Link is required"),
//     tagline: Yup.string().required("Tagline is required"),
//     image: Yup.mixed().required("User Image is required"),
//   });

//   return (
//     <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: 1300 }}>
//       <Box sx={{ width: 500, p: 3 }}>
//         {/* Header */}
//         <Box sx={{ bgcolor: "whitesmoke", p: 1, width: "100%", mb: 4 }}>
//           <Stack direction="row" justifyContent="space-between" alignItems="center">
//             <Typography variant="h6" fontWeight="bold">
//               {isEditMode ? "Edit Success Story" : "Add Success Story"}
//             </Typography>
//             <IconButton onClick={onClose}>
//               <CloseIcon />
//             </IconButton>
//           </Stack>
//         </Box>

//         {/* Form */}
//         <Formik
//           initialValues={selectedStory || {
//             name: "",
//             feedback: "",
//             video: "",
//             tagline: "",
//             image: "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             onSubmit(values);
//             onClose();
//           }}
//         >
//           {({ setFieldValue }) => (
//             <Form>
//               <Field as={TextField} label="User Name *" name="name" fullWidth sx={{ mt: 2 }} />
//               <ErrorMessage name="name" component="div" style={{ color: "red", fontSize: "0.8rem" }} />

//               <Field as={TextField} label="Feedback *" name="feedback" fullWidth multiline rows={4} sx={{ mt: 2 }} />
//               <ErrorMessage name="feedback" component="div" style={{ color: "red", fontSize: "0.8rem" }} />

//               <Field as={TextField} label="Video Link *" name="video" fullWidth sx={{ mt: 2 }} />
//               <ErrorMessage name="video" component="div" style={{ color: "red", fontSize: "0.8rem" }} />

//               <Field as={TextField} label="Tagline *" name="tagline" fullWidth sx={{ mt: 2 }} />
//               <ErrorMessage name="tagline" component="div" style={{ color: "red", fontSize: "0.8rem" }} />

//               <FormControl sx={{ mt: 2, width: "100%" }}>
//                 <FormLabel>User Image *</FormLabel>
//                 <Button variant="contained" fullWidth sx={{ mt: 1 }} component="label">
//                   Upload Image
//                   <input
//                     type="file"
//                     hidden
//                     accept="image/*"
//                     onChange={(event) => {
//                       const file = event.currentTarget.files[0];
//                       if (file) {
//                         const imageUrl = URL.createObjectURL(file);
//                         setFieldValue("image", imageUrl);
//                       }
//                     }}
//                   />
//                 </Button>
//               </FormControl>
//               <ErrorMessage name="image" component="div" style={{ color: "red", fontSize: "0.8rem" }} />

//               <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: "flex-end" }}>
//                 <Button type="submit" variant="contained">
//                   {isEditMode ? "Update" : "Add"}
//                 </Button>
//                 <Button variant="contained" sx={{ bgcolor: "lightgray" }} onClick={onClose}>
//                   Cancel
//                 </Button>
//               </Stack>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </Drawer>
//   );
// };

// export default SuccessStoryForm;
const SuccessStoryForm = ({ open, onClose, onSubmit, selectedStory }) => {
    const isEditMode = Boolean(selectedStory); // Check if we're editing
    
    const validationSchema = Yup.object().shape({
      name: Yup.string().required("User Name is required"),
      feedback: Yup.string().required("Feedback is required"),
      video: Yup.string().url("Invalid URL").required("Video Link is required"),
      tagline: Yup.string().required("Tagline is required"),
      image: Yup.mixed().required("User Image is required"),
    });
  
    return (
      <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: 1300 }}>
        <Box sx={{ width: 500, p: 3 }}>
          {/* Header */}
          <Box sx={{ bgcolor: "whitesmoke", p: 1, width: "100%", mb: 4 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="bold">
                {isEditMode ? "Edit Success Story" : "Add Success Story"} {/* Button text updates correctly */}
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
            enableReinitialize={true} // Ensures form updates when selectedStory changes
            onSubmit={(values) => {
              onSubmit({ ...values, id: selectedStory?.id || Date.now() });
              onClose();
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <Field as={TextField} label={<>User Name <span style={{ color: "red" }}>*</span></>} name="name" fullWidth sx={{ mt: 2 }} />
                <ErrorMessage name="name" component="div" className="error" />
  
                <Field as={TextField} label={<>Feedback <span style={{ color: "red" }}>*</span></>} name="feedback" fullWidth multiline rows={4} sx={{ mt: 2 }} />
                <ErrorMessage name="feedback" component="div" className="error" />
  
                <Field as={TextField} label={<>Video link <span style={{ color: "red" }}>*</span></>} name="video" fullWidth sx={{ mt: 2 }} />
                <ErrorMessage name="video" component="div" className="error" />
  
                <Field as={TextField} label={<>Tagline <span style={{ color: "red" }}>*</span></>} name="tagline" fullWidth sx={{ mt: 2 }} />
                <ErrorMessage name="tagline" component="div" className="error" />
  
                <FormControl sx={{ mt: 2, width: "100%" }}>
                  <FormLabel>User Image *</FormLabel>
                  <Button variant="contained" fullWidth sx={{ mt: 1 }} component="label">
                   {isEditMode ? "Change image":"Upload image"}

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
  
                <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: "flex-end" }}>
                  <Button type="submit" variant="contained">
                    {isEditMode ? "Update" : "Add"} {/* Correct button text */}
                  </Button>
                  <Button variant="contained" sx={{ bgcolor: "lightgray" }} onClick={onClose}>
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
  