import { updateBorrowAction } from "../borrow/borrowAction.js";
import {
  submitReviewApi,
  getReviewApi,
  updateReviewApi,
  getApprovedReviewsApi,
} from "./reviewApi.js";
import { setApprovedReviews, setReviews } from "./reviewSlice.js";
import { toast } from "react-toastify";

export const submitReviewAction = (borrowObj) => async (dispatch) => {
  const { borrowId, ...reviewData } = borrowObj;
  const data = await submitReviewApi(reviewData);
  if (data.status) {
    dispatch(updateBorrowAction({ _id: borrowId, status: "reviewed" }));
  }
  toast[data?.status ? "success" : "error"](data.message);
  return { status: data.status, message: data.message };
};

export const getReviewsAction = () => async (dispatch) => {
  const data = await getReviewApi();
  if (data?.status) {
    dispatch(setReviews(data.reviews));
  }
  return { status: data.status, message: data.message };
};

export const updateReviewAction = (updateObj) => async (dispatch) => {
  const data = await updateReviewApi(updateObj);
  if (data?.status) {
    dispatch(getReviewsAction());
  }
  toast[data?.status ? "success" : "error"](data?.message);
  return { status: data.status, message: data.message };
};

export const getApprovedReviewsAction = (bookId) => async (dispatch) => {
  const data = await getApprovedReviewsApi(bookId);
  dispatch(setApprovedReviews(data?.reviews));
  return { status: data.status, message: data.message };
};
