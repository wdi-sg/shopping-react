import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Cart extends React.Component {
  render() {
    
    let listCartItems = this.props.cartItems.map( (item, id) => {
        return (
            <li key={id} className="list-group-item">
            <p>{item.name}</p> 
            </li>
        )
        });  
      
    return (
    <div className="cart">
        <h1>Your Cart</h1>
        <ul>
        {listCartItems}   
        </ul>
    </div>
    );
  }
}

Cart.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Cart;