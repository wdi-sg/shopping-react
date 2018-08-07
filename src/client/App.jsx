import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        searchInput: '',
        searchResult: []
      },
      product: {
        visible: false,
        prodNumber: null
      },
      cart: {
        items: []
      }
    }

    this.handleFormInput = this.handleFormInput.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.showProduct = this.showProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleFormInput(event) {
    const formInput = event.target.value;
    this.setState({
      search: {
        ...this.state.search,
        searchInput: formInput
      }
    });
  }

  formSubmit() {
    const searchQuery = this.state.input;
    const URL = '/api/query?search=' + searchQuery;

    fetch(URL).then( (response) => {
      response.json().then( (data) => {
        this.setState({
          search: {
            searchInput: '',
            searchResult: data.items
          }
        })
      })
    })
  }

  showProduct(id) {
    this.setState({
      product: {
        visible: true,
        prodNumber: id
      }
    });
  }

  addToCart(item) {
    this.setState({
      cart: {
        items: [...this.state.cart.items, item]
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Search search={this.state.search} formSubmit={this.formSubmit} handleFormInput={this.handleFormInput} showProduct={this.showProduct} />
        </div>

        <div className="col-4">
          {this.state.product.visible &&
            <Product product={this.state.search.searchResult[this.state.product.prodNumber]} addToCart={this.addToCart} />
          }
        </div>

        <div className="col-4">
          <Cart items={this.state.cart.items} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
