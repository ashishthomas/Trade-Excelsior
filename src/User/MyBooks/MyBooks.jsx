import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import BooksHeader from "./components/BooksHeader";
import BooksList from "./components/BooksList";

const MyBooks = () => {
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
        "Learn from the greatest traders in the stock market and understand their strategies for success. The book explores various market conditions, including bull markets and periods of economic uncertainty, and reveals how these traders have consistently outperformed the market.",
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
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BooksHeader count={books.length} />
      <BooksList books={books} isMobile={isMobile} isTablet={isTablet} />
    </Box>
  );
};

export default MyBooks;
