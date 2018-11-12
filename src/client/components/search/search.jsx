import React, {Component} from 'react';

import Form from '../form/form';

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
    const {searchQuery} = this.state;

    return (
      <div>
        <Form onChange={this.handleChange} onSearch={this.handleSearch} value={searchQuery} />
      </div>
    );
  }
}

export default Search;
