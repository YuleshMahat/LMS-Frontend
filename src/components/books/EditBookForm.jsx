import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../hooks/form.js";
import { toast, ToastContainer } from "react-toastify";
import "../../App.css";
import { addBookAction } from "../../features/book/bookActions.js";
import { useDispatch, useSelector } from "react-redux";
function EditBookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedBook } = useSelector((state) => state.bookStore);
  const initialState = selectedBook;
  const { form, handleChange } = useForm(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(addBookAction(form));
    if (data.status) {
      toast["success"]("Added book successfully");
      navigate("/books");
    } else {
      toast["error"](data?.message || "Error adding the book");
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
        style={{ backgroundColor: "#3B38A0", border: "none" }}
      >
        Add book
      </Button>
      <ToastContainer />
    </Form>
  );
}

export default EditBookForm;
