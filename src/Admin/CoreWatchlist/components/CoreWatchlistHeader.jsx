import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Badge,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";

const HeaderSection = ({
  searchQuery,
  setSearchQuery,
  count,
  handleAddOpen,
}) => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", mb: 2, boxShadow: "none" }}
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
            CORE WATCHLIST
          </Typography>

          <Badge
            badgeContent={count}
            sx={{
              ml: { xs: 0, sm: 0, md: 1 },
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            width: { xs: "100%", sm: "auto" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search By Company"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 1, sm: 1.5 },
            }}
            onClick={handleAddOpen}
          >
            Add Core Watchlist
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

HeaderSection.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  handleAddOpen: PropTypes.func.isRequired,
};

export default HeaderSection;
