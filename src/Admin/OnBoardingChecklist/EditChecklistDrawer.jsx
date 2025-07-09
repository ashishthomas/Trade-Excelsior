import {
  Box,
  Drawer,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const EditChecklistDrawer = ({ open, onClose, formik, editItem }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: 1300 }}>
      <Box sx={{ width: "100vw", maxWidth: "350px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ bgcolor: "#F7F7F7", mb: 5 }}
        >
          <Typography variant="h6" sx={{ p: 1 }}>
            {editItem ? "Edit Checklist" : "Add Checklist"}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            label={
              <>
                Checklist Description <span style={{ color: "red" }}>*</span>
              </>
            }
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            margin="normal"
          />

          <TextField
            fullWidth
            label={
              <>
                Link <span style={{ color: "red" }}>*</span>
              </>
            }
            name="link"
            value={formik.values.link}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.link && Boolean(formik.errors.link)}
            helperText={formik.touched.link && formik.errors.link}
            margin="normal"
          />

          <TextField
            fullWidth
            label={
              <>
                Button Name <span style={{ color: "red" }}>*</span>
              </>
            }
            name="buttonName"
            value={formik.values.buttonName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.buttonName && Boolean(formik.errors.buttonName)
            }
            helperText={formik.touched.buttonName && formik.errors.buttonName}
            margin="normal"
          />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mt={20}
          ml={17}
          mr={3}
          mb={5}
        >
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="primary"
            sx={{ width: "48%" }}
          >
            {editItem ? "Update" : "Add"}
          </Button>

          <Button
            onClick={onClose}
            sx={{
              width: "48%",
              bgcolor: "grey",
              color: "white",
              borderColor: "grey",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default EditChecklistDrawer;
