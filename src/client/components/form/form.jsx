import React from 'react';
import {hot} from 'react-hot-loader';

import styles from './style.scss';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input onChange={this.props.onChange} placeholder="Search Input" />
        <button onClick={this.props.onClick}>Search</button>
      </div>
    );
  }
}

export default Form;
