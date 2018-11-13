import React, {Component} from 'react';

import Search from '../search/search';
import Product from '../product/product';
import Cart from '../cart/cart';

import styles from './style.scss';
import {Object} from 'es6-shim';

class Main extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);

    this.state = {
      searchQuery: '',
      items: [],
      selectedItem: {},
      cartItems: [],
      subtotal: 0,
      shipping: 0,
      gst: 0.07,
      total: 0
    };
  }

  handleChange(searchQuery) {
    this.setState({searchQuery});
  }

  handleSearch() {
    const reactThis = this;
    const {searchQuery} = this.state;

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function reqListener() {
      const {items} = JSON.parse(this.responseText);
      reactThis.setState({items});
    });

    oReq.open('GET', `http://localhost:3000/api/query?search=${searchQuery}`);
    oReq.send();
    this.setState({items: [], selectedItem: {}, cartItems: [], subtotal: 0, shipping: 0, total: 0});
  }

  handleSort(sortBy) {
    const items = [...this.state.items];
    if (sortBy === 'price') {
      items.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sortBy === 'name') {
      items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }

    this.setState({items});
  }

  handleItemSelect(itemId) {
    const selectedItem = this.state.items.find((item) => item.itemId === itemId);
    this.setState({selectedItem});
  }

  handleAddToCart(itemId) {
    const cartItem = this.state.items.find((item) => item.itemId === itemId);
    const cartItems = [...this.state.cartItems];
    cartItems.push(cartItem);

    let {subtotal, shipping, total} = this.state;
    subtotal += cartItem.salePrice;
    shipping += cartItem.salePrice * cartItem.standardShipRate;
    total = parseFloat((subtotal * (1 + this.state.gst)).toFixed(2));

    this.setState({cartItems, subtotal, shipping, total});
  }

  render() {
    const {searchQuery, items, selectedItem, cartItems, subtotal, shipping, gst, total} = this.state;

    return (
      <main className={styles.container}>
        <Search
          searchQuery={searchQuery}
          items={items}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
          onSelect={this.handleItemSelect}
          onSort={this.handleSort}
        />
        {Object.keys(selectedItem).length !== 0 && (
          <Product
            itemId={selectedItem.itemId}
            imageUrl={selectedItem.thumbnailImage}
            description={selectedItem.shortDescription}
            price={selectedItem.salePrice}
            onAddToCart={this.handleAddToCart}
          />
        )}
        {cartItems.length !== 0 && (
          <Cart
            cartItems={cartItems}
            onSelect={this.handleItemSelect}
            subtotal={subtotal}
            shipping={shipping}
            gst={gst}
            total={total}
          />
        )}
      </main>
    );
  }
}

export default Main;
