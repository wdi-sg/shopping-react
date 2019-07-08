import React from 'react';
import PropTypes from 'prop-types';
import style from './cartstyle.scss';
import CartItem from './cart-item/cart-item';
console.log("style",style);
class Cart extends React.Component {

	hideCart (hideCart) {
		hideCart();
	}

	render () {
		const itemsInCart = this.props.cart.map((item,index) => {
			return (
				<CartItem key={"item"+index} item={item} index={index} cart={this.props.cart} removeFromCart={this.props.removeFromCart} displayProduct={this.props.displayProduct} addProductToCart={this.props.addProductToCart} />
			);
		})
		return (
			<div className={style.cart}>
			<div className="col-xl d-flex flex-column border border-secondary p-3">
				<div className="d-flex justify-content-between border-bottom pb-2">
					<h5 className="font-weight-bold ">Cart</h5>
					<button onClick={()=>this.hideCart(this.props.hideCart)} style={{border: "none", backgroundColor:"transparent"}}>Hide</button>
				</div>
				{itemsInCart}
				<div className="d-flex justify-content-between border-top pt-2">
					<h5 className="font-weight-bold">Total:&nbsp;</h5>
					<h5 className="font-weight-bold">${this.props.totalAmount.toFixed(2)}</h5>
				</div>
			</div>
			</div>
		);
	}
}

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	displayProduct: PropTypes.func.isRequired,
	addProductToCart: PropTypes.func.isRequired,
	hideCart: PropTypes.func.isRequired,
	totalAmount: PropTypes.number.isRequired,
}

export default Cart;