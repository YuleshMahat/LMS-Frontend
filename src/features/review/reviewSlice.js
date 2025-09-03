import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  approvedReviews: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setApprovedReviews: (state, action) => {
      state.approvedReviews = action.payload;
    },
  },
});

const { reducer, actions } = reviewSlice;
export const { setReviews, setApprovedReviews } = actions;
export default reducer;
