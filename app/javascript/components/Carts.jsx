import React from 'react';
import axios from 'axios';

class Carts extends React.Component {

    render() {

        const {productInCarts} = this.props

        const cart = this.props.productInCarts.map((cart, index)=>{
            return (
                <div key={index}>
                    <li>Item: {cart.name}, price: {cart.price}</li>
                </div>
            );
        });

        return (
            <div>
                <h3>carts come from here ~~~</h3>
                <ol>
                    {cart}
                </ol>
            </div>
            )
    }
}


export default Carts;