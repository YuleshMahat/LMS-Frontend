import { submitReviewApi, getReviewApi } from "./reviewApi.js";
import { setReviews } from "./reviewSlice.js";

export const submitReviewAction = (borrowObj) => async (dispatch) => {
  const data = await submitReviewApi(borrowObj);
  return { status: data.status, message: data.message };
};

export const getReviewsAction = () => async (dispatch) => {
  const data = await getReviewApi();
  if (data?.status) {
    dispatch(setReviews(data.reviews));
  }
  return { status: data.status, message: data.message };
};
