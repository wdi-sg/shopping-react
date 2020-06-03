import React from "react";
import CartItem from "./cartitem";

export default class Cart extends React.Component {
  renderCartItems = () => {
    let cart = this.props.cart;
    if (cart.length !== 0) {
      let result = cart.map((element, index) => {
        let string = "cart-" + index;
        return (
          <div className="card mb-2">
            <div className="row">
              <div className="col-8">
                <CartItem
                  name={element.name}
                  price={element.price}
                  id={element.id}
                  displayItem={this.props.displayItem}
                />
              </div>
              <div className="col-4">
                <button id={string} onClick={this.props.removeFromCart}>
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        );
      });
      return (
        <div>
          {result}
          <div className="row">
            <div className="col-8">Total Cost</div>
            <div className="col">${this.props.totalCost}</div>
          </div>
          <div className="row">
            <div className="col-8">Shipping Fee</div>
            <div className="col">$7.00</div>
          </div>
          <div className="row">
            <div className="col-8">GST (7%)</div>
            <div className="col">${this.props.gst}</div>
          </div>
          <div className="row">
            <div className="col-8">Grand Total</div>
            <div className="col">${this.props.grandTotal}</div>
          </div>
        </div>
      );
    }
  };

  render() {
    let cart = this.renderCartItems();
    return (
      <div>
        <h4>Cart:</h4>
        <div>{cart}</div>
      </div>
    );
  }
}
