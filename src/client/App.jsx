import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      message: 'hello',
      input: '',
      query: ''
    };
  }

  changeHandler(event){
    this.setState({
      input: event.target.value
    });
  }

  clickHandler(){
    this.setState({

    })
  }

  render() {


    return (
      <div>
        Welcome.
        <Counter message={this.state.message} />
        {results}
      </div>
    );
  }
}

export default hot(module)(App);
