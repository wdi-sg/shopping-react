import React from 'react';

import PropTypes from 'prop-types';

// import styles from './style.scss';

class Cart extends React.Component {
  constructor() {
    super();
  }

  render() {
    let products = this.props.cart;
    let productsHTML = products.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <td scope="col">Price</td>
          </tr>
        </thead>
        <tbody>{productsHTML}</tbody>
      </table>
    );
  }
}
Cart.propTypes = {
  cart: PropTypes.array.isRequired
};

export default Cart;
