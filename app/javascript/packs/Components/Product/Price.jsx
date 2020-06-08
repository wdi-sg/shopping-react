import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Price(props) {
  return (
    <div className="result">
      <p> Price:</p>
      {`${props.price}`}
    </div>
  );
}


export default Price;
