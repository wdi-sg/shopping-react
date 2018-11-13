import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: "",
      results: ""
    };
    this.getInput = this.getInput.bind(this);
    this.getQuery = this.getQuery.bind(this);
  }

  getInput(event) {
    this.setState({entered: event.target.value})
  }

  getQuery(event) {
    event.preventDefault();
;
        const reactThis = this;

        const reqListener = function () {
            let results = JSON.parse(this.responseText);

            reactThis.setState({results: results});
        }

        let request = new XMLHttpRequest();
        request.addEventListener("load", reqListener);
        request.open("GET", "/api/query?search=" + this.state.search);
        request.send();

  };


  render() {
    console.log('app entered', this.state.entered);
    console.log('results', this.state.results);

    return (
      <div>
        <h1>Walmart</h1>
        <Form input={this.getInput} request={this.getQuery} output={this.state.results} />
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
