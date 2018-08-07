import React from 'react';
import {hot} from 'react-hot-loader';

import Result from './result';
import Product from '../product/product'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        visible: false,
        prodNumber: null
      }
    }
    this.showProduct = this.showProduct.bind(this);
  }

  showProduct(id) {
    this.setState({
      product: {
        visible: true,
        prodNumber: id
      }
    })
  }

  render() {
    const results = this.props.search.searchResult.map( (results, index) => (
      <Result key={index} results={results} showProduct={this.showProduct} productId={index} />
    ))

    return (
      <div className='row'>
        <div className='col-4'>
          <div id='search-block'>
            <h3>Search</h3>
            <input onChange={(e) => this.props.handleFormInput(e)} value={this.props.search.searchInput} placeholder="Search Input" />

            <br />
            <button type="button" onClick={this.props.formSubmit}>Search</button>

            <br />
            <ul>{results}</ul>
          </div>
        </div>
        <div className='col-4'>
          {this.state.product.visible &&
            <Product product={this.props.search.searchResult[this.state.product.prodNumber]} />
          }
        </div>
      </div>
    )
  }
}

export default hot(module)(Search);
