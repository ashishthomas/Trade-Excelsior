import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

export default function ProfileFormWrapper({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: 3,
        justifyContent: "center",
        backgroundColor: "#E6E6FF",
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {children}
      </Grid>
    </Box>
  );
}

ProfileFormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};