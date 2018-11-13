import React from 'react';
import styles from './style.scss';
import Cart from '../cart/cart.jsx';

class Product extends React.Component {

  constructor() {
    super();
    this.addToCartHandler = this.addToCartHandler.bind( this );
    this.state = {
        cartProducts: []
    };
  };  

  addToCartHandler(productToBeAddedToCart){
    //   console.log(productToBeAddedToCart);
      this.setState({cartProducts: [...this.state.cartProducts, productToBeAddedToCart]});
    //   console.log(this.state.cartProducts);
  }

  render() {
    var productSpecifications;
    if (this.props.productInfo) {
        productSpecifications = (
        <React.Fragment>
            <img src={this.props.productInfo.mediumImage}/>
            <li>Name: {this.props.productInfo.name}</li>
            <li>Price: S${this.props.productInfo.salePrice}</li>
            <li>Description: {this.props.productInfo.shortDescription}</li>
            <li>Item ID: {this.props.productInfo.itemId}</li>
            <button onClick = {this.addToCartHandler.bind(null,this.props.productInfo)} className={styles.name}>Add to Cart</button>
        </React.Fragment>
        )

    }

    return (
        <React.Fragment>
            <div className={styles.resultscolumn}>
                {productSpecifications}
            </div>
            <Cart cartProducts={this.state.cartProducts}/>
        </React.Fragment>

    );
  }
}

export default Product;
