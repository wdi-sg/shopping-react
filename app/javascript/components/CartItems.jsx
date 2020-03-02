import React, { Component } from "react";

export class CartItems extends Component {
  clickHandler = item => {
    console.log("clicking");
    this.props.deleteFromApp(item);
  };
  render() {
    const cartItems = this.props.cartItems;
    let totalPrice = 0;
    let itemsInCart = 0;
    return (
      <div>
        {cartItems.length > 0 ? (
          <div>
            <h6>Cart</h6>
            {cartItems.map(item => {
              const { name, price } = item;
              return (
                <div key={item.id} className="card mb-2">
                  <div className="card-body">
                    <p>
                      Name: {name}
                      <button
                        onClick={() => {
                          this.clickHandler(item);
                        }}
                      >
                        x
                      </button>
                    </p>
                    <p>Price: {price}</p>
                    {((totalPrice += price), itemsInCart++)}
                  </div>
                </div>
              );
            })}
            <p className="text-right">
              <strong>Items in cart: </strong> {itemsInCart}
            </p>
            <p className="text-right">
              <strong>Shipping: </strong>$7
            </p>
            <p className="text-right">
              <strong>Total: </strong> ${totalPrice + 7}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CartItems;
