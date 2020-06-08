import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Description(props) {
  return (
    <div className="result">
      <p> Description:</p>
      {props.description}
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string
};

export default Description;
