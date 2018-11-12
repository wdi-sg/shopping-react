import React from 'react';
import {hot} from 'react-hot-loader';

import Main from './components/main/main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default hot(module)(App);
