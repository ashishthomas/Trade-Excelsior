import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

export default function SupportImage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        component="img"
        src="src/User/assets/women contact support.png"
        alt="Support Image"
        sx={{
          width: isMobile ? "70%" : isTablet ? "50%" : "80%",
          height: "auto",
          borderRadius: "8px",
          mb: isMobile ? 1 : 0,
          alignSelf: "center",
        }}
      />
    </Grid>
  );
}
