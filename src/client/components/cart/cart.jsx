import React from 'react';

import styles from './style.scss';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        // this.removeitem = this.removeitem.bind(this);
        // this.clearCart = this.clearCart.bind(this);

    }

    removeItem(e) {
        console.log('removeitem', Math.random());
    }

    clearCart(e) {
        console.log('clearcart', Math.random());
    }

    render() {
        // console.log(this.props.cartItems);
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
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>{this.removeItem()}}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {cart}
                <button
                    type="button" className="btn btn-danger" onClick={()=>{this.clearCart()}}>Clear Cart
                </button>
                <br/>
                <div className="row">
                    <div className="col-6">
                        Subtotal
                    </div>
                    <div className="col">
                        ${this.props.subtotal}
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        GST (7%)
                    </div>
                    <div className="col">
                        ${this.props.gst}
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Shipping ($7)
                    </div>
                    <div className="col">
                        $x.xx
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;