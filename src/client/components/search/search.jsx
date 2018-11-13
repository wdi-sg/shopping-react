import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log("THIS.PROPS IN SEARCH IS: ", this.props.result);
    return (
      <div>
        <h3>THIS.PROPS.TESTING!</h3>
        <input className={styles.name} onChange={this.props.items}/>
        <button onClick={this.props.search}>search</button>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired
  items: PropTypes.func.isRequired,
  result: PropTypes.array.isRequired
};

export default Search;
