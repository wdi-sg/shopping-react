import React from 'react';
import styles from './style.scss';

class Cart extends React.Component {

  constructor() {
    super();
    // this.removeFromCartHandler = this.removeFromCartHandler.bind( this );
    this.state = {
        productsInCart: [],
        subtotal: 0,
        gst: 0,
        shipping: 0
        total: 0
    };
  };  

  calculatePrice(){
      
  }

  render() {
    var cartProducts;
    if (this.props.cartProducts.length > 0) {
        cartProducts = (
            <React.Fragment>
                <img src={this.props.cartProducts[0].thumbnailImage}/>
                <span>Name: {this.props.cartProducts[0].name}</span>
                <span>Price: S${this.props.cartProducts[0].salePrice}</s>
                {/* <button onClick = {this.removeFromCartHandler.bind(null,this.props.productInfo)} className={styles.name}>Add to Cart</button> */}
            </React.Fragment>
            )
    } else {
        cartProducts = (
            <React.Fragment>
                <h5>No products in cart</h5>
            </React.Fragment>
        );
    }

    return (
        <div className={styles.cartcolumn}>
            {cartProducts}
            <div className="">
                <span>Subtotal: </span>
                <span>GST: </span>
                <span>Shipping Fee: </span>
                <span>Total: </span>
            </div>
        </div>
    );
  };
}

export default Cart;
