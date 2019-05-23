import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
            <p>
                {this.props.product.name}
            </p>
            <p>
                {this.props.product.price}
            </p>
            <p>
                {this.props.product.description}
            </p>
            <button>Add to cart</button>
        </div>
    );
  }
}

export default Product;
