import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

/* naming conventions: Capitalize first word of the jsx file, and camelCase */

/* container component will always handle the logic and render (ReactDOM.render...)
the presentational component. While presentational component will just deal
with normal html */

/* some more conventions (based off airbnb):
Filename: Use PascalCase for filenames.
Reference Naming: Use PascalCase for React components and camelCase for their instances.

*/

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: 'sneakers',
      counters : [],
    };
      this.handleClick = this.handleClick.bind(this);
  }

    handleClick(){
        let num = Math.random();
        const newArray = [num, ...this.state.counters];
        this.setState({ counters : newArray });
    }

  render() {
    return (
      <React.Fragment>
          <button onClick={this.handleClick}>click me</button>
          <p className={styles.desc}>
            {this.props.message} : {this.state.banana}
          </p>
          {this.state.counters.map((counter)=>{ return <p>{counter}</p>})}
      </React.Fragment>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Counter;