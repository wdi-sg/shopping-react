import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Item = ({itemId, name, onSelect}) => (
  <div className={styles.container} onClick={() => onSelect(itemId)}>
    <p>{name}</p>
  </div>
);

Item.propTypes = {
  itemId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Item;
