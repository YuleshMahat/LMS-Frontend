import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const BorrowTable = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { borrows } = useSelector((state) => state.borrowStore);

  useEffect(() => {
    setBorrowedBooks(borrows);
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
          {borrowedBooks?.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book?.title}</td>
              <td>{book?.expectedAvailable}</td>
              <td>{book?.status}</td>
              <td>{book?.returnDate}</td>
              <td>{book.availability ? "Available" : "Not Available"}</td>
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
