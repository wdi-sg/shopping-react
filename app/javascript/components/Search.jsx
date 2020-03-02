import React, { Component } from "react";
import axios from "axios";
import Products from "./Products";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      sortQuery: "",
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

        const { searchQuery } = this.state;
        let filteredProducts = data.filter(product => {
          return product.name.toLowerCase().includes(searchQuery);
        });

        this.setState({ products: filteredProducts });
        // this.setState({ posts: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onSelectChange = (sortQuery, products) => {
    // this.setState({ sortQuery: sortQuery });
    const sortedProducts = products.sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });

    this.setState({ products: sortedProducts });
  };

  render() {
    const { products, searchQuery } = this.state;
    let filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchQuery);
    });
    return (
      <div className="col-4">
        <h6 style={{ width: "100%" }}>Search for products</h6>
        <div className="row">
          <div className="col-6">
            <input
              style={{ width: "100%" }}
              type="text"
              onChange={e => {
                this.onSearchChange(e.target.value);
              }}
            />
          </div>
          <div className="col-6">
            {filteredProducts.length > 0 ? (
              <select
                onChange={e => {
                  this.onSelectChange(e.target.value, filteredProducts);
                }}
              >
                <option>Choose an option..</option>
                <option>Price</option>
              </select>
            ) : null}
          </div>
        </div>

        <Products filteredProducts={filteredProducts} />
      </div>
    );
  }
}

export default Search;
