import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: [],
  publicBooks: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
    setPublicBooks: (state, action) => {
      state.publicBooks = action.payload;
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setBooks, setSelectedBook, setPublicBooks } = actions;
export default reducer;
