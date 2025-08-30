import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowBookAction } from "../../features/borrow/borrowAction";

const BorrowTable = () => {
  const { borrows } = useSelector((state) => state.borrowStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBorrowBookAction());
  }, []);

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
          {borrows?.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book?.title}</td>
              <td>{book?.dueDate}</td>
              <td>{book?.status}</td>
              <td>{book?.returnDate}</td>
              <td>
                <button
                  className="editButton"
                  onClick={() => {
                    dispatch(setSelectedBook(book));
                    navigate("/editbook");
                  }}
                >
                  Edit
                </button>
                <button
                  className="editButton"
                  id="updateButton"
                  onClick={() => {
                    console.log(book);
                    handleDelete(book._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BorrowTable;
