import PropTypes from "prop-types";
import { Paper, Typography, Box, Button, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const OnboardingItem = ({ item, isMobile, handleEdit, handleDeleteClick }) => {
  return (
    <Paper
      key={item.id}
      elevation={3}
      sx={{
        padding: 2,
        marginBottom: 2,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Typography
        sx={{ flex: 1 }}
        fontSize={{ xs: "15px", sm: "18px", md: "19px", lg: "20px" }}
      >
        {item.id}. {item.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "0.5rem", sm: "0.6rem", md: "1rem", lg: "1.5rem" },
          marginTop: { xs: "10px", sm: "0px" },
        }}
      >
        <Button
          variant="contained"
          href={item.link}
          target="_blank"
          sx={{
            minWidth: { xs: "80px", sm: "120px", md: "180px" },
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
            padding: "7px 10px",
            height: { sm: "40px", lg: "40px" },
            width: { xs: "80px", md: "100px", lg: "150px" },
          }}
        >
          {item.buttonName}
        </Button>
        <IconButton
          onClick={() => handleEdit(item)}
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem" },
            width: { xs: "2em" },
          }}
        >
          <Edit color="primary" />
        </IconButton>
        <IconButton
          onClick={() => handleDeleteClick(item.id)}
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem" },
            width: { xs: "2em" },
          }}
        >
          <Delete color="primary" />
        </IconButton>
      </Box>
    </Paper>
  );
};

OnboardingItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default OnboardingItem;
