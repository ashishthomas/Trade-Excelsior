import { useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Button, Typography } from "@mui/material";

const trendColors = { strong: "green", medium: "blue", weak: "red" };

const EditTrendDialog = ({
  open,
  handleClose,
  company,
  month,
  handleEditTrend,
  initialTrend,
}) => {
  const [selectedTrend, setSelectedTrend] = useState(initialTrend || null);

  const handleSave = () => {
    if (selectedTrend) {
      handleEditTrend(selectedTrend);
      handleClose();
    } else {
      // eslint-disable-next-line no-alert
      alert("Please select a trend before saving.");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      aria-labelledby="edit-trend-title"
    >
      <Box
        sx={{
          padding: { xs: 2, sm: 3 },
          minWidth: { xs: "90%", sm: 350 },
          textAlign: "center",
        }}
      >
        <Typography id="edit-trend-title" variant="h6" sx={{ mb: 3 }}>
          Update trend for <strong>{company}</strong> for{" "}
          <strong>{month}</strong>
        </Typography>

        {/* Trend selection circles */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, sm: 3 },
            mt: 2,
          }}
        >
          {Object.keys(trendColors).map((trend) => (
            <Box
              key={trend}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                role="button"
                tabIndex={0}
                aria-label={`Select ${trend} trend`}
                sx={{
                  width: { xs: 20, sm: 24 },
                  height: { xs: 20, sm: 24 },
                  borderRadius: "50%",
                  backgroundColor: trendColors[trend],
                  cursor: "pointer",
                  border: selectedTrend === trend ? "3px solid black" : "none",
                }}
                onClick={() => setSelectedTrend(trend)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedTrend(trend);
                  }
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Action buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, sm: 3 },
            mt: { xs: 3, sm: 4 },
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#B0B0B0", color: "white" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

EditTrendDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  company: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  handleEditTrend: PropTypes.func.isRequired,
  initialTrend: PropTypes.oneOf(["strong", "medium", "weak", null]),
};

EditTrendDialog.defaultProps = {
  initialTrend: null,
};

export default EditTrendDialog;
