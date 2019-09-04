import React from 'react';
// import PropTypes from 'prop-types';
import styles from './style.scss';

class Cart extends React.Component {

  render() {
    console.log(this.props.cartList)
    let cartitems = this.props.cartList.map((item,index) => {
        return <div key={index}>{item.name}</div>
    })

    return (
      <div className={styles.cart_wrapper}>
        <div>Cart</div>
        <div className={styles.cartitems_wrapper}>
            {cartitems}
        </div>
      </div>
    );
  }
}

export default Cart;
