import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
    this.searchProduct = this.searchProduct.bind(this);
  }

  searchProduct(input) {
    const reactThis = this;

    function reqListener() {
      console.log('RESPONSE TEXT:', this.responseText);

      const data = JSON.parse(this.responseText);

      reactThis.setState({ result: data.items });
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', `/api/query?search=${input}`);
    oReq.send();
  }

  render() {
    return (
      <div>
        <Search searchProduct = {this.searchProduct} search = {this.state.result} />
        <Product />
      </div>
    );
  }
}

export default hot(module)(App);
