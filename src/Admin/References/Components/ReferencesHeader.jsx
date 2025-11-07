import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";

const ReferencesHeader = ({ count, onAddOpen }) => {
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
            sx={{ color: "black", flexGrow: { sm: 1 } }}
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

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3A86FF",
            textTransform: "none",
            mt: { xs: 2, sm: 0 },
            mb: { xs: 2, sm: 0 },
          }}
          onClick={onAddOpen}
        >
          <Typography variant="body1">+ Add References</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

ReferencesHeader.propTypes = {
  count: PropTypes.number.isRequired,
  onAddOpen: PropTypes.func.isRequired,
};

export default ReferencesHeader;
