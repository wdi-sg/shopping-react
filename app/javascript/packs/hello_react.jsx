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
      products: []
    };
  }
  getProducts() {
    console.log("YAY");
    const url = "/products.json";

    axios
      .get(url)
      .then(response => {
        const data = response.data;

        this.setState({ products: data });
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
          <img src={products.image_url} />
          <div>
            <strong>Name:</strong>
            <p>{products.name}</p>
            <strong>Description:</strong>
            <p>{products.description}</p>
            <strong>Price($):</strong>
            <p>{products.price}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>All Products</h2>
        {products}

        <button
          onClick={() => {
            this.getProducts();
          }}
        >
          Click to See Products
        </button>
      </div>
    );
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
