import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import main_styles from '../../style.scss';

class ShoppingCart extends React.Component {

    constructor() {
        super();
        this.state = {
            subtotal: 0,
            shipping: 0,
            gst: 0,
            total: 0
        }
    }

    componentDidUpdate(prevProps) {


        // ⚠️ THIS IS VERY JENKY...
        if (prevProps.cartInfo.items[0] !== this.props.cartInfo.items[0]) {

            let subtotalAmount = this.state.subtotal;
            this.props.cartInfo.items.map((item, i) => {
                subtotalAmount = subtotalAmount + parseFloat(item.price.replace('$', ''));
            })

            let gstAmount = Math.round((subtotalAmount * 0.07) * 100) / 100;
            let totalAmount = subtotalAmount + gstAmount;

            this.setState({
                subtotal: subtotalAmount,
                gst: gstAmount,
                total: totalAmount
            });
            console.log("changes!");
        } else {
            console.log("no changes");
        }
    }



  render() {

    let cartItems = this.props.cartInfo.items.map((item, i) => {
        return <li key={item + "_" + i}>{item.name}</li>
    })
    return (
        <React.Fragment>
              <h4>🛒 Shopping cart</h4>

              <ul>{cartItems}</ul>

              <p> Subtotal: {this.state.subtotal} </p>
              <p> Shipping: {this.state.shipping} </p>
              <p> GST: {this.state.gst} </p>
              <p> Total: {this.state.total} </p>
        </React.Fragment>
    );
  }
}

export default ShoppingCart;