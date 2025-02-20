
import {
  AccountCircle,
  ClassOutlined,
  EmojiEvents,
  Grading,
  InsertDriveFileSharp,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  Grid,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const CardComp = ({ icon, title, buttonText }) => {
  return (
    <StyledCard>
      {React.createElement(icon, { sx: { fontSize: "60px" }, color: "primary" })}
      <Typography variant="h6">{title}</Typography>
      <Button variant="contained">{buttonText}</Button>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  minHeight: 180,
  textAlign: "center",
});

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#C4D9FF", minHeight: "100vh", padding:2 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: "black", flexGrow: 1, ml: 3 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 3 }}>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComp icon={AccountCircle} title="Add New User" buttonText="Add User" />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComp icon={Grading} title="Add CheckList" buttonText="Add CheckList" />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComp icon={ClassOutlined} title="Add New Book" buttonText="Add Book" />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComp icon={TrendingUpOutlined} title="Add Core WatchList" buttonText="Add Corewatchlist" />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComp icon={EmojiEvents} title="Add Success Stories" buttonText="Add SuccessStories" />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComp icon={InsertDriveFileSharp} title="Add References" buttonText="Add References" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
