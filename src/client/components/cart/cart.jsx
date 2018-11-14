import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Cart extends React.Component {
  constructor() {
    super();
    // this.add = this.add.bind( this )
    this.state = {

    };
  }

  // add(a, b){
  //   a + b
  // }

  render() {
    console.log("CART ITEM: ",this.props.cartItem);


    let total = this.props.cartItem

    const addItems = this.props.cartItem.map((item,index)=>{
        //console.log("form result", {item});

        //const total = item.salePrice.reduce();

        //console.log("total",total)

        return <li className={styles.cartlist}key={index}>{item.name}</li>
    });


    return (
        <div>
        <h4>Cart</h4>
        <p>Sub Total: $ {((total.reduce((accum, cartItem)=> accum + cartItem.salePrice, 0))).toFixed(2) }</p>
        <p>Shipping: $ {((total.reduce((accum, cartItem)=> accum + cartItem.salePrice, 0)) + 7).toFixed(2) } </p>
        <p>GST: $ {((total.reduce((accum, cartItem)=> accum + cartItem.salePrice, 0)) + 7 * 0.07).toFixed(2)}</p>
        <p>Total: $ {((total.reduce((accum, cartItem)=> accum + cartItem.salePrice, 0)) + 7 * 1.07).toFixed(2) }</p>
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
