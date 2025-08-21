import Table from "react-bootstrap/Table";
import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookAction } from "../../features/book/bookActions.js";
import { setSelectedBook } from "../../features/book/bookSlice.js";

function StripedRowExample() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.bookStore);

  useEffect(() => {
    const result = dispatch(getBookAction());
    if (!result.status) {
      console.log(result.message);
    }
  }, []);

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
            <td>image</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.genre}</td>
            <td>{book.publishedYear}</td>
            <td>{book.availability}</td>
            <td>{book.status}</td>
            <td>
              <button
                className="editButton"
                onClick={() => {
                  dispatch(setSelectedBook(book._id));
                }}
              >
                Edit
              </button>
              <button className="editButton" id="updateButton">
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
