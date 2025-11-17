import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ActionButtons({ isEditing, setIsEditing, formik }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 2,
      }}
    >
      {isEditing ? (
        <>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              color: "white",
              mr: 2,
              textTransform: "none",
            }}
            onClick={formik.handleSubmit}
          >
            Save
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              color: "white",
              mr: 2,
              textTransform: "none",
            }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007BFF",
            color: "white",
            mr: 2,
            textTransform: "none",
          }}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      )}

      {!isEditing && (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "lightgray",
            color: "white",
            mr: 2,
            textTransform: "none",
          }}
        >
          Cancel
        </Button>
      )}

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#007BFF",
          color: "white",
          textTransform: "none",
        }}
        onClick={() => navigate("/changepassword")}
      >
        Change Password
      </Button>
    </Box>
  );
}

ActionButtons.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
};