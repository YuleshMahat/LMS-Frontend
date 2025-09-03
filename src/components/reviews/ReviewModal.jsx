import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/form.js";
import { submitReviewAction } from "../../features/review/reviewAction.js";
import { useDispatch } from "react-redux";

const ReviewModal = ({ borrowedBook }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const initialState = { rating: 1, message: "" };

  //custom form handling hook use
  const { form, handleChange } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //submit review first a

    const data = dispatch(
      submitReviewAction({
        bookId: borrowedBook?.bookId,
        ...form,
        title: borrowedBook?.title,
        borrowId: borrowedBook?._id,
      })
    );
    navigate("/myBorrows");
  };

  return (
    <>
      {/* review modal has own button to handle open and close */}
      <Button variant="warning" onClick={handleOpen}>
        Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewModal;
