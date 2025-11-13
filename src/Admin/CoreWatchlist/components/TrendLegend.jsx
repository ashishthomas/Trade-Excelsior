import { Box, Typography } from "@mui/material";

const TrendLegend = () => {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,
        width: "50%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-evenly",
        gap: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        variant="p"
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
          fontWeight: "bold",
        }}
      >
        <b>Trend Indicator:</b>
      </Typography>

      {[
        { label: "Strong Trend", color: "green" },
        { label: "Medium Trend", color: "blue" },
        { label: "Weak Trend", color: "red" },
      ].map((item) => (
        <Box
          key={item.label}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Typography
            variant="p"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
          >
            {item.label}
          </Typography>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: item.color,
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default TrendLegend;
