import { useState, useCallback } from "react";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

import AddReferenceForm from "./ReusableFormModals/AddReferenceForm";
import EditReferenceForm from "./ReusableFormModals/EditReferenceForm";
import DeleteConfirmationModal from "./ReusableFormModals/DeleteConfirmationModal";

import ReferenceCard from "./Components/ReferenceCard";
import ReferencesHeader from "./Components/ReferencesHeader";
import ReferenceMenu from "./Components/ReferenceMenu";

import { referencesData } from "../../data/referenceData";

function References() {
  const [referenceList, setReferenceList] = useState(referencesData);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedReference, setSelectedReference] = useState(null);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallLaptop = useMediaQuery("(max-width:1024px)");
  const isSmallMobile = useMediaQuery("(max-width:320px)");

  const handleAddOpen = useCallback(() => setOpenAddForm(true), []);
  const handleAddClose = useCallback(() => setOpenAddForm(false), []);

  const handleMenuOpen = useCallback((event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    setSelectedIndex(null);
  }, []);

  const handleEditOpen = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedReference(referenceList[selectedIndex]);
      setOpenEditForm(true);
      handleMenuClose();
    }
  }, [selectedIndex, referenceList, handleMenuClose]);

  const handleEditClose = useCallback(() => {
    setOpenEditForm(false);
    setSelectedReference(null);
  }, []);

  const handleEditReference = useCallback(
    (updatedReference) => {
      setReferenceList((prev) =>
        prev.map((ref) =>
          ref.id === updatedReference.id ? updatedReference : ref
        )
      );
      handleEditClose();
    },
    [handleEditClose]
  );

  const addReference = useCallback((newReference) => {
    setReferenceList((prev) => [...prev, newReference]);
  }, []);

  const handleDelete = useCallback(() => {
    if (selectedIndex !== null) {
      setDeleteId(referenceList[selectedIndex].id);
      setOpenDeleteModal(true);
      handleMenuClose();
    }
  }, [selectedIndex, referenceList, handleMenuClose]);

  const confirmDelete = useCallback(() => {
    setReferenceList((prev) => prev.filter((ref) => ref.id !== deleteId));
    setOpenDeleteModal(false);
    setDeleteId(null);
  }, [deleteId]);

  return (
    <Box
      sx={{
        backgroundColor: "#E6E6FF",
        padding: "15px",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ReferencesHeader
        count={referenceList.length}
        onAddOpen={handleAddOpen}
      />

      <Grid
        container
        spacing={isMobile ? 2 : 3}
        sx={{ mt: 3, justifyContent: isMobile ? "center" : "flex-start" }}
      >
        {referenceList.map((ref, i) => (
          <ReferenceCard
            key={ref.id}
            refData={ref}
            index={i}
            handleMenuOpen={handleMenuOpen}
            isSmallLaptop={isSmallLaptop}
            isSmallMobile={isSmallMobile}
            isTablet={isTablet}
            isMobile={isMobile}
          />
        ))}
      </Grid>

      <ReferenceMenu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        onEdit={handleEditOpen}
        onDelete={handleDelete}
      />

      <AddReferenceForm
        open={openAddForm}
        onClose={handleAddClose}
        handleAdd={addReference}
      />
      <EditReferenceForm
        open={openEditForm}
        onClose={handleEditClose}
        reference={selectedReference}
        handleUpdate={handleEditReference}
      />
      <DeleteConfirmationModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </Box>
  );
}

export default References;
