import React from 'react';

import styles from '../../style.scss';

class Product extends React.Component {
  render() {
    return (
        <div className={styles["individual-container"]}>
            <h1>Product</h1>
            <h4>Description</h4>
            <p>{this.props.selectedProduct? this.props.selectedProduct.description : ""}</p>
            <h4>Price</h4>
            <p>{this.props.selectedProduct?this.props.selectedProduct.price:""}</p>
            <br/><br/><br/>
            <button onClick={(e)=>{this.props.addToCart(e)}}>Add to Cart</button>
        </div>
    );
  }
}

export default Product;
