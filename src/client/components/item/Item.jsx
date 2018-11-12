import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Item = ({name}) => (
  <div className={styles.container}>
    <p>{name}</p>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired
};

export default Item;
