import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <p>{this.props.userInput}</p>
        <input onChange={this.props.inputChange} className={styles.name} placeholder="Search" />
        <button onClick={this.props.clickSearch}>Search</button>
      </div>
    );
  }
}

export default Form;
