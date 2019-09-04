import React from 'react';
// import PropTypes from 'prop-types';
import styles from './style.scss';

class Product extends React.Component {

  render() {
    // console.log(this.props.selectedProduct[0].name)

    return (
      <div className={styles.product_wrapper}>

        <div>Product</div>
        <div className={styles.boxes}>
            {this.props.selectedProduct? this.props.selectedProduct[0].description : ""}
        </div>
        <h4>Price</h4>
        <div className={styles.boxes}>
            {this.props.selectedProduct?this.props.selectedProduct[0].price:""}
        </div>
        <button onClick={this.props.addToCart}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
