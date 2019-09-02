import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter.jsx';
import Form from './components/form/form.jsx';
import Search from './components/search/search.jsx'
import Intrinio from './components/intrinio/intrinio.jsx'
import HelloWorldApp from './components/HelloWorldApp/HelloWorldApp.jsx'
/* let App.jsx be the parent. Search, Product and Carts shall be the
children components. This means the only place where you see this.state
is inside the parent, App.jsx class */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <React.Fragment>
        <Form />
        Welcome from the parent App.jsx component
        <Search />
        <Intrinio />
        <HelloWorldApp />
        <Counter message={this.state.message} />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);