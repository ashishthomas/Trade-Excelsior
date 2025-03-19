import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import AppBarComponent from "./UserAppbar";
import UserTable from "./Table";
import DeleteDialog from "./Delete";
import InfoDialog from "./Info";
import EditDrawer from "./Edit";
import LibraryDrawer from "./Library";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [openLibraryDrawer, setOpenLibraryDrawer] = useState(false);
  const [libraryUser, setLibraryUser] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //To fetch user data from an external API and format it for use in the app.

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const formattedUsers = data.map((user, index) => ({
          id: index + 1,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
          occupation: user.company.name,
          license: "Active",
          memberSince: "2020",
          yearsOfMembership: "3",
          subscriptionStart: "10-Feb-2025",
          subscriptionEnd: "10-Feb-2026",
        }));
        setUsers(formattedUsers);
      });
  }, []);

  //To control the visibility of dialogs and drawers (e.g., edit, delete, info, library)
  const handleOpenDeleteDialog = (id) => {
    setDeleteId(id);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteId(null);
  };

  //To delete a user from the users state when confirmed in the delete dialog.
  const handleConfirmDelete = () => {
    setUsers((prevUsers) =>
      prevUsers
        .filter((user) => user.id !== deleteId)
        .map((user, index) => ({ ...user, id: index + 1 }))
    );
    handleCloseDeleteDialog();
  };

  const handleOpenInfoDialog = (user) => {
    setSelectedUser(user);
    setOpenInfoDialog(true);
  };

  const handleCloseInfoDialog = () => {
    setOpenInfoDialog(false);
    setSelectedUser(null);
  };

  const handleOpenEditDrawer = (user) => {
    setEditUser(user);
    setOpenEditDrawer(true);
  };

  const handleCloseEditDrawer = () => {
    setOpenEditDrawer(false);
    setEditUser(null);
  };

  const handleOpenLibraryDrawer = (user) => {
    setLibraryUser(user);
    setOpenLibraryDrawer(true);
  };

  const handleCloseLibraryDrawer = () => {
    setOpenLibraryDrawer(false);
    setLibraryUser(null);
  };

  //To update the user data in the users state when changes are made in the edit drawer.
  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id
        ? {
            ...user,
            name: `${updatedUser.firstName} ${updatedUser.lastName}`,
            email: updatedUser.email,
            phone: updatedUser.phoneNumber,
            address: updatedUser.address,
            occupation: updatedUser.occupation,
            subscriptionStart: updatedUser.subscriptionStart,
            subscriptionEnd: updatedUser.subscriptionEnd,
          }
        : user
    );
    setUsers(updatedUsers);
    handleCloseEditDrawer();
  };

  const handleUpdateLibraryDetails = () => {
    const updatedUsers = users.map((user) =>
      user.id === libraryUser.id ? libraryUser : user
    );
    setUsers(updatedUsers);
    handleCloseLibraryDrawer();
  };

  // To filter users based on the search query and highlight matching text.
  const highlightText = (text) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, "gi");
    return text.replace(
      regex,
      `<mark style="background-color: yellow;">$1</mark>`
    );
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#C4D9FF" }}>
      <Box sx={{ flexGrow: 1, p: isMobile ? 1 : 2, overflowX: "auto" }}>
        <AppBarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          userCount={users.length}
        />
        <UserTable
          users={users}
          searchQuery={searchQuery}
          handleOpenEditDrawer={handleOpenEditDrawer}
          handleOpenDeleteDialog={handleOpenDeleteDialog}
          handleOpenInfoDialog={handleOpenInfoDialog}
          handleOpenLibraryDrawer={handleOpenLibraryDrawer}
          highlightText={highlightText}
        />
        <DeleteDialog
          openDeleteDialog={openDeleteDialog}
          handleCloseDeleteDialog={handleCloseDeleteDialog}
          handleConfirmDelete={handleConfirmDelete}
        />
        <InfoDialog
          openInfoDialog={openInfoDialog}
          handleCloseInfoDialog={handleCloseInfoDialog}
          selectedUser={selectedUser}
        />
        <EditDrawer
          openEditDrawer={openEditDrawer}
          handleCloseEditDrawer={handleCloseEditDrawer}
          editUser={editUser}
          handleUpdateUser={handleUpdateUser}
        />
        <LibraryDrawer
          openLibraryDrawer={openLibraryDrawer}
          handleCloseLibraryDrawer={handleCloseLibraryDrawer}
          libraryUser={libraryUser}
          handleUpdateLibraryDetails={handleUpdateLibraryDetails}
        />
      </Box>
    </Box>
  );
};

export default Users;
