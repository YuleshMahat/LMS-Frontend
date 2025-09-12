import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
const Cart = () => {
  const { cartBooks, totalPrice } = useSelector((state) => state.cartStore);

  return (
    <div className="cartContainer">
      <h2>Books Cart</h2>
      <div className="tableContainer">
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
              <tr>
                <td>{book.title}</td>
                <td>1</td>
                <td>$5</td>
                <td>
                  <RxCross2 />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex p-3 flex-column"></div>
      </div>
      <button className="backButton">
        <IoIosArrowBack />
        Continue browsing
      </button>
    </div>
  );
};

export default Cart;
