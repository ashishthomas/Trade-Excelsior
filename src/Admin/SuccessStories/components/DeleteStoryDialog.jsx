// src/Admin/SuccessStories/components/DeleteStoryDialog.jsx
import PropTypes from "prop-types";
import DeletePopup from "../Form/DeletePopup";

export default function DeleteStoryDialog({ open, onClose, onConfirm }) {
  return <DeletePopup open={open} onClose={onClose} onConfirm={onConfirm} />;
}

DeleteStoryDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
