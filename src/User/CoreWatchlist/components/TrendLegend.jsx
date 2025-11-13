import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const LegendItem = ({ label, color }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography
      variant="body2"
      sx={{
        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
      }}
    >
      {label}
    </Typography>
    <Box
      sx={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  </Box>
);

const TrendLegend = () => (
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
      variant="body1"
      sx={{
        fontWeight: "bold",
        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
      }}
    >
      Trend Indicator:
    </Typography>

    <LegendItem label="Strong Trend" color="green" />
    <LegendItem label="Medium Trend" color="blue" />
    <LegendItem label="Weak Trend" color="red" />
  </Box>
);

LegendItem.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TrendLegend;
