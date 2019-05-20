import React from 'react';

import PropTypes from 'prop-types';

// import styles from './style.scss';

class Results extends React.Component {
  constructor() {
    super();
  }

  render() {
    let products = this.props.products;
    let productsHTML = products.map((product) => {
      return (
        <tr key={product.id} onClick={this.props.onClickProduct}>
          <td value={JSON.stringify(product)}>{product.name}</td>
        </tr>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>{productsHTML}</tbody>
      </table>
    );
  }
}
Results.propTypes = {
  products: PropTypes.array.isRequired,
  onClickProduct: PropTypes.func.isRequired
};

export default Results;
