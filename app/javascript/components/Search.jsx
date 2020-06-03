import React, { Component } from "react";
import axios from "axios";
import SearchItems from "./SearchItems";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      sortQuery: "",
      products: [],
      allProducts: []
    };
  }

  liftToSearch = product => {
    this.props.liftToApp(product);
  };

  onSearchChange = searchQuery => {
    searchQuery = searchQuery.toLowerCase();
    const url = "/products.json";
    this.setState({ searchQuery: searchQuery });

    axios
      .get(url)
      .then(response => {
        const data = response.data;

        const { searchQuery } = this.state;
        let filteredProducts = data.filter(product => {
          return product.name.toLowerCase().includes(searchQuery);
        });
        this.setState({ allProducts: response.data });
        this.setState({ products: filteredProducts });
        // this.setState({ posts: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onSelectChange = (sortQuery, products) => {
    // this.setState({ sortQuery: sortQuery });

    let sortedProducts;

    if (sortQuery === "alphabetical") {
      sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortQuery === "low to high") {
      sortedProducts = products.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    } else if (sortQuery === "high to low") {
      sortedProducts = products.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      });
    }

    this.setState({ products: sortedProducts, sortQuery: "" });
  };

  render() {
    const { products, searchQuery } = this.state;
    let filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchQuery);
    });
    return (
      <div className="col-4">
        <h6 style={{ width: "100%" }}>Search for products</h6>
        <div className="row mb-3">
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
                <option>Filter</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="low to high">Price ascending</option>
                <option value="high to low">Price descending</option>
              </select>
            ) : null}
          </div>
        </div>

        <SearchItems
          filteredProducts={filteredProducts}
          liftToSearch={this.liftToSearch}
        />
      </div>
    );
  }
}

export default Search;
