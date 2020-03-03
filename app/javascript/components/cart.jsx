import React, { Component } from 'react';

export default class Cart extends Component {
    render() {

        let sumArray = function(arr){
            return arr.reduce((initialValue,cartItem) => {
                return initialValue + parseInt(cartItem.price)
            },0)
        }

        let total = sumArray(this.props.cartItem)

        let cartItems = ""
        if (this.props.cartItem){
            cartItems = this.props.cartItem.map((product,index)=> {
            return (
                <div key={product.id}>
                <p>{product.name}</p>
                </div>
                )
            })
        }
        return (
            <div>
            <h4>Cart Items</h4>
                {cartItems}
            <p>Sub Total: {total}</p>
            </div>
        );
    }
}