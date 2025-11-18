import React, { useState, useEffect } from "react";
import { getAllBooks } from "../features/book/bookApi";
import { useSearchParams } from "react-router-dom";
import { Container, Pagination } from "react-bootstrap";
import BookComp from "../components/home/BookComp";

const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [totalPageNumber, setTotalPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBook();
  }, [currentPage]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const fetchBook = async () => {
    const search = await getAllBooks(query, 3, currentPage);
    setSearchedBooks(search?.books);
    setTotalPageNumber(search?.totalPageNumbers);
  };

  //function to handleOnClick
  const onClickFunction = (e) => {
    setCurrentPage(e.target.name);
  };

  //pagination logic
  let items = [];
  for (let number = 1; number <= totalPageNumber; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number == currentPage}
        onClick={onClickFunction}
        name={number}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex flex-column flex-grow-1 m-3 justify-content-center">
      <Container className="d-flex gap-3">
        {searchedBooks.map((book) => (
          <BookComp
            key={book?._id}
            imageLink={book?.image}
            title={book?.title}
            rating={book?.averageRating}
            genre={book?.genre}
            slug={book?.slug}
            author={book?.author}
            publishedYear={book?.publishedYear}
          />
        ))}
      </Container>
      <Container className="mt-3">
        <Pagination>{items}</Pagination>
      </Container>
    </div>
  );
};

export default Search;
