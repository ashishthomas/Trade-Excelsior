import { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import OnboardingHeader from "./components/OnboardingHeader";
import OnboardingItem from "./components/OnboardingItem";
import EditChecklistDrawer from "./EditChecklistDrawer";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import { checklistValidationSchema } from "./utils/validationSchema";

function Onboarding() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "An extra layer of security to your trading account",
      link: "https://example.com/stocks",
      buttonName: "Join Now",
    },
    {
      id: 2,
      title: "Link your bank account for seamless deposits and withdrawals",
      link: "https://example.com/news",
      buttonName: "Link Account",
    },
    {
      id: 3,
      title: "Join prime whatsapp group",
      link: "https://example.com/portfolio",
      buttonName: "Join Now",
    },
    {
      id: 4,
      title: "Demo",
      link: "https://example.com/alerts",
      buttonName: "Check Demo",
    },
  ]);

  const [editItem, setEditItem] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleEdit = (item) => {
    setEditItem(item);
    formik.setValues({
      title: item.title,
      link: item.link,
      buttonName: item.buttonName,
    });
    setOpenDrawer(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    const updatedItems = items.filter((item) => item.id !== deleteItemId);
    const reorderedItems = updatedItems.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setItems(reorderedItems);
    setOpenDeleteDialog(false);
  };

  const handleAddChecklist = () => {
    setEditItem(null);
    formik.resetForm();
    setOpenDrawer(true);
  };

  const formik = useFormik({
    initialValues: { title: "", link: "", buttonName: "" },
    validationSchema: checklistValidationSchema,
    onSubmit: (values) => {
      if (editItem) {
        setItems(
          items.map((item) =>
            item.id === editItem.id ? { ...item, ...values } : item
          )
        );
      } else {
        const newItem = { id: items.length + 1, ...values };
        setItems(
          [...items, newItem].map((item, index) => ({ ...item, id: index + 1 }))
        );
      }
      setOpenDrawer(false);
    },
  });

  return (
    <Box
      sx={{ backgroundColor: "#E6E6FF", padding: "15px", minHeight: "84vh" }}
    >
      {/* ✅ Header Section */}
      <OnboardingHeader
        itemCount={items.length}
        handleAddChecklist={handleAddChecklist}
      />

      {/* ✅ Checklist Items */}
      {items.map((item) => (
        <OnboardingItem
          key={item.id}
          item={item}
          isMobile={isMobile}
          handleEdit={handleEdit}
          handleDeleteClick={handleDeleteClick}
        />
      ))}

      {/* ✅ Edit Drawer */}
      <EditChecklistDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        formik={formik}
        editItem={editItem}
      />

      {/* ✅ Delete Confirmation */}
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
}

export default Onboarding;
