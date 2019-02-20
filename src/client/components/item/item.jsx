import React from 'react';

import styles from './style.scss';

class Item extends React.Component {
	constructor () {
		super ();
		this.addToCart = this.addToCart.bind(this);

	}

	addToCart(item) {
		this.props.add(item);

	}

	render() {
		let item = this.props.item;
		if (item) {
			return (
				<div className= {styles.main}>
					<h3>{item.name}</h3>
					<p><strong>${item.salePrice}</strong></p>
					<img src={item.largeImage} />
					<p>{item.shortDesscription}</p>
					<button onClick={() => {this.addToCart(item)}}>Add to Cart</button>
				</div>
				)
		}else {
			return <span />
		}
	}
}

export default Item;