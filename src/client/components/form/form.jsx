import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      shop: 'Walmart'
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.shop}</p>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;
