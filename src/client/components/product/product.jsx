import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Product = ({itemId, imageUrl, description, price, onAddToCart}) => (
  <div className={styles.container}>
    <h2>Product</h2>
    {imageUrl && <img src={imageUrl} alt="Product" />}
    {description && <p>{description}</p>}
    {price && <p>Price: {price}</p>}
    <button onClick={() => onAddToCart(itemId)}>Add to cart</button>
  </div>
);

Product.propTypes = {
  itemId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Product;
