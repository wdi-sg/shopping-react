import React from 'react';

import Item from '../item/item';

import styles from './style.scss';

const Search = ({searchQuery, items, onChange, onSearch, onSelect, onSort}) => (
  <div className={styles.container}>
    <h2>Search</h2>
    <input className={styles.name} onChange={(e) => onChange(e.currentTarget.value)} value={searchQuery} />
    <button onClick={onSearch}>Search</button>
    <select onChange={(e) => onSort(e.target.value)} defaultValue="">
      <option value="" disabled>
        Sort By...
      </option>
      <option value="price">Price</option>
      <option value="name">Name</option>
    </select>
    {items.length !== 0 &&
      items.map((item) => <Item key={item.itemId} itemId={item.itemId} name={item.name} onSelect={onSelect} />)}
  </div>
);

export default Search;
