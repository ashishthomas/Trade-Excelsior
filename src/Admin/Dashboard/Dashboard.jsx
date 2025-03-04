import React, { useState } from "react";
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
import AddUser from "./forms/AddUser";
import AddCheckList from "./forms/AddCheckList";
import AddBook from "./forms/AddBook";
import AddCoreWatchList from "./forms/AddCoreWatchList";
import AddReferences from "./forms/AddReferences";
import AddSuccess from "./forms/AddSuccess";
import CustomModal from "../CommonComponents/CustomModal";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  minHeight: 180,
  textAlign: "center",
  padding: "16px",
});

const Dashboard = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openCheckList, setOpenCheckList] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [openCoreWatchList, setOpenCoreWatchList] = useState(false);
  const [openReference, setOpenReference] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  return (
    <Box sx={{ backgroundColor: "#C4D9FF", minHeight: "84vh", padding: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: "black", flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 3 }}>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <AccountCircle sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6">Add New User</Typography>
              <Button variant="contained" onClick={() => setOpenUser(true)}>
                Add User
              </Button>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <Grading sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6">Add CheckList</Typography>
              <Button
                variant="contained"
                onClick={() => setOpenCheckList(true)}
              >
                Add CheckList
              </Button>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <ClassOutlined sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6">Add New Book</Typography>
              <Button variant="contained" onClick={() => setOpenBook(true)}>
                Add Book
              </Button>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <TrendingUpOutlined sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6">Add Core WatchList</Typography>
              <Button
                variant="contained"
                onClick={() => setOpenCoreWatchList(true)}
              >
                Add Core WatchList
              </Button>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <EmojiEvents sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6">Add Success Stories</Typography>
              <Button variant="contained" onClick={() => setOpenSuccess(true)}>
                Add Success Stories
              </Button>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <InsertDriveFileSharp sx={{ fontSize: 60 }} color="primary" />
              <Typography variant="h6">Add References</Typography>
              <Button
                variant="contained"
                onClick={() => setOpenReference(true)}
              >
                Add References
              </Button>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>

      <CustomModal
        open={openUser}
        handleClose={() => setOpenUser(false)}
        title="Add User"
      >
        <AddUser />
      </CustomModal>

      <CustomModal
        open={openCheckList}
        handleClose={() => setOpenCheckList(false)}
        title="Add CheckList"
      >
        <AddCheckList />
      </CustomModal>

      <CustomModal
        open={openBook}
        handleClose={() => setOpenBook(false)}
        title="Add Book"
      >
        <AddBook />
      </CustomModal>

      <CustomModal
        open={openCoreWatchList}
        handleClose={() => setOpenCoreWatchList(false)}
        title="Add Core WatchList"
      >
        <AddCoreWatchList />
      </CustomModal>

      <CustomModal
        open={openSuccess}
        handleClose={() => setOpenSuccess(false)}
        title="Add Success Stories"
      >
        <AddSuccess />
      </CustomModal>

      <CustomModal
        open={openReference}
        handleClose={() => setOpenReference(false)}
        title="Add References"
      >
        <AddReferences />
      </CustomModal>
    </Box>
  );
};

export default Dashboard;
