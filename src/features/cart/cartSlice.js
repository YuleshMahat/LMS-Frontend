import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartBooks: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.cartBooks = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { setBooks, setTotalPrice } = actions;
export default reducer;
