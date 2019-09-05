import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

import styles from './style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
      selectedProduct: null,
      cartProducts: [],
    };
    this.selectProduct = this.selectProduct.bind(this);
    this.addToCart = this.addToCart.bind(this)
  }

  selectProduct(event) {
    console.log("event.target.innerText" + event.target.innerText)
    this.state.selectedProduct = this.state.products.filter(x => x.name === event.target.innerText)[0]
    this.setState({ selectedProduct: this.state.selectedProduct })
    console.log(this.state.selectedProduct)
  }

  addToCart(event) {
    this.state.cartProducts.push(this.state.selectedProduct)
    this.setState({ cartProducts: this.state.cartProducts })
    console.log(this.state.cartProducts)
  }


  componentDidMount() {
    let thisState = this;
    var callBackHandler = function () {
      console.log("componentDidMount")
      thisState.state.products = JSON.parse(this.responseText);
      //thisState.setState({products:resultProducts.products});
      thisState.setState({ products: thisState.state.products.products });
    };

    var request = new XMLHttpRequest();
    request.addEventListener("load", callBackHandler);
    request.open("GET", "/products");
    request.send();
  }

  render() {
    return (
      <div className={styles.serviceBox}>
        <div className={styles.serviceBox1}>
          <h2>Search Product</h2>
          <Search
            products={this.state.products}
            selectProduct={this.selectProduct} />
        </div>
        <div className={styles.serviceBox2}>
          <h2>Selected Product</h2>
          <Product
            product={this.state.selectedProduct}
            addToCart={this.addToCart}
          />
        </div>
        <div className={styles.serviceBox3}>
          <h2>Products in Cart</h2>
          <Cart
            cartProducts={this.state.cartProducts}
          />
        </div>


      </div>
    );
  }
}

export default hot(module)(App);
