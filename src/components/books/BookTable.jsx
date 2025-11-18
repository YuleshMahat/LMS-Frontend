import Table from "react-bootstrap/Table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookAction } from "../../features/book/bookActions.js";
import { setSelectedBook } from "../../features/book/bookSlice.js";
import { useNavigate } from "react-router-dom";
import { deleteBook } from "../../features/book/bookApi.js";
import { toast } from "react-toastify";

function StripedRowExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.bookStore);

  useEffect(() => {
    const result = dispatch(getBookAction());
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this book?")) {
      const result = await deleteBook(id);
      if (result?.status) {
        toast.success("Book successfully deleted");
        dispatch(getBookAction());
      } else {
        toast.error(toast.message);
      }
    }
  };

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Genre</th>
          <th>Published Year</th>
          <th>Status</th>
          <th>Availability</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>
              <img src={book.image || null} alt="thumbnail" width="80px" />
            </td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.genre}</td>
            <td>{book.publishedYear}</td>
            <td>{book.status}</td>
            <td>{book.availability ? "Available" : "Not Available"}</td>
            <td>
              <button
                className="editButton"
                onClick={() => {
                  dispatch(setSelectedBook(book));
                  navigate("/editbook");
                }}
              >
                Edit
              </button>
              <button
                className="editButton"
                id="updateButton"
                onClick={() => {
                  console.log(book);
                  handleDelete(book._id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
