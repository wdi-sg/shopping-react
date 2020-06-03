import React from "react";
import axios from "axios";
import Search from "./search";
import ItemDetail from "./displayitem";
import Cart from "./cart";
import { element } from "prop-types";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchItems: [],
      item: {},
      cart: [],
      totalCost: 0,
      grandTotal: 0,
    };
  }

  onSearch = (event) => {
    const url = "/items.json";
    let input = event.target.value.toUpperCase();
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);

        let searchItems = [];
        data.forEach((element) => {
          let string = element.name.toUpperCase();
          if (string.includes(input)) {
            searchItems.push(element);
          }
        });
        console.log(searchItems);
        this.setState({ searchItems });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  displayItem = (id) => {
    console.log(id);
    let item = this.state.searchItems.find((element) => {
      return element.id === id;
    });
    console.log(item);
    this.setState({ item });
  };

  addToCart = () => {
    let cart = this.state.cart;
    cart.push(this.state.item);
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
      totalCost = totalCost + cart[i].price;
    }
    let grandTotal = totalCost + 7;
    totalCost = totalCost.toFixed(2);
    grandTotal = parseFloat(grandTotal).toFixed(2);
    this.setState({ cart, totalCost, grandTotal });
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Search
            searchItems={this.state.searchItems}
            search={this.onSearch}
            displayItem={this.displayItem}
          />
        </div>
        <div className="col-4">
          <ItemDetail item={this.state.item} addToCart={this.addToCart} />
        </div>
        <div className="col-4">
          <Cart
            cart={this.state.cart}
            totalCost={this.state.totalCost}
            grandTotal={this.state.grandTotal}
            displayItem={this.displayItem}
          />
        </div>
      </div>
    );
  }
}
