import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import main_styles from '../../style.scss';

class ShoppingCart extends React.Component {

    constructor() {
        super();
        this.state = {
            subtotal: '',
            shipping: '',
            gst: '',
            total: ''
        }
    }



  render() {

    let cartItems = this.props.cartInfo.items.map((item, i) => {
        return <li>{item.name}</li>
    })
    return (
        <React.Fragment>
              <h4>🛒 Shopping cart</h4>

              {cartItems}

              <p> Subtotal: {this.state.subtotal} </p>
              <p> Shipping: {this.state.shipping} </p>
              <p> GST: {this.state.gst} </p>
              <p> Total: {this.state.total} </p>
        </React.Fragment>
    );
  }
}

export default ShoppingCart;