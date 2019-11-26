import React from 'react';
import styles from './style';
import CartItem from './CartItem/CartItem';

class Cart extends React.Component {

    render() {
        
        let cart = this.props.cart;

        let gst = this.props.gst;

        gst = Math.round(gst * 100) / 100

        return (
            <div className={styles.cart}>
                <h1>Cart</h1>
                <hr/>
                { cart.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>) }
                <hr/>
                <h3>sub total: ${this.props.price}</h3>
                <h3>shipping: ${this.props.shipping}</h3>
                <h3>GST: ${gst}</h3>
            </div>
        );
    }

}

export default Cart;