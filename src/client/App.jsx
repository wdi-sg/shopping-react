import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

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
        <h1>Welcome to Walmart! Anime Slider :D</h1>
        <Form />

      </div>
    );
  }
}

export default hot(module)(App);