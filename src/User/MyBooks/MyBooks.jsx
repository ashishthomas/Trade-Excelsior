import { useState } from "react";
import PropTypes from "prop-types";

import {
  useMediaQuery,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
  Badge,
} from "@mui/material";

const BookDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Typography
      variant="body2"
      sx={{
        mt: 1,
        color: "gray",
        fontSize: { xs: "14px", sm: "18px", lg: "20px" },
      }}
      component="span"
    >
      {expanded ? text : `${text.substring(0, 150)}... `}
      <Typography
        component="span"
        sx={{ color: "#3A86FF", cursor: "pointer", fontWeight: "bold" }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </Typography>
    </Typography>
  );
};

// ✅ Added PropTypes validation
BookDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

function MyBooks() {
  const [books] = useState([
    {
      id: 1,
      bookTagline:
        "Master the Market with Price Action: The Key to Uncovering Hidden Trends and Making Informed Trades",
      bookName: "Price Action",
      bookDescription:
        "This book dives deep into the powerful world of price action trading, offering a straightforward, no-nonsense approach to understanding market behavior. The book is written in a simple and easy to understand language and best suited for people wishing to learn Technical Analysis, especially Price Action.",
      bookLink:
        "https://www.amazon.in/Price-Action-Trading-Technical-Simplified/dp/8195261612",
      buttonName: "Buy Now",
      image: "https://m.media-amazon.com/images/I/61ruD5Uk7cS._SL1500_.jpg",
    },
    {
      id: 2,
      bookTagline:
        "The Art of Stock Market Trading: Mastering the Market with Expert Tips and Strategies",
      bookName: "Stock Market Wizards",
      bookDescription:
        "Learn from the greatest traders in the stock market and understand their strategies for success. The book explores various market conditions, including bull markets and periods of economic uncertainty, and reveals how these traders have consistently outperformed the market.  ",
      bookLink:
        "https://www.amazon.in/Stock-Market-Wizards-Interviews-Americas/dp/0066620597",
      buttonName: "Buy Now",
      image: "https://m.media-amazon.com/images/I/715j0-LgwbL._SL1360_.jpg",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              sx={{
                color: "black",
                flexGrow: { sm: 1 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <b>MY BOOKS</b>
            </Typography>
            <Badge
              badgeContent={books.length}
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

      <Grid container spacing={3} sx={{ mt: 3, justifyContent: "center" }}>
        {books.map((book) => (
          <Grid item xs={12} md={12} key={book.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: isMobile || isTablet ? "column" : "row",
                alignItems: isMobile || isTablet ? "center" : "flex-start",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              {/* Image on top only for mobile  */}
              {isMobile && (
                <CardMedia
                  component="img"
                  sx={{
                    height: "auto",
                    maxHeight: { xs: "auto", sm: "500px", md: "600px" },
                    borderRadius: "5px",
                    objectFit: "contain",
                    marginBottom: "15px",
                    display: "block",
                  }}
                  image={book.image}
                  alt={book.bookName}
                />
              )}

              <CardContent
                sx={{
                  flex: 1,
                  paddingRight: "25px",
                  marginTop: isMobile || isTablet ? "0" : "65px",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "26px", lg: "28px" },
                    textAlign: isTablet ? "center" : "left",

                    mb: { sm: 2 },
                  }}
                >
                  {book.bookTagline}
                </Typography>

                {isTablet && (
                  <CardMedia
                    component="img"
                    sx={{
                      maxWidth: { xs: "100%", sm: "100%", md: "80%" },
                      maxHeight: { xs: "auto", sm: "500px", md: "450px" },
                      height: "auto",
                      borderRadius: "5px",
                      objectFit: "contain",
                      marginBottom: "15px",
                      display: "block",
                    }}
                    image={book.image}
                    alt={book.bookName}
                  />
                )}

                <Typography
                  variant="h6"
                  sx={{
                    color: "#3A86FF",
                    mt: 1,
                    fontSize: { xs: "16px", sm: "26px", lg: "28px" },
                    fontWeight: "bold",
                  }}
                >
                  {book.bookName}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "gray",
                    fontSize: { xs: "14px", sm: "18px", lg: "20px" },
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#3A86FF",
                      cursor: "pointer",
                    }}
                  >
                    <BookDescription text={book.bookDescription} />
                  </Typography>
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#3A86FF",
                      textTransform: "none",
                      borderRadius: "8px",
                      width: { xs: "100%", sm: "auto" },
                      mb: 2,
                      mr: { xs: 0, sm: 2 },
                    }}
                    href={book.bookLink} // ✅ fixed hardcoded link
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {book.buttonName}
                  </Button>
                </Box>
              </CardContent>

              {!isMobile && !isTablet && (
                <CardMedia
                  component="img"
                  sx={{
                    width: "300px",
                    height: "450px",
                    borderRadius: "5px",
                  }}
                  image={book.image}
                  alt={book.bookName}
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyBooks;
