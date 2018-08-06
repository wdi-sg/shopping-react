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
      hasSearched: false
    };
  }

  changeHandler = (event) => {
    this.setState({query: event.target.value});
  };

  clickHandler = () => {
    this.setState(({hasSearched}) => {
      return {hasSearched: !hasSearched};
    });
  };

  render() {
    return (
      <div className={styles['app-container']}>
        <div className={styles['search-container']}>
          Search
          <Search onChange={this.changeHandler} onClick={this.clickHandler} />
        </div>
        <div className={styles['product-container']}>
          Product
          <Product query={this.state.query} onClick={this.clickHandler} />
        </div>
        <div className={styles['cart-container']}>
          Cart
          <Cart />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
