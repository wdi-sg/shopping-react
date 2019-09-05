import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../style.scss';
/* eslint react/prop-types: 0 */
class Product extends React.Component {


  render() {

    let product = this.props.product ? this.props.product : "";


    return (
      <div>
        <b>Name</b> : {product.name} <br/>
        <b>Description</b> : {product.description} <br/>
        <b>Price</b>: {product.price}<br/><br/>
        <button onClick={(e)=>{this.props.addToCart(e)}}>Add to cart</button>
      </div>
    );


  }
}


export default Product;
