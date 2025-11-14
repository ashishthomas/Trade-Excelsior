import { useState, useCallback } from "react";
import {
  Box,
  Grid,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import referencesData from "./data/referencesData";

import ReferencesHeader from "./components/ReferencesHeader";
import ReferenceCard from "./components/ReferenceCard";

function References() {
  const [referenceList, setReferenceList] = useState(referencesData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallLaptop = useMediaQuery("(max-width:1024px)");
  const isSmallMobile = useMediaQuery("(max-width:320px)");

  const handleMenuOpen = useCallback((e, index) => {
    setAnchorEl(e.currentTarget);
    setSelectedIndex(index);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    setSelectedIndex(null);
  }, []);

  const handleDelete = useCallback(() => {
    if (selectedIndex !== null) {
      setReferenceList((prev) => prev.filter((_, i) => i !== selectedIndex));
    }
    handleMenuClose();
  }, [selectedIndex, handleMenuClose]);

  return (
    <Box
      sx={{
        backgroundColor: "#E6E6FF",
        padding: "15px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* Header */}
      <ReferencesHeader count={referenceList.length} />

      {/* Cards Grid */}
      <Grid
        container
        spacing={isMobile ? 2 : 3}
        sx={{ mt: 3, justifyContent: isMobile ? "center" : "flex-start" }}
      >
        {referenceList.map((ref, index) => (
          <ReferenceCard
            key={ref.id}
            refData={ref}
            index={index}
            isTablet={isTablet}
            isMobile={isMobile}
            isSmallLaptop={isSmallLaptop}
            isSmallMobile={isSmallMobile}
            handleMenuOpen={handleMenuOpen}
          />
        ))}
      </Grid>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleMenuClose}>Close</MenuItem>
      </Menu>
    </Box>
  );
}

export default References;
