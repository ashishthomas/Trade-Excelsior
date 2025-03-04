import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import Close from "@mui/icons-material/Close";

const LibraryDrawer = ({
  openLibraryDrawer,
  handleCloseLibraryDrawer,
  libraryUser,
  setLibraryUser,
  handleUpdateLibraryDetails,
}) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!libraryUser.license) tempErrors.license = "License is required";
    if (!libraryUser.yearsOfMembership) tempErrors.yearsOfMembership = "Number of Years License is required";
    if (!libraryUser.subscriptionStart) tempErrors.subscriptionStart = "Subscription Start is required";
    if (!libraryUser.subscriptionEnd) tempErrors.subscriptionEnd = "Subscription End is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleUpdateLibraryDetails();
    }
  };

  return (
    <Drawer
      anchor="right"
      open={openLibraryDrawer}
      onClose={handleCloseLibraryDrawer}
      sx={{
        zIndex: 1300,
        "& .MuiDrawer-paper": { width: 400, zIndex: 1301 },
      }}
    >
      <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#E6F0FF",
            padding: 2,
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" sx={{ color: "#007BFF" }}>
            Library Details
          </Typography>
          <IconButton onClick={handleCloseLibraryDrawer} size="small">
            <Close sx={{ color: "black" }} />
          </IconButton>
        </Box>

        {libraryUser && (
          <>
            {["license", "yearsOfMembership", "subscriptionStart", "subscriptionEnd"].map((field, index) => (
              <TextField
                key={index}
                label={
                  <>
                    {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} <span style={{ color: "red" }}>*</span>
                  </>
                }
                value={libraryUser[field] || ""}
                onChange={(e) =>
                  setLibraryUser({
                    ...libraryUser,
                    [field]: e.target.value,
                  })
                }
                fullWidth
                error={!!errors[field]}
                helperText={errors[field] || ""}
              />
            ))}
          </>
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, marginTop: 2 }}>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#007BFF",
              color: "white",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Update
          </Button>
          <Button
            onClick={handleCloseLibraryDrawer}
            sx={{
              backgroundColor: "#808080",
              color: "white",
              "&:hover": { backgroundColor: "#606060" },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LibraryDrawer;