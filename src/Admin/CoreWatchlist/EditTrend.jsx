import React, { useState } from "react";
import { Dialog, Box, Button, Typography, useMediaQuery } from "@mui/material";

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
      alert("Please select a trend before saving.");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <Box
        sx={{
          padding: { xs: 2, sm: 3 },
          minWidth: { xs: "90%", sm: 350 },
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Update trend for <strong>{company}</strong> for{" "}
          <strong>{month}</strong>
        </Typography>
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
                sx={{
                  width: { xs: 20, sm: 24 },
                  height: { xs: 20, sm: 24 },
                  borderRadius: "50%",
                  backgroundColor: trendColors[trend],
                  cursor: "pointer",
                  border: selectedTrend === trend ? "3px solid black" : "none",
                }}
                onClick={() => setSelectedTrend(trend)}
              />
            </Box>
          ))}
        </Box>
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

export default EditTrendDialog;
