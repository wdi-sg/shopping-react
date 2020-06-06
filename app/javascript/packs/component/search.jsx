import React, { useState } from "react";

function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  function searchInputChange() {}

  const eachProduct = props.searchResults.map((product) => {
    return (
      <li
        key={product.id}
        data-id={product.id}
        className="product-list-item"
        onClick={() => {
          props.clickItem(event);
        }}
      >
        <a href="#" className="product-link">
          <span>{product.name}</span>
        </a>
      </li>
    );
  });

  return (
    <div>
      <h1>Welcome to my shop</h1>
      <form>
        <div className="form-group">
          <label></label>
          <br />
          <input
            onChange={() => {
              props.searchChange(event);
            }}
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Search the product here"
            value={props.name}
            className="field"
          />
        </div>
      </form>
      <div className="product-list">{eachProduct}</div>
    </div>
  );
}
export default Search;
