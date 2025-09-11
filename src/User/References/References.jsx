import { useState, useCallback } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
  useMediaQuery,
  Badge,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

const initialReferences = [
  {
    id: 1,
    title: "Trading View",
    category: "TOOLS",
    referenceLink: "https://www.tradingview.com/",
    image:
      "https://images.sftcdn.net/images/t_app-icon-m/p/30ee2c98-6ec0-4df8-a1a8-65b6f710912f/525437540/tradingview-2022-01-19_12-59-58.png",
  },
  {
    id: 2,
    title: "Screener",
    category: "TOOLS",
    referenceLink: "https://screener.finance/",
    image:
      "https://images.sftcdn.net/images/t_app-icon-m/p/30ee2c98-6ec0-4df8-a1a8-65b6f710912f/525437540/tradingview-2022-01-19_12-59-58.png",
  },
  {
    id: 3,
    title: "Marketsmith",
    category: "TOOLS",
    referenceLink: "https://marketsmith.com/",
    image:
      "https://duzycfafl38re.cloudfront.net/Website/Images/stockedgelogoimage28102022144458.png",
  },
];

function References() {
  const [referenceList, setReferenceList] = useState(initialReferences);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallLaptop = useMediaQuery("(max-width:1024px)");
  const isSmallMobile = useMediaQuery("(max-width:320px)");

  // Open Menu
  const handleMenuOpen = useCallback((event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  }, []);

  // Close Menu
  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    setSelectedIndex(null);
  }, []);

  // Example: Remove a reference
  const handleDelete = useCallback(() => {
    if (selectedIndex !== null) {
      setReferenceList((prev) => prev.filter((_, i) => i !== selectedIndex));
    }
    handleMenuClose();
  }, [selectedIndex, handleMenuClose]);

  const renderReferenceCard = useCallback(
    (ref, i) => (
      <Grid item xs={12} sm={6} md={isTablet ? 4 : 3} key={ref.id}>
        <a
          href={ref.referenceLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Card
            sx={{
              minHeight: "120px",
              display: "flex",
              alignItems: "center",
              padding: isSmallLaptop || isSmallMobile ? "15px" : "10px",
              borderRadius: "10px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallMobile ? 40 : 50,
                height: isSmallMobile ? 40 : 50,
                marginLeft: isSmallLaptop || isSmallMobile ? "10px" : "15px",
                marginRight: "10px",
              }}
              image={ref.image}
              alt={ref.title}
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.src = "/assets/default-image.png";
              }}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                minWidth: isSmallLaptop || isSmallMobile ? "60%" : "auto",
              }}
            >
              <Typography
                variant={isSmallMobile ? "body2" : isMobile ? "body1" : "h6"}
                sx={{
                  fontSize: isSmallLaptop || isSmallMobile ? "0.85rem" : "1rem",
                }}
              >
                {ref.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize:
                    isSmallLaptop || isSmallMobile ? "0.75rem" : "0.875rem",
                }}
              >
                {ref.category}
              </Typography>
            </CardContent>
            <IconButton
              sx={{
                position: "absolute",
                right: isSmallLaptop || isSmallMobile ? 2 : 5,
                color: "#0280FF",
              }}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                handleMenuOpen(event, i);
              }}
            >
              ⋮
            </IconButton>
          </Card>
        </a>
      </Grid>
    ),
    [isSmallLaptop, isSmallMobile, isMobile, isTablet, handleMenuOpen]
  );

  return (
    <Box
      sx={{
        backgroundColor: "#E6E6FF",
        padding: "15px",
        top: 0,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: { xs: "center", sm: "space-between" },
            textAlign: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              variant="h6"
              fontSize={{ xs: "14px", sm: "18px" }}
              width={{ xs: "auto" }}
              sx={{
                color: "black",
                flexGrow: { sm: 1 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <b>REFERENCES</b>
            </Typography>
            <Badge
              badgeContent={referenceList.length}
              sx={{
                ml: 3,
                "& .MuiBadge-badge": {
                  height: "1.8rem",
                  width: "1.8rem",
                  backgroundColor: "#E6E6FA",
                  color: "#007BFF",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={isMobile ? 2 : 3}
        sx={{ mt: 3, justifyContent: isMobile ? "center" : "flex-start" }}
      >
        {referenceList.map((ref, i) => renderReferenceCard(ref, i))}
      </Grid>

      {/* Menu for Actions */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleMenuClose}>Close</MenuItem>
      </Menu>
    </Box>
  );
}

export default References;
