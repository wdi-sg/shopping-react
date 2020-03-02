// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import axios from "axios";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product: {}
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

  render() {
    console.log("RENDERRRRRING");
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
      <div>
        <h2>All Products</h2>
        {products}
        <Oneproduct
          product={this.state.product}
          getProducts={this.getProducts}
        />

        {/* <button
          onClick={() => {
            this.getProducts();
          }}
        >
          Click to See Products
        </button> */}
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
          <div>
            <strong>Name:</strong>
            <p>{product.name}</p>
            <strong>Description:</strong>
            <p>{product.description}</p>
            <strong>Price($):</strong>
            <p>{product.price}</p>
          </div>

          <button
            onClick={() => {
              this.getProducts();
            }}
          >
            Click to see all Products
          </button>
        </div>
      );
    } else {
      return (
        <div></div>
        // <button
        //   onClick={() => {
        //     this.getProducts();
        //   }}
        // >
        //   Click to see all Products
        // </button>
      );
    }
  }
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
