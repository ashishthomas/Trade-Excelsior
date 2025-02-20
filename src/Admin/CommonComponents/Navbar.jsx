// import {
//   AppBar,
//   Avatar,
//   Badge,
//   Box,
//   Menu,
//   MenuItem,
//   styled,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import SettingsIcon from "@mui/icons-material/Settings";
// import React, { useState } from "react";
// import {
//   Logout,
//   PersonTwoTone,
// } from "@mui/icons-material";

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const Icons = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   gap: "20px",
// });

// const StyledAppbar = styled(AppBar)({
//   backgroundColor: "white",
//   position: "sticky",
//   color: "inherit",
//   zIndex: 1201,
// });

// const StyledBox = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   gap: 8,
//   bgcolor: "#F5EFE7",
//   borderRadius: "20px",
//   padding: "5px",
// });

// function Navbar({ isCollapsed, toggleSidebar }) {
//   const [anchorEl, setAnchorEl] = useState(true);
//   const handleClick = (event) => setAnchorEl(event.currentTarget);
//   const handleClose = () => setAnchorEl(false);
//   const open = Boolean(anchorEl);
//   return (
//     <StyledAppbar elevation={0}>
//       <StyledToolbar>
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <MenuIcon onClick={toggleSidebar} sx={{ mr: 4, cursor: "pointer" }} />
//           <Typography variant="h6">Excelsior</Typography>
//         </Box>
//         <Icons>
//           <Badge color="error">
//             <NotificationsIcon color="primary" />
//           </Badge>
//           <StyledBox
//             onClick={handleClick}
//           >
//             <Avatar sx={{ fontSize: "15px" }}>M</Avatar>
//             <Badge color="error">
//               <SettingsIcon color="primary" />
//             </Badge>
//           </StyledBox>
//           <Menu
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//           >
//             <MenuItem sx={{ mb: 1.5 }} onClick={handleClose}>
//               <PersonTwoTone sx={{ mr: 1 }} /> My Profile
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <Logout sx={{ mr: 1 }} /> Logout
//             </MenuItem>
//           </Menu>
//         </Icons>
//       </StyledToolbar>
//     </StyledAppbar>
//   );
// }

// export default Navbar;

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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";
import { Logout, PersonTwoTone } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const StyledAppbar = styled(AppBar)({
  backgroundColor: "white",
  position: "sticky",
  color: "inherit",
  zIndex: 1201,
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  bgcolor: "#F5EFE7",
  borderRadius: "20px",
  padding: "5px",
  cursor: "pointer",
});

const UserMenu = ({ anchorEl, setAnchorEl }) => (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={() => setAnchorEl(null)}
  >
    <MenuItem onClick={() => setAnchorEl(null)} sx={{ mb: 1.5 }}>
      <PersonTwoTone sx={{ mr: 1 }} /> My Profile
    </MenuItem>
    <MenuItem onClick={() => setAnchorEl(null)}>
      <Logout sx={{ mr: 1 }} /> Logout
    </MenuItem>
  </Menu>
);

const Navbar = ({ isCollapsed, toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <StyledAppbar elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuIcon onClick={toggleSidebar} sx={{ mr: 4, cursor: "pointer" }} />
          <Typography variant="h6">Excelsior</Typography>
        </Box>

        <Icons>
          <Badge color="error">
            <NotificationsIcon color="primary" />
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

export default Navbar;
