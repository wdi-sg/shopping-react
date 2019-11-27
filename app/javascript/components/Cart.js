import React, { Component } from 'react';

export class Cart extends Component {
	render() {
		var sum;
		var gst;
		var shipping = 7;
		var total;
		const { cart } = this.props;
		let prices = [];
		const cartItems = cart.map((item) => {
			prices.push(item[0].price);
			console.log(prices);
			function sumOf() {
				var sum = 0;
				for (var i = 0; i < arguments.length; i++) {
					sum += arguments[i];
				}
				return sum;
			}
			console.log('sum', sumOf(...prices));
			sum = sumOf(...prices).toFixed(2);
			gst = (0.07 * sum).toFixed(2);
			total = parseInt(sum) + parseInt(gst) + parseInt(shipping);

			return (
				<div>
					<p>
						{item[0].name} ${item[0].price}
					</p>
				</div>
			);
		});
		return (
			<div>
				<h1>Cart</h1>
				<div className='card'>
					<p>Subtotal: ${sum}</p>
					<p>GST: ${gst}</p>
					<p>Shipping: ${shipping}</p>
					<p>Total: ${total}</p>
				</div>
				{cartItems}
			</div>
		);
	}
}

export default Cart;
