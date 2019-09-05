import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../style.scss';
/* eslint react/prop-types: 0 */
class Cart extends React.Component {


  render() {
     var subTotal = 0;
     var shippingFee = 3;
     var gst = 0;
     var total = 0;
     let productList = this.props.cartProducts ? this.props.cartProducts.map(product => {
        subTotal += parseFloat(product.price.replace('$', ''))
        return <p id={product.id}>{product.name}</p>
    }) : "";
    gst = subTotal * 0.07;
    total = subTotal + shippingFee + gst;

    return (
      <div>
        {productList} <br /><br />

        Sub Total: {subTotal} <br />
        Shipping : {shippingFee} <br />
        GST: {gst} <br />
        Total : {total} <br />
      </div>
    );

                                                                                       
}
}


export default Cart;
