import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Search from './components/search/search';

import styles from './style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <Search />
      </div>
    );
  }
}

export default hot(module)(App);
