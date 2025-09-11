import { useState } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Button,
  Box,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Badge,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import EditChecklistDrawer from "./EditChecklistDrawer";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

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

  const validationSchema = Yup.object({
    title: Yup.string().required("Checklist description is required"),
    link: Yup.string().url("Enter a valid URL").required("Link is required"),
    buttonName: Yup.string().required("Button name is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      buttonName: "",
    },
    validationSchema,
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
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          mb: 2,
          padding: { xs: 0.5, sm: 0.5 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              variant="h6"
              width={{ xs: "auto" }}
              sx={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <b>ON BOARDING CHECKLIST</b>
            </Typography>
            <Badge
              badgeContent={items.length}
              sx={{
                ml: 3,
                "& .MuiBadge-badge": {
                  height: "1.8rem",
                  width: "1.8rem",
                  backgroundColor: "#E6E6FA",
                  color: "#1976d2",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>

          <Button
            variant="contained"
            onClick={handleAddChecklist}
            sx={{
              fontSize: { xs: "0.7rem", sm: "1rem" },
              mt: { xs: 1, sm: 0 },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            + Add Checklist
          </Button>
        </Toolbar>
      </AppBar>

      {items.map((item) => (
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
      ))}
      <EditChecklistDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        formik={formik}
        editItem={editItem}
      />
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
}

export default Onboarding;
