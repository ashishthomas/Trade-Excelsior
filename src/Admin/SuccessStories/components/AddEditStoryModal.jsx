// src/Admin/SuccessStories/components/AddEditStoryModal.jsx
import PropTypes from "prop-types";
import SuccessStoryForm from "../Form/EditForm";

export default function AddEditStoryModal({
  open,
  onClose,
  onSubmit,
  selectedStory,
}) {
  // This wrapper just forwards props to your existing form component (EditForm)
  // Keep the same naming as original: open, onClose, onSubmit, selectedStory
  return (
    <SuccessStoryForm
      open={open}
      onClose={onClose}
      onSubmit={onSubmit}
      selectedStory={selectedStory}
    />
  );
}

AddEditStoryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectedStory: PropTypes.object,
};
