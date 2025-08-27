// import { useDispatch } from "react-redux";
// useDispatch is a hook and a hook cannot be used outside of react component
// we are passing in dispatch function as an argument thats why we need the thunk pattern
import { setBooks, setPublicBooks } from "./bookSlice.js";
import { addNewBook, getBooks, editBook, getAllBooks } from "./bookApi.js";

export const getBookAction = () => async (dispatch) => {
  const data = await getBooks({});
  if (data?.status) {
    dispatch(setBooks(data.books));
    return { status: data.status, message: data.message };
  } else {
    console.log("Error fetching books from the databases");
  }
};

export const getPublicBooksAction = () => async (dispatch) => {
  const data = await getAllBooks();
  if (data?.status) {
    dispatch(setPublicBooks(data.books));
    return { status: data.status, message: data.message };
  }
};

export const addBookAction = (form) => async (dispatch) => {
  const data = await addNewBook(form);
  if (data?.status) {
    const result = await dispatch(getBookAction());
    if (result?.status) {
      return { status: result.status, message: result.message };
    }
  }
};

export const editBookAction = (form) => async (dispatch) => {
  let refinedData = {
    _id: form._id,
    title: form.title,
    author: form.author,
    isbn: form.isbn,
    genre: form.genre,
    publishedYear: form.publishedYear.toString(),
    description: form.description,
    status: form.status,
  };
  const data = await editBook(refinedData);
  if (data?.status) {
    const result = await dispatch(getBookAction());
  }
  return { status: data.status, message: data.message };
};
