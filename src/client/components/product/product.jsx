import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import main_styles from '../../style.scss';
import AddToCart from './addtocart.jsx';

class Product extends React.Component {

    constructor() {
        super();
        this.getId = this.getId.bind(this);
    }


    // sending product id selected from "add to cart" button to parent
    getId(id) {
        console.log("id from from proddducttt " + id)
        this.props.cartProductId(id);
    }

  render() {
    return (
      <div>
        <h4>Product Information</h4>
        <p>Name: {this.props.name}</p>
        <p>Price: {this.props.price}</p>
        <p>Description: {this.props.description}</p>
        <AddToCart id={this.props.id} cartInfo={this.getId} />
      </div>
    );
  }
}

// Product.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Product;