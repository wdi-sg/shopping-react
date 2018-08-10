import React from 'react';

import styles from './style.scss';

class Product extends React.Component {

  render() {
    const {selectedProduct, addToCart} = this.props;
    
    return (
      <div className={styles.box}>
        <div class="container">

          <img src={selectedProduct.mediumImage}/>
          <h6>Product</h6>
            <div>{selectedProduct.name}</div>
          <h6>Price</h6>
            <div>{selectedProduct.salePrice}</div>
            <button type='button' onClick={()=>{addToCart(selectedProduct.index)}}>Add</button>
          <h6>Description</h6>
            <div>{selectedProduct.shortDescription}</div>
          
        </div>
      </div>
    );
  }
}
export default Product;
