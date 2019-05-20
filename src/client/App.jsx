import React from 'react';
import {hot} from 'react-hot-loader';

import Cart from './components/cart/cart';
import Form from './components/form/form';
import Results from './components/results/results';
import Product from './components/product/product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world hehe?',
      query: '',
      products: [],
      product: {},
      cart: []
    };
  }
  onSearchInputChange = (event) => {
    let searchInput = event.target.value;
    let newState = {query: searchInput};
    this.setState(newState);
  };
  onSearchSubmit = () => {
    const query = this.state.query;
    const url = '/products?query=' + query;
    let context = this;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        // console.log(JSON.stringify(myJson));
        let products = myJson.products;
        context.setState({products: products});
      });
  };
  onClickProduct = (event) => {
    let product = JSON.parse(event.target.attributes.value.value);
    // console.log(product);
    this.setState({product: product});
  };
  onClickCart = () => {
    let product = this.state.product;
    let cart = this.state.cart;
    cart.push(product);
    this.setState({cart: cart});
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Form onChangeHandler={this.onSearchInputChange} onClickHandler={this.onSearchSubmit} />
            <Results products={this.state.products} onClickProduct={this.onClickProduct} />
          </div>
          <div className="col">
            <Product product={this.state.product} onClickHandler={this.onClickCart} />
          </div>
          <div className="col">
            3rd col
            <Cart cart={this.state.cart} />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
