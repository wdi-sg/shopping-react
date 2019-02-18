import React from 'react';
import { hot } from 'react-hot-loader';

import { Search } from './components/shopping/';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div>
        Welcome.
        <Search />
      </div>
    );
  }
}

export default hot(module)(App);