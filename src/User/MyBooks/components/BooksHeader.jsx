import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Box, Badge } from "@mui/material";

const BooksHeader = ({ count }) => (
  <AppBar position="static" sx={{ backgroundColor: "white" }}>
    <Toolbar
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", sm: "space-between" },
        textAlign: "center",
        width: "100%",
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="h6"
          sx={{
            color: "black",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <b>MY BOOKS</b>
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

BooksHeader.propTypes = {
  count: PropTypes.number.isRequired,
};

export default BooksHeader;
