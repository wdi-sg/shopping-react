import React, { Component } from "react";
import CartItems from "./CartItems";

export class Cart extends Component {
  deleteFromApp = product => {
    this.props.deleteFromCart(product);
  };
  render() {
    const cartItems = this.props.cartItems;
    return (
      <div className="col-4">
        <CartItems cartItems={cartItems} deleteFromApp={this.deleteFromApp} />
      </div>
    );
  }
}

export default Cart;
