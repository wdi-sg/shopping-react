import React from 'react';

class Cart extends React.Component {
    render(){
        const cartItems = this.props.cart.map((cartItem)=>{
            return (<div class="product">
                Product: {cartItem.name}
                </div>)
        })
        return (<div className="col">
                This is where cart is showing
                {cartItems}
        </div>);
    }
}

export default Cart;