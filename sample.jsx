psql -d DATABASE_NAME -U USERNAME -f tables.sql
psql -d DATABASE_NAME -U USERNAME -f seed.sql


import 'babel-polyfill';
import 'airbnb-browser-shims';
import 'sanitize.css/sanitize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form/form'
// global styles
import './style.scss';


class App extends React.Component {
    render() {
        return(
            <div className = "main-container">
                <h1> Shop Bee </h1>
                <Form/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

import React from 'react';
import { hot } from 'react-hot-loader';
import Counter from './components/counter/counter';
import Form from './components/form/form';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',xs
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