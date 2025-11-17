// src/Admin/SuccessStories/SuccessStory.jsx

import { useState } from "react";
import { Box } from "@mui/material";

import SuccessNavbar from "./components/SuccessNavbar";
import StoryHeader from "./components/StoryHeader";
import StoryList from "./components/StoryList";
import AddEditStoryModal from "./components/AddEditStoryModal";
import DeleteStoryDialog from "./components/DeleteStoryDialog";
import successStoriesData from "./data/successStoriesData";

export default function SuccessStory() {
  const [expandedId, setExpandedId] = useState(null);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const [stories, setStories] = useState(successStoriesData);

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
