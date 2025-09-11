import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

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
          <IconButton onClick={onClose} aria-label="Close drawer">
            <CloseIcon />
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

EditChecklistDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      buttonName: PropTypes.string,
    }).isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }).isRequired,
  editItem: PropTypes.bool,
};

EditChecklistDrawer.defaultProps = {
  editItem: false,
};

export default EditChecklistDrawer;
