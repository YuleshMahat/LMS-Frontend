import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { sendIntentApi } from "../features/checkout/checkoutApi";
import { toast } from "react-toastify";
import { setBooks } from "../features/cart/cartSlice";

const Cart = () => {
  const { cartBooks, totalPrice } = useSelector((state) => state.cartStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    const response = await sendIntentApi(totalPrice);
    if (response.status) {
      navigate("/checkout/" + response.clientSecret);
    } else {
      toast.error["Error!"];
    }
  };

  const handleDelete = (bookId) => {
    console.log("Delte button clicked");
    const newCartArray = cartBooks.filter((book) => book.bookId !== bookId);
    dispatch(setBooks(newCartArray));
  };

  useEffect(() => {}, [cartBooks]);

  return (
    <div className="cartContainer">
      <h2>Books Cart</h2>
      <div className="tableContainer">
        {cartBooks.length !== 0 ? (
          <Table>
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Item</th>
                <th style={{ width: "17%" }}>Quantity</th>
                <th style={{ width: "17%" }}>Subtotal</th>
                <th style={{ width: "6%" }}></th>
              </tr>
            </thead>
            <tbody>
              {cartBooks?.map((book) => (
                <tr key={book.bookId}>
                  <td>{book.title}</td>
                  <td>1</td>
                  <td>$5</td>
                  <td>
                    <RxCross2
                      style={{ color: "grey", cursor: "pointer" }}
                      onClick={() => {
                        handleDelete(book.bookId);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Table>
            <tr>
              <td style={{ textAlign: "center" }}>
                <h4>No items in the cart!</h4>
              </td>
            </tr>
          </Table>
        )}

        <div className="d-flex p-3 flex-column summaryContainer justify-content-around">
          <h4>Summary</h4>
          <div className="line line-grey"></div>
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Discount(%)</p>
            <p>0.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Tax</p>
            <p>Inclusive - 0.0</p>
          </div>
          <div className="line line-grey"></div>
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <Button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>
      <button
        className="backButton"
        onClick={() => {
          navigate("/pub-books");
        }}
      >
        <IoIosArrowBack />
        Continue browsing
      </button>
    </div>
  );
};

export default Cart;
