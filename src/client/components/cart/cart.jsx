import React from 'react';

import styles from './style.scss';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        // console.log(this.props.cartItems);
        let cartItems = this.props.cartItems;
        let prices = cartItems.price;
        let priceArr = [];

        for (let i = 0; i < cartItems.length; i++) {
            let item = cartItems[i];
            for (let j = 0; j < item.length; j++) {
                let price = (item[j].price).substr(1);
                priceArr.push(parseFloat(price));
            }
        }

        let subtotal = priceArr.reduce((a, b) => a + b, 0);
        let shipping = 0;
        if (this.props.cartItems.length > 0) {
            shipping = 7;
        }
        let gst = (subtotal + shipping) * 0.07;
        let total = subtotal + shipping + gst;

        let cart = this.props.cartItems.map((item, index) => {
            return (
                <div key={index}>
                    <div className="row">
                        <div className="col-6 text-truncate">
                            {item[0].name}
                        </div>
                        <div className="col">
                            {item[0].price}
                        </div>
                        <div className="col">
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={()=>{this.removeItem()}}
                                id={index}
                            >
                            Remove
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {cart}
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>{this.props.clearCart()}}>Clear Cart
                </button>
                <br/>
                <div className="row">
                    <div className="col-6">
                        Subtotal
                    </div>
                    <div className="col">
                        ${ subtotal.toFixed(2) }
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Shipping
                    </div>
                    <div className="col">
                        ${ shipping.toFixed(2) }
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        GST (7%)
                    </div>
                    <div className="col">
                        ${ gst.toFixed(2) }
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <strong>TOTAL</strong>
                    </div>
                    <div className="col">
                        <strong>${ total.toFixed(2) }</strong>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;