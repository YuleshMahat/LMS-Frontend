import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: [],
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
  },
});

const { reducer, actions } = bookSlice;
export const { setBooks, setSelectedBook } = actions;
export default reducer;
