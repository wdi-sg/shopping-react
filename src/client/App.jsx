import React from 'react';
import { hot } from 'react-hot-loader';
import Search from './components/search/search';

class App extends React.Component {
  render() {
    return (
        <div>
            <Search />
        </div>
    );
  }
}

export default hot(module)(App);