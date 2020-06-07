import React from 'react'
import SearchResultListing from './SearchResultListing'
function Cart(props){

    let cartItems = props.cart.items.map((item, i)=> {
        return <SearchResultListing key={i} product={item} id={item.id} productResultClick={props.productResultClick}/>
    }) 


    return (
      <div>
        {cartItems}
        <p>Subtotal: {props.cost.subtotal}</p>
        <p>Shipping: {props.cost.shipping}</p>
        <p>GST: {props.cost.gst}</p>
        <p>Total: {props.cost.total}</p>
      </div>
    );
}

export default Cart