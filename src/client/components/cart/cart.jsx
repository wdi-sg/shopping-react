import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Cart extends React.Component {
    constructor() {
        super();
    }

    render() {
        let products = this.props.cart;
        let total = 0.0;
        let productsHTML = products.map((product, index) => {
            total = total + parseFloat(product.price.split('$')[1]);
            return (
                <tr key={product.id}>
                    <td onClick={this.props.deleteCartItem} index={index}>
                        X
                    </td>
                    <td className={styles.price}>{product.name}</td>
                    <td className={styles.price}>{product.price}</td>
                </tr>
            );
        });
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">X</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
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
    cart: PropTypes.array.isRequired,
    deleteCartItem: PropTypes.func.isRequired
};

export default Cart;
