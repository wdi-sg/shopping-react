import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/search/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        searchInput: '',
        searchResult: []
      }
    }

    this.handleFormInput = this.handleFormInput.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleFormInput(event) {
    const formInput = event.target.value;
    this.setState({
      search: {
        ...this.state.search,
        searchInput: formInput
      }
    });
  }

  formSubmit() {
    const searchQuery = this.state.input;
    const URL = '/api/query?search=' + searchQuery;

    fetch(URL).then( (response) => {
      response.json().then( (data) => {
        this.setState({
          search: {
            searchInput: '',
            searchResult: data.items
          }
        })
      })
    })
  }

  render() {
    return (
      <div>
        <Search search={this.state.search} formSubmit={this.formSubmit} handleFormInput={this.handleFormInput} />
      </div>
    );
  }
}

export default hot(module)(App);
