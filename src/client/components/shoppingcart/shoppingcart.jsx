import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import Calculation from './calculation.jsx'

class ShoppingCart extends React.Component {

    constructor() {
        super();
        this.state = {
            subtotal: 0,
            shipping: 0,
            gst: 0,
            total: 0
        }


        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        this.calculateFees = this.calculateFees.bind(this);
    }

    removeItemFromCart(e) {
        this.props.itemToRemove(e.target.id);
        this.calculateFees();
    }

    calculateFees() {
        let subtotalAmount = 0;

            this.props.cartInfo.items.map((item, i) => {
                subtotalAmount = subtotalAmount + parseFloat(item.price.replace('$', ''));
            })

            subtotalAmount = Math.round(subtotalAmount * 100) / 100;
            let gstAmount = Math.round((subtotalAmount * 0.07) * 100) / 100;
            let totalAmount = Math.round((subtotalAmount + gstAmount) * 100) / 100;

            this.setState({
                subtotal: subtotalAmount,
                gst: gstAmount,
                total: totalAmount
        });
    }

    componentDidUpdate(prevProps) {


        if (prevProps.cartInfo.items.length !== this.props.cartInfo.items.length) {
            this.calculateFees();
        } else {
            console.log("no changes");
        }
    }



  render() {

    let cartItems = this.props.cartInfo.items.map((item, i) => {
        return <li key={item + "_" + i}>{item.name} <button id={item.id} onClick={this.removeItemFromCart}>❌</button></li>
    })
    return (
        <React.Fragment>
              <h4>🛒 Shopping Cart</h4>

              <ul>{cartItems}</ul>

              <Calculation subtotal={this.state.subtotal} gst={this.state.gst} total={this.state.total} />
        </React.Fragment>
    );
  }
}

export default ShoppingCart;