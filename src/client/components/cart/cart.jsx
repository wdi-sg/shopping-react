import React from 'react';

import PropTypes from 'prop-types';

// import styles from './style.scss';

class Cart extends React.Component {
  constructor() {
    super();
  }

  render() {
    let products = this.props.cart;
    let total = 0.0;
    let productsHTML = products.map((product) => {
      total = total + parseFloat(product.price.split('$')[1]);
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <td scope="col">Price</td>
            </tr>
          </thead>
          <tbody>{productsHTML}</tbody>
        </table>
        <div className="row">
          <div className="col">Total</div>
          <div className="col">${total}</div>
        </div>
      </div>
    );
  }
}
Cart.propTypes = {
  cart: PropTypes.array.isRequired
};

export default Cart;
