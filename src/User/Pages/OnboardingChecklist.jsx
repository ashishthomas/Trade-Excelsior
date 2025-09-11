import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function OnboardingChecklist() {
  return (
    <Box sx={{}}>
      <Box
        sx={{ backgroundColor: "#C4D9FF", padding: "15px", minHeight: "86vh" }}
      >
        <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ color: "black", flexGrow: 1, ml: 3 }}
            >
              Onboarding checklist
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}

export default OnboardingChecklist;
