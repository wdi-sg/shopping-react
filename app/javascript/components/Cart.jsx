import React, { Component } from 'react'

export class Cart extends Component {
    render() {

        let cartList = this.props.cartItems.map(item => {
            return <li>{item.name}</li>
        })
        return (
            <div>
                <h1>CART</h1>

                <ul>
                    {cartList}
                </ul>
            </div>
        )
    }
}

export default Cart
