import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import BookComp from "../components/home/BookComp";

const PubBooks = () => {
  const { publicBooks } = useSelector((state) => state.bookStore);

  return (
    <Container className="d-flex flex-row flex-wrap gap-5 mt-5">
      {publicBooks.map((book) => (
        <BookComp
          imageLink="https://m.media-amazon.com/images/G/35/apparel/rcxgs/tile._CB483369938_.gif"
          title={book.title}
          rating={book.averageRating}
          genre={book.genre}
          slug={book.slug}
          key={book.slug}
          author={book.author}
          publishedYear={book.publishedYear}
        />
      ))}
    </Container>
  );
};

export default PubBooks;
