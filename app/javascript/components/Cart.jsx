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
                </div> )
            })

            return (
                <div>
                    <h1 style={{textDecoration: 'underline', color: 'blue'}}>Cart Items</h1>
                    {cartContainer}
                </div>
                )


}

export default Cart;