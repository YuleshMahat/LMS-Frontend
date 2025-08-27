import React from "react";
import BookComp from "./BookComp";
import { useSelector } from "react-redux";

const BookFeature = ({ heading, type }) => {
  const { publicBooks } = useSelector((state) => state.bookStore);
  return (
    <div className="bookFeature">
      <div className="featureTitle">
        <h3 className="featureTitleHeading">{heading}</h3>
        <div className="line"></div>
      </div>
      <div className="books">
        {publicBooks.map((book) => (
          <BookComp
            id={book._id}
            title={book.title}
            rating={book.averageRating}
            genre={book.genre}
            key={book._id}
          />
        ))}
      </div>
    </div>
  );
};

export default BookFeature;
