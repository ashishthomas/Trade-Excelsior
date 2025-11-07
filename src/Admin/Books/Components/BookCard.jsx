import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import BookDescription from "./BookDescription";

const BookCard = ({
  book,
  isMobile,
  isTablet,
  handleEditOpen,
  handleOpenDeleteModal,
}) => {
  return (
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
            textAlign: isMobile || isTablet ? "center" : "left",
            mb: { xs: 2, sm: 2 },
          }}
        >
          {book.bookTagline}
        </Typography>

        {(isMobile || isTablet) && (
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

        <BookDescription text={book.bookDescription} />

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
            href={book.bookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {book.buttonName}
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3A86FF",
              borderRadius: "6px",
              textTransform: "none",
              fontWeight: "bold",
              width: { xs: "100%", sm: "auto" },
              mb: 2,
              mr: { xs: 0, sm: 2 },
            }}
            onClick={() => handleEditOpen(book)}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#9FA6B2",
              borderRadius: "8px",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              mb: 2,
            }}
            onClick={() => handleOpenDeleteModal(book)}
          >
            Delete
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
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    bookTagline: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    bookDescription: PropTypes.string.isRequired,
    bookLink: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
  }).isRequired,

  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  handleEditOpen: PropTypes.func.isRequired,
  handleOpenDeleteModal: PropTypes.func.isRequired,
};

export default BookCard;
