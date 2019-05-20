import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import main_styles from '../../style.scss';

class AddToCart extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        let productId = e.target.id;
        this.props.cartInfo(productId);
    }

  render() {
    return (
      <button id={this.props.id} onClick={this.clickHandler}>Add to cart</button>
    );
  }
}

AddToCart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddToCart;