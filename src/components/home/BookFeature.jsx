import React from "react";
import BookComp from "./BookComp";

const BookFeature = ({ title, type }) => {
  return (
    <div className="bookFeature">
      <div className="featureTitle">
        <h3 className="featureTitleHeading">{title}</h3>
        <div className="line"></div>
      </div>
      <div className="books">
        <BookComp type={type} />
        <BookComp type={type} />
        <BookComp type={type} />
        <BookComp type={type} />
      </div>
    </div>
  );
};

export default BookFeature;
