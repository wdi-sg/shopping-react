import React, { Component } from "react";
import CartItems from "./CartItems";

export class Cart extends Component {
  render() {
    const cartItems = this.props.cartItems;
    return (
      <div className="col-4">
        <CartItems cartItems={cartItems} />
      </div>
    );
  }
}

export default Cart;
