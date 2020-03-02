import React, { Component } from "react";

export class Product extends Component {
  addToCart = product => {
    this.props.addToCart(product);
  };
  render() {
    const product = this.props.product;
    const { id, name, price, description, url } = product;

    return (
      <div className="col-4">
        {product ? (
          <div>
            <h6>Product</h6>
            <div className="card">
              <div className="card-body">
                <img className="mb-2" src={url} />
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Price:</strong> {price}
                </p>
                <p>
                  <strong>Description:</strong> {description}
                </p>
                <p>
                  <button onClick={() => this.addToCart(product)}>
                    Add to cart
                  </button>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Product;
