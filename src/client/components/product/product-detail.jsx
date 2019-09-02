import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class ProductDetail extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		let product = this.props.product;
		return (
			<div className={styles.product}>
				<h4>{product.name}</h4>
				<span className={styles.desc}>{product.description}</span>
				<span className={styles.price}>{product.price}</span>
			</div>
		);
	}
}
ProductDetail.propTypes ={
	product: PropTypes.object
};
export default ProductDetail;
