import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import BookComp from "../components/home/BookComp";

const PubBooks = () => {
  const { publicBooks } = useSelector((state) => state.bookStore);

  return (
    <Container className=" mt-5">
      <h1 className="mb-4">Our books!</h1>
      <div className="d-flex flex-row flex-wrap gap-5">
        {publicBooks.map((book) => (
          <BookComp
            imageLink={book.image || "/images/placeholder.webp"}
            title={book.title}
            rating={book.averageRating}
            genre={book.genre}
            slug={book.slug}
            key={book.slug}
            author={book.author}
            publishedYear={book.publishedYear}
          />
        ))}
      </div>
    </Container>
  );
};

export default PubBooks;
