import React from 'react';

import Item from '../item/item';

import styles from './style.scss';

const Search = ({searchQuery, items, onChange, onSearch, onSelect}) => (
  <div className={styles.container}>
    <h2>Search</h2>
    <input className={styles.name} onChange={(e) => onChange(e.currentTarget.value)} value={searchQuery} />
    <button onClick={onSearch}>Search</button>
    {items.length !== 0 &&
      items.map((item) => <Item key={item.itemId} itemId={item.itemId} name={item.name} onSelect={onSelect} />)}
  </div>
);

export default Search;
