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
import React, { useState } from "react";

function SuccessStory() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isExtraSmall = useMediaQuery("(max-width:417px)");
  const [expandedId, setExpandedId] = useState(null);

  const [stories] = useState([
    {
      id: 0,
      name: "William Smith",
      tagline: "Risk to Reward Master",
      feedback:
        "This trader demonstrates exceptional market foresight and a steady hand under pressure. Their clear communication and step-by-step breakdown of trades make complex strategies easy to understand.",
      image:
        "https://cdn.pixabay.com/photo/2023/04/28/07/16/man-7956041_1280.jpg",
      video: "https://www.youtube.com/watch?v=REFQ2_d_Gyo",
    },
    {
      id: 1,
      name: "James Lucas",
      tagline: "Explore James Journey",
      feedback:
        "This trader stands out for their proactive market analysis and sharp execution. Their ability to identify profitable opportunities while maintaining a balanced approach is commendable.",
      image:
        "https://cdn.pixabay.com/photo/2020/11/30/17/21/businessman-5791566_1280.jpg",
      video: "https://www.youtube.com/watch?v=4gaaGDldQwY",
    },
    {
      id: 2,
      name: "Mary Jane",
      tagline: "Explore Mary's Journey",
      feedback:
        "This trader demonstrates exceptional market foresight and a steady hand under pressure. Their clear communication and step-by-step breakdown of trades make complex strategies easy to understand.",
      image:
        "https://cdn.pixabay.com/photo/2023/12/29/10/39/woman-8475958_1280.jpg",
      video: "https://www.youtube.com/watch?v=weD2tVLaIEQ",
    },
  ]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
                      justifyContent:
                        isMobile || isTablet ? "center" : "flex-start",
                      mt: isExtraSmall ? 0.8 : isMobile || isTablet ? 1 : 2,
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
    </Box>
  );
}

export default SuccessStory;
