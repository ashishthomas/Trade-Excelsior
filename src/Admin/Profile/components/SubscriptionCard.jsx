import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

export default function SubscriptionCard({ formik, isEditing }) {
  return (
    <Card
      sx={{
        padding: 0,
        boxShadow: 3,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          <b>Subscription</b>
        </Typography>

        <Divider sx={{ backgroundColor: "black", marginBottom: 1 }} />

        <Typography sx={{ fontSize: "1rem" }}>License:GOLD</Typography>
        <Typography sx={{ fontSize: "1rem" }}>
          Member Since:2024-10-28
        </Typography>
        <Typography sx={{ fontSize: "1rem" }}>
          Subscription Start:2024-10-28
        </Typography>
        <Typography sx={{ fontSize: "1rem", mb: 1 }}>
          Subscription End:2024-11-20
        </Typography>

        {/* Instagram */}
        <TextField
          fullWidth
          label="Instagram URL"
          variant="outlined"
          name="instagramUrl"
          value={formik.values.instagramUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.instagramUrl && Boolean(formik.errors.instagramUrl)
          }
          helperText={formik.touched.instagramUrl && formik.errors.instagramUrl}
          disabled={!isEditing}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InstagramIcon color="error" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        {/* Facebook */}
        <TextField
          fullWidth
          label="Facebook URL"
          variant="outlined"
          name="facebookUrl"
          value={formik.values.facebookUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.facebookUrl && Boolean(formik.errors.facebookUrl)
          }
          helperText={formik.touched.facebookUrl && formik.errors.facebookUrl}
          disabled={!isEditing}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FacebookIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        {/* LinkedIn */}
        <TextField
          fullWidth
          label="LinkedIn URL"
          variant="outlined"
          name="linkedInUrl"
          value={formik.values.linkedInUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.linkedInUrl && Boolean(formik.errors.linkedInUrl)
          }
          helperText={formik.touched.linkedInUrl && formik.errors.linkedInUrl}
          disabled={!isEditing}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        {/* X / Twitter */}
        <TextField
          fullWidth
          label="X URL"
          variant="outlined"
          name="xUrl"
          value={formik.values.xUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.xUrl && Boolean(formik.errors.xUrl)}
          helperText={formik.touched.xUrl && formik.errors.xUrl}
          disabled={!isEditing}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <XIcon color="black" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        <Typography sx={{ fontSize: "1rem" }}>
          <b>Note:</b> Don&apos;t have a link? Enter NA and save.
        </Typography>

        <Box sx={{ height: 18 }} />
      </CardContent>
    </Card>
  );
}

SubscriptionCard.propTypes = {
  formik: PropTypes.shape({
    values: PropTypes.shape({
      instagramUrl: PropTypes.string,
      facebookUrl: PropTypes.string,
      linkedInUrl: PropTypes.string,
      xUrl: PropTypes.string,
    }).isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }).isRequired,
  isEditing: PropTypes.bool.isRequired,
};
