// src/Admin/SuccessStories/components/StoryList.jsx
import PropTypes from "prop-types";
import { Box, Card, CardContent, Grid } from "@mui/material";
import StoryCard from "./StoryCard";

export default function StoryList({
  stories,
  expandedId,
  toggleExpand,
  handleEdit,
  handleDeleteClick,
}) {
  return (
    <Box sx={{ mt: 0 }}>
      {stories.map((story, index) => (
        <Card
          key={story.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: { xs: "5px", sm: "10px", md: "25px" },
            borderRadius: "10px",
            backgroundColor: "white",
            maxWidth: "100%",
            overflow: "hidden",
            mb: 0,
          }}
        >
          <CardContent sx={{ position: "relative", width: "100%", p: 0 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <StoryCard
                story={story}
                index={index}
                expandedId={expandedId}
                toggleExpand={toggleExpand}
                handleEdit={handleEdit}
                handleDeleteClick={handleDeleteClick}
              />
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

StoryList.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  expandedId: PropTypes.string,
  toggleExpand: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};
