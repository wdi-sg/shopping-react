import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productToDisplay: {},
      productHidden: true,
      cart: [],
      cartHidden: true,
      totalAmount: 0.00,
    };
    // this.displayProduct = this.displayProduct.bind(this);
  }

  displayProduct = (newProductToDisplay) => {
    this.setState({
      productToDisplay: newProductToDisplay,
      productHidden: false,
    });
  }

  addProductToCart = (updatedCart,updatedTotalAmount) => {
    this.setState({
      cart: updatedCart,
      cartHidden: false,
      totalAmount: updatedTotalAmount,
    });
  }

  removeItemFromCart = (updatedCart,updatedTotalAmount) => {
    this.setState({
      cart: updatedCart,
      totalAmount: updatedTotalAmount,
    });
  }

  hideCart = () => {
    this.setState({
      cartHidden: true,
    });
  }

  viewCart = () => {
    this.state.cartHidden ? this.setState({
      cartHidden: false}) : this.setState({
      cartHidden: true})
  }

  render() {
    return (
      <div className="d-flex justify-content-between flex-wrap">
        <Search onClickOnSearchResult={this.displayProduct} viewCart={this.viewCart}/>
        <Product productToDisplay={this.state.productToDisplay} productHidden={this.state.productHidden} onClickOnAddToCart={this.addProductToCart} cart={this.state.cart} />
        
        {this.state.cartHidden ? null : <Cart cart={this.state.cart} removeFromCart={this.removeItemFromCart} displayProduct={this.displayProduct} hideCart={this.hideCart} addProductToCart={this.addProductToCart} totalAmount={this.state.totalAmount} />}
        {/*<Cart cart={this.state.cart} removeFromCart={this.removeItemFromCart} displayProduct={this.displayProduct}/>*/}
      </div>
    );
  }
}

export default hot(module)(App);