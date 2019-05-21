import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import Product from './components/product/product';
import Searchresult from './components/searchresult/searchresult';
import ShoppingCart from './components/shoppingcart/shoppingcart';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hellod',
      product: {name: '', price: '', description: '', id: ''},
      result: '',
      query: '',
      cart: { items: [] }
    };

    this.handleChange = this.handleChange.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getCartproductId = this.getCartproductId.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    let query = event.target.value;

    // fetch("/products").then(res=>res.json().then(res=>this.setState({result:res})));
    // fetch("/search").then(res=>res.json().then(res=>this.setState({result:res})));
    // fetch(`/products/search/${query}`).then(res=>res.json().then(res=>this.setState({result:res})));
    fetch(`/products/search?search=${query}`).then(res=>res.json().then(res=>this.setState({result:res})));
    this.setState({query: query})
  }

  // receiving id from shoppingcart to see which item needs to be removed
  handleRemoval(id) {
    console.log("about to remove this id " + id);
    let cart = this.state.cart;
    let newCart = {...cart};
    console.log(newCart);
    console.log(newCart.items);


    // finding index in array of item we're removing
    var index = newCart.items.findIndex(p => p.id == id);
    newCart.items.splice(index, 1);
    this.setState({cart: newCart});

  }

  getProductInfo(id) {

    // Finding index array of specific product with its id
    //⚠️⚠️⚠️ HOW TO CREATE UNIQUE KEY????????????
    var index = this.state.result.products.findIndex(p => p.id == id);
    //⚠️

    let selectedProduct = this.state.result.products[index];

    this.setState(prevState => ({
    product: {
        ...prevState.product,
        name: selectedProduct.name,
        price: selectedProduct.price,
        description: selectedProduct.description,
        id: selectedProduct.id
    }
    }))
  }

  // receiving product id from "add to cart"
  // sending it to shoppingcart component
  getCartproductId(id) {

    console.log("sending id from ADD TO CART to shopping ccard component " + id)

    var index = this.state.result.products.findIndex(p => p.id == id);
    let selectedProduct = this.state.result.products[index];

    // adding products into shopping cart
    this.setState({ cart: {...this.state.cart, items: [...this.state.cart.items, {
                            id: id,
                            name: selectedProduct.name,
                            price: selectedProduct.price,
                            description: selectedProduct.description
                }]} });

  }

  render() {

    return (
      <div className="row">
        <div className="col-4">
            <Form onChange={this.handleChange} searchTerm={this.state.query}/>
            <Searchresult results={this.state.result} query={this.state.query} idCallback={this.getProductInfo}/>
        </div>
        <div className="col-4">
            <Product name={this.state.product.name} price={this.state.product.price} description={this.state.product.description} id={this.state.product.id} cartProductId={this.getCartproductId} />
        </div>
        <div className="col-4">
            <ShoppingCart cartInfo={this.state.cart} itemToRemove={this.handleRemoval} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);