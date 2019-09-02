import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

import ProductDetail from './product-detail';

class Product extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		let productDetails = "";
		if (this.props.product != null) {
			productDetails = <ProductDetail product={this.props.product}/>
		}
		return (
			<div className={styles.productContainer}>
				<h2>Product Details</h2>
				{productDetails}
			</div>
		);
	}
}
ProductDetail.propTypes ={
	product: PropTypes.object
};
export default Product;
