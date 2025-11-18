import { useState } from "react";
import { Box } from "@mui/material";

import SuccessNavbar from "./components/SuccessNavbar";
import StoryList from "./components/StoryList";
import successStoriesData from "./utils/successStoriesData";

export default function SuccessStory() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box
      sx={{ backgroundColor: "#C4D9FF", padding: "15px", minHeight: "100vh" }}
    >
      <SuccessNavbar count={successStoriesData.length} />

      <StoryList
        stories={successStoriesData}
        expandedId={expandedId}
        toggleExpand={toggleExpand}
      />
    </Box>
  );
}
