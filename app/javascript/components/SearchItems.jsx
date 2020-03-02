import React, { Component } from "react";
import axios from "axios";

export class SearchItems extends Component {
  productClickHandler = product => {
    const url = "/products/" + product + ".json";
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        product = response.data[0];
        this.props.liftToSearch(product);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(productID);
  };
  render() {
    // console.log(this.props);
    let filteredProducts = this.props.filteredProducts;

    return (
      <div>
        {filteredProducts.map(product => {
          const { id, name, price, description, url } = product;
          const linkToProduct = "/products/" + id;
          return (
            <div className="card my-2" key={id}>
              <div className="card-body">
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <a
                  href={linkToProduct}
                  onClick={e => {
                    e.preventDefault();
                    this.productClickHandler(id);
                  }}
                >
                  See more details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchItems;
