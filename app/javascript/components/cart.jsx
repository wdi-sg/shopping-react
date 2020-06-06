import React from 'react';

class Cart extends React.Component {
    render(){
        const cartItems = this.props.cart.map((cartItem)=>{
            return (<div class="product">
                <img src={cartItem.url}/>
                Product: {cartItem.name}
                <br/>
                Price: ${cartItem.price}
                </div>)
        })
        return (<div className="col">
                This is where cart is showing
                <br/>
                {cartItems}
                <br/>
                <div>
                    $ {this.props.cartPrice.reduce((a,b)=> a + b, 0).toFixed(2)}
                </div>
        </div>);
    }
}

export default Cart;