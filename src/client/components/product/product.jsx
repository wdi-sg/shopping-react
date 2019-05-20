import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import main_styles from '../../style.scss';

class Product extends React.Component {

  render() {
    return (
      <div>
        <h4>Product Information</h4>
        <p>Name: {this.props.name}</p>
        <p>Price: ${this.props.price}</p>
        <p>Description: {this.props.description}</p>
      </div>
    );
  }
}

// Product.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Product;