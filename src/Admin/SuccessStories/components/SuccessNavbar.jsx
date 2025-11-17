// src/Admin/SuccessStories/components/SuccessNavbar.jsx
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Badge,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function SuccessNavbar({ onAdd, count }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isExtraSmall = useMediaQuery("(max-width:417px)");

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "center" },
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
        <Button
          variant="contained"
          color="primary"
          onClick={onAdd}
          sx={{
            textTransform: "none",
            fontSize: isExtraSmall
              ? "0.7rem"
              : isMobile || isTablet
              ? "0.8rem"
              : "1rem",
            whiteSpace: "nowrap",
            padding: isExtraSmall
              ? "4px 8px"
              : isMobile || isTablet
              ? "6px 12px"
              : "8px 16px",
            mt: { xs: 1, sm: 0 },
          }}
        >
          +Add Success Stories
        </Button>
      </Toolbar>
    </AppBar>
  );
}


SuccessNavbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};