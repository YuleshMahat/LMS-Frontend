import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { borrowBookAction } from "../features/borrow/borrowAction";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ReviewComp from "../components/reviews/ReviewComp";

const BookDetail = () => {
  const { userData } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  const { publicBooks } = useSelector((state) => state.bookStore);
  const [book, setBook] = useState({});
  const [selectedOption, setSelectedOption] = useState("description");
  const { approvedReviews } = useSelector((state) => state.reviewStore);

  const handleOptionClick = (e) => {
    setSelectedOption(e.target.name);
  };

  useEffect(() => {
    const searchBook = publicBooks.find((book) => book.slug == slug);
    setBook(searchBook);
  }, [publicBooks]);
  return (
    <div className="bookContainer">
      <div className="d-flex flex-row" style={{ gap: "8rem" }}>
        <img
          src="/images/books1.jpg"
          alt="bookCover"
          className="bookDetailCover"
        />
        <div className="bookDetails ">
          <h1>{book?.title}</h1>
          <p style={{ fontWeight: "600" }}>Author: {book?.author}</p>
          <p>{book?.description && book.description.slice(0, 62) + "..."}</p>
          <p>Genre: {book?.genre}</p>
          <p>ISBN: {book?.isbn}</p>
          <p>Published Year: {book?.publishedYear}</p>
          <p>Average Rating: {book?.averageRating}</p>
          {!userData._id ? (
            <button
              className="btn"
              style={{ backgroundColor: "#5b57c2", color: "white" }}
              onClick={() => {
                navigate("/login", { state: { from: location } });
              }}
            >
              Login to Borrow
            </button>
          ) : book?.availability ? (
            <button
              className="btn"
              style={{ backgroundColor: "#5b57c2", color: "white" }}
              onClick={async () => {
                const data = await dispatch(
                  borrowBookAction({
                    bookId: book?._id,
                    title: book?.title,
                    thumbnail: book?.thumbnail,
                  })
                );
                console.log(data);
                toast[data.status ? "success" : "error"](data.message);
              }}
            >
              {userData._id ? "Borrow" : "Login to borrow"}
            </button>
          ) : (
            <button className="btn btn-outline-secondary" disabled>
              {book?.expectedAvailable}
            </button>
          )}
        </div>
      </div>
      <div className="moreDetails">
        <h2 style={{ textAlign: "center" }}>More Details!</h2>
        <ButtonGroup aria-label="Basic example">
          <Button
            name="description"
            className={
              selectedOption == "description"
                ? "optionSelected"
                : "optionNotSelected"
            }
            onClick={handleOptionClick}
          >
            Description
          </Button>
          <Button
            className={
              selectedOption == "reviews"
                ? "optionSelected"
                : "optionNotSelected"
            }
            name="reviews"
            onClick={handleOptionClick}
          >
            Reviews
          </Button>
        </ButtonGroup>
        <div className="bookOption">
          {selectedOption === "description" ? (
            book?.description
          ) : (
            <ReviewComp
              username="Yulesh Mahat"
              rating="4.5"
              message="very nice book"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
