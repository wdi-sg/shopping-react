import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem'
import styles from './styles.scss';

function Cart(props) {
  return (
    <div className="cartCont container col-3">
      <p>Cart:</p>
      {props.cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}

export default Cart;
