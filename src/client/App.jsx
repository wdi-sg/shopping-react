import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import jsonData from '../../example-result.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world hehe?',
      data: jsonData,
      query: '',
      test: ''
    };
  }
  onSearchInputChange = (event) => {
    let searchInput = event.target.value;
    let newState = {query: searchInput};
    this.setState(newState);
  };
  onSearchSubmit = () => {
    const query = this.state.query;
    fetch('/products')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.products);
        console.log(query);
      });
  };

  render() {
    return (
      <div>
        <Form onChangeHandler={this.onSearchInputChange} onClickHandler={this.onSearchSubmit} />
        Welcome. boo?
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
