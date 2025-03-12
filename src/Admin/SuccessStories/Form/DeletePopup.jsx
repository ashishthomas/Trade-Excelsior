import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const DeletePopup = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "70%",
          maxWidth: "400px",
          borderRadius: "12px",
          padding: "20px",
        },
      }}
    >
      {/* Title with Close Button */}
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
          position: "relative",
          pt: 0,
        }}
      >
        Confirmation Required
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 0, pt: 0 }}
        >
          <Close sx={{ color: "black" }} />
        </IconButton>
      </DialogTitle>
      <Divider />

      {/* Content */}
      <DialogContent sx={{ textAlign: "center", padding: "40px 20px" }}>
        Are you sure you want to delete this Story? This action cannot be
        undone!
      </DialogContent>
      <Divider />

      {/* Buttons */}
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: "10px", pt: 2 }}
      >
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            width: "25%",
            height: "10%",
            borderRadius: "8px",
            bgcolor: "#007bff",
            color: "white",
            fontSize: "12px",
            "&:hover": { bgcolor: "#0056b3" },
          }}
        >
          Delete
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            width: "25%",
            height: "10%",
            borderRadius: "8px",
            bgcolor: "grey",
            color: "white",
            fontSize: "12px",
            "&:hover": { bgcolor: "#5a5a5a" },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopup;
