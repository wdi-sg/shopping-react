import React from 'react';
import {hot} from 'react-hot-loader';

import Product from './components/product/product';
import Search from './components/search/search';
import Cart from './components/cart/cart';

/*---------------------------------------------------------------- */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: {
        input: '',
        results:[]
      }
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);

  }

  formSubmit() {
    const searchQuery = this.state.search.input;
    console.log('Query made ',  searchQuery)
    const URL = '/api/query?search=' + searchQuery;
   

    fetch(URL).then( (response) => {
      response.json().then( (data) => {
        this.setState({
          search: {
            input: '',
            results: data.items
          }
        })
      })
    })
  }

  handleFormInput(event) {
    const formInput = event.target.value;
    console.log('Word key in', formInput)
    this.setState({
      search: {
        ...this.state.search,
        input: formInput
      }
    });
  }

  render() {
    return (
      <div class='row'>
        <div class="col s4">
          <h4>Search</h4>
          <Search
            search={this.state.search}
            formSubmit={this.formSubmit}
            handleFormInput={this.handleFormInput}
          />
        </div>
        <div class="col s4">
          <h4>Product</h4>
          <Product 
            allProduct={this.state.search.results}
          />
        </div>
        <div class="col s4">
          <h4>Cart</h4>
          <Cart />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
