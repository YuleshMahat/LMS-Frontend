import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice.js";
import bookReducer from "../features/book/bookSlice.js";
import borrowReducer from "../features/borrow/borrowSlice.js";
import reviewReducer from "../features/review/review.js";

export default configureStore({
  reducer: {
    userStore: userReducer,
    bookStore: bookReducer,
    borrowStore: borrowReducer,
    reviewStore: reviewReducer,
  },
});
