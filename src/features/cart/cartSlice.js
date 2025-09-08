import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { books, totalPrice } = actions;
export default reducer;
