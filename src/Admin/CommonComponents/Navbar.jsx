import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Logout, PersonTwoTone } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1.5%",
});

const StyledAppbar = styled(AppBar)({
  backgroundColor: "white",
  position: "sticky",
  color: "inherit",
  zIndex: 1190,
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e0e0e0",
  padding: "3.5%",
  borderRadius: "30px",
  cursor: "pointer",
});
//Usermenu component
const UserMenu = ({ anchorEl, setAnchorEl }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setAnchorEl(null); // Close the menu
    navigate("/profilemain"); // Navigate to the Profile page
  };
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem onClick={handleProfileClick} sx={{ mb: 1.5 }}>
        <PersonTwoTone sx={{ mr: 1 }} /> My Profile
      </MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Logout sx={{ mr: 1 }} /> Logout
      </MenuItem>
    </Menu>
  );
};
//Navbar component
const Navbar = ({ toggleSidebar, unresolvedCount }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const location = useLocation(); // Get the current route

  return (
    <StyledAppbar elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Disable Sidebar Toggle in Mobile View */}
          {!isMobile && (
            <MenuIcon
              onClick={toggleSidebar}
              sx={{ mr: 4, cursor: "pointer" }}
            />
          )}
          <Typography variant="h6">Excelsior</Typography>
        </Box>

        <Icons>
          <Badge
            badgeContent={unresolvedCount}
            color="error"
            gap="10px"
            
            sx={{
              "& .MuiBadge-badge": {
                height: "1.2rem",
                width: "1.2rem",
                minWidth: "auto",
                backgroundColor: "#D32F2F",
                color: "#FFFFFF",
                fontSize: "0.75rem",
                fontWeight: "bold",
                lineHeight: "1.2rem",
                mr:2
              },
            }}
          >
            <NotificationsIcon  color="primary" sx={{ fontSize: "1.8rem",mr:2 }} />
          </Badge>

          <StyledBox  onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar sx={{ fontSize: "15px" }}>M</Avatar>
            <Badge color="error">
              <SettingsIcon color="primary" />
            </Badge>
          </StyledBox>

          <UserMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Icons>
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default Navbar;
