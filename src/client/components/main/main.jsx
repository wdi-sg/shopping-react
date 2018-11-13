import React, {Component} from 'react';

import Search from '../search/search';
import Product from '../product/product';
import Cart from '../cart/cart';

import styles from './style.scss';

class Main extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
      console.log(this.responseText);
      const {items} = JSON.parse(this.responseText);
      reactThis.setState({items});
    });

    oReq.open('GET', `http://localhost:3000/api/query?search=${searchQuery}`);
    oReq.send();
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
    total += subtotal * (1 + this.state.gst);

    this.setState({cartItems, subtotal, shipping, total: total.toFixed(2)});
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
        />
        <Product
          itemId={selectedItem.itemId}
          imageUrl={selectedItem.thumbnailImage}
          description={selectedItem.shortDescription}
          price={selectedItem.salePrice}
          onAddToCart={this.handleAddToCart}
        />
        <Cart
          cartItems={cartItems}
          onSelect={this.handleItemSelect}
          subtotal={subtotal}
          shipping={shipping}
          gst={gst}
          total={total}
        />
      </main>
    );
  }
}

export default Main;
