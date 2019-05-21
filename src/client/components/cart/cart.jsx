import React from 'react';
import Result from '../result/result';

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

            const elements = this.props.cart.map( (item, index) => {
                return (
                        <div
                            className= { styles.cart }
                            key={ index }
                        >
                            <p><span className= { styles.title }>Name: </span>{ item.name }</p>
                            <p><span className= { styles.title }>Description: </span>{ item.description }</p>
                            <p><span className= { styles.title }>Price: </span>{ item.price }</p>
                            <button
                                className= "btn btn-danger"
                                id={ item.id }
                                onClick= { (e) => { this.props.removeProductToCartHandler(e) } }
                            >
                                Remove from Cart
                            </button>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    );
                });

            return (
                <div>
                    <h4>Shopping Cart</h4>
                    { elements }

                    <hr/>
                    <div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>Sub-Total: </span>${ subTotal.toFixed(2) }
                        </div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>Shipping: </span>${ shipping.toFixed(2) }
                        </div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>GST (7%): </span>${ gst.toFixed(2) }
                        </div>
                        <div className= { styles.payment }>
                            <span className= { styles.title }>Total: </span>${ total.toFixed(2) }
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h4>Shopping Cart</h4>
                    <br/>
                </div>
            );
        }
    }
}

export default Cart;