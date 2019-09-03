import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';


import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {},
      cart: []
    };
  }

  sendItem(item){
    this.setState({item:item})
  }

  sendToCart(item){
    console.log(item)
    let array = this.state.cart
    array.push(item)
    this.setState({cart:array})
  }

  render() {
    return (
      <div className={styles.pagecontent}>
        <Search sendItem={this.sendItem.bind(this)}/>
        <Product item={this.state.item} toCart={this.sendToCart.bind(this)}/>
        <Cart cart={this.state.cart}/>
      </div>
    );
  }
}

export default hot(module)(App);
