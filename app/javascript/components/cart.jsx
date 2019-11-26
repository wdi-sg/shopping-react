import React from 'react';

class Cart extends React.Component{

    render(){
        return (
        <div>
            <h1>Cart</h1>
            <p>{this.props.stuff}</p>
        </div>

        )
    }
}

export default Cart