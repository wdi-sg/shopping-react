/*
- 1 parent and 3 component

- Search
  setState:
  input, results

- Product
  setState:
  selectedProduct

- Cart
  setState:
  cartItem

*/


import React from 'react';
import {hot} from 'react-hot-loader';

import Product from './components/product/product';
import Search from './components/search/search';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      
      search: {
        input: '',
        results:[]
      },
      product: {
        selectedProduct: null
      },
      cart: {
        cartItem: []
      }
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.displayProduct = this.displayProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

  formSubmit() {
    const searchQuery = this.state.search.input;
    console.log('Query made', searchQuery)
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

  changeHandler(event){
    console.log('Word key in', event.target.value)
    this.setState({
      search:{
        ...this.state.search,
        input: event.target.value
      }
    });
  };

  displayProduct(index){
    const productId = this.state.search.results[index]; //search for the product that has been pressed
    productId['index'] = index;
    this.setState({
      product:{
        selectedProduct: productId
      }
    })
  };

  addToCart(index){
    const list = this.state.cart.cartItem;
    const selectedItem = this.state.search.results[index];
    list.push(selectedItem);
    this.setState({
      cart:{
        cartItem: list
      }
    })
  };

  render() {
    console.log(this.state.cart.cartItem)
    return (
      <div class='row'>
        <div class="col s4">
          <h4>Search</h4>
          <Search
            changeHandler={this.changeHandler}
            formSubmit={this.formSubmit}
            showAllProduct={this.state.search.results}
            displayProduct={this.displayProduct} 
          />
        </div>
        {this.state.product.selectedProduct && (
          <div class="col s4">
          <h4>Product</h4>
          <Product
            selectedProduct={this.state.product.selectedProduct}
            addToCart={this.addToCart}
          />
          </div>
        )}
        <div class="col s4">
          <h4>Cart</h4>
          <Cart cart={this.state.cart.cartItem}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
