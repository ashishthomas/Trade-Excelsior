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
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  return (
    <Box
      sx={{
        width: isCollapsed ? "60px" : isExtraSmallScreen ? "10px" : "200px",
        minHeight: "100vh",
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "width 0.3s ease-in-out",
        overflow: "hidden",
        p: 1,
        mt: 9,
        ml: 1,
      }}
    >
      <List>
        {[
          { text: "Dashboard", icon: <Dashboard />, path: "/" },
          { text: "Users", icon: <GroupRemove />, path: "/users" },
          { text: "Onboarding Checklist", icon: <Grading />, path: "/onboarding" },
          { text: "Core Watchlist", icon: <LibraryAdd />, path: "/core" },
          { text: "My Books", icon: <MenuBook />, path: "/book" },
          { text: "References", icon: <LocalPolice />, path: "/references" },
          { text: "Success Stories", icon: <EmojiEvents />, path: "/success" },
          { text: "Support", icon: <HelpRounded />, path: "/support" },
        ].map(({ text, icon, path }) => (
          <ListItem disablePadding key={path}>
            <ListItemButton
              component={Link}
              to={path}
              sx={{
                px: 1,
                mb: 1,
                bgcolor: location.pathname === path ? "#98D8EF" : "inherit",
                color: location.pathname === path ? "blue" : "inherit",
                "&:hover": { bgcolor: "#98D8EF", color: "blue" },
                transition: "background-color 0.2s ease-in-out",
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
                {icon}
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary={text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {!isCollapsed && (
        <Typography variant="body2" sx={{ fontSize: "10px", mt: 10, transition: "opacity 0.3s ease-in-out" }}>
          <CopyrightSharp fontSize="small" /> Trade Excelsior all rights reserved
        </Typography>
      )}
    </Box>
  );
};

export default Sidebar;

