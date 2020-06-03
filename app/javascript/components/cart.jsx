import React from "react";

export default class Cart extends React.Component {
  renderCartItems = () => {
    let cart = this.props.cart;
    if (cart.length !== 0) {
      let result = cart.map((element) => {
        return (
          <div className="card mb-2">
            <div className="row">
              <div className="col-8">
                <h5>
                  {element.name} - ${element.price}
                </h5>
              </div>
              <div className="col-4">
                <button>Remove Item</button>
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
