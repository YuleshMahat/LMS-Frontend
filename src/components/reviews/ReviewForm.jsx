import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/form.js";
import { submitReviewAction } from "../../features/review/reviewAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBorrowBookAction } from "../../features/borrow/borrowAction.js";
import { toast } from "react-toastify";

function ReviewForm() {
  const { borrows } = useSelector((state) => state.borrowStore);
  const [borrowedBook, setBorrowedBook] = useState({});
  const { borrowId } = useParams();
  const dispatch = useDispatch();
  const initialState = { rating: 1, message: "" };
  const { form, handleChange } = useForm(initialState);

  useEffect(() => {
    dispatch(getBorrowBookAction());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(
      submitReviewAction({
        bookId: borrowedBook?.bookId,
        ...form,
        title: borrowedBook.title,
      })
    );
    toast[data?.status ? "success" : "error"](data.message);
  };

  useEffect(() => {
    const tempBorrow = borrows.find((borrow) => borrow._id == borrowId);
    console.log(borrows);
    setBorrowedBook(tempBorrow);
  }, [borrows]);
  return (
    <div className="reviewFormContainer">
      <img src="/images/image2.jpg" alt="thumbnail" width="400px" />
      <div className="reviewForm">
        <h1>{borrowedBook?.title}</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              min={1}
              max={5}
              defaultValue={1}
              name="rating"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              type="text"
              placeholder="Leave a Review"
              style={{ resize: "none" }}
              onChange={handleChange}
              name="message"
            />
          </Form.Group>

          <Button
            style={{ backgroundColor: "#625FBC", border: "none" }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ReviewForm;
