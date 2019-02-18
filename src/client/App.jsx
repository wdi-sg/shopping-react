import React from 'react';
import { hot } from 'react-hot-loader';

// import Counter from './components/counter/counter';
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
        <h1>Fakemart :D</h1>
        <Form />
        {/* <Counter message={this.state.message} /> */}
      </div>
    );
  }
}

export default hot(module)(App);