import React, {Component} from 'react';

import Search from '../search/search';
import Product from '../product/product';

import styles from './style.scss';

class Main extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);

    this.state = {
      searchQuery: '',
      items: [],
      selectedItem: {}
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
      const {items} = JSON.parse(this.responseText);
      reactThis.setState({items});
    });

    oReq.open('GET', `http://localhost:3000/api/query?search=${searchQuery}`);
    oReq.send();
  }

  handleItemSelect(itemId) {
    const selectedItem = this.state.items.find((item) => item.itemId === itemId);
    this.setState({selectedItem});
  }

  render() {
    const {searchQuery, items, selectedItem} = this.state;

    return (
      <main className={styles.container}>
        <Search
          searchQuery={searchQuery}
          items={items}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
          onSelect={this.handleItemSelect}
        />
        <Product
          imageUrl={selectedItem.thumbnailImage}
          description={selectedItem.shortDescription}
          price={selectedItem.salePrice}
        />
      </main>
    );
  }
}

export default Main;
