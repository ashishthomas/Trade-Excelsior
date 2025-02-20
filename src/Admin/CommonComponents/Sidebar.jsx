import {
  CopyrightSharp,
  Dashboard,
  EmojiEvents,
  Grading,
  GroupRemove,
  HelpRounded,
  LibraryAdd,
  LocalPolice,
  MenuBook,
} from "@mui/icons-material";
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
import { Link } from "react-router-dom";

const Sidebar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); 

  return (
    <Box
      sx={{
        width: isSmallScreen ? "60px" : "220px", 
        minHeight: "100%",
        backgroundColor: "white",
        top: 0,
        left: 0,
        bgcolor: "white",
        transition: "width 0.3s ease",
        overflow: "hidden",
        p: 1,
        ml:1.1,
      }}
    >
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <Dashboard />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Dashboard" />}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="users" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <GroupRemove />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Users" />}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="onboarding" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <Grading />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Onboarding checklist" />}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="core" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <LibraryAdd />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Core Watchlist" />}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="book" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <MenuBook />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="My Books" />}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="references" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <LocalPolice />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="References" />}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="success" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <EmojiEvents />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Success Stories" />}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="support" sx={{ px: 1,mb:1, "&:hover": { bgcolor: "#98D8EF", color: "blue" } }}>
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>
              <HelpRounded />
            </ListItemIcon>
            {!isSmallScreen && <ListItemText primary="Support" />}
          </ListItemButton>
        </ListItem>
      </List>

      {!isSmallScreen && (
        <Typography variant="body2" sx={{ fontSize: "13px", mt: 10}}>
          <CopyrightSharp fontSize="13px" />Trade Excelsior all rights reserved
        </Typography>
      )}
     </Box>
    </Box>
  );
};

export default Sidebar;
