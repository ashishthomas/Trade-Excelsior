import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";

export default function ProfileNavbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <img src="/icon/Excelsior.jpeg" alt="" height={"40px"} width={"40px"} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#007BFF", ml: 2 }}
        >
          <b>Excelsior</b>
        </Typography>

        <Button
          variant="contained"
          sx={{ textTransform: "none", backgroundColor: "#007BFF" }}
          onClick={() => navigate("/")}
        >
          <KeyboardArrowLeftIcon />
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}
