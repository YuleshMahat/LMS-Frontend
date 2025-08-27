import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { borrowBookAction } from "../features/borrow/borrowAction";

const BookDetail = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const { publicBooks } = useSelector((state) => state.bookStore);
  const [book, setBook] = useState({});
  useEffect(() => {
    const searchBook = publicBooks.find((book) => book._id == bookId);
    setBook(searchBook);
  }, [publicBooks]);
  return (
    <div className="bookContainer">
      <img
        src="/images/books1.jpg"
        alt="bookCover"
        className="bookDetailCover"
      />
      <div className="bookDetails">
        <h1>{book?.title}</h1>
        <p style={{ fontWeight: "600" }}>Author: {book?.author}</p>
        <p>{book?.description}</p>
        <p>Genre: {book?.genre}</p>
        <p>ISBN: {book?.isbn}</p>
        <p>Published Year: {book?.publishedYear}</p>
        <p>Average Rating: {book?.averageRating}</p>
        <button
          className="btn"
          style={{ backgroundColor: "#5b57c2", color: "white" }}
          onClick={() => {
            dispatch(
              borrowBookAction({
                bookId: book?._id,
                title: book?.title,
                thumbnail: book?.thumbnail,
              })
            );
          }}
        >
          Borrow
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
