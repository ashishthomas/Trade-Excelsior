

export default SuccessStory;

import { AppBar, Box, Toolbar, Typography, Badge, Button, Grid, Container, Stack, Modal, IconButton, Divider, Card } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery, useTheme } from "@mui/material";
import Feedbackstory from "./Feedbackstory";
import SuccessStoryForm from "./Form/SuccessStoryForm";
import CardContent from '@mui/material/CardContent';


const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
};

function SuccessStory() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [stories, setStories] = useState([
    {
      id: 0,
      name: "Emily Davis",
      tagline: "Risk to Reward Master",
      feedback:"This trader demonstrates exceptional market foresight and a steady hand under pressure. Their clear communication and step-by-step breakdown of trades make complex strategies easy to understand.",  
      image: "https://cdn.pixabay.com/photo/2024/12/20/18/31/sunset-9280759_1280.jpg",
      video: "https://www.youtube.com/watch?v=zsJpUCWfyPE",
    },
    {
      id: 1,
      name: "Robert Lee",
      tagline: "Explore Robert's Journey",
      feedback: "This trader stands out for their proactive market analysis and sharp execution. Their ability to identify profitable opportunities while maintaining a balanced approach is commendable.",
        
      image: "https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg",
      video: "https://www.youtube.com/watch?v=zsJpUCWfyPE",
    },
    {
      id: 2,
      name: "karl marx",
      tagline: "explore marx journey",
      feedback:
        "This trader demonstrates exceptional market foresight and a steady hand under pressure. Their clear communication and step-by-step breakdown of trades make complex strategies easy to understand.",
      image:
        "https://cdn.pixabay.com/photo/2025/01/08/14/52/beach-9319305_1280.jpg",
      video: "https://www.youtube.com/watch?v=zsJpUCWfyPE",
    },


  ]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const[open,setOpen]=useState(false)
  const [currentStory,setCurrentStory] = useState(null)
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleEditClick = (story) => {
    setCurrentStory(story);  // Set the selected story for editing

    setDrawerOpen(true);
  };

  const handleAddClick = () => {
    setCurrentStory(null);  // Reset to null when adding a new story
    setDrawerOpen(true);
  };

  const handleSubmit = (values) => {
    setStories((prevStories) =>{
      if(currentStory){
        //update existing story
        return prevStories.map((story) => story.id === currentStory.id ? { ...story, ...values } : story);
      }else{
        //add new story with unique id
        return [...prevStories, { ...values, id: Date.now() }]
      };
    })
    setDrawerOpen(false);
  };

  const handleDelete = () => {
    setStories((prevStories)=>prevStories.filter((story)=>story.id!==deleteId));
    setOpenDelete(false);
  };

  return (
    <div>
      <Box sx={{ backgroundColor: "#C4D9FF", padding: "15px",minHeight:"100vh" }}>
      
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar sx={{ display:"flex", justifyContent: "space-between" , flexWrap:"wrap", gap:1}}>
            <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", gap:0.5, flexWrap:"wrap"}}>
              <Typography variant="h4" sx={{ color: "black", fontWeight: "bold", p:{xs:1,sm:3},fontSize: { xs: "1.5rem", sm: "2rem" }, }}>SUCCESS STORIES</Typography>
              <Badge badgeContent={stories.length} 
              sx={{ mt: 2, "& .MuiBadge-badge": { backgroundColor: "#E6E6FA", color: "#007BFF", fontSize: { xs: "1rem", sm: "1.5rem" },
              width: { xs: 35, sm: 50 },  height: { xs: 35, sm: 50 },
                borderRadius: '40%',
                fontWeight: "bold" } , p: 1,}} />
            </Box>
            <Button variant="contained" sx={{ backgroundColor: "#3A86FF" , p: { xs: 1, sm: 1.7 }, textTransform:"none",fontSize: { xs: "0.8rem", sm: "1rem" },}} onClick={handleAddClick}>
              <AddIcon /> Add Success Story
            </Button>
          </Toolbar>
        </AppBar>


        <Box sx={{mt:4}}>
        {stories.map((story, index) => (
          //Design for even index
           index % 2 === 0 ? (
          <Box key={story.id} sx={{ mb: 0 }} id="design1">
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Grid container alignItems="center" justifyContent="space-between" spacing={3} sx={{ mt: 1,ml:1 }}>
              <Grid item xs={12} md={8} sx={{ textAlign: { xs: "center", md: "left" }}}>

                <Typography variant="h4">{story.tagline}</Typography>
                <Typography variant="h4" color="primary" sx={{ mt: 1 }}>{story.name}</Typography>
                <Feedbackstory text={story.feedback} variant="h6" paragraph sx={{ mt: 2, color: "grey" }} />
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                <Box component="img" src={story.image} alt="Trader" sx={{ width: "100%", maxWidth: "300px", borderRadius: "8px",height:"auto" }} />
              </Grid>
            </Grid>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2,ml:4.5, justifyContent: { xs: "center", sm: "flex-start" }}}>
              <Button variant="contained"  color="primary" sx={{ textTransform: 'none', width: 100 }}
               onClick={() => window.open(story.video, "_blank")}>
                See Video
              </Button>
              <Button variant="contained" color="primary"  sx={{ textTransform: 'none', width: 100 }}
              onClick={() => handleEditClick(story)}>
                Edit
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "grey", color: "white", textTransform:"none" }} onClick={() => {
                setDeleteId(story.id);
                setOpenDelete(true);
              }}>
                Delete
              </Button>
            </Stack>
            </CardContent>
            </Card>
           
                
     
          </Box>
                 
           ):(
             // Design for odd index
             <Box key={story.id} sx={{ mb: 0 }} id="design2">
               <Card sx={{ minWidth: 275 }}>
              <CardContent>
             <Grid container alignItems="center" spacing={3} sx={{ mt: 1 }}>
               <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                 <Box component="img" src={story.image} alt="New Section Image"
                   sx={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "8px" }}
                 />
               </Grid>
               <Grid item xs={12} md={8} sx={{ textAlign: { xs: "center", md: "left" } }}>
                 <Typography variant="h4">{story.tagline}</Typography>
                 <Typography variant="h4" color="primary" sx={{ mt: 1 }}>{story.name}</Typography>
                 <Feedbackstory text={story.feedback} variant="h6" paragraph sx={{ mt: 2, color: "grey" }} />
               </Grid>
             </Grid>

             <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2,mr:11, justifyContent: { xs: "center", sm: "center" } }}>
               <Button variant="contained" color="primary" sx={{ textTransform: 'none', width: 100 }} onClick={() => story.video && window.open(story.video, "_blank")}   >See Video</Button>
               <Button variant="contained" sx={{ textTransform: 'none', width: 100 }} color="primary" onClick={() => handleEditClick(story)}>Edit</Button>

               <Button variant="contained" sx={{ backgroundColor: "grey", color: "white", "&:hover": { backgroundColor: "darkgrey" }, textTransform: 'none', width: 100 }}
                 onClick={() => {
                   setDeleteId(story.id);
                   setOpenDelete(true);
                 }}>Delete</Button>
             </Stack>
             </CardContent>
             </Card>
             
           </Box>

           

           )
           
        ))}
        </Box>

  
      </Box>
      


      

      <SuccessStoryForm 
  open={drawerOpen} 
  onClose={() => setDrawerOpen(false)} 
  onSubmit={handleSubmit} 
  selectedStory={currentStory}  // Ensure correct data is passed
/>

      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <Box sx={{ ...modalStyle, width: 500, height: 300 ,p: 2}}>
          <Typography variant="h5" component="h5" sx={{ textAlign: "center", fontWeight: "bold", p: 1.5, pt: 0 }}>Confirmation Required
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <IconButton onClick={() => setOpenDelete(false)} sx={{ position: "absolute", top: 10, right: 8 }}>
                        <CloseIcon></CloseIcon>
                      </IconButton>
                    </Box>
          </Typography>
          <Divider />
          <Typography sx={{ mt: 2,px: 4, pb: 4, textAlign: "center", fontSize: "1.3rem" }}>Are you sure you want to delete this story? This action cannot be undone!</Typography>
          <Divider />
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ p: 4 }}>
            <Button variant="contained" color="primary" onClick={handleDelete}>Delete</Button>
            <Button variant="contained" sx={{ backgroundColor: "grey", color: "white" }} onClick={() => setOpenDelete(false)}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
    
  );
 
}



