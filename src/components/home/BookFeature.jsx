import React from "react";
import BookComp from "./BookComp";

const BookFeature = ({ heading, bookList }) => {
  return (
    <div className="bookFeature">
      <div className="featureTitle">
        <h3 className="featureTitleHeading">{heading}</h3>
        <div className="line"></div>
      </div>
      <div className="books">
        {bookList?.map((book) => (
          <BookComp
            slug={book.slug}
            title={book.title}
            rating={book.averageRating}
            genre={book.genre}
            key={book._id}
            author={book.author}
            publishedYear={book.publishedYear}
            imageLink={book.image || null}
          />
        ))}
      </div>
    </div>
  );
};

export default BookFeature;
