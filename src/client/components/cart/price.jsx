import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Price extends React.Component {
	render() {
		let cart = this.props.cart;
		let total = 0;
		this.props.cart.map((item)=>{
			total += parseFloat(item.price.substr(1));
		});
		return (
			<div className={styles.total}>
				<span>Total</span>
				<span className={styles.totalPrice}>${total.toFixed(2)}</span>
			</div>
		);
	}
}
Price.propTypes ={
	cart: PropTypes.array
};
export default Price;
