import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      search: 'Search',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.search}</p>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;
