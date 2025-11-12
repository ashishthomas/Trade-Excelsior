import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ReferenceCard = ({
  refData,
  index,
  handleMenuOpen,
  isSmallLaptop,
  isSmallMobile,
  isTablet,
  isMobile,
}) => {
  // ✅ Replace nested ternaries with explicit conditional statements
  let padding;
  if (isSmallLaptop || isSmallMobile) padding = "15px";
  else if (isTablet) padding = "12px";
  else padding = "10px";

  let imageSize;
  if (isSmallMobile) imageSize = 40;
  else if (isTablet) imageSize = 45;
  else imageSize = 50;

  let marginLeft;
  if (isSmallLaptop || isSmallMobile) marginLeft = "10px";
  else if (isTablet) marginLeft = "12px";
  else marginLeft = "15px";

  let titleVariant;
  if (isSmallMobile) titleVariant = "body2";
  else if (isMobile) titleVariant = "body1";
  else titleVariant = "h6";

  let titleFontSize;
  if (isSmallLaptop || isSmallMobile) titleFontSize = "0.85rem";
  else titleFontSize = "1rem";

  let categoryFontSize;
  if (isSmallLaptop || isSmallMobile) categoryFontSize = "0.75rem";
  else categoryFontSize = "0.875rem";

  let rightPosition;
  if (isSmallLaptop || isSmallMobile) rightPosition = 2;
  else rightPosition = 5;

  let iconFontSize;
  if (isSmallMobile) iconFontSize = "1rem";
  else iconFontSize = "1.25rem";

  let minWidthValue;
  if (isSmallLaptop || isSmallMobile) minWidthValue = "60%";
  else minWidthValue = "auto";

  return (
    <Grid item xs={12} sm={6} md={3} key={refData.id}>
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
            padding,
            borderRadius: "10px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: imageSize,
              height: imageSize,
              marginLeft,
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
              minWidth: minWidthValue,
            }}
          >
            <Typography
              variant={titleVariant}
              sx={{ fontSize: titleFontSize }}
            >
              {refData.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: categoryFontSize }}
            >
              {refData.category}
            </Typography>
          </CardContent>

          <IconButton
            sx={{
              position: "absolute",
              right: rightPosition,
              color: "#0280FF",
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleMenuOpen(event, index);
            }}
          >
            <MoreVertIcon sx={{ fontSize: iconFontSize }} />
          </IconButton>
        </Card>
      </a>
    </Grid>
  );
};

ReferenceCard.propTypes = {
  refData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    referenceLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  isSmallLaptop: PropTypes.bool.isRequired,
  isSmallMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ReferenceCard;
