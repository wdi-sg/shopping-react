import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Product extends React.Component {
 

  render() {
    return (
      <div>
          
          <p className={styles.desc}>
            {this.props.item.name} 
          </p>
          <p className={styles.desc}>
            {this.props.item.price} 
          </p>
          <p className={styles.desc}>
            {this.props.item.description} 
          </p>
      </div>
    );
  }
}


export default Product;