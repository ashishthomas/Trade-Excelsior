// src/Admin/SuccessStories/components/StoryActions.jsx
import PropTypes from "prop-types";
import { Button } from "@mui/material";

export default function StoryActions({
  onEdit,
  onDelete,
  isMobile,
  isTablet,
  isExtraSmall,
}) {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: "none",
          width: isExtraSmall
            ? "auto"
            : isMobile || isTablet
            ? "auto"
            : "100px",
          minWidth: isExtraSmall
            ? "70px"
            : isMobile || isTablet
            ? "80px"
            : "100px",
          fontSize: isExtraSmall
            ? "0.7rem"
            : isMobile || isTablet
            ? "0.8rem"
            : "1rem",
          whiteSpace: "nowrap",
          padding: isExtraSmall
            ? "4px 8px"
            : isMobile || isTablet
            ? "6px 12px"
            : "8px 16px",
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        onClick={onEdit}
      >
        Edit
      </Button>

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: isExtraSmall
            ? "auto"
            : isMobile || isTablet
            ? "auto"
            : "100px",
          minWidth: isExtraSmall
            ? "70px"
            : isMobile || isTablet
            ? "80px"
            : "100px",
          fontSize: isExtraSmall
            ? "0.7rem"
            : isMobile || isTablet
            ? "0.8rem"
            : "1rem",
          whiteSpace: "nowrap",
          padding: isExtraSmall
            ? "4px 8px"
            : isMobile || isTablet
            ? "6px 12px"
            : "8px 16px",
          backgroundColor: "grey",
          color: "white",
          "&:hover": {
            backgroundColor: "darkgrey",
          },
        }}
        onClick={onDelete}
      >
        Delete
      </Button>
    </>
  );
}

StoryActions.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isExtraSmall: PropTypes.bool.isRequired,
};
