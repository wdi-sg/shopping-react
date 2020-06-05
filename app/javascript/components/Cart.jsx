import React from 'react';
import './Cart.css';

function Cart(props) {
    console.log(props);

        // function handleClick() {
        //     props.onDelete(props.id);
        //     console.log(props.id)
        // }

           const cartContainer = props.items.map((product, index) => {
               return(
                <div key={index}>
                    <div>
                        <img style={{height: '150px', width: '200px'}}src={product.image_url} />
                    </div>
                        <h3>Item Selected: {product.name}</h3>
                        <h5>Price: {product.price}</h5>
                        <p>Description: {product.description}</p>
                        <h2>{product.id}</h2>
                        <button onClick={props.onToggle}>Back</button>
                        <button onClick={() => props.onDelete(product.id)}>Remove from cart</button>
                </div> )
            })

        const subTotal = props.items.reduce((accumulator, currentNumber) => {

                return parseInt(accumulator + parseInt(currentNumber.price));
           }, 0)

           const gst = parseInt(subTotal * .07);

           const total = parseInt(subTotal + gst + 7);



            return (
                <div className='cart-background'>
                    <h1 style={{textDecoration: 'underline', color: 'blue'}}>Cart Items</h1>
                <div>
                    <h3>Subtotal: ${subTotal.toFixed(2)}</h3>
                    <h3>Gst: ${gst.toFixed(2)}</h3>
                    <h3>Total: ${total.toFixed(2)} including $7 shipping fee. </h3>
                </div>
                    {cartContainer}
                </div>
                )


}

export default Cart;