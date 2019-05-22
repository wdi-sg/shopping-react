import React from 'react';
import styles from './style.scss';

class Form extends React.Component {

  render() {
    return (
      <div>
        <h4>🔍 Search</h4>
        <input value={this.props.searchTerm} className={styles.name} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Form;