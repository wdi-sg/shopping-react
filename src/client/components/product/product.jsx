import React from 'react';
import PropTypes from 'prop-types';
// import style from './style.css';

class Product extends React.Component {
	render () {
		return (
			<div className="col-xl" hidden={this.props.productHidden} >
				<div className="card" style={{width: "18rem"}}>
					<img className="card-img-top" src={this.props.productToDisplay.imageUrl} alt="image of product" />
					<div className="card-body">
						<h5 className="card-title font-weight-bold">{this.props.productToDisplay.name}</h5>
						<p className="card-text">{this.props.productToDisplay.description}</p>
						<div className="text-right">
							<h5>{this.props.productToDisplay.price}</h5>
							<a href="#" className="btn btn-primary" id="add-to-cart-button" >Add to cart</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
  productHidden: PropTypes.bool.isRequired,
  productToDisplay: PropTypes.object.isRequired
};

export default Product;