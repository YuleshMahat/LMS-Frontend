import Table from "react-bootstrap/Table";
import react, { useEffect, useState } from "react";
import { getBooks } from "../../features/book/bookApi.js";

function StripedRowExample() {
  const [books, setBooks] = useState([]);
  const getBook = async () => {
    const data = await getBooks({});
    if (data?.status) {
      
    } else {
      console.log("Error fetching books from the databases");
    }
  };

  useEffect(() => {
    getBook();
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
              <button className="editButton">Edit</button>
              <button className="editButton" id="updateButton">
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
