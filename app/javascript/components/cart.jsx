import React from 'react'

export default class Cart extends React.Component {
    render(){

        const cartItems = this.props.cart.map((item, index)=>{

            return <p key={index}>{item.name}:{item.price}</p>

        })

        return(
            <div>
                {cartItems}
            </div>
        )
    }
}