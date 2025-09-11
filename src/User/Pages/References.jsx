import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function References() {
  return (
    <Box sx={{ backgroundColor: "#C4D9FF", padding: "15px", height: "86vh" }}>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: "black", flexGrow: 1, ml: 3 }}>
            References
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default References;
