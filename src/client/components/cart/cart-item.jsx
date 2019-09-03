import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class CartItem extends React.Component {
	render() {
		let item = this.props.item;
		return (
			<div className={styles.item}>
				<h4>{item.name}</h4>
				<span className={styles.price}>{item.price}</span>
			</div>
		);
	}
}
CartItem.propTypes ={
	item: PropTypes.object
};
export default CartItem;
