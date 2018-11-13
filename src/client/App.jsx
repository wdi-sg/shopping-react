import React from 'react';
import {hot} from 'react-hot-loader';


//importing stuff from src/components
import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello'
    };
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);
