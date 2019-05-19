import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

import Navbar from './components/home/navbar';


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
        <Navbar />
      </div>
    );
  }
}

export default hot(module)(App);