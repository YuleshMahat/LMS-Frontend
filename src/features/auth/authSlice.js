import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      state.userData = null;
    },
  },
});

// export const { setUserData, clearUserData } = userSlice.actions;
// export default userSlice.reducer;
export const { reducer, actions } = userSlice;
export const { setUserData, clearUserData } = actions;
export default reducer;
