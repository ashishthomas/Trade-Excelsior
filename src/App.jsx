import React, { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Layout from "./Admin/CommonComponents/Layout";

function App() {
  
  const [unresolvedCount, setUnresolvedCount] = useState(0);
  return (
    <Box>
      {/* Pass unresolvedCount and setUnresolvedCount to Layout */}
      <Layout
        unresolvedCount={unresolvedCount}
        setUnresolvedCount={setUnresolvedCount}
      />
    </Box>
  );
}

export default App;
