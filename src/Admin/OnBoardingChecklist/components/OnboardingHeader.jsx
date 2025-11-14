import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Box, Badge, Button } from "@mui/material";

const OnboardingHeader = ({ itemCount, handleAddChecklist }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        mb: 2,
        padding: { xs: 0.5, sm: 0.5 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "center" },
          justifyContent: "space-between",
          gap: { xs: 1, sm: 0 },
        }}
      >
        {/* Left: Title + Badge */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography
            variant="h6"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <b>ON BOARDING CHECKLIST</b>
          </Typography>
          <Badge
            badgeContent={itemCount}
            sx={{
              ml: 3,
              "& .MuiBadge-badge": {
                height: "1.8rem",
                width: "1.8rem",
                backgroundColor: "#E6E6FA",
                color: "#1976d2",
                fontSize: "0.8rem",
                fontWeight: "bold",
              },
            }}
          />
        </Box>

        {/* Right: Add Checklist button */}
        <Button
          variant="contained"
          onClick={handleAddChecklist}
          sx={{
            fontSize: { xs: "0.7rem", sm: "1rem" },
            mt: { xs: 1, sm: 0 },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          + Add Checklist
        </Button>
      </Toolbar>
    </AppBar>
  );
};

OnboardingHeader.propTypes = {
  itemCount: PropTypes.number.isRequired,
  handleAddChecklist: PropTypes.func.isRequired,
};
export default OnboardingHeader;
