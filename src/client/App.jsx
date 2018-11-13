import React from 'react';
import {hot} from 'react-hot-loader';
import Form from './components/form/form';
import styles from './styles/default.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Search Result(s)'
    };
  }

  render() {
    return (
      <div className={styles.appcontainer}>
        <Form message={this.state.message}/>
      </div>
    );
  }
}

export default hot(module)(App);
