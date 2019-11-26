import React from 'react'

class Cart extends React.Component{
    constructor(){
        super();
    }

    render() {

        let total = 0;

        let cartItem = this.props.cart.map((product, index) => {

            total += parseFloat(product.price);

            return(
                <div key={index}>
                    <div>
                        {product.name}: ${product.price}
                    </div>
                </div>
            );
        });

        return(
            <div>
                <h3>Your Cart</h3>
                {cartItem}
                <p>Total Price: ${total.toFixed(2)}</p>
            </div>
        );
    }
}

export default Cart;