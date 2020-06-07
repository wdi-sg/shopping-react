import React, { useState } from "react";

import CartItem from "./cartItem";

function Cart(props) {
  const cartArr = props.cartFromProduct;
  const cartItems = cartArr.map((obj, index) => {
    return (
      <CartItem
        key={index}
        pricePerItem={obj.product_price}
        item={obj.product.name}
        value={obj.value}
        quantity={obj.quantity}
      />
    );
  });
  const totalArr = cartArr.map((obj) => {
    return obj.value;
  });
  const total = totalArr.reduce((total, newAdded) => {
    return total + newAdded;
  }, 0);
  const totalAsNum = parseInt(total);
  return (
    <div>
      <div className="cart-value">
        <div className="cart-value--header">Total Amount:</div>
        <div className="cart-value--content"> {totalAsNum}</div>
      </div>

      <div className="cart-items">{cartItems}</div>
    </div>
  );
}

export default Cart;
