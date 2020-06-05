import React from 'react';

function Cart(props) {
    console.log('CART IS BEING PASSSSED');


           const cartContainer = props.items.map((product, index) => {
               return(
                <div key={index}>
                    <div>
                        <img style={{height: '150px', width: '200px'}}src={product.image_url} />
                    </div>
                        <h3>Item Selected: {product.name}</h3>
                        <h5>Price: {product.price}</h5>
                        <p>Description: {product.description}</p>
                        <button onClick={props.onToggle}>Back</button>
                        <button onClick={() => {props.deleteClick(product.id)}}>Remove from cart</button>
                </div> )
            })

        const subTotal = props.items.reduce((accumulator, currentNumber) => {
                console.log(typeof currentNumber.price)
                return parseInt(accumulator + parseInt(currentNumber.price));
           }, 0)

           const gst = parseInt(subTotal * .07);

           const total = parseInt(subTotal + gst + 7);



            return (
                <div>
                    <h1 style={{textDecoration: 'underline', color: 'blue'}}>Cart Items</h1>
                <div>
                    <h3>Subtotal: ${subTotal.toFixed(2)}</h3>
                    <h3>Gst: ${gst.toFixed(2)}</h3>
                    <h3>Total: ${total}</h3>
                </div>
                    {cartContainer}
                </div>
                )


}

export default Cart;