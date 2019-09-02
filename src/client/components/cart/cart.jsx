import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        gst: 0.07,
        shippingCost: 7
    };
  }
    

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
        <CartCost 
            subtotal={this.props.subtotal}
            gst={this.state.gst}
            shippingCost={this.state.shippingCost}
        />
    </div>
    );
  }
}


class CartCost extends React.Component {
    render() {
        return (
            <React.Fragment> 
                <h3>Subtotal: ${this.props.subtotal.toFixed(2)}</h3>
                <h3>GST: ${(this.props.gst * this.props.subtotal).toFixed(2)}</h3>
                <h3>Shipping: ${this.props.shippingCost.toFixed(2)}</h3>
                <h2>Total: ${((this.props.subtotal * (1+ this.props.gst)) + this.props.shippingCost).toFixed(2)}</h2>
            </React.Fragment>
        )
    }
}

Cart.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Cart;