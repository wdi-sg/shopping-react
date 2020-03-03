import React from 'react'
import axios from 'axios';

class Cart extends React.Component {
    render() {

        let cartList = this.props.cartItems.map(item => {
            return <li>{item.name}</li>
        })
        return (
            <div>
                <ul>
                    {cartList}
                </ul>
            </div>
        )
    }
}

export default Cart;