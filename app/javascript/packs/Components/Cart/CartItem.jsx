import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss'

function Cart(props) {
  return (
    <div className="cartCont container col-3">
      {props.item.name}
    </div>
  )
}



export default Cart
