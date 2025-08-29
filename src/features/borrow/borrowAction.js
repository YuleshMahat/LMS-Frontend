import { borrowBookApi, getBorrowedBookApi } from "./borrowApi.js";
import { setBorrows } from "./borrowSlice.js";
import { getPublicBooksAction } from "../book/bookActions.js";

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
