import React from "react";
import { useSelector } from "react-redux";

const BookComp = ({ type }) => {
  const { books } = useSelector((state) => state.bookStore);
  return (
    <div className="bookComp">
      <img src="/images/image1.jpg" alt="image1" className="featureImage" />
      <p id="bookTitle">Harry Potter and the prisoner of azkaban</p>
      <p>Average Rating: 3.6</p>
      <p>Fiction</p>
    </div>
  );
};

export default BookComp;
