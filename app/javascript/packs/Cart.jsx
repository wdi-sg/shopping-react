import React from "react";
import ReactDOM from "react-dom";

export default class Cart extends React.Component {
  render() {
    let cartList = this.props.cart.map(product => {
      return (
        <div>
          <img src={product.image_url} />
          <strong>Name:</strong>
          <p>{product.name}</p>
          <strong>Description:</strong>
          <p>{product.description}</p>
          <strong>Price($):</strong>
          <p>{product.price}</p>
        </div>
      );
    });
    return (
      <div>
        <h3>Items in cart: {cartList.length}</h3>
        <ol>{cartList}</ol>
      </div>
    );
  }
}
