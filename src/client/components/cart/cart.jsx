import React from 'react';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    removeItem(e) {
        console.log('removeitem', Math.random());
    }

    clearCart(e) {
        console.log('clearcart', Math.random());
    }

    render() {
        console.log(this.props.cartItems);
        let cart = this.props.cartItems.map((item, index) => {

            return  <div key={index}>
                        <span>{item[0].name} - {item[0].price}</span>
                        <span><button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>{this.removeItem()}}>Remove</button></span>
                    </div>
        });

        return (
            <div>
                {cart}
                <button type="button" className="btn btn-danger" onClick={()=>{this.clearCart()}}>Clear Cart</button>
            </div>
        );
    }
}

export default Cart;