import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
};

const borrowSlice = createSlice({
  name: "borrows",
  initialState,
  reducers: {
    setBorrows: (state, action) => {
      state.burrows = action.payload;
    },
  },
});

const { reducer, actions } = borrowSlice;
export const { setBorrows } = actions;
export default reducer;
