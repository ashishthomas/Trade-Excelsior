import PropTypes from "prop-types";
import { Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ReferenceMenu = ({ anchorEl, onClose, onEdit, onDelete }) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <MenuItem onClick={onEdit} sx={{ color: "#0280FF" }}>
        <EditIcon fontSize="small" sx={{ marginRight: 1 }} />
        Edit
      </MenuItem>
      <MenuItem onClick={onDelete} sx={{ color: "#0280FF" }}>
        <DeleteIcon fontSize="small" sx={{ marginRight: 1 }} />
        Delete
      </MenuItem>
    </Menu>
  );
};

ReferenceMenu.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReferenceMenu;
