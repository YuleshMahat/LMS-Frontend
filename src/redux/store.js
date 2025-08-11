import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice.js";

export default configureStore({
  reducer: {
    userStore: userReducer,
  },
});
