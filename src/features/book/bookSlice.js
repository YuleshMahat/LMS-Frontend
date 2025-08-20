import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    clearBooks: (state, action) => {
      state.books = null;
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setBooks, clearBooks } = actions;
export default reducer;
