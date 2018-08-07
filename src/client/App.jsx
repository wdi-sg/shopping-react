import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/Search/Search';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

import styles from './style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      selectedProduct: null,
      cart: []
    };
  }

  changeHandler = (event) => {
    this.setState({query: event.target.value});
  };

  clickHandler = async () => {
    const response = await fetch(`/api/query?search=${this.props.query}`);
    const data = await response.json();
    this.setState({products: data.items});
  };

  displayProduct = (index) => {
    this.setState(({products}) => {
      const selectedProduct = products[index];
      selectedProduct['index'] = index;
      return {selectedProduct};
    });
  };

  addToCart = (index) => {
    this.setState(({products, cart}) => {
      let addedProduct = products[index];
      const productIDs = cart.map((product) => product.itemId);
      const addedProductId = productIDs.indexOf(addedProduct.itemId);
      if (addedProductId > -1) {
        cart[addedProductId].count++;
      } else {
        addedProduct['count'] = 1;
        cart.push(addedProduct);
      }
      return {cart};
    });
  };

  removeFromCart = (index) => {
    this.setState(({cart}) => {
      if (cart[index].count === 1) {
        cart.splice(index, 1);
      } else {
        cart[index].count--;
      }
      return {cart};
    });
  };

  addFromCart = (index) => {
    this.setState(({cart}) => {
      if (cart[index].count >= 1) {
        cart[index].count++;
      }
      return {cart};
    });
  };

  render() {
    return (
      <div className={styles['app-container']}>
        <div className={styles['search-container']}>
          Search
          <Search
            selectClick={this.displayProduct}
            onChange={this.changeHandler}
            onClick={this.clickHandler}
            products={this.state.products}
          />
        </div>
        {this.state.selectedProduct && (
          <div className={styles['product-container']}>
            Product
            <Product selectedProduct={this.state.selectedProduct} addToCart={this.addToCart} />
          </div>
        )}
        <div className={styles['cart-container']}>
          Cart
          <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} addFromCart={this.addFromCart} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
