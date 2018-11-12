import React, {Component} from 'react';

import Form from '../form/form';
import Item from '../item/Item';

import styles from './style.scss';

class Search extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      searchQuery: '',
      queryData: {}
    };
  }

  handleChange(searchQuery) {
    this.setState({searchQuery});
  }

  handleSearch() {
    const reactThis = this;
    const {searchQuery} = this.state;

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function reqListener() {
      console.log(this.responseText);
      const queryData = JSON.parse(this.responseText);
      reactThis.setState({queryData});
    });

    oReq.open('GET', `http://localhost:3000/api/query?search=${searchQuery}`);
    oReq.send();
  }

  render() {
    const {searchQuery, queryData} = this.state;

    return (
      <div className={styles.container}>
        <h2>Search</h2>
        <Form onChange={this.handleChange} onSearch={this.handleSearch} value={searchQuery} />
        {Object.keys(queryData).length !== 0 &&
          queryData.items.map((item) => <Item key={item.itemId} name={item.name} />)}
      </div>
    );
  }
}

export default Search;
