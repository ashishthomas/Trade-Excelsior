import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  TextField,
  Box,
} from "@mui/material";

export default function PersonalInfoForm({ formik, isEditing }) {
  return (
    <Card sx={{ padding: 0, boxShadow: 3, width: "100%", height: "100%" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          <b>Personal Information</b>
        </Typography>

        <Divider sx={{ backgroundColor: "black", mb: 2 }} />

        {[
          "firstName",
          "lastName",
          "occupation",
          "mobile",
          "email",
          "address",
        ].map((field) => (
          <TextField
            key={field}
            fullWidth
            label={
              field === "mobile"
                ? "Mobile Number"
                : field === "email"
                ? "Email-Id"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            name={field}
            variant="outlined"
            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[field] && Boolean(formik.errors[field])}
            helperText={formik.touched[field] && formik.errors[field]}
            disabled={!isEditing}
            sx={{ mb: 2 }}
          />
        ))}

        <Box sx={{ height: 24 }} />
      </CardContent>
    </Card>
  );
}

PersonalInfoForm.propTypes = {
  formik: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
};
