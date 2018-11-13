import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: "hello",
      input: ''
    };
  }
  render() {
    console.log("THIS IN SEARCH IS: ", this.props);
    console.log("RESPONSE TEXTTTTTTT: ", this.responseText);
    return (
      <div>
        <p>{this.state.monkey}</p>
        <input className={styles.name} />
        <button onClick={this.searchItem}>Search</button>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

export default Search;
