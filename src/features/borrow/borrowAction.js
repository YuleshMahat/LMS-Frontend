import { borrowBookApi, getBorrowedBookApi } from "./borrowApi.js";
import { setBorrows } from "./borrowSlice.js";

export const borrowBookAction = (borrowObj) => async (dispatch) => {
  const data = await borrowBookApi(borrowObj);
  dispatch(getBorrowBookAction());
  return { status: data.status, message: data.message };
};

export const getBorrowBookAction = () => async (dispatch) => {
  const data = await getBorrowedBookApi();
  dispatch(setBorrows(data.borrows));
  return { status: data.status, message: data.message };
};
