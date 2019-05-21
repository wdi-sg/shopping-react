import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import Sort from './sort.jsx';

class Searchresult extends React.Component {

    constructor() {
        super();
        this.showProduct = this.showProduct.bind(this);
    }

    showProduct(e){
        let productId = e.target.id;
        console.log("this is the product's id " + productId);
        this.props.idCallback(productId);
    }

    render() {
        console.log("query" + this.props.query)
        console.log(this.props.results)

        let searchResults;

        if (this.props.results.products) {
            searchResults = this.props.results.products.map((prod) => {
                return <li key={prod}>{prod.name} <button onClick={this.showProduct} id={prod.id}>👁</button> </li>
            })
        } else {
            searchResults = "";
        }
    return (
      <div>
        <Sort />
        <h4>Results for {this.props.query}</h4>
        <ul>{searchResults}</ul>
      </div>
    );
  }
}

// Product.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Searchresult;