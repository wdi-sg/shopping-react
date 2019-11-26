import React from 'react';
import styles from './style';
import CartItem from './CartItem/CartItem';

class Cart extends React.Component {

    render() {
        
        let cart = this.props.cart;

        return (
            <div className={styles.cart}>
                <h1>Cart</h1>
                <hr/>
                { cart.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>) }
            </div>
        );
    }

}

export default Cart;