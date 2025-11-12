import { useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const BookDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Typography
      variant="body2"
      sx={{
        mt: 1,
        color: "gray",
        fontSize: { xs: "14px", sm: "18px", lg: "20px" },
      }}
      component="span"
    >
      {expanded ? text : `${text.substring(0, 150)}... `}
      <Typography
        component="span"
        sx={{
          color: "#3A86FF",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </Typography>
    </Typography>
  );
};

BookDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BookDescription;
