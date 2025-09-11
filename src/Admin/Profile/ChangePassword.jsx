import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
  InputAdornment,
  Paper,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const validatePasswords = () => {
    let newErrors = { newPassword: "", confirmPassword: "" };

    if (newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters.";
    }

    if (confirmPassword && newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return !newErrors.newPassword && !newErrors.confirmPassword;
  };

  const handleSubmit = () => {
    if (validatePasswords()) {
      alert("Password changed successfully!");
      navigate("/profilemain");
    }
  };

  return (
    <>
      {/* Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <img
              src="/icon/Excelsior.jpeg"
              alt=""
              height={"40px"}
              width={"40px"}
            />

            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "#007BFF", ml: 2 }}
            >
              <b>Excelsior</b>
            </Typography>
            <Button
              variant="contained"
              sx={{ textTransform: "none", backgroundColor: "#007BFF" }}
              onClick={() => navigate("/")}
            >
              <KeyboardArrowLeftIcon /> Dashboard
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Change Password Form (Card Instead of Modal) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: 400,
            padding: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          {/* Password Icon (Centered) */}
          <LockIcon sx={{ fontSize: 50, color: "#007BFF", marginBottom: 2 }} />

          {/* "New Password" Title */}
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            New Password
          </Typography>

          {/* Instructional Text */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: 2 }}
          >
            Please enter your new password
          </Typography>

          {/* New Password Field */}
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label={
              <>
                New Password <span style={{ color: "red" }}>*</span>
              </>
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            error={!!errors.newPassword}
            helperText={errors.newPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Confirm Password Field */}
          <TextField
            fullWidth
            type={showConfirmPassword ? "text" : "password"}
            label={
              <>
                Confirm Password <span style={{ color: "red" }}>*</span>
              </>
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Confirm Password Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor:
                newPassword && newPassword === confirmPassword
                  ? "#007BFF"
                  : "lightgray",
              color: "white",
              textTransform: "none",
              marginTop: 2,
              "&:hover": {
                backgroundColor:
                  newPassword && newPassword === confirmPassword
                    ? "#0056b3"
                    : "gray",
              },
            }}
            onClick={handleSubmit}
            disabled={!newPassword || !confirmPassword}
          >
            Confirm Password
          </Button>
        </Paper>
      </Box>
    </>
  );
}
