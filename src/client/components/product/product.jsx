import React from 'react';

import PropTypes from 'prop-types';

// import styles from './style.scss';

class Product extends React.Component {
  constructor() {
    super();
  }

  render() {
    let product = this.props.product;
    return (
      <div>
        <div className="row">
          <div className="col">{product.name}</div>
        </div>
        <div className="row">
          <div className="col">{product.price}</div>
        </div>
        <div className="row">
          <div className="col">{product.description}</div>
        </div>
      </div>
    );
  }
}
Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
