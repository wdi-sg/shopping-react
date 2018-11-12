import React from 'react';

import styles from './style.scss';

class Cart extends React.Component {
	render() {


		let cartItems = this.props.cart.map(item => {
			return (
				<div key={item.name} className={styles.item}>
					<p>{item.name} <br />${item.salePrice}</p>
				</div>
			)
		})

		return (
			<div className={styles.cart}>
				<h2>CART</h2>
				<p>Total: ${this.props.cart.reduce((total, i) => total + i.salePrice, 7).toFixed(2)}</p>
				{cartItems}
			</div>
		)
	}
}

export default Cart;