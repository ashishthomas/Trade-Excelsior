import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const CustomModal = ({ open, handleClose, title, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{ zIndex: 1300 }}
    >
      <Box
        sx={{
          width: isMobile ? "80vw" : isTablet ? "60vw" : "400px",
          p: 0,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ bgcolor: "#E6E6FA", mb: 5, p: 1 }}
        >
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <IconButton onClick={handleClose} aria-label="Close modal">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box p={2}>{children}</Box>
      </Box>
    </Drawer>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

CustomModal.defaultProps = {
  title: "Modal Title",
  children: null,
};

export default CustomModal;
