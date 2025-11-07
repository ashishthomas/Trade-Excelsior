import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import booksData from "../../data/booksData";
import BooksHeader from "./Components/BooksHeader";
import BooksList from "./Components/BookList";

import DeleteConfirmationModal from "./FormModals/DeleteConfirmationModal";
import EditBookForm from "./FormModals/EditBookForm";
import AddBookForm from "./FormModals/AddBookForm";

function MyBooks() {
  const [books, setBooks] = useState(booksData);
  const [openModal, setOpenModal] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookToDelete, setBookToDelete] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleEditOpen = (book) => {
    setSelectedBook(book);
    setOpenEditForm(true);
  };
  const handleEditClose = () => setOpenEditForm(false);

  const handleAddOpen = () => setOpenAddForm(true);
  const handleAddClose = () => setOpenAddForm(false);

  const handleSave = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    );
    handleEditClose();
  };

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleOpenDeleteModal = (book) => {
    setBookToDelete(book);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setBookToDelete(null);
  };

  const handleDeleteBook = () => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== bookToDelete.id));
    handleClose();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E6E6FF",
        p: "15px",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BooksHeader booksCount={books.length} handleAddOpen={handleAddOpen} />

      <BooksList
        books={books}
        isMobile={isMobile}
        isTablet={isTablet}
        handleEditOpen={handleEditOpen}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      <AddBookForm
        open={openAddForm}
        onClose={handleAddClose}
        handleAdd={addBook}
      />

      <EditBookForm
        open={openEditForm}
        onClose={handleEditClose}
        bookData={selectedBook}
        handleUpdate={handleSave}
      />

      <DeleteConfirmationModal
        open={openModal}
        handleClose={handleClose}
        onConfirm={handleDeleteBook}
      />
    </Box>
  );
}

export default MyBooks;
