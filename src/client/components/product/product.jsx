import React from 'react';

import styles from './styles.scss';

class Product extends React.Component {
  render() {
    if (this.props.selectedProduct !== null) {
        return (
          <div className= {styles.product}>
            <h4>Product:</h4>
            <div>
                <span className= { styles.title }>Name:  </span>
                { this.props.selectedProduct.name }
            </div>
            <div>
                <span className= { styles.title }>Description:  </span>
                { this.props.selectedProduct.description }
            </div>
            <div><span className= { styles.title }>Price:  </span>
                { this.props.selectedProduct.price }
            </div>
            <br/>
            <button className= "btn btn-success"
                onClick= { () => { this.props.addProductToCartHandler() } }>
                Add to Cart
            </button>
          </div>
        );
    }
    else {
        return (
          <div>
            <h4>Product:</h4>
          </div>
        );
    }

  }
}

export default Product;