import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Product',
      counters : []
    };
  }



  render() {
    return (
      <div>
          <p className={styles.desc}>
            {this.props.message} : {this.state.text}
          </p>

      </div>
    );
  }
}

Product.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Product;