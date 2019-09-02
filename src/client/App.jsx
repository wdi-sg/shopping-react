import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      searchResults: [],
      displayedProduct: {},
      cartItems: [],
      subtotal: 0,
    };
    this.doSearch = this.doSearch.bind(this);
    this.showProduct = this.showProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.sumCart = this.sumCart.bind(this);
  }


  doSearch() {
    console.log("SEARCHINGGG!!!")
    var reactThis = this;
  
    var reqListener = function(){
      console.log(this.responseText);
      
      //transform the response to real js objects
      const data = JSON.parse( this.responseText );
      
      // here, we can't do this.setState
      
      //refer to react state instead
      reactThis.setState({searchResults: data.products}, () => {
        console.log(this.state)
      });
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://127.0.0.1:3000/products");
    oReq.send();
  }


  showProduct(product) {
    console.log("GOING TO SHOW THIS PRODUCT: ", product);
    this.setState({displayedProduct: product});
    console.log("dislpayed object ISSSS");
    console.log(this.state.displayedProduct);
  }

  addToCart(product) {
    const newCart = [product, ...this.state.cartItems];
    const updatedCart = {
        cartItems : newCart,
    };
    this.setState(updatedCart);
    setTimeout(this.sumCart,300);
    // this.sumCart();
  }

  sumCart(){
    let cartTotal = this.state.cartItems.reduce((sum, i) => (
        sum += parseFloat(i.price.replace("$", ""))
        ), 0)
    this.setState({subtotal: cartTotal})
    console.log("AMOUNT IS " + cartTotal)
    console.log("Subtaotl is!!!" + this.state.subtotal)
  }

  render() {
    return (
      <div className="container">
        Shopping App
        <div className="row">
          <div className="col-4">
            <Search 
                doSearch={this.doSearch} 
                searchResults={this.state.searchResults}
                showProduct={this.showProduct}
            />
          </div>
          <div className="col-4">
            <Product 
                displayedProduct={this.state.displayedProduct}
                addToCart={this.addToCart}
            />
          </div>
          <div className="col-4">
            <Cart 
                cartItems={this.state.cartItems}
                subtotal={this.state.subtotal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);