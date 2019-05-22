import React from 'react';

import styles from './styles.scss';

class Cart extends React.Component {
    render() {
        if (this.props.cart.length > 0) {
            const shipping = 7;
            const subTotal = this.props.cart.map((item) => {
                                    return Number(item.price.replace("$", ''))
                             })
                             .reduce((total, price) => {
                                    return total + price;
                             });

            const gst = (subTotal + shipping) * 0.07;
            const total = subTotal + shipping + gst;

            const elements = this.props.cart.map((item, index) => {
                return (
                        <tr className={ styles.cartItem } key={ index }>
                            <td>
                                { index + 1}
                            </td>
                            <td>
                                { item.name }
                            </td>
                            <td>
                                { item.description }
                            </td>
                            <td>
                                <span className= { styles.title }>Price: </span>
                                { item.price }
                            </td>

                            <td>
                                <button
                                    id={ item.id }
                                    className= "btn btn-danger"
                                    onClick= { (e) => { this.props.removeProductToCartHandler(e) } }
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                );
            });

            return (
                <div className= { this.props.displayCart? styles.showCart: styles.hideCart}>
                    <div
                        className= { styles.close }
                        onClick= { () => { this.props.hideCartHandler() } }
                    >
                        Close [X]
                    </div>
                    <h3>Shopping Cart</h3>
                    <br/>
                    <table className="table table-striped" id={styles.chicken}>
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Description</th>
                              <th scope="col">Price</th>
                              <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { elements }
                        </tbody>
                    </table>

                    <hr/>

                    <div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>Sub-Total: </span>
                            ${ subTotal.toFixed(2) }
                        </div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>Shipping: </span>
                            ${ shipping.toFixed(2) }
                        </div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>GST (7%): </span>
                            ${ gst.toFixed(2) }
                        </div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>Grand Total: </span>
                            ${ total.toFixed(2) }
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className= { this.props.displayCart? styles.showCart: styles.hideCart }>
                    <div
                        className= { styles.close }
                        onClick= { () => { this.props.hideCartHandler() } }
                    >
                        Close [X]
                    </div>
                    <h3>Shopping Cart</h3>
                    <br/>
                    You have an empty shopping cart!
                </div>
            );
        }
    }
}

export default Cart;