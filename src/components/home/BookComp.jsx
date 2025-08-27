import React from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const BookComp = ({ imageLink, title, rating, genre, id }) => {
  const { books } = useSelector((state) => state.bookStore);
  return (
    <div className="bookComp">
      <img src="/images/image1.jpg" alt="image1" className="featureImage" />
      <Link component={RouterLink} to={"/book-detail/" + id} id="bookTitle">
        {title}
      </Link>
      <p>Average Rating: {rating}</p>
      <p>{genre}</p>
    </div>
  );
};

export default BookComp;
