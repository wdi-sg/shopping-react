import React from 'react'

class Cart extends React.Component{
    constructor(){
        super();
    }

    render() {

        let subtotal = 0;
        const gst = 0.07;
        const shipping = 7;
        let priceWithGst = 0;
        let total = 0;

        let cartItem = this.props.cart.map((product, index) => {

            subtotal += parseFloat(product.price);
            priceWithGst = subtotal * gst;
            total = subtotal + priceWithGst + shipping;

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
                <hr/>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>GST: ${priceWithGst.toFixed(2)}</p>
                <p>Shipping: ${shipping}</p>
                <p><strong>Total: ${total.toFixed(2)}</strong></p>
            </div>
        );
    }
}

export default Cart;