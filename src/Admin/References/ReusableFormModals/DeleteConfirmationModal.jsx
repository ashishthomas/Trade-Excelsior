
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DeleteConfirmationModal = React.memo(
  ({ open, handleClose, onConfirm, title, message }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isTabletScreen = useMediaQuery("(max-width:960px)");

    return (
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isSmallScreen ? "90%" : isTabletScreen ? "60%" : 380,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: isSmallScreen ? 2 : 3,
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Close Button in the top-right corner */}
          <IconButton
            sx={{ position: "absolute", top: 17, right: 8 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {title || "Confirmation Required"}
          </Typography>

          <Divider
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#464646",
              mb: 2,
            }}
          />

          <Typography variant="body1" sx={{ mb: 5, px: 1 }}>
            {message ||
              "Are you sure you want to delete this refernce?  This action cannot be undone!"}
          </Typography>

          <Divider
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#464646",
              mb: 3,
            }}
          />

          {/* Buttons Section */}
          <Box
            display="flex"
            flexDirection={isSmallScreen ? "column" : "row"}
            justifyContent="center"
            gap={2}
            width="100%"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#007BFF",
                color: "#fff",
                textTransform: "none",
                width: isSmallScreen ? "100%" : "auto",
                "&:hover": { backgroundColor: "#0056b3" },
              }}
              onClick={() => {
                onConfirm();
                handleClose();
              }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6C757D",
                color: "#fff",
                textTransform: "none",
                width: isSmallScreen ? "100%" : "auto",
                "&:hover": { backgroundColor: "#5A6268" },
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }
);

export default DeleteConfirmationModal;
