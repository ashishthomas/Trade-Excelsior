import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = ({ unresolvedCount, setUnresolvedCount }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar unresolvedCount={unresolvedCount} toggleSidebar={toggleSidebar} />

      <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        <Sidebar isCollapsed={!isSidebarOpen} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: isSidebarOpen ? "220px" : "60px",
            transition: "margin-left 0.3s ease",
            overflowY: "auto",
          }}
        >
          <Outlet context={{ setUnresolvedCount }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
