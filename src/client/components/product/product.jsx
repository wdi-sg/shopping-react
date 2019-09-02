import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Product extends React.Component {
  addToCart(event){
    this.props.addToCart(this.props.displayedProduct);
  }

  render() {
    return (
      <div>
        <h1>{this.props.displayedProduct.name}</h1>
        <h2>{this.props.displayedProduct.price}</h2>
        <p>{this.props.displayedProduct.description}</p>
        <button onClick={(event)=>{this.addToCart(event)}}>
          add to cart
        </button>  
      </div>
    );
  }
}

Product.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Product;