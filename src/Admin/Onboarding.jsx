import React, { useState } from "react";
import { Paper, Typography, IconButton, Button, TextField, Box, Drawer, Dialog, DialogActions, DialogContent, DialogTitle, AppBar, Toolbar, Avatar, useTheme, useMediaQuery, Divider } from "@mui/material";
import { Edit, Delete, Close } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

function Onboarding() {
  const [items, setItems] = useState([
    { id: 1, title: "An extra layer of security to your trading account", link: "https://example.com/stocks", buttonName: "Join Now" },
    { id: 2, title: "Link your bank account for seamless deposits and withdrawals", link: "https://example.com/news", buttonName: "Link Account" },
    { id: 3, title: "Join prime whatsapp group", link: "https://example.com/portfolio", buttonName: "Join Now" },
    { id: 4, title: "Demo", link: "https://example.com/alerts", buttonName: "Check Demo" }
  ]);

  const [editItem, setEditItem] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleEdit = (item) => {
    setEditItem(item);
    formik.setValues({ title: item.title, link: item.link, buttonName: item.buttonName });
    setOpenDrawer(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    const updatedItems = items.filter((item) => item.id !== deleteItemId);
    
    // Reassign IDs sequentially
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
        setItems(items.map((item) => (item.id === editItem.id ? { ...item, ...values } : item)));
      } else {
        const newItem = { id: items.length + 1, ...values };
        setItems([...items, newItem].map((item, index) => ({ ...item, id: index + 1 }))); // Re-index after adding
      }
      setOpenDrawer(false);
    },
  });

  return (
    <Box sx={{ backgroundColor: "#C4D9FF", padding: "15px", height: "84vh" }}>
      <AppBar position="sticky" sx={{ backgroundColor: "white", mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" fontSize={{xs:"10px",sm:"15px"}} sx={{ color: "black", flexGrow: 1, display: "flex", alignItems: "center", gap: "1%" }}>
            <b>ON BOARDING CHECKLIST</b>
            <Avatar sx={{ bgcolor: "grey.300", color: "blue",  fontWeight: "bold",fontSize:{xs:"0.9rem",lg:"1rem"}, width:{xs:"25px",lg:"30px"},height:{xs:"25px",lg:"30px"} , }} >
              {items.length}
            </Avatar>
          </Typography>
          <Button variant="contained" onClick={handleAddChecklist} sx={{fontSize:{xs:"0.7rem",sm:"1rem"},ml:{xs:2}}} >+ Add Checklist</Button>
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
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Typography sx={{ flex: 1 }}>{item.id}. {item.title}</Typography>
          <Box sx={{ display: "flex",  alignItems: "center", gap: {xs:"0.2",sm:"0.6",md:"1",lg:"5"},mt:{xs:"4"} }} >
            <Button variant="contained" href={item.link} target="_blank" sx={{
          minWidth: { xs: "80px", sm: "120px", md: "140px" },
          height: { xs: "36px", sm: "40px" },
          fontSize: { xs: "0.7rem", sm: "1rem" }}}>{item.buttonName}</Button>
            <IconButton onClick={() => handleEdit(item)}  ><Edit color="primary" /></IconButton>
            <IconButton onClick={() => handleDeleteClick(item.id)} ><Delete color="primary" /></IconButton>
          </Box>
        </Paper>
      ))}
    

      {/* Right Side Drawer for Editing */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{zIndex:1300 }}>
        <Box sx={{ width: "100vw", maxWidth: "400px", }}>
          <Box  display={"flex"} justifyContent={"space-between"} sx={{bgcolor:"#F7F7F7",mb:5}}>
          <Typography variant="h6" sx={{p:1}} >{editItem ? "Edit Checklist" : "Add Checklist"} </Typography>
          <IconButton onClick={()=>setOpenDrawer(false)}  ><Close/></IconButton>
         </Box>

          <Box sx={{p:2}}>
          

<TextField
  fullWidth
  label={<>Checklist Description <span style={{color:"red"}}>*</span></>}
  name="title"
  value={formik.values.title}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.title && Boolean(formik.errors.title)}
  helperText={formik.touched.title && formik.errors.title}
  margin="normal"
/>

<TextField
  fullWidth
  label={<>Link <span style={{color:"red"}}>*</span></>}
  name="link"
  value={formik.values.link}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.link && Boolean(formik.errors.link)}
  helperText={formik.touched.link && formik.errors.link}
  margin="normal"
/>

<TextField
  fullWidth
  label={<>Button Name <span style={{color:"red"}}>*</span></>}
  name="buttonName"
  value={formik.values.buttonName}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.buttonName && Boolean(formik.errors.buttonName)}
  helperText={formik.touched.buttonName && formik.errors.buttonName}
  margin="normal"
/>



         </Box>
          <Box display="flex" justifyContent="space-between" mt={20} ml={20} mr={5} mb={5}>
            
            <Button onClick={formik.handleSubmit} variant="contained" color="primary" sx={{ width: "48%" }}>
            {editItem ? "Update" : "Add"}
            </Button>

            <Button onClick={() => setOpenDrawer(false)}   sx={{ width: "48%",bgcolor:"grey",color:"white",borderColor:"grey" }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Drawer>

      
      {/* Delete Confirmation Dialog */}
<Dialog
  open={openDeleteDialog}
  onClose={() => setOpenDeleteDialog(false)}
  
  sx={{
    "& .MuiDialog-paper": {
      width: "70%", 
      maxWidth: "400px",
      borderRadius: "12px",
      padding: "20px",
      
    },
  }}
>
  {/* Title with Close Button */}
  <DialogTitle sx={{ textAlign:"center", fontWeight: "bold", fontSize: "18px", position: "relative",pt:0 }}>
    <c>Confirmation Required</c>
    <IconButton onClick={() => setOpenDeleteDialog(false)} sx={{ position: "absolute",right:0, pt:0}}>
      <Close sx={{color:"black"}} />
    </IconButton>
  </DialogTitle>
  <Divider></Divider>

  {/* Content */}
  <DialogContent sx={{ textAlign: "center", padding: "40px 20px" }}>
    Are you sure you want to delete this checklist? This action cannot be undone!
  </DialogContent>
  <Divider></Divider>

  {/* Buttons */}
  <DialogActions sx={{ display: "flex", justifyContent: "center", gap: "10px", pt:2,}}>
    <Button
      onClick={handleConfirmDelete}
      variant="contained"
      sx={{
        width: "25%",
        height: "10%",
        borderRadius: "8px",
        bgcolor: "#007bff",
        color: "white",
        fontSize:"12px",
        "&:hover": { bgcolor: "#0056b3" },
      }}
    >
      Delete
    </Button>
    <Button
      onClick={() => setOpenDeleteDialog(false)}
      variant="contained"
      sx={{
        width: "25%",
        height: "10%",
        borderRadius: "8px",
        bgcolor: "grey",
        color: "white",
        fontSize:"12px",
        "&:hover": { bgcolor: "#5a5a5a" },
      }}
    >
      Cancel
    </Button>
  </DialogActions>
</Dialog>
    </Box>
  );
}


export default Onboarding