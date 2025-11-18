import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { borrowBookAction } from "../features/borrow/borrowAction";
import { useNavigate } from "react-router-dom";
import styles from "./Thankyou.module.css";

const Thankyou = () => {
  const { cartBooks } = useSelector((store) => store.cartStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartBooks.length !== 0) {
      dispatch(borrowBookAction(cartBooks));
    }
  }, [cartBooks, dispatch]);

  return (
    <div className={styles.thankyouContainer}>
      <div className={styles.thankyouCard}>
        <h1>Thank You!</h1>
        <p>Your books have been successfully borrowed.</p>
        <button onClick={() => navigate("/")} className={styles.homeBtn}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Thankyou;
