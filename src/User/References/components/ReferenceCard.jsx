import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";

const ReferenceCard = ({
  refData,
  index,
  isTablet,
  isMobile,
  isSmallLaptop,
  isSmallMobile,
  handleMenuOpen,
}) => {
  return (
    <Grid item xs={12} sm={6} md={isTablet ? 4 : 3} key={refData.id}>
      <a
        href={refData.referenceLink}
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
            image={refData.image}
            alt={refData.title}
            onError={(e) => {
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
              {refData.title}
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                fontSize:
                  isSmallLaptop || isSmallMobile ? "0.75rem" : "0.875rem",
              }}
            >
              {refData.category}
            </Typography>
          </CardContent>

          {/* Ellipsis Button */}
          <IconButton
            sx={{
              position: "absolute",
              right: isSmallLaptop || isSmallMobile ? 2 : 5,
              color: "#0280FF",
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleMenuOpen(event, index);
            }}
          >
            ⋮
          </IconButton>
        </Card>
      </a>
    </Grid>
  );
};

ReferenceCard.propTypes = {
  refData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    referenceLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isSmallLaptop: PropTypes.bool.isRequired,
  isSmallMobile: PropTypes.bool.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
};

export default ReferenceCard;
