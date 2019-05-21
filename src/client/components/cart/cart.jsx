import React from 'react';
import Result from '../result/result';

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
                        <div key={ index }>
                            <p>Name: { item.name }</p>
                            <p>Description: { item.description }</p>
                            <p>Price: { item.price }</p>
                            <button
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
                        <p><b>Sub-Total: </b>${ subTotal.toFixed(2) }</p>
                        <p><b>Shipping: </b>${ shipping.toFixed(2) }</p>
                        <p><b>GST (7%): </b>${ gst.toFixed(2) }</p>
                        <p><b>Total: </b>${ total.toFixed(2) }</p>
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