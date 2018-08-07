import React from 'react';
import {hot} from 'react-hot-loader';

import Result from './result';
import Product from '../product/product'

class Search extends React.Component {
  render() {
    const results = this.props.search.searchResult.map( (results, index) => (
      <Result key={index} results={results} showProduct={this.props.showProduct} productId={index} />
    ))

    return (
      <div id='search-block'>
        <h3>Search</h3>
        <input onChange={(e) => this.props.handleFormInput(e)} value={this.props.search.searchInput} placeholder="Search Input" />

        <br />
        <button type="button" onClick={this.props.formSubmit}>Search</button>

        <br />
        <ul>{results}</ul>
      </div>
    )
  }
}

export default hot(module)(Search);
