import React from 'react';
import {hot} from 'react-hot-loader';

import styles from './style.scss';
import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			error: null,
			productsLoaded: false,
			products: [],
			selectedProduct: null,
			cart:[]
		};
	}
	getResults = (text) => {
		fetch("http://localhost:3000/products/"+text)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						products: result.products
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	};
	selectProduct = (e,index) => {
		this.setState({
			selectedProduct: this.state.products[index]
		});

	};
	addToCart = (e) => {
		this.setState({cart:[...this.state.cart,this.state.selectedProduct]})
	};
	render() {
		return (
			<div className={styles.container}>
				<Search
					getResults={this.getResults}
					selectProduct={this.selectProduct}
					products={this.state.products}
				/>
				<Product product={this.state.selectedProduct} addToCart={this.addToCart}/>
				<Cart cart={this.state.cart}/>
			</div>
		);
	}
}

export default hot(module)(App);