import {
  Box,
  Drawer,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const CustomModal = ({ open, handleClose, title, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Drawer anchor="right" open={open} onClose={handleClose} sx={{ zIndex: 1300 }}>
      <Box
        sx={{
          width: isMobile ? "80vw" : isTablet ? "60vw" : "400px",
          p: isMobile ? 1 : 0,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ bgcolor: "#E6E6FA", mb: 5, p: 1 }}
        >
          <Typography variant="h6">
            <b>{title}</b>
          </Typography>
          <IconButton onClick={handleClose} aria-label="Close">
            <Close />
          </IconButton>
        </Box>
        <Box p={2}>{children}</Box>
      </Box>
    </Drawer>
  );
};

export default CustomModal;
