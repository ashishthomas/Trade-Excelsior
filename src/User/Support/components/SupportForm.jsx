import PropTypes from "prop-types";
import {
  Box,
  TextField,
  Button,
  useMediaQuery,
  Grid,
  useTheme,
} from "@mui/material";

export default function SupportForm({ formik }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const fields = ["name", "email", "contact", "message"];

  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 1 : 2,
          borderRadius: "8px",
          padding: isMobile ? "12px" : "24px",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          {fields.map((field) => (
            <TextField
              key={field}
              fullWidth
              id={field}
              name={field}
              label={
                <span>
                  {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                  <span style={{ color: "red" }}>*</span>
                </span>
              }
              variant="outlined"
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[field] && Boolean(formik.errors[field])}
              helperText={formik.touched[field] && formik.errors[field]}
              sx={{
                mb: isMobile ? 1 : 2,
                "& .MuiOutlinedInput-root": {
                  ...(field !== "message" && {
                    height: isMobile ? "56px" : "56px",
                  }),
                  "& input": {
                    textAlign: isMobile ? "center" : "left",
                    fontSize: isMobile
                      ? "0.8rem"
                      : isTablet
                      ? "0.9rem"
                      : "1rem",
                    padding: isMobile ? "8px" : "16px",
                  },
                },
              }}
              multiline={field === "message"}
              rows={field === "message" ? 3 : 1}
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: isMobile ? 1 : 2,
              padding: isMobile ? "6px 12px" : "12px 48px",
              fontSize: isMobile ? "0.8rem" : isTablet ? "1rem" : "1.2rem",
              width: "100%",
              height: isMobile ? "36px" : "48px",
            }}
          >
            SUBMIT
          </Button>
        </form>
      </Box>
    </Grid>
  );
}

SupportForm.propTypes = {
  formik: PropTypes.object.isRequired,
};
