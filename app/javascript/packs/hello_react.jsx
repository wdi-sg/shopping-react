// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import axios from "axios";

// import { Button } from "shards-react";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product: {},
      cart: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    console.log("YAY");
    const url = "/products.json";

    axios
      .get(url)
      .then(response => {
        const data = response.data;
        this.setState({ products: data, product: {} });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getsingleProduct(id) {
    const url = "/products/" + id + ".json";

    axios
      .get(url)
      .then(response => {
        const data = response.data;
        this.setState({ products: [], product: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addCart(product) {
    let cart = this.state.cart;
    cart.push(product);
    let selectedProduct = this.state.products.filter(
      element => element == product
    );
    this.setState({ products: product, selectedProduct: selectedProduct });
    console.log(selectedProduct);
    console.log(cart);
  }

  render() {
    console.log(this.state.products);

    const products = this.state.products.map((products, index) => {
      console.log(products);
      return (
        <div>
          <strong>Name:</strong>
          <p>{products.name}</p>
          <button
            onClick={() => {
              this.getsingleProduct(products.id);
            }}
          >
            Click to see this Product
          </button>
        </div>
      );
    });

    return (
      <div className="container">
        <h2>All Products</h2>
        {products}
        <Oneproduct
          product={this.state.product}
          getProducts={this.getProducts}
        />
      </div>
    );
  }
}

export default class Oneproduct extends React.Component {
  getProducts() {
    this.props.getProducts();
  }
  render() {
    let product = this.props.product;
    if (Object.keys(product).length > 0) {
      return (
        <div>
          <img src={product.image_url} />
          <strong>Name:</strong>
          <p>{product.name}</p>
          <strong>Description:</strong>
          <p>{product.description}</p>
          <strong>Price($):</strong>
          <p>{product.price}</p>

          <button
            onClick={() => {
              this.getProducts();
            }}
          >
            Click to see all Products
          </button>
          <Cart addCart={this.addCart} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export class Cart extends React.Component {
  addCart(event, product) {
    this.props.addCart(product);
  }
  render() {
    let cartList = this.props.products((product) => {
    return (
      <div>
        <img src={product.image_url} />
        <strong>Name:</strong>
        <p>{product.name}</p>
        <strong>Description:</strong>
        <p>{product.description}</p>
        <strong>Price($):</strong>
        <p>{product.price}</p>

        <button
          onClick={event => {
            this.addCart(event, product);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  })
  return (
  <ol>{cartList}</ol>
  );
}

const Hello = props => <div>Hello {props.name}!</div>;

Hello.defaultProps = {
  name: "David"
};

Hello.propTypes = {
  name: PropTypes.string
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Products name="React" />,
    document.body.appendChild(document.createElement("div"))
  );
});
