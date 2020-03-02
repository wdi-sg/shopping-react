import React, { Component } from "react";
import axios from "axios";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      products: []
    };
  }

  onSearchChange = searchQuery => {
    searchQuery = searchQuery.toLowerCase();
    const url = "/products.json";
    this.setState({ searchQuery: searchQuery });

    console.log(searchQuery, "HOHO");
    console.log(this.state.searchQuery, "HIHI");

    axios
      .get(url)
      .then(response => {
        const data = response.data;

        this.setState({ products: data });
        // this.setState({ posts: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { products, searchQuery } = this.state;
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchQuery);
    });
    return (
      <div>
        <h1>Search for products</h1>
        <input
          type="text"
          onChange={e => {
            this.onSearchChange(e.target.value);
          }}
        />
        {filteredProducts.map(product => {
          const { id, name, price, description, url } = product;
          return (
            <div key={id}>
              <p>Name: {name}</p>
              <p>Price: {price}</p>
              <p>Description: {description}</p>
              <p>Url: {url}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
