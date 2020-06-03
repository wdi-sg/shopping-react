import React from 'react';
import axios from 'axios';

class Search extends React.Component{
    render() {
        let totalPrice = 0;
        let {cart,products} = this.props.state
        let cartItems = cart.map(itemNum=>products[itemNum])
        if (cartItems) {
            var cartList = cartItems.map((item,i)=>{
                totalPrice += item.price;
                return (<li key={i}>
                    {item.name} ${item.price}
                </li>)
            })
        } else {
            var cartList = null
        }
        return (<div>
            <h1>cart</h1>
            <ul>
                {cartList}
            </ul>
            <h1>{totalPrice}</h1>
        </div>);
    }
}

export default Search;