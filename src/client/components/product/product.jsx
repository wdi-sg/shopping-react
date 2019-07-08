import React from 'react';
import PropTypes from 'prop-types';
// import style from './style.scss';

class Product extends React.Component {

	handleClick () {
		console.log("Clicked add to cart!");
	  const productToAdd = this.props.productToDisplay;
	  const productId = productToAdd.id;
	  console.log("productId",productId);

	  const currentCart = this.props.cart;
	  let updatedCart = [];
	  let num = 0;
	  currentCart.forEach(item => {
	  	console.log("item",item);
	  	if (item.id === productId) {
	  		item.quantity++;
	  		num++;
	  		return;
	  	}
	  })
	  console.log("num",num);
	  if (num>0) {
	  	updatedCart = currentCart;
	  } else {
	  	productToAdd.quantity = 1;
	  	updatedCart = [...this.props.cart,productToAdd];
	  }
    // console.log("productToAdd",productToAdd);
    // console.log("cart before", this.props.cart)
    // const updatedCart = [...this.props.cart,productToAdd];
    console.log("cart aft", updatedCart);
    let updatedTotalAmount = 0;
    for (let i=0; i<updatedCart.length; i++) {
    	console.log("updatedCart[i]",updatedCart[i]);
    	updatedTotalAmount = (updatedTotalAmount + updatedCart[i].quantity * parseFloat(updatedCart[i].price.slice(1,updatedCart[i].price.length)));
    };
    console.log("updatedTotalAmount", updatedTotalAmount);
		this.props.onClickOnAddToCart(updatedCart,updatedTotalAmount);
	}

	render () {
		return (
			<div className="col-xl" hidden={this.props.productHidden} >
				<div className="card" style={{width: "100%"}}>
					<img className="card-img-top" src={this.props.productToDisplay.imageUrl} alt="image of product" />
					<div className="card-body">
						<h5 className="card-title font-weight-bold">{this.props.productToDisplay.name}</h5>
						<p className="card-text">{this.props.productToDisplay.description}</p>
						<div className="text-right">
							<h5>{this.props.productToDisplay.price}</h5>
							<button className="btn btn-primary" onClick={()=>this.handleClick()} >Add to cart</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
  productHidden: PropTypes.bool.isRequired,
  productToDisplay: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  onClickOnAddToCart: PropTypes.func.isRequired,
};

export default Product;