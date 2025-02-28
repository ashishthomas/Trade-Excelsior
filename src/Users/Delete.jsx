import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import Close from "@mui/icons-material/Close";

const DeleteDialog = ({ openDeleteDialog, handleCloseDeleteDialog, handleConfirmDelete, isMobile }) => {
  return (
    <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog} fullScreen={isMobile}>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Confirmation Required
        <IconButton onClick={handleCloseDeleteDialog} size="small">
          <Close sx={{ color: "black", marginLeft: "50px" }} />
        </IconButton>
      </DialogTitle>
      
      <hr style={{ margin: 0, border: "1px solid #ddd" }} />

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this user? <br />
          This action cannot be undone!
        </DialogContentText>
      </DialogContent>

      <hr style={{ margin: 0, border: "1px solid #ddd" }} />

      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: 2 }}
      >
        <Button
          onClick={handleConfirmDelete}
          sx={{
            backgroundColor: "#007BFF",
            color: "white",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        >
          Delete
        </Button>
        <Button
          onClick={handleCloseDeleteDialog}
          sx={{
            backgroundColor: "#808080",
            color: "white",
            "&:hover": { backgroundColor: "#606060" },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
