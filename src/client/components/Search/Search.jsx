import React from 'react';

// import PropTypes from 'prop-types';

// import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input onChange={this.props.onChange} />
        <button onClick={this.props.onClick}>search</button>
      </div>
    );
  }
}

// Search.propTypes = {
// message: PropTypes.string.isRequired
// };

export default Search;
