import React from 'react';
import {hot} from 'react-hot-loader';

import Form from './components/form/form';
import Product from './components/product/product';

class App extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
    this.state = {
      input: '',
      items: [],
      searchQuery: []
    };
  }

  changeHandler(event) {
    this.setState({ input: event.target.value });
    console.log("input", event.target.value);
  }

  clickHandler(event) {
    console.log("clicked button")

    const searchInput = this.state.input;
    this.state.searchQuery.push(searchInput);

    const url = 'api/query?search=' + searchInput;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ items: data.items,
                                    searchQuery: this.state.searchQuery 
                                  }))
  }

  render() {
    let searchQueries = this.state.searchQuery.map( (query, id) => {
                        return <li key={id}> { query } </li>
                          })

    return (
      <div className="container">
        <div className="row col-sm-4">
          <h3>Search</h3>
          <Form onChange={this.changeHandler} onClick={this.clickHandler} />
          <br></br>
          <ul>
            {searchQueries}
          </ul>
        </div>
        <div className="row col-sm-4">
          <h3>Product</h3>
          <div>
            <Product search={this.state.items} />
          </div>
        </div>
        <div className="row col-sm-4">
          <h3>Cart</h3>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
