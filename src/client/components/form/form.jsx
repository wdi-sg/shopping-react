import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Form = ({value, onChange, onSearch}) => (
  <div>
    <input className={styles.name} onChange={(e) => onChange(e.currentTarget.value)} value={value} />
    <button onClick={onSearch}>Search</button>
  </div>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Form;
