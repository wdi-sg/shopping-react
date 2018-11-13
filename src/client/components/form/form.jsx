import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'Search'
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.monkey}</p>
      </div>
    );
  }
}

export default Form;
