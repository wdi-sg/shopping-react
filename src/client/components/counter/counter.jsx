import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
// import main_styles from '../../style.scss';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: 'sneakers',
      counters: [],
      counter_key: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let num = Math.random();
    let key = this.state.counter_key;
    let counterObject = {
      value: num,
      key: key
    };

    let newKey = key + 1;
    const newArray = [counterObject, ...this.state.counters];

    this.setState({counters: newArray, counter_key: newKey});
  }

  render() {
    let countersHTML = this.state.counters.map((counter) => {
      return <div key={counter.key}>{counter.value}</div>;
    });
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        <p className={styles.desc}>
          {this.props.message} : {this.state.banana}
        </p>
        {countersHTML}
      </div>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired
};

export default Counter;
