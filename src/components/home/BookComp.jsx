import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import StarComp from "../reviews/StarComp";

const BookComp = ({
  imageLink,
  title,
  rating,
  genre,
  slug,
  author,
  publishedYear,
}) => {
  return (
    <Link
      component={RouterLink}
      to={"/book-detail/" + slug}
      id="link"
      className="bookComp"
    >
      <div>
        <img src="/images/image1.jpg" alt="image1" className="featureImage" />
        <div className="d-flex justify-content-between">
          <span className="bookTitle">{title}</span>
          <span className="bookTitle">{publishedYear}</span>
        </div>
        <p>Author: {author}</p>
        <p>
          <StarComp rating={rating} />
        </p>
        <p>{genre}</p>
      </div>
    </Link>
  );
};

export default BookComp;
