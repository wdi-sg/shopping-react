import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h4>Product:</h4>
        <p>Name:<br/>{ this.props.selectedProduct.name }</p>
        <p>Description:<br/>{ this.props.selectedProduct.description }</p>
        <p>Price:<br/>{ this.props.selectedProduct.price }</p>
        <button
            onClick= { () => { this.props.addProductToCartHandler() } }>
            Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;