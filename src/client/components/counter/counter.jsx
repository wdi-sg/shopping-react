import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Counter extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.addToCartProduct);
    const cartProduct =this.props.addToCartProduct.map((product, index) => {
        return <p>{product.name}</p>
    })
    //<p>{this.props.addToCartProduct.name}</p>
    return (
        <div>
            <h3>Cart: </h3>
            {cartProduct}
        </div>

    );
  }
}

Counter.propTypes = {
  // message: PropTypes.string.isRequired
  addToCartProduct: PropTypes.object.isRequired
};

export default Counter;
