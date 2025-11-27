import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Info, Logout } from "@mui/icons-material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

const StyledAppbar = styled(AppBar)({
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  color: "inherit",
  zIndex: 1200,
  boxShadow: "none",
  padding: "5px ",
});

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e0e0e0",
  padding: "8px",
  borderRadius: "30px",
  cursor: "pointer",
  [theme.breakpoints.down(320)]: {
    padding: "4px",
  },
}));

const UserMenu = ({ anchorEl, setAnchorEl }) => {
  const handleSwitchToAdmin = () => {
    setAnchorEl(null);
    localStorage.setItem("role", "admin");
    globalThis.location.reload();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem onClick={() => setAnchorEl(null)} sx={{ mb: 1.5 }}>
        <AccountCircle sx={{ mr: 1 }} /> My Profile
      </MenuItem>
      <MenuItem onClick={handleSwitchToAdmin} sx={{ mb: 1.5 }}>
        <SwapHorizIcon sx={{ mr: 1 }} /> Switch to Admin
      </MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Logout sx={{ mr: 1 }} /> Logout
      </MenuItem>
    </Menu>
  );
};

UserMenu.propTypes = {
  anchorEl: PropTypes.any,
  setAnchorEl: PropTypes.func.isRequired,
};

const Navbar = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down(320));

  // ✔ SonarQube fix – no nested ternary operations
  const { padding, fontSize, minWidth, iconFontSize } = useMemo(() => {
    let paddingValue;
    let fontSizeValue;
    let minWidthValue;
    let iconFontSizeValue;

    // Padding
    if (isExtraSmall) {
      paddingValue = "4px 4px";
    } else if (isMobile) {
      paddingValue = "6px 6px";
    } else {
      paddingValue = "12px 24px";
    }

    // Font size
    if (isExtraSmall) {
      fontSizeValue = "10px";
    } else if (isMobile) {
      fontSizeValue = "12px";
    } else {
      fontSizeValue = "16px";
    }

    // Min width
    if (isExtraSmall) {
      minWidthValue = "100px";
    } else if (isMobile) {
      minWidthValue = "140px";
    } else {
      minWidthValue = "260px";
    }

    // Icon font size
    if (isExtraSmall) {
      iconFontSizeValue = "12px";
    } else if (isMobile) {
      iconFontSizeValue = "14px";
    } else {
      iconFontSizeValue = "16px";
    }

    return {
      padding: paddingValue,
      fontSize: fontSizeValue,
      minWidth: minWidthValue,
      iconFontSize: iconFontSizeValue,
    };
  }, [isMobile, isExtraSmall]);

  return (
    <StyledAppbar>
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
          <Button
            variant="outlined"
            color="primary"
            sx={{
              padding,
              fontSize,
              minWidth,
              textTransform: "none",
            }}
          >
            <Info sx={{ mr: 1, fontSize: iconFontSize }} />
            Subscription ends in 365 days
          </Button>

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
};

export default Navbar;
