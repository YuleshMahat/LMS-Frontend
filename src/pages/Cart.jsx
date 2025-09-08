import React from "react";
import { Table } from "react-bootstrap";

const Cart = () => {
  return (
    <div className="cartContainer">
      <h2>Books Cart</h2>
      <Table striped>
        <thead>
          <tr>
            <th>Books</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
