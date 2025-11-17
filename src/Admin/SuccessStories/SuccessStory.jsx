// src/Admin/SuccessStories/SuccessStory.jsx

import { useState } from "react";
import { Box } from "@mui/material";

import SuccessNavbar from "./components/SuccessNavbar";
import StoryHeader from "./components/StoryHeader";
import StoryList from "./components/StoryList";
import AddEditStoryModal from "./components/AddEditStoryModal";
import DeleteStoryDialog from "./components/DeleteStoryDialog";

export default function SuccessStory() {
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
      <SuccessNavbar onAdd={handleAddSuccessStory} count={stories.length} />

      <StoryHeader />

      <StoryList
        stories={stories}
        expandedId={expandedId}
        toggleExpand={toggleExpand}
        handleEdit={handleEdit}
        handleDeleteClick={handleDeleteClick}
      />

      <DeleteStoryDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />

      <AddEditStoryModal
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleFormSubmit}
        selectedStory={selectedStory}
      />
    </Box>
  );
}
