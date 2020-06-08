import React from "react";
import { resetWarningCache } from "prop-types";

export default class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      productCount: 1,
    };
    this.onAddCartClick = this.onAddCartClick.bind(this)

  }
  onAddCartClick(){
    //   console.log(this.state.productCount)
    this.props.handleAddProduct(this.state.productCount);
  }

  render() {
    var product;
    if (this.props.currentProduct != "") {
      product = (
        <div className="d-flex flex-column justify-content-center align-items-top mt-5">
          <div className="mt-3">
            <img
              src={this.props.currentProduct.image_url}
              style={{ height: "250px", width: "250px" }}
            />
          </div>

          <div className="mt-3">
            <h2>{this.props.currentProduct.name}</h2>
            <h3>${parseFloat(this.props.currentProduct.price).toFixed(2)}</h3>
            <p>{this.props.currentProduct.description}</p>
          </div>
          <div className="input-group mt-2 mb-2 justify-content-center">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon1"
                onClick={() => {
                  if (this.state.productCount > 1) {
                    this.setState({
                      productCount: this.state.productCount - 1,
                    });
                  }
                }}
              >
                -
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center col-md-1"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={this.state.productCount}
              onChange={(event) => {
                if (isNaN(event.target.value)) {
                  return;
                } else {
                  this.setState({ productCount: event.target.value });
                }
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                onClick={() => {
                  this.setState({ productCount: this.state.productCount + 1 });
                }}
              >
                +
              </button>
            </div>
          </div>
          <button className="btn btn-primary mt-3 mb-5"           
          onClick={this.onAddCartClick}>
            Add to cart</button>
        </div>
      );
    } else {
      product = <h5 className="mt-5">Please select a product to view</h5>;
    }
    return (
      <div className="col border overflow-auto">
        <h3>Product</h3>
        {product}
      </div>
    );
  }
}
