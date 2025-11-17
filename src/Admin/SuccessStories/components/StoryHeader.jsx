// src/Admin/SuccessStories/components/StoryHeader.jsx
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function StoryHeader() {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery("(max-width:417px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <Box sx={{ mt: isExtraSmall ? 1 : isMobile ? 2 : 4 }} />;
}
