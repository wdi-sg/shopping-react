import React, { Component } from "react";

export class Products extends Component {
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
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
                <p>Url: {url}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
