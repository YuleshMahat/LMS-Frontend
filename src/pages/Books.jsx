import React from "react";
import styles from "./Books.module.css";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BookTable from "../components/books/BookTable";

export const Books = () => {
  return (
    <div className={styles.bookContainer}>
      <button className={styles.addButton}>
        <Link
          component={RouterLink}
          to="/addBook"
          underline="none"
          color="inherit"
        >
          Add Book
        </Link>
      </button>
      <BookTable />
    </div>
  );
};
