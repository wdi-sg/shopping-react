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


        // Welcome.
        // <Counter message={this.state.message} />

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);