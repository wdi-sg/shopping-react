import React from 'react';

import styles from './style.scss';

class Product extends React.Component {

  render() {
    const results = this.props.allProduct;
    const products = results;
    console.log('Results from Product.jsx', products);
    const allProducts = products.map((product)=>{
      const description = product.shortDescription.slice(8);
      return(
        <div>
          <h6>Product</h6>
            <li>{product.name}</li>
          <h6>Description</h6>
            <li>{description}</li>
          <h6>Price</h6>
            <li>{product.salePrice}</li>
        </div>
      )
    })
    return (
      <div className={styles.box}>
        <ul>
          {allProducts}
        </ul>
      </div>
    );
  }
}
export default Product;
