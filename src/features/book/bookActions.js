// import { useDispatch } from "react-redux";
// useDispatch is a hook and a hook cannot be used outside of react component
// we are passing in dispatch function as an argument thats why we need the thunk pattern
import { setBooks } from "./bookSlice.js";
import { addNewBook, getBooks } from "./bookApi.js";

export const getBookAction = () => async (dispatch) => {
  const data = await getBooks({});
  if (data?.status) {
    dispatch(setBooks(data.books));
    return { status: data.status, message: data.message };
  } else {
    console.log("Error fetching books from the databases");
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
