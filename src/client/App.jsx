import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

import {Search} from './components/search/search';
import {Product} from './components/product/product';
import {Cart} from './components/cart/cart'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Shopping React Cart',
      result: [],
      testItems: "Bananas"
    };
  }



  render() {

    let title = this.state.title;
    return (
      <React.Fragment>
      <h1> {title} </h1>
      <div class="row">
      <Search />
      <Product />
      <Cart />
      </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);


        // <Form />
        // Welcome.
        // <Counter message={this.state.message} />