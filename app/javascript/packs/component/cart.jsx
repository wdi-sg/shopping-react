import React, { useState } from "react";

import CartItem from "./cartItem";

function Cart(props) {
  const cartItems = props.cartFromProduct.map((obj, index) => {
    return <CartItem key={index} item={obj} data={obj.product} />;
  });
  const total = props.cartFromProduct.reduce(
    (total, newAdded) => total + newAdded.value,
    0
  );
  return (
    <div>
      <div className="cart-value">
        <div className="cart-value--header">Total Amount:</div>
        <div className="cart-value--content"> {total}</div>
      </div>

      <div className="cart-items">{cartItems}</div>
    </div>
  );
}

export default Cart;
