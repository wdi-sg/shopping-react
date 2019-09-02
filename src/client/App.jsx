import React from 'react';
import { hot } from 'react-hot-loader';
import styles from 'style.scss';

import SearchList from './components/searchlist/searchlist';
import ProductView from './components/productview/productview';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <SearchList/>
        <ProductView/>
        <Cart/>
      </div>
    );
  }
}

export default hot(module)(App);
