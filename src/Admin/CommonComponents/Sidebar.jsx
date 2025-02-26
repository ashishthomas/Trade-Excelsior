import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  Dashboard,
  GroupRemove,
  Grading,
  LibraryAdd,
  MenuBook,
  LocalPolice,
  EmojiEvents,
  HelpRounded,
  CopyrightSharp,
} from "@mui/icons-material";

const Sidebar = ({ isCollapsed }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  return (
    <Box
      sx={{
        width: isCollapsed || isSmallScreen ? "60px" : "220px", 
        minHeight: "100%",
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "width 0.3s ease",
        overflow: "hidden",
        p: 1,
        mt: 9,
        ml: 1,
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/" ? "#98D8EF" : "inherit",
                color: location.pathname === "/" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit", p: 0 }}>
                <Dashboard />
              </ListItemIcon>
              {!isCollapsed  && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/users"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/users" ? "#98D8EF" : "inherit",
                color: location.pathname === "/users" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                <GroupRemove />
              </ListItemIcon>
              {!isCollapsed  && <ListItemText primary="Users" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/onboarding"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/onboarding" ? "#98D8EF" : "inherit",
                color: location.pathname === "/onboarding" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                <Grading />
              </ListItemIcon>
              {!isCollapsed  && <ListItemText primary="Onboarding Checklist" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/core"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/core" ? "#98D8EF" : "inherit",
                color: location.pathname === "/core" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                <LibraryAdd />
              </ListItemIcon>
              {!isCollapsed &&  <ListItemText primary="Core Watchlist" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/book"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/book" ? "#98D8EF" : "inherit",
                color: location.pathname === "/book" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                <MenuBook />
              </ListItemIcon>
              {!isCollapsed &&  <ListItemText primary="My Books" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/references"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/references" ? "#98D8EF" : "inherit",
                color: location.pathname === "/references" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                <LocalPolice />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary="References" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/success"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/success" ? "#98D8EF" : "inherit",
                color: location.pathname === "/success" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                <EmojiEvents />
              </ListItemIcon>
              {!isCollapsed &&  <ListItemText primary="Success Stories" />}
              {/* {!isCollapsed && !isSmallScreen && <ListItemText primary="Success Stories" />} */}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/support"
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === "/support" ? "#98D8EF" : "inherit",
                color: location.pathname === "/support" ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                <HelpRounded />
              </ListItemIcon>
              {!isCollapsed &&  <ListItemText primary="Support" />}
            </ListItemButton>
          </ListItem>
        </List>

        {!isCollapsed && (
          <Typography variant="body2" sx={{ fontSize: "13px", mt: 10 }}>
            <CopyrightSharp fontSize="13px" /> Trade Excelsior all rights reserved
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;