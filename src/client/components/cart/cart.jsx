import React from 'react';

import styles from './style.scss';

class Cart extends React.Component {

    removeProductFromCart(event){
        this.props.removeProductFromCart(event);

    }

    render() {
        let cartInfo = "";
        let cartSummary = ""
        if (this.props.cart.length > 0) {
            cartInfo = this.props.cart.map((product, index)=>{
                return (
                    <li key={index} data-index={index} onClick={(event=>this.removeProductFromCart(event))}>{product.name}, {product.price}</li>
                )
            })
        }
        if (this.props.cart.length > 0) {
            let subtotal = 0;
            let shipping = 7;
            let gst = 0;
            let total = 0;
            for (let i=0; i<this.props.cart.length; i++){
                let amount = parseFloat(this.props.cart[i].price.replace("$", ""));
                subtotal += amount;
            }
            gst = Math.round(subtotal * 0.07 * 100)/100;
            total = Math.round((subtotal + shipping + gst)*100)/100;
            subtotal = Math.round(subtotal * 100)/100;

            cartSummary =  (
                    <div>
                    <table>
                    <tbody>
                    <tr><td>Sub-Total</td><td>${subtotal}</td></tr>
                    <tr><td>Shipping</td><td>${shipping}</td></tr>
                    <tr><td>GST</td><td>${gst}</td></tr>
                    <tr><td>Total</td><td>${total}</td></tr>
                    </tbody>
                    </table>
                    </div>
                )
        }


        return (
        <div className = {styles.cart_container} >
        <h3>Cart</h3>
            {cartInfo}
        <ul>
            {cartSummary}
        </ul>
        </div>
        );
    }
}

export default Cart;
