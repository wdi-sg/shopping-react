import React, { Component } from "react";
import axios from "axios";

export class SearchItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 5,
      showResults: false
    };
  }
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

  handleClick(e) {
    this.setState({ currentPage: Number(event.target.id), clicked: true });
  }
  render() {
    const { currentPage, itemsPerPage } = this.state;
    // console.log(this.props);
    let filteredProducts = this.props.filteredProducts;
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProdct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(
      indexOfFirstProdct,
      indexOfLastProduct
    );

    const renderProducts = currentProducts.map(product => {
      const { id, name, price, description, url } = product;
      const linkToProduct = "/products/" + id;
      return (
        <div className="card my-2" key={id}>
          <div className="card-body">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Price:</strong> ${price}
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
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(filteredProducts.length / itemsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div
          className="d-inline"
          style={{ textDecoration: "underline", cursor: "pointer" }}
          key={number}
          id={number}
          onClick={this.handleClick.bind(this)}
        >
          {number}
        </div>
      );
    });

    return (
      <div>
        {filteredProducts.length > 0 ? (
          <p>
            <strong>Page {this.state.currentPage} results: </strong>
          </p>
        ) : null}
        <div>{renderProducts}</div>
        <div className="d-flex justify-content-between">
          {renderPageNumbers}
        </div>
      </div>
    );
  }
}

export default SearchItems;
