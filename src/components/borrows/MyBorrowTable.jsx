import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getBorrowBookAction,
  returnBookAction,
} from "../../features/borrow/borrowAction";
import ReviewModal from "../reviews/reviewModal";

const MyBorrowTable = () => {
  const { borrows } = useSelector((state) => state.borrowStore);
  const { userData } = useSelector((state) => state.userStore);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [myBorrows, setMyBorrows] = useState([]);

  useEffect(() => {
    dispatch(getBorrowBookAction());
  }, []);

  useEffect(() => {
    const tempBorrows = borrows.filter(
      (borrows) => userData._id == borrows.userId
    );
    setMyBorrows(tempBorrows);
  }, [borrows]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <ReviewModal
        showModal={showModal}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Expected Date</th>
            <th>Status</th>
            <th>Returned Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myBorrows?.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book?.title}</td>
              <td>{book?.dueDate}</td>
              <td>{book?.status}</td>
              <td>{book?.returnDate}</td>
              <td>
                {book?.status == "borrowed" ? (
                  <button
                    className="btn"
                    style={{ backgroundColor: "#625FBC", color: "white" }}
                    onClick={() => {
                      const data = dispatch(returnBookAction(book?._id));
                      toast[data.status ? "success" : "error"](data.message);
                    }}
                  >
                    Return
                  </button>
                ) : book?.status == "returned" ? (
                  <button className="btn btn-warning" onClick={handleShow}>
                    Review
                  </button>
                ) : (
                  "Reviewed"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBorrowTable;
