import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../hooks/form.js";
import "../../App.css";
import { editBookAction } from "../../features/book/bookActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function EditBookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedBook } = useSelector((state) => state.bookStore);
  const initialState = selectedBook;
  const { form, handleChange } = useForm(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(editBookAction(form));
    console.log(data);
    if (data.status) {
      toast["success"]("Book updated successfully");
      navigate("/books");
    } else {
      toast["error"](data?.message || "Error updating the book");
    }
  };
  return (
    <Form className="addBookForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Book Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          name="title"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          value={form.author}
          onChange={handleChange}
          name="author"
          placeholder="Author"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description of the book"
          value={form.description}
          onChange={handleChange}
          name="description"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN</Form.Label>
        <Form.Control
          type="text"
          placeholder="ISBN number"
          value={form.isbn}
          onChange={handleChange}
          name="isbn"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Released Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Date of book released"
          value={form.publishedYear}
          onChange={handleChange}
          name="publishedYear"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          name="genre"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        style={{
          backgroundColor: "#3B38A0",
          border: "none",
          marginRight: "5px",
        }}
      >
        Update
      </Button>
      <Button
        variant="primary"
        style={{ backgroundColor: "#625FBC", border: "none" }}
        onClick={() => {
          navigate("/books");
        }}
      >
        Cancel
      </Button>
    </Form>
  );
}

export default EditBookForm;
