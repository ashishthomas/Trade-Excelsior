import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button, Badge, Box } from "@mui/material";

const BooksHeader = ({ booksCount, handleAddOpen }) => (
  <AppBar position="static" sx={{ backgroundColor: "white", p: { xs: 0.5 } }}>
    <Toolbar
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
        textAlign: "center",
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
          sx={{
            color: "black",
            textAlign: { xs: "center", sm: "left" },
            marginRight: "10px",
          }}
        >
          <b> MY BOOKS </b>
        </Typography>

        <Badge
          badgeContent={booksCount}
          sx={{
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

      <Button
        variant="contained"
        onClick={handleAddOpen}
        sx={{
          fontSize: { xs: "0.7rem", sm: "1rem" },
          mt: { xs: 1, sm: 0 },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        + Add Book
      </Button>
    </Toolbar>
  </AppBar>
);

BooksHeader.propTypes = {
  booksCount: PropTypes.number.isRequired,
  handleAddOpen: PropTypes.func.isRequired,
};

export default BooksHeader;
