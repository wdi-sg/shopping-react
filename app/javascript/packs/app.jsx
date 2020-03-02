// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Search from "../components/Search";
import Product from "../components/Product";
import Cart from "../components/Cart";
import PropTypes from "prop-types";

export class App extends Component {
  state = {
    product: "",
    cart: []
  };

  liftToApp = product => {
    this.setState({ product: product });
  };

  addToCart = product => {
    this.setState({ cart: [product, ...this.state.cart] });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <Search liftToApp={this.liftToApp} />
          <Product addToCart={this.addToCart} product={this.state.product} />
          <Cart cartItems={this.state.cart} />
        </div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
