import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../hooks/form.js";
import { addNewBook } from "../../features/book/bookApi.js";
import { toast, ToastContainer } from "react-toastify";
import "../../App.css";
function BookForm() {
  const initialState = {
    title: "",
    author: "",
    description: "",
    isbn: "",
    publishedYear: "",
    genre: "",
  };
  const { form, setForm, handleChange } = useForm(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addNewBook(form);
    if (data.status) {
      setForm(initialState);
      toast["success"]("Added book successfully");
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

export default BookForm;
