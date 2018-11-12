import React from 'react';

import styles from './style.scss';

const Product = ({imageUrl, description, price}) => (
  <div className={styles.container}>
    <h2>Product</h2>
    {imageUrl && <img src={imageUrl} alt="Product" />}
    {description && <p>{description}</p>}
    {price && <p>Price: {price}</p>}
  </div>
);

export default Product;
