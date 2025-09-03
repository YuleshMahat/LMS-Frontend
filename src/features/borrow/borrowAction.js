import {
  borrowBookApi,
  getBorrowedBookApi,
  returnBookApi,
  updateBorrowBookApi,
} from "./borrowApi.js";
import { setBorrows } from "./borrowSlice.js";
import { getPublicBooksAction } from "../book/bookActions.js";
import { toast } from "react-toastify";

export const borrowBookAction = (borrowObj) => async (dispatch) => {
  const data = await borrowBookApi(borrowObj);
  dispatch(getBorrowBookAction());
  dispatch(getPublicBooksAction());
  return { status: data.status, message: data.message };
};

export const getBorrowBookAction = () => async (dispatch) => {
  const data = await getBorrowedBookApi();
  dispatch(setBorrows(data.borrows));
  return { status: data.status, message: data.message };
};

export const updateBorrowAction = (updateObj) => async (dispatch) => {
  const data = await updateBorrowBookApi(updateObj);
  if (data.status) {
    //retrieve borrowed books again
    dispatch(getBorrowBookAction());
  }
  return { status: data.status, message: data.message };
};

export const returnBookAction = (borrowId) => async (dispatch) => {
  const data = await returnBookApi(borrowId);
  dispatch(getBorrowBookAction());
  dispatch(getPublicBooksAction());
  toast[data.status ? "success" : "error"](data.message);
  return { status: data.status, message: data.message };
};
