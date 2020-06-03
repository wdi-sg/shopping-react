import React from 'react';

class Cart extends React.Component {
    render(){
        const cartItems = this.props.cart.map((cartItem)=>{
            return (<div>xx{cartItem}xx</div>)
        })
        return (<div className="col">
            <p>This is where cart is showing
                {cartItems}
            </p>
        </div>);
    }
}

export default Cart;