import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

const { reducer, actions } = reviewSlice;
export const { setReviews } = actions;
export default reducer;
