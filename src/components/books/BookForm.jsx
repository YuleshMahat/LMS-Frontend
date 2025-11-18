import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../hooks/form.js";
import { toast } from "react-toastify";
import "../../App.css";
import { addBookAction } from "../../features/book/bookActions.js";
import { useDispatch } from "react-redux";
function BookForm() {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    author: "",
    description: "",
    isbn: "",
    publishedYear: "",
    genre: "",
    thumbnail: "",
  };
  const { form, setForm, handleChange, handleThumbnailChange } =
    useForm(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    const data = await dispatch(addBookAction(formData));
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
          required
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
          required
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
          required
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
          required
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
          required
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          name="thumbnail"
          onChange={handleThumbnailChange}
          required
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        style={{
          backgroundColor: "#3B38A0",
          border: "none",
          marginRight: "10px",
        }}
      >
        Add book
      </Button>
      <Button
        variant="primary"
        style={{ backgroundColor: "#6e6bd6ff", border: "none" }}
      >
        Cancel
      </Button>
    </Form>
  );
}

export default BookForm;
