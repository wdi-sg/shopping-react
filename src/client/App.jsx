import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world hehe?'
    };
  }

  render() {
    return (
      <div>
        <Form />
        Welcome. boo?
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
