import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/search/search';
import Item from './components/item/item';
import Cart from './components/cart/cart';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
     item: '',
     cart: []
    };

    this.displayItem = this.displayItem.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

  displayItem(selectedItem){
    this.setState({item: selectedItem})
  }

  addToCart(item){
    let cartarr = [...this.state.cart];
    cartarr.push(item);

    this.setState({cart: cartarr});
  }

  render() {
    return (
      <div>
        Welcome.
        <Search display={this.displayItem} />
        <Item item={this.state.item} addToCart={this.addToCart} />
        <Cart cartItems={this.state.cart} />
      </div>
    );
  }
}

export default hot(module)(App);
