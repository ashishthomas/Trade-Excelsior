import PropTypes from "prop-types";
import { AppBar, Toolbar, Box, Typography, Badge } from "@mui/material";

const ReferencesHeader = ({ count }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "center" },
          justifyContent: { xs: "center", sm: "space-between" },
          textAlign: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography
            variant="h6"
            fontSize={{ xs: "14px", sm: "18px" }}
            width={{ xs: "auto" }}
            sx={{
              color: "black",
              flexGrow: { sm: 1 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <b>REFERENCES</b>
          </Typography>

          <Badge
            badgeContent={count}
            sx={{
              ml: 3,
              "& .MuiBadge-badge": {
                height: "1.8rem",
                width: "1.8rem",
                backgroundColor: "#E6E6FA",
                color: "#007BFF",
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

ReferencesHeader.propTypes = {
  count: PropTypes.number.isRequired,
};
export default ReferencesHeader;
