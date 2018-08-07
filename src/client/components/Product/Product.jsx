import React from 'react';

import PropTypes from 'prop-types';

// import styles from './style.scss';

class Product extends React.Component {
  render() {
    const {selectedProduct, addToCart} = this.props;

    return (
      <div>
        <div>
          <img src={selectedProduct.mediumImage} />
        </div>
        <br />
        <div>Description:</div>
        <div>{selectedProduct.shortDescription}</div>
        <br />
        <div>Price:</div>
        <div>{selectedProduct.salePrice}</div>
        <button onClick={() => addToCart(selectedProduct.index)}>Add To Cart</button>
      </div>
    );
  }
}

Product.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default Product;
