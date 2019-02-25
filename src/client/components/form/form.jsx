import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'this.state.money',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.monkey}</p>
        <input className={styles.name}/>
      </div>
    );
  }
}

export default Form;
