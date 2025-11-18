import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function SupportHeading() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: isMobile ? 1 : 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.25rem" : isTablet ? "2rem" : "3rem",
          padding: isMobile ? "8px" : "20px",
          borderRadius: "8px",
          textAlign: "center",
          width: isMobile ? "100%" : isTablet ? "70%" : "50%",
        }}
      >
        How Can I Help?
      </Typography>
    </Box>
  );
}
