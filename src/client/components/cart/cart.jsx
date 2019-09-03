import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import CartItem from './cart-item';
import Price from './price';

class Cart extends React.Component {
	render() {
		let cartItems = "No items in cart yet";
		if (this.props.cart.length != 0) {
			cartItems = this.props.cart.map((item,index) => {
				return (<CartItem key={index} item={item}/>)
			});
		}
		return (
			<div className={styles.cartContainer}>
				<h2>Cart</h2>
				{cartItems}
				<Price cart={this.props.cart}/>
			</div>
		);
	}
}
Cart.propTypes ={
	cart: PropTypes.array
};
export default Cart;
