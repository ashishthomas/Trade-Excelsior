import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Badge,
  Button,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import DeletePopup from "./Form/DeletePopup";
import SuccessStoryForm from "./Form/EditForm";

function SuccessStory() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isExtraSmall = useMediaQuery("(max-width:417px)");
  const [expandedId, setExpandedId] = useState(null);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const [stories, setStories] = useState([
    {
      id: 0,
      name: "Emily Davis",
      tagline: "Risk to Reward Master",
      feedback:
        "This trader demonstrates exceptional market foresight and a steady hand under pressure. Their clear communication and step-by-step breakdown of trades make complex strategies easy to understand.",
      image:
        "https://cdn.pixabay.com/photo/2024/12/20/18/31/sunset-9280759_1280.jpg",
      video: "https://www.youtube.com/watch?v=zsJpUCWfyPE",
    },
    {
      id: 1,
      name: "Robert Lee",
      tagline: "Explore Robert's Journey",
      feedback:
        "This trader stands out for their proactive market analysis and sharp execution. Their ability to identify profitable opportunities while maintaining a balanced approach is commendable.",
      image:
        "https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg",
      video: "https://www.youtube.com/watch?v=zsJpUCWfyPE",
    },
    {
      id: 2,
      name: "Karl Marx",
      tagline: "Explore Marx's Journey",
      feedback:
        "This trader demonstrates exceptional market foresight and a steady hand under pressure. Their clear communication and step-by-step breakdown of trades make complex strategies easy to understand.",
      image:
        "https://cdn.pixabay.com/photo/2025/01/08/14/52/beach-9319305_1280.jpg",
      video: "https://www.youtube.com/watch?v=zsJpUCWfyPE",
    },
  ]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleEdit = (id) => {
    const storyToEdit = stories.find((story) => story.id === id);
    setSelectedStory(storyToEdit);
    setOpenForm(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    const updatedStories = stories.filter((story) => story.id !== deleteItemId);

    const reorderedStories = updatedStories.map((story, index) => ({
      ...story,
      id: index,
    }));

    setStories(reorderedStories);
    setOpenDeleteDialog(false);
  };

  const handleAddSuccessStory = () => {
    setSelectedStory(null);
    setOpenForm(true);
  };

  const handleFormSubmit = (values) => {
    if (selectedStory) {
      const updatedStories = stories.map((story) =>
        story.id === selectedStory.id ? { ...story, ...values } : story
      );
      setStories(updatedStories);
    } else {
      const newStory = { ...values, id: stories.length };
      setStories([...stories, newStory]);
    }
    setOpenForm(false);
  };

  return (
    <Box
      sx={{ backgroundColor: "#C4D9FF", padding: "15px", minHeight: "100vh" }}
    >
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: { xs: "center", sm: "space-between" },
            textAlign: "center",
            width: "100%",
            padding: isExtraSmall ? "8px" : "16px",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              sx={{
                color: "black",
                flexGrow: { sm: 1 },
                textAlign: { xs: "center", sm: "left" },
                fontSize: isExtraSmall
                  ? "1rem"
                  : { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              <b>Success Stories</b>
            </Typography>
            <Badge
              badgeContent={stories.length}
              sx={{
                ml: 3,
                "& .MuiBadge-badge": {
                  height: isExtraSmall ? "1.2rem" : "1.8rem",
                  width: isExtraSmall ? "1.2rem" : "1.8rem",
                  backgroundColor: "#E6E6FA",
                  color: "#007BFF",
                  fontSize: isExtraSmall ? "0.6rem" : "0.8rem",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddSuccessStory}
            sx={{
              textTransform: "none",
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
              mt: { xs: 1, sm: 0 },
            }}
          >
            +Add Success Stories
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: isExtraSmall ? 1 : isMobile ? 2 : 4 }}>
        {stories.map((story, index) => (
          <Card
            key={story.id}
            sx={{
              display: "flex",
              flexDirection: isMobile || isExtraSmall ? "column" : "row",
              alignItems: isMobile || isExtraSmall ? "center" : "flex-start",
              padding: isExtraSmall ? "5px" : "10px",
              borderRadius: "10px",
              backgroundColor: "white",
              maxWidth: "100%",
              overflow: "hidden",
              mb: 0,
            }}
          >
            <CardContent sx={{ position: "relative", width: "100%" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={isExtraSmall ? 0.5 : isMobile || isTablet ? 1 : 3}
              >
                {(isMobile || isTablet) && (
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                      justifyContent:
                        isMobile || isTablet ? "center" : "flex-start",
                      alignItems:
                        isMobile || isTablet ? "center" : "flex-start",
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
                        backgroundColor: "primary.main",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                        },
                      }}
                      onClick={() => handleEdit(story.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
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
                        backgroundColor: "grey",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "darkgrey",
                        },
                      }}
                      onClick={() => handleDeleteClick(story.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Grid>

                {!isMobile && !isTablet && (
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
                        maxWidth: isMobile || isTablet ? "150px" : "300px",
                        borderRadius: "8px",
                        height: "auto",
                        top: index === 0 ? "10px" : "10px",
                        position: "static",
                        right: index % 2 === 0 ? "20px" : "auto",
                        left: index % 2 !== 0 ? "20px" : "auto",
                        zIndex: 1,
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>

      <DeletePopup
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />

      {/* Success Story Form */}
      <SuccessStoryForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleFormSubmit}
        selectedStory={selectedStory}
      />
    </Box>
  );
}

export default SuccessStory;
