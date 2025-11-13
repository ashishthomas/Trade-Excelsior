import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const CoreWatchlistHeader = ({ title, count, searchQuery, onSearchChange }) => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: "white",
      mb: 2,
      boxShadow: "none",
      padding: "4px 8px",
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
        alignItems: { xs: "flex-start", sm: "center" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
          {title}
        </Typography>

        <Badge
          badgeContent={count}
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

      <TextField
        variant="outlined"
        placeholder="Search By Company"
        size="small"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          backgroundColor: "#F0F0F0",
          borderRadius: "25px",
          width: { xs: "100%", sm: "200px", md: "300px", lg: "400px" },
          "& fieldset": { border: "none" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "blue" }} />
            </InputAdornment>
          ),
        }}
      />
    </Toolbar>
  </AppBar>
);

CoreWatchlistHeader.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default CoreWatchlistHeader;
