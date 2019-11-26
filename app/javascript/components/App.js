import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import Cart from './Cart';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			cart: [],
			products: [],
			query: '',
			filtered: []
		};
		this.addToCart = this.addToCart.bind(this);
	}
	// AJAX to make a query to this route
	getAllProducts() {
		const url = '/products.json';
		axios
			.get(url)
			.then((response) => {
				const data = response.data;
				this.setState({ products: data });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	componentDidMount() {
		this.getAllProducts();
	}
	changeHandler(event) {
		this.setState({ query: event.target.value });
		console.log('searching for', this.state.query);
		const query = this.state.query.toLowerCase();
		// const url = '/products/' + query + '.json';

		// function nameContainsQuery(product) {
		// 	product.name.toLowerCase().includes(query) ? true : false;
		// }
		// const filtered = this.state.products.filter(nameContainsQuery);
		let filtered = [];
		this.state.products.map((product) => {
			if (product.name.toLowerCase().includes(query)) {
				filtered.push(product);
			}
		});
		console.log('filtered', filtered);
		this.setState({ filtered: filtered });
	}
	addToCart(id) {
		console.log('ADDING to cart', id);
		let itemId = parseInt(id);
		let item = this.state.products.filter((product) => {
			if (product.id === itemId) return product;
		});

		this.setState({ cart: [ ...this.state.cart, item ] });
		console.log(this.state.cart);
	}

	render() {
		const filtered = this.state.filtered.map((product, index) => {
			return (
				<div key={index}>
					<p>{product.name}</p>
				</div>
			);
		});
		return (
			<div className='container d-flex flex-wrap'>
				<div className='col-4'>
					<h1>Search</h1>
					<div>
						Search for the product name:
						<input
							type='text'
							name='name'
							placeholder='name'
							onChange={(event) => {
								this.changeHandler(event);
							}}
						/>
						{filtered}
					</div>
				</div>
				<div className='col-4'>
					<Product filtered={this.state.filtered} cart={this.state.cart} addToCart={this.addToCart} />
				</div>
				<div className='col-4'>
					<Cart cart={this.state.cart} products={this.state.products} />
				</div>
			</div>
		);
	}
}

export default App;
