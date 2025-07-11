import { useState } from "react";
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
import PropTypes from "prop-types";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Logout, PersonTwoTone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

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
const UserMenu = ({ anchorEl, setAnchorEl }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setAnchorEl(null);
    navigate("/profilemain");
  };

  const handleSwitchToUser = () => {
    setAnchorEl(null);
    localStorage.setItem("role", "user");
    window.location.reload();
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.clear();
    navigate("/Profilemain");
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
      <MenuItem onClick={handleSwitchToUser} sx={{ mb: 1.5 }}>
        <SwapHorizIcon sx={{ mr: 1 }} /> Switch to User
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Logout sx={{ mr: 1 }} /> Logout
      </MenuItem>
    </Menu>
  );
};

const Navbar = ({ toggleSidebar, unresolvedCount }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledAppbar elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
                mr: 2,
              },
            }}
          >
            <NotificationsIcon
              color="primary"
              sx={{ fontSize: "1.8rem", mr: 2 }}
            />
          </Badge>

          <StyledBox onClick={(e) => setAnchorEl(e.currentTarget)}>
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
Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  unresolvedCount: PropTypes.number,
};
UserMenu.propTypes = {
  anchorEl: PropTypes.any,
  setAnchorEl: PropTypes.func.isRequired,
};
export default Navbar;
