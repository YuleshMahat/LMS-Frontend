import React, { useState, useEffect } from "react";
import { getAllBooks } from "../features/book/bookApi";
import { useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    fetchBook();
  }, []);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const fetchBook = async () => {
    const search = await getAllBooks(query);
    setSearchedBooks(search.books);
  };

  return <Container></Container>;
};

export default Search;
