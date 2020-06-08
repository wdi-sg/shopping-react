import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult.jsx';
import styles from './styles.scss'

function Search(props) {
  function handleChange(e) {
    props.onInputChange(e)
  }

  function handleSubmit(e) {
    props.onInputSubmit(e)
  }

  const searchResults = props.products
    ? props.products.map((product) => {
        return (
          <SearchResult
            key={product.id}
            result={product}
            onProductClick={props.onProductClick}
          />
        );
      })
    : null;

  return (
    <div className="searchCont container col-4">
      <p>Search Products</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput" />
        <input onChange={handleChange} id="searchInput" type="text" />
        <button type="submit">Search</button>
      </form>
      {searchResults}
    </div>
  );
}

export default Search;
