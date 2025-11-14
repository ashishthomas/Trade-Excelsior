import { useTheme, useMediaQuery, Box } from "@mui/material";
import { useState } from "react";
import onboardingData from "./data/onboardingData";
import OnboardingHeader from "./components/OnboardingHeader";
import OnboardingItem from "./components/OnboardingItem";

function Onboarding() {
  const [items] = useState(onboardingData);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#C4D9FF", padding: "15px", minHeight: "100vh" }}>
      {/* ✅ Header Section */}
      <OnboardingHeader totalItems={items.length} />
   
      {/* ✅ Checklist Items */}
      {items.map((item) => (
        <OnboardingItem key={item.id} item={item} isMobile={isMobile} />
      ))}
    </Box>
  );
}

export default Onboarding;
