import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';


class Sort extends React.Component {

    render() {
    return (
      <div>
       <select onChange={this.props.handleChange}>
            <option>--Sort by price--</option>
            <option>Lowest to highest</option>
            <option>Highest to lowest</option>
       </select>
      </div>
    );
  }
}

export default Sort;