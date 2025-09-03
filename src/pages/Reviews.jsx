import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Form } from "react-bootstrap";
import {
  getReviewsAction,
  updateReviewAction,
} from "../features/review/reviewAction";

const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewStore);

  useEffect(() => {
    dispatch(getReviewsAction());
  }, []);

  const handleSwitch = (reviewId, status) => {
    dispatch(updateReviewAction({ _id: reviewId, isApproved: status }));
  };

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Message</th>
          <th>Rating</th>
          <th>Reviewed Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reviews?.map((review, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{review?.title}</td>
            <td>{review?.message}</td>
            <td>{review?.rating}</td>
            <td>{review?.createdAt.split("T")[0]}</td>
            <td>
              {review?.isApproved}

              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  className="formSwitch"
                  checked={review?.isApproved}
                  onChange={(e) => {
                    handleSwitch(review?._id, e.target.checked);
                  }}
                />
              </Form>
            </td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Reviews;
