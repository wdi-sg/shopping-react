import React from 'react';

class Cart extends React.Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                <h1>CART</h1>
                <ol>
                    {cartItems.map((item, i) => (
                        <li key={i}>{item.name}</li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Cart;
