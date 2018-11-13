import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      items: 'sneakers'
    };
  }

  render() {
    return (
      <p className={styles.desc}>
        {this.props.message} : {this.state.items}
      </p>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired
};

export default Counter;
