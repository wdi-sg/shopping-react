import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class CartItem extends React.Component {

	handleDelete = (index, cart, removeFromCart) => {
		console.log("handleDelete index",index);
		const updatedCart = cart;
		updatedCart.splice(index,1);
		console.log("handleDelete updatedCart",updatedCart);
		removeFromCart(updatedCart);
	}

	displayItem = (displayProduct, item) => {
		console.log("clicked item",item);
		displayProduct(item);
	}

	changeQuantity = (index,cart,addProductToCart,e) => {
		const quantity = e.target.value;
		console.log("quantity",quantity);
		console.log("index", index);
		const updatedCart = cart;
		console.log("cart",cart);
		updatedCart[index].quantity = parseInt(quantity);
		console.log("updatedCart",updatedCart);
		addProductToCart(updatedCart);
	}

	render () {
		return (
			<div className="cart-item d-flex justify-content-between align-items-center my-2" id={this.props.item.id}>
				<div className="d-flex justify-content-between align-items-center mr-2" onClick={()=>this.displayItem(this.props.displayProduct, this.props.item)} >
					<img width="50" height="50" className={style["image-icon"]} src={this.props.item.imageUrl} alt="product image" />
					<div className="d-flex flex-column justify-content-center">
						<p className= "font-weight-bold mb-0">{this.props.item.name}</p>
						<p className= "mb-0" style={{whiteSpace: "nowrap"}}>{this.props.item.price}</p>
					</div>
				</div>
					<div>
						<input style={{width:"50px"}} type="number" min="0" value={this.props.item.quantity} onChange={(e)=>this.changeQuantity(this.props.index,this.props.cart,this.props.addProductToCart,e)} />
						<button className="align-self-start" style={{border:"none", backgroundColor:"transparent"}} onClick={()=>this.handleDelete(this.props.index, this.props.cart, this.props.removeFromCart)}>❌</button>
					</div>
			</div>
		)
	}
}

CartItem.propTypes = {
	cart: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	displayProduct: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	addProductToCart: PropTypes.func.isRequired,
}

export default CartItem;