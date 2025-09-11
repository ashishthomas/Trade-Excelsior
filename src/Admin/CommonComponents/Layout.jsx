import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = ({ unresolvedCount, setUnresolvedCount }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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

Layout.propTypes = {
  unresolvedCount: PropTypes.number.isRequired,
  setUnresolvedCount: PropTypes.func.isRequired,
};

export default Layout;
