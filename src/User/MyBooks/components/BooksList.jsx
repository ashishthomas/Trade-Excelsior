import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import BookCard from "./BookCard";

const BooksList = ({ books, isMobile, isTablet }) => (
  <Grid container spacing={3} sx={{ mt: 3, justifyContent: "center" }}>
    {books.map((book) => (
      <Grid item xs={12} md={12} key={book.id}>
        <BookCard book={book} isMobile={isMobile} isTablet={isTablet} />
      </Grid>
    ))}
  </Grid>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      bookTagline: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      bookName: PropTypes.string.isRequired,
      bookDescription: PropTypes.string.isRequired,
      bookLink: PropTypes.string.isRequired,
      buttonName: PropTypes.string.isRequired,
    })
  ).isRequired,

  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default BooksList;
