import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice.js";
import bookReducer from "../features/book/bookSlice.js";

export default configureStore({
  reducer: {
    userStore: userReducer,
    bookStore: bookReducer,
  },
});
