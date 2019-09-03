import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import ProductDetail from './product-detail';

class Product extends React.Component {
	render() {
		let productDetails = "No product selected";
		if (this.props.product != null) {
			productDetails = <ProductDetail product={this.props.product} addToCart={this.props.addToCart}/>
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
	product: PropTypes.object,
	addToCart: PropTypes.func
};
export default Product;
