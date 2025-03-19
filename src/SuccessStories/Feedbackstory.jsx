import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

const Feedbackstory = ({ text, maxLength = 160 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Typography variant="h6" paragraph sx={{ mt: 2, color: "grey" }}>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </Typography>
      {text.length > maxLength && (
        <Button 
          onClick={() => setIsExpanded(!isExpanded)} 
          sx={{ textTransform: "none", fontSize: "1rem", color: "blue" }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </>
  );
};
export default Feedbackstory