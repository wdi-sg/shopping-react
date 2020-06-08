import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Search from './Components/Search/Search.jsx';
import Product from './Components/Product/Product.jsx';
import Cart from './Components/Cart/Cart.jsx';
import styles from './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchInput, setSearchInput] = useState(null);
  const [products, setProducts] = useState(null);
  const [showProduct, setShowProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  function handleInputSubmit(e) {
    axios
      .get(`/products.json?q=${searchInput}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
    e.preventDefault();
  }

  function handleProductClick(e) {
    const product = products.filter(
      (product) => product.id == `${e.target.id}`
    )[0];
    setShowProduct(product);
    e.stopPropagation();
  }

  function handleAddToCart(e) {
    const product = products.filter(
      (product) => product.id == `${e.target.id}`
    )[0];
    setCartItems([product, ...cartItems])
  }
  console.log('cartItems:', cartItems);

  return (
    <div className="appCont col-12 container d-flex">
      <Search
        onInputChange={handleInputChange}
        onProductClick={handleProductClick}
        onInputSubmit={handleInputSubmit}
        products={products}
        onShowProduct={showProduct}
      />
      <Product showProduct={showProduct} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// document.addEventListener('DOMContentLoaded', () => {
//     ReactDOM.render(
//       App(),
//       document.body.appendChild(document.createElement('div')),
//     )}
// )
