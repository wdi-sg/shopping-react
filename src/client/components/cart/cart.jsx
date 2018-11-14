import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    console.log("CART ITEM: ",this.props.cartItem);

    const addItems = this.props.cartItem.map((item,index)=>{
        //console.log("form result", {item});
        return <li key={index}>{item.name}</li>
    });

    return (
        <div>
        <h4>Cart</h4>
        <ul className={styles.nobullet}>
        {addItems}
        </ul>
        </div>
    );
  }
}

// Counter.propTypes = {
//   message: PropTypes.string.isRequired
// };

export default Cart;
