// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Search from "../components/Search";
import Product from "../components/Product";
import Cart from "../components/Cart";
import Slider from "react-slick";
import axios from "axios";
import PropTypes from "prop-types";

class SimpleSlider extends React.Component {
  state = {
    allProducts: []
  };

  allProducts = () => {
    if (this.state.allProducts.length === 0) {
      const url = "/products.json";
      axios
        .get(url)
        .then(response => {
          this.setState({ allProducts: response.data });
          // this.setState({ posts: data });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    console.log(this.state.allProducts);
    this.allProducts();
    const { allProducts } = this.state;
    var settings = {
      dots: false,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const images = allProducts.map(product => {
      return (
        <div key={product.id}>
          <img style={{ margin: "0 auto" }} src={product.url} />
        </div>
      );
    });
    return <Slider {...settings}>{images}</Slider>;
  }
}
export class App extends Component {
  state = {
    product: "",
    cart: []
  };

  deleteFromCart = itemToDelete => {
    console.log("IN APPPPP");

    const remainingItems = this.state.cart.filter(item => {
      return item !== itemToDelete;
    });

    this.setState({ cart: remainingItems });
  };

  liftToApp = product => {
    this.setState({ product: product });
  };

  addToCart = product => {
    this.setState({ cart: [product, ...this.state.cart] });
  };

  render() {
    return (
      <div>
        <SimpleSlider />
        <div className="container">
          <div className="row mt-5">
            <Search liftToApp={this.liftToApp} />
            <Product addToCart={this.addToCart} product={this.state.product} />
            <Cart
              cartItems={this.state.cart}
              deleteFromCart={this.deleteFromCart}
            />
          </div>
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
