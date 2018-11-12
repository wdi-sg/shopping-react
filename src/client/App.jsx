import React from 'react';
import {hot} from 'react-hot-loader';
import Search from './components/search/search';
import Show from './components/show/show';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      item: {}
    };
    this.searchItem = this.searchItem.bind(this);
    this.sort = this.sort.bind(this);
    this.display = this.display.bind(this);
  }

  searchItem(input) {
    const url = `http://api.walmartlabs.com/v1/search?query=${input}&format=json&apiKey=bsh6u8q5fdw95yrcy6wkvj75`;
    const reactThis = this;
    function responseHandler() {
      const items = JSON.parse(this.responseText);
      reactThis.setState({list: items.items});
    }
    const request = new XMLHttpRequest();
    request.addEventListener('load', responseHandler);
    request.open('GET', url);
    request.send();
  }

  sort(sortby) {
    if (sortby === 'desc') {
      const newArray = this.state.list.sort((a, b) => {
        if (a.salePrice > b.salePrice) {
          return -1;
        } else if (a.salePrice < b.salePrice) {
          return 1;
        }
        return 0;
      });
      this.setState({list: newArray});
    } else if (sortby === 'asc') {
      const newArray = this.state.list.sort((a, b) => {
        if (a.salePrice < b.salePrice) {
          return -1;
        } else if (a.salePrice > b.salePrice) {
          return 1;
        }
        return 0;
      });
      this.setState({list: newArray});
    }
  }

  display(e) {
    this.state.item = e;
    this.setState({item: this.state.item});
    console.log(this.state.item)
  };

  render() {
    return (
      <div>
        <Search search={this.searchItem} sort={this.sort} display={this.display} list={this.state.list} />
        <Show item={this.state.item} />
      </div>
    );
  }
}

export default hot(module)(App);
