import React, { useState } from "react";
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
  Tooltip,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      sx={{
        width: isCollapsed || isMobile ? "70px" : "230px",
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
        borderRadius: "10px",
      }}
    >
      <List>
        {[
          { text: "Dashboard", icon: <Dashboard />, path: "/" },
          { text: "Users", icon: <GroupRemove />, path: "/users" },
          {
            text: "Onboarding Checklist",
            icon: <Grading />,
            path: "/onboarding",
          },
          { text: "Core Watchlist", icon: <LibraryAdd />, path: "/core" },
          { text: "My Books", icon: <MenuBook />, path: "/book" },
          { text: "References", icon: <LocalPolice />, path: "/references" },
          { text: "Success Stories", icon: <EmojiEvents />, path: "/success" },
          { text: "Support", icon: <HelpRounded />, path: "/support" },
        ].map(({ text, icon, path }) => (
          <ListItem disablePadding key={path}>
            <Tooltip
              title={isCollapsed || isMobile ? text : ""}
              placement="right"
              arrow
              componentsProps={{
                tooltip: {
                  sx: { fontSize: "14px", bgcolor: "#3A86FF", color: "#fff" },
                },
              }}
            >
              <ListItemButton
                component={Link}
                to={path}
                sx={{
                  px: 2,
                  mb: 1,
                  bgcolor: location.pathname === path ? "#3A86FF" : "inherit",
                  color: location.pathname === path ? "#fff" : "#333",
                  "&:hover": {
                    bgcolor: "#3A86FF",
                    color: "#fff",
                    transform: "scale(1.02)",
                  },
                  transition: "all 0.3s ease-in-out",
                  borderRadius: "8px",
                }}
                onMouseEnter={() => setHovered(text)}
                onMouseLeave={() => setHovered(null)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "35px",
                    color: location.pathname === path ? "#fff" : "inherit",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {icon}
                </ListItemIcon>
                {/* Properly hide the text and show it only on hover */}
                <ListItemText
                  primary={text}
                  sx={{
                    width: isCollapsed ? "0px" : "auto",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    opacity: hovered === text || !isCollapsed ? 1 : 0,
                    transition:
                      "opacity 0.2s ease-in-out, width 0.2s ease-in-out",
                    "& .MuiTypography-root": {
                      fontSize: "14px",
                      fontWeight:
                        location.pathname === path ? "bold" : "normal",
                    },
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      {!isCollapsed && !isMobile && (
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            mt: 10,
            transition: "opacity 0.3s ease-in-out",
            color: "#555",
          }}
        >
          <CopyrightSharp fontSize="small" /> Trade Excelsior all rights
          reserved
        </Typography>
      )}
    </Box>
  );
};

export default Sidebar;
