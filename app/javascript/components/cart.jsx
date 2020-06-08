import React from 'react'
import axios from 'axios';

class Cart extends React.Component {
    constructor() {
        super()
    }


      render() {

        let totalCost = '';

        let cartItem = this.props.cart.map((item, index)=>{
            totalCost += (item.price)
            return (
                    <div>

                        <div>{item.name} - ${item.price}</div>

                    </div>)
                        })


    return (
      <div>
        <h3>Your Cart</h3>
        <strong>Total: {totalCost}</strong>
        {cartItem}
      </div>
    );
  }
}

export default Cart;