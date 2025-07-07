import React, { useState, useCallback, useMemo } from "react";
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
  {
    id: 4,
    title: "Tijori",
    category: "TOOLS",
    referenceLink: "https://www.tijorifinance.com/ideas-dashboard/",
    image:
      "https://cdn.brandfetch.io/idvH5w3ipU/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1740026151276",
  },
  {
    id: 5,
    title: "Stockedge",
    category: "TOOLS",
    referenceLink: "https://stockedge.com/",
    image:
      "https://duzycfafl38re.cloudfront.net/Website/Images/stockedgelogoimage28102022144458.png",
  },
  {
    id: 6,
    title: "Community Store",
    category: "TOOLS",
    referenceLink: "http://www.communityfinance.in/",
    image:
      "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1483514228/j6kp5kzapwqvn4ekffy3.jpg",
  },
  {
    id: 7,
    title: "Chartink",
    category: "TOOLS",
    referenceLink: "https://chartink.com/",
    image:
      "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1483514228/j6kp5kzapwqvn4ekffy3.jpg",
  },
  {
    id: 8,
    title: "Zerodha",
    category: "TOOLS",
    referenceLink: "https://zerodha.com/",
    image:
      "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1483514228/j6kp5kzapwqvn4ekffy3.jpg",
  },
  {
    id: 9,
    title: "Highradius",
    category: "TOOLS",
    referenceLink: "https://highradius.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZxastKq-pxeETlwLybvxu5p6FsB8krxrAg&s",
  },
];

function References() {
  const [referenceList, setReferenceList] = useState(initialReferences);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const isSmallLaptop = useMediaQuery("(max-width:1024px)");
  const isSmallMobile = useMediaQuery("(max-width:320px)");

  const handleMenuOpen = useCallback((event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    setSelectedIndex(null);
  }, []);

  const renderReferenceCard = useCallback(
    (ref, i) => (
      <Grid item xs={12} sm={6} md={3} key={ref.id}>
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
            ></IconButton>
          </Card>
        </a>
      </Grid>
    ),
    [isSmallLaptop, isSmallMobile, isMobile, handleMenuOpen]
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
    </Box>
  );
}

export default References;
