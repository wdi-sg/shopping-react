import React from "react";

export default class Cart extends React.Component {
  constructor() {
    super();

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  onDeleteClick(index) {
    console.log("clicked " + index);
    this.props.handleRemoveFromCart(index);
  }
  onItemClick(product){
    this.props.handleItemClick(product);
  }
  showCart() {
    const cart = this.props.inCart.map((product, index) => {
      return (
        <tr key={index}>
          <td className="text-left"><a style={{cursor:"pointer"}} onClick={() => {
                this.onItemClick(product.product);
              }}>{product.product.name}</a></td>
          <td>{product.count}</td>
          <td>
            ${parseFloat(product.product.price * product.count).toFixed(2)}
          </td>
          <td>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.onDeleteClick(index);
              }}
            >
              ❌
            </span>
          </td>
        </tr>
      );
    });
    return cart;
  }
  calculateCart() {
    const cart = this.props.inCart.map((product, index) => {
      return parseFloat(product.product.price * product.count).toFixed(2);
    });
    var cartSum = cart.reduce(function (a, b) {
      var numA = parseFloat(a);
      var numB = parseFloat(b);

      return numA + numB;
    }, 0);
    return cartSum.toFixed(2);
  }
  render() {
    var cart = this.showCart();
    var cartSum = this.calculateCart();
    var gst = (cartSum * 0.07).toFixed(2);
    var shipping = 7;
    var totalCost = (
      parseFloat(cartSum) +
      parseFloat(gst) +
      parseFloat(shipping)
    ).toFixed(2);
    return (
      <div className="col border overflow-auto">
        <h3>Cart</h3>
        <table className="table mt-5 mb-5">
          <thead>
            <tr>
              <th scope="col" className="text-left">
                Product
              </th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{cart}</tbody>
        </table>
        {this.props.inCart.length == 0 ? "No items in cart" : null}
        <div className="mt-5">
          <p className="text-left">
            <strong>Total Item Price: </strong>${cartSum}
          </p>
          <p className="text-left">
            <strong>GST 7%: </strong>${gst}
          </p>
          <p className="text-left">
            <strong>Shipping (Flat rate): </strong>${shipping}
          </p>
          <span className="badge badge-primary pl-4 pr-4 pt-2 pb-2 mt-5">
            <h5 className="mb-0">Total Cost: ${totalCost}</h5>
          </span>
        </div>
      </div>
    );
  }
}
