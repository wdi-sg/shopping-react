import React from 'react';

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

export default Product;
