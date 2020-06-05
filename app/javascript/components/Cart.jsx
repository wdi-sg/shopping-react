import React from 'react';

function Cart(props) {
    console.log('CART IS BEING PASSSSED');


           const cartContainer = props.items.map((product, index) => {
               return(
                <div key={index}>
                    <div>
                        <img src={product.image_url} />
                    </div>
                    <h3>Item Selected: {product.name}</h3>
                    <h5>Price: {product.price}</h5>
                    <p>Description: {product.description}</p>
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