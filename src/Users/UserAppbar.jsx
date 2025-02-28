import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Box,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import CustomModal from "../Admin/CommonComponents/CustomModal";
import AddUser from "../Admin/Dashboard/AddUser";

const AppBarComponent = ({ searchQuery, setSearchQuery, userCount }) => {
  const [openUser, setOpenUser] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", mb: 2, boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
            alignItems: { xs: "flex-start", sm: "center" },
            padding: { xs: 1, sm: 2 }, 
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
                fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
                fontWeight: "bold",
              }}
            >
              User List
            </Typography>
            <Avatar
              sx={{
                fontSize: "15px",
                bgcolor: "#e0e0e0",
                color: "#4fc3f7",
                width: 32,
                height: 32,
              }}
            >
              {userCount}
            </Avatar>
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
              placeholder="Search..."
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
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.5 },
              }}
              onClick={() => setOpenUser(true)}
            >
              Add User
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
          justifyContent: "start",
          gap: 2,
          mt: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          px: { xs: 2, sm: 0 }, 
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{
            px: 4,
            width: { xs: "100%", sm: "auto" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          Active License
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            px: 4,
            width: { xs: "100%", sm: "auto" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          Inactive License
        </Button>
      </Box>
    </>
  );
};

export default AppBarComponent;
