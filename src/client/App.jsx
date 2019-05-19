import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Search from './components/search/search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'bloodred',
    };
  }

  render() {
    return (
      <div>
        Welcome.

        <Search/>

      </div>
    );
  }
}

export default hot(module)(App);

// <Counter message={this.state.message} />