import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

import Product from './components/product/product';
import Search from './components/search/search';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
   this.state = {
      searchInput: '',
      message: 'lalalalalal',
      counter : 0,
      queryResult: {}
    };
  }


  render() {
    return (
      <div className="row">

        <div className="col-4">
        <p className="text-center">Welcome. Search for food!</p>
        <Search message={this.state.message} />
        </div>


        <div className="col-4">
        <Product message={this.state.message} />
        </div>

        <div className="col-4">
        <Cart message={this.state.message} />
        </div>

      </div>
    );
  }
}

export default hot(module)(App);