import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MyBooks from "./MyBooks";

// ✅ Mock external modal components
jest.mock("./FormModals/AddBookForm", () => () => <div>AddBookFormMock</div>);
jest.mock("./FormModals/EditBookForm", () => () => <div>EditBookFormMock</div>);
jest.mock("./FormModals/DeleteConfirmationModal", () => () => <div>DeleteConfirmationModalMock</div>);

describe("📚 MyBooks Component", () => {
  test("renders MyBooks heading", () => {
    render(<MyBooks />);
    const heading = screen.getByText(/MY BOOKS/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders initial book titles", () => {
    render(<MyBooks />);
    expect(screen.getByText("Price Action")).toBeInTheDocument();
    expect(screen.getByText("Stock Market Wizards")).toBeInTheDocument();
  });

  test("opens Add Book modal on '+ Add Book' button click", async () => {
    render(<MyBooks />);
    const addButton = screen.getByRole("button", { name: /\+ Add Book/i });
    await userEvent.click(addButton);

    expect(screen.getByText("AddBookFormMock")).toBeInTheDocument();
  });

  test("opens EditBook modal when clicking Edit", async () => {
    render(<MyBooks />);
    const editButtons = screen.getAllByRole("button", { name: /edit/i });
    await userEvent.click(editButtons[0]);

    expect(screen.getByText("EditBookFormMock")).toBeInTheDocument();
  });

  test("opens DeleteConfirmationModal on clicking Delete", async () => {
    render(<MyBooks />);
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    await userEvent.click(deleteButtons[0]);

    expect(screen.getByText("DeleteConfirmationModalMock")).toBeInTheDocument();
  });

  test("shows 'Read More' button in description", () => {
    render(<MyBooks />);
    const readMore = screen.getAllByText("Read More")[0];
    expect(readMore).toBeInTheDocument();
  });
});
