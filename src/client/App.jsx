import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/search/search';
// import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Item'
    };
  }

  render() {
    return (
      <div>
        <h2>Search the Walmart Store</h2>
        <Search message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
