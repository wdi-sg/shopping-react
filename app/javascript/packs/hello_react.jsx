// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Cart from "./Cart";

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
    // this.addCart = this.addCart.bind(this);
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
        this.setState({ product: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addCart(id) {
    let { cart } = this.state;
    console.log(this.state.products);
    let [selectedProduct] = this.state.products.filter(
      element => element.id == id
    );

    cart.push(selectedProduct);

    this.setState({ cart });
  }

  render() {
    // console.log(this.state.products);

    const products = this.state.products.map((products, index) => {
      console.log(products);
      return (
        <div className="col-4">
          <br></br>
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
      <div className="container-fluid">
        <div className="row">
          <Cart cart={this.state.cart} />

          <Oneproduct
            product={this.state.product}
            getProducts={this.getProducts}
            addCart={x => this.addCart(x)}
          />

          <h2>All Products</h2>
          {products}
        </div>
      </div>
    );
  }
}

class Oneproduct extends React.Component {
  getProducts() {
    this.props.getProducts();
  }
  render() {
    let product = this.props.product;
    if (Object.keys(product).length > 0) {
      return (
        <div className="col-4">
          <img src={product.image_url} />
          <strong>Name:</strong>
          <p>{product.name}</p>
          <strong>Description:</strong>
          <p>{product.description}</p>
          <strong>Price($):</strong>
          <p>{product.price}</p>

          <button
            value={product.id}
            onClick={event => {
              this.props.addCart(event.target.value);
            }}
          >
            Add to Cart
          </button>

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
      return <div></div>;
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
