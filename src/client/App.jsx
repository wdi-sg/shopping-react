import React from 'react';
import { hot } from 'react-hot-loader';

// import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div>
        <Form />
        {/* Welcome. */}
        {/* <Counter message={this.state.message} /> */}
      </div>
    );
  }
}

export default hot(module)(App);