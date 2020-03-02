import React, { Component } from "react";

export class SearchItems extends Component {
  productClickHandler = product => {
    this.props.liftToSearch(product);
  };
  render() {
    // console.log(this.props);
    let filteredProducts = this.props.filteredProducts;

    return (
      <div>
        {filteredProducts.map(product => {
          const { id, name, price, description, url } = product;
          return (
            <div className="card my-2" key={id}>
              <div className="card-body">
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <a
                  href="#"
                  onClick={() => {
                    this.productClickHandler(product);
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
