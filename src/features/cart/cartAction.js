import { setBooks, setTotalPrice } from "./cartSlice";

export const addToCartAction = (bookArray, prevPrice) => (dispatch) => {
  dispatch(setBooks(bookArray));
  dispatch(setTotalPrice(prevPrice + 5));
  console.log("added to Cart");
};
