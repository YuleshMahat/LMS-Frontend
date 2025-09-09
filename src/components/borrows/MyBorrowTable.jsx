import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getBorrowBookAction,
  returnBookAction,
} from "../../features/borrow/borrowAction";
import ReviewModal from "../reviews/ReviewModal";

const MyBorrowTable = () => {
  const { borrows } = useSelector((state) => state.borrowStore);
  const { userData } = useSelector((state) => state.userStore);

  const dispatch = useDispatch();

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

  return (
    <div>
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
                      dispatch(returnBookAction(book?._id));
                    }}
                  >
                    Return
                  </button>
                ) : book?.status == "returned" ? (
                  <ReviewModal borrowedBook={book} />
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
