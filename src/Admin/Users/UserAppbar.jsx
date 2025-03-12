import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Box,
  Badge,
} from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import CustomModal from "../CommonComponents/CustomModal";
import AddUser from "../Dashboard/forms/AddUser";

const AppBarComponent = ({ searchQuery, setSearchQuery, userCount }) => {
  const [openUser, setOpenUser] = useState(false);

  return (
    <>
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
          {/* User List Title with User Count */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              USER LIST
            </Typography>
            <Badge
              badgeContent={userCount}
              sx={{
                ml: 2,
                "& .MuiBadge-badge": {
                  height: "1.8rem",
                  width: "1.8rem",
                  backgroundColor: "#E6E6FA",
                  color: "#1976d2",
                  fontSize: "0.8rem",
                },
              }}
            />
          </Box>

          {/* Search Bar & Add User Button */}
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
              placeholder="Search By Name or Email or "
              size="small"
              sx={{
                backgroundColor: "#F0F0F0",
                borderRadius: "25px",
                width: { xs: "100%", sm: "200px", md: "300px", lg: "400px" },
                "& fieldset": { border: "none" },
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
                fontSize: { xs: "0.7rem", sm: "1rem" },
                mt: { xs: 1, sm: 0 },
                width: { xs: "100%", sm: "auto" }, // Full width on mobile
              }}
              onClick={() => setOpenUser(true)}
            >
              ADD USER
            </Button>
          </Box>
          <CustomModal
            open={openUser}
            handleClose={() => setOpenUser(false)}
            title="Add User"
          >
            <AddUser />
          </CustomModal>
        </Toolbar>
      </AppBar>

      {/* Buttons for Active and Inactive License */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
          mt: 3,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          px: { xs: 2, sm: 0 },
          mr: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            px: 3,
            py: 1,
            backgroundColor: "lightgreen",
            color: "darkgreen",
            "&:hover": {
              backgroundColor: "lightgreen",
            },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Active License
        </Button>
        <Button
          variant="contained"
          sx={{
            px: 3, // Reduce padding to make the button smaller
            py: 1, // Reduce padding to make the button smaller
            backgroundColor: "#ffcccb", // Light red background
            color: "red", // Red font color
            "&:hover": {
              backgroundColor: "#ffcccb", // Keep the same color on hover
            },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Inactive License
        </Button>
      </Box>
    </>
  );
};

export default AppBarComponent;
