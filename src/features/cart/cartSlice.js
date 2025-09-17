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
    clearBooks: (state) => {
      state.cartBooks = [];
    },
    clearPrice: (state) => {
      state.totalPrice = 0;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { setBooks, setTotalPrice, clearBooks, clearPrice } = actions;
export default reducer;
