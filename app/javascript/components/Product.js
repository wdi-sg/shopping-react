import React, { Component } from 'react';

export class Product extends Component {
	constructor() {
		super();
	}

	render() {
		const { cart } = this.props;
		console.log('from product', this.props.filtered);
		const product = this.props.filtered.map((one) => {
			return (
				<div className='card'>
					<h4>Product: {one.name}</h4>
					<p>Description: {one.description}</p>
					<h5>Price: ${one.price}</h5>
					<button onClick={this.props.addToCart.bind(this, one.id)}>Add to cart</button>
				</div>
			);
		});

		return (
			<div>
				<h1>Product</h1>
				{product}
			</div>
		);
	}
}

export default Product;
