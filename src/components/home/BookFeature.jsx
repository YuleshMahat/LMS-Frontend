import React from "react";
import BookComp from "./BookComp";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const BookFeature = ({ heading, type }) => {
  const [featureList, setFeatureList] = useState([]);
  const { publicBooks } = useSelector((state) => state.bookStore);

  useEffect(() => {
    setFeatureList(publicBooks.slice(0, 3));
  }, [publicBooks]);
  return (
    <div className="bookFeature">
      <div className="featureTitle">
        <h3 className="featureTitleHeading">{heading}</h3>
        <div className="line"></div>
      </div>
      <div className="books">
        {featureList.map((book) => (
          <BookComp
            slug={book.slug}
            title={book.title}
            rating={book.averageRating}
            genre={book.genre}
            key={book._id}
            author={book.author}
            publishedYear={book.publishedYear}
          />
        ))}
      </div>
    </div>
  );
};

export default BookFeature;
