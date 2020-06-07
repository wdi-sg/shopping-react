import React from 'react';

class Product extends React.Component {

  render() {

    return (
      <div className="container">
        <h3>PRODUCT</h3>
        <div>
          {this.props.product}
        </div>
      </div>

    );
  }
}

export default Product;