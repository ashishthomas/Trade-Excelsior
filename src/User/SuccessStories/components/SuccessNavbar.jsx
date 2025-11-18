import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Box,
  useMediaQuery,
} from "@mui/material";

export default function SuccessNavbar({ count }) {
  const isExtraSmall = useMediaQuery("(max-width:417px)");

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          textAlign: "center",
          width: "100%",
          padding: isExtraSmall ? "8px" : "16px",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            sx={{
              color: "black",
              flexGrow: { sm: 1 },
              textAlign: { xs: "center", sm: "left" },
              fontSize: isExtraSmall ? "1rem" : { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            <b>Success Stories</b>
          </Typography>

          <Badge
            badgeContent={count}
            sx={{
              ml: 3,
              "& .MuiBadge-badge": {
                height: isExtraSmall ? "1.2rem" : "1.8rem",
                width: isExtraSmall ? "1.2rem" : "1.8rem",
                backgroundColor: "#E6E6FA",
                color: "#007BFF",
                fontSize: isExtraSmall ? "0.6rem" : "0.8rem",
                fontWeight: "bold",
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

SuccessNavbar.propTypes = {
  count: PropTypes.number.isRequired,
};
