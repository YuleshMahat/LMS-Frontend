import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { borrowBookAction } from "../features/borrow/borrowAction";

const Thankyou = () => {
  const { cartBooks } = useSelector((store) => store.cartStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartBooks.length !== 0) {
      dispatch(borrowBookAction(cartBooks));
    }
  }, []);
  return <div>Thankyou</div>;
};

export default Thankyou;
