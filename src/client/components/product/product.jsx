import React from 'react';

import styles from './style.scss';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className = {styles.name}>
        <h1>Product</h1>
      </div>
    );
  }
}

export default Product;
