import React, { Component } from "react";

export class Cart extends Component {
  render() {
    let cartList = this.props.cartItems.map(item => {
      return (
        <li className="list-group-item" >
          {item.name} - ${item.price}
        </li>
      );
    });

    let subtotal = this.props.cartItems.reduce(
      (acc, current) => acc + current.price,
      0
    );
    let gst = Math.floor(subtotal * 0.07);
    let total = subtotal + gst;
    return (
      <div>
        <h1 className="text-center">Cart</h1>

        <ul>{cartList}</ul>
        <div className="text-center border p-3">
          <h5>
            {this.props.cartItems.length > 0 ? "SubTotal: $" + subtotal : ""}{" "}
          </h5>
          <h5>{this.props.cartItems.length > 0 ? "GST: $" + gst : ""} </h5>
          <h5>{this.props.cartItems.length > 0 ? "Total: $" + total : ""} </h5>
        </div>
      </div>
    );
  }
}

export default Cart;
