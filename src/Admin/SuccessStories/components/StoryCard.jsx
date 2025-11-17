// src/Admin/SuccessStories/components/StoryCard.jsx
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StoryActions from "./StoryActions";

export default function StoryCard({
  story,
  index,
  expandedId,
  toggleExpand,
  handleEdit,
  handleDeleteClick,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isExtraSmall = useMediaQuery("(max-width:417px)");
  const isDesktop = !isMobile && !isTablet;

  return (
    <>
      {(isMobile || isTablet) && (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={story.image}
            alt={story.name}
            sx={{
              width: "100%",
              maxWidth: isExtraSmall ? "150px" : "200px",
              borderRadius: "8px",
              height: "auto",
            }}
          />
        </Grid>
      )}

      <Grid
        item
        xs={12}
        md={8}
        sx={{
          textAlign: { xs: "center", md: "left" },
          order: index % 2 !== 0 ? 2 : 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: isExtraSmall
              ? "0.9rem"
              : isMobile || isTablet
              ? "1rem"
              : "28px",
          }}
        >
          {story.tagline}
        </Typography>

        <Typography
          variant="h4"
          color="primary"
          sx={{
            mt: isExtraSmall ? 0.4 : isMobile || isTablet ? 0.5 : 1,
            fontSize: isExtraSmall
              ? "0.9rem"
              : isMobile || isTablet
              ? "1rem"
              : "28px",
          }}
        >
          {story.name}
        </Typography>

        <Typography
          variant="h6"
          paragraph
          sx={{
            mt: isExtraSmall ? 0.8 : isMobile || isTablet ? 1 : 2,
            color: "grey",
            fontSize: isExtraSmall
              ? "10px"
              : isMobile || isTablet
              ? "12px"
              : "20px",
          }}
        >
          {expandedId === story.id
            ? story.feedback
            : `${story.feedback.substring(0, 80)}...`}
        </Typography>

        {story.feedback.length > 80 && (
          <Button
            onClick={() => toggleExpand(story.id)}
            sx={{
              textTransform: "none",
              fontSize: isExtraSmall
                ? "0.7rem"
                : isMobile || isTablet
                ? "0.8rem"
                : "1rem",
              color: "#3A86FF",
              fontWeight: "bold",
            }}
          >
            {expandedId === story.id ? "Read Less" : "Read More"}
          </Button>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile || isTablet ? "column" : "row",
            justifyContent: isMobile || isTablet ? "center" : "flex-start",
            alignItems: isMobile || isTablet ? "center" : "flex-start",
            mt: isExtraSmall ? 0.8 : isMobile || isTablet ? 1 : 2,
            gap: isExtraSmall ? "4px" : "8px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              width: isExtraSmall
                ? "auto"
                : isMobile || isTablet
                ? "auto"
                : "100px",
              minWidth: isExtraSmall
                ? "70px"
                : isMobile || isTablet
                ? "80px"
                : "100px",
              fontSize: isExtraSmall
                ? "0.7rem"
                : isMobile || isTablet
                ? "0.8rem"
                : "1rem",
              whiteSpace: "nowrap",
              padding: isExtraSmall
                ? "4px 8px"
                : isMobile || isTablet
                ? "6px 12px"
                : "8px 16px",
            }}
            onClick={() => window.open(story.video, "_blank")}
          >
            See Video
          </Button>

          <StoryActions
            onEdit={() => handleEdit(story.id)}
            onDelete={() => handleDeleteClick(story.id)}
            isMobile={isMobile}
            isTablet={isTablet}
            isExtraSmall={isExtraSmall}
          />
        </Box>
      </Grid>
      {isDesktop && (
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: index % 2 !== 0 ? "flex-start" : "center",
            order: index % 2 !== 0 ? 1 : 2,
          }}
        >
          <Box
            component="img"
            src={story.image}
            alt={story.name}
            sx={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "8px",
              height: "auto",
              top: "10px",
              position: "static",
              right: index % 2 === 0 ? "20px" : "auto",
              left: index % 2 !== 0 ? "20px" : "auto",
              zIndex: 1,
            }}
          />
        </Grid>
      )}
    </>
  );
}

StoryCard.propTypes = {
  story: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  expandedId: PropTypes.string,
  toggleExpand: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};
