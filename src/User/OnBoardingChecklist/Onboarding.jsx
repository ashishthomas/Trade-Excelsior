import React, { useState } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Button,
  Box,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Divider,
  Badge,
} from "@mui/material";

function Onboarding() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "An extra layer of security to your trading account",
      link: "https://example.com/stocks",
      buttonName: "Join Now",
    },
    {
      id: 2,
      title: "Link your bank account for seamless deposits and withdrawals",
      link: "https://example.com/news",
      buttonName: "Link Account",
    },
    {
      id: 3,
      title: "Join prime whatsapp group",
      link: "https://example.com/portfolio",
      buttonName: "Join Now",
    },
    {
      id: 4,
      title: "Demo",
      link: "https://example.com/alerts",
      buttonName: "Check Demo",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{ backgroundColor: "#C4D9FF", padding: "15px", minHeight: "100vh" }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          mb: 2,
          padding: { xs: 1, sm: 2 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              variant="h6"
              fontSize={{ xs: "14px", sm: "18px" }}
              width={{ xs: "auto" }}
              sx={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <b>ON BOARDING CHECKLIST</b>
            </Typography>
            <Badge
              badgeContent={items.length}
              sx={{
                ml: 3,
                "& .MuiBadge-badge": {
                  height: "1.8rem",
                  width: "1.8rem",
                  backgroundColor: "#E6E6FA",
                  color: "#1976d2",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {items.map((item) => (
        <Paper
          key={item.id}
          elevation={3}
          sx={{
            padding: 2,
            marginBottom: 2,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Typography
            sx={{ flex: 1 }}
            fontSize={{ xs: "15px", sm: "18px", md: "19px", lg: "20px" }}
          >
            {item.id}. {item.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "0.5rem", sm: "0.6rem", md: "1rem", lg: "1.5rem" },
              marginTop: { xs: "10px", sm: "0px" },
            }}
          >
            <Button
              variant="contained"
              href={item.link}
              target="_blank"
              sx={{
                minWidth: { xs: "80px", sm: "120px", md: "180px" },
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                padding: "7px 10px",
                height: { sm: "40px", lg: "40px" },
                width: { xs: "80px", md: "100px", lg: "150px" },
              }}
            >
              {item.buttonName}
            </Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}

export default Onboarding;
