import React, { Component } from "react";

export class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      showCartItems: true
    };
  }

  clickHandler = item => {
    this.props.deleteFromApp(item);
  };

  toggleCartItemVisibility = () => {
    this.setState({ showCartItems: !this.state.showCartItems });
  };

  render() {
    const cartItems = this.props.cartItems;
    let totalPrice = 0;
    let itemsInCart = 0;
    return (
      <div>
        {cartItems.length > 0 ? (
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h6>Cart</h6>
              </div>
              <div>
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.toggleCartItemVisibility();
                  }}
                  className="fas fa-eye-slash"
                ></i>
              </div>
            </div>

            {this.state.showCartItems
              ? cartItems.map((item, index) => {
                  const { name, price } = item;

                  totalPrice += price;
                  itemsInCart++;

                  return (
                    <div key={index} className="card mb-2">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <p>Name: {name}</p>
                          </div>
                          <div>
                            <i
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                this.clickHandler(item);
                              }}
                              className="fas fa-minus-circle"
                            ></i>
                          </div>
                        </div>

                        <p>Price: {price}</p>
                      </div>
                    </div>
                  );
                })
              : null}

            {this.state.showCartItems ? (
              <div>
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
        ) : null}
      </div>
    );
  }
}

export default CartItems;
