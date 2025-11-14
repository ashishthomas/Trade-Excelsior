import PropTypes from "prop-types";
import { AppBar, Toolbar, Box, Typography, Badge } from "@mui/material";

const OnboardingHeader = ({ totalItems }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        mb: 2,
        padding: { xs: 1, sm: 2 },
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant="h6"
            fontSize={{ xs: "14px", sm: "18px" }}
            width={{ xs: "auto" }}
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <b>ON BOARDING CHECKLIST</b>
          </Typography>
          <Badge
            badgeContent={totalItems}
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
      </Toolbar>
    </AppBar>
  );
};

OnboardingHeader.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

export default OnboardingHeader;
