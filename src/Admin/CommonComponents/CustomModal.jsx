import { Box, Button, Modal, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: 20,
  right: 20,
  width: 350,
  maxHeight: "100vh",
  overflowY: "auto",
  bgcolor: "white",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
};

const CustomModal = ({ open, handleClose, title, children }) => (
  <Modal open={open} onClose={handleClose}>
    <Box sx={modalStyle}>
      <Box
        sx={{
          bgcolor: "#e0e0e0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Button
          onClick={handleClose}
          sx={{
            width: "30px",
            "&:hover": { bgcolor: "red", color: "white" },
          }}
        >
          <Close fontSize="small" />
        </Button>
      </Box>
      <br />
      <br />
      {children}
    </Box>
  </Modal>
);

export default CustomModal;
