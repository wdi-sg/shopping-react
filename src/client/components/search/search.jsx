import React from 'react';

import styles from './style.scss';

class Search extends React.Component {

  constructor() {
    super();
    this.req = new XMLHttpRequest();
    this.state = {
      searchItem: ""
    };
  }




  render() {

    return (
        <div className = {styles.search }>
            <h2> Search </h2>
            <input placeholder = "search product" />
            <button >Search</button>
            <p> Sort by
                <select>
                    <option value = "price">Price</option>
                    <option value = "name">Name</option>
                </select>
            </p>
        </div>
    );
  }
}

export default Search;